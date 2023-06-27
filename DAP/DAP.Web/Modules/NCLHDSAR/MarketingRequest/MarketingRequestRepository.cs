
namespace DAP.NCLHDSAR.Repositories
{
    using DAP.NCLHDSAR.Entities;
    using DAP.NCLHDSAR.Lookups;
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.MarketingRequestRow;

    public class MarketingRequestRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (IsUpdate)
                {
                    // ------------------ Request Type ------------------ //
                    if (Row.RequestTypeId < 1)
                    {
                        throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.RequestTypeId.Name));
                    }
                    //  ------------------ Change of Address Validation ------------------ //
                    else if (Row.RequestTypeId == 2)
                    {
                        if (Row.Address1 == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Address1.Name));
                        }
                        else if (Row.BrandId < 1)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.BrandId.Name));
                        }
                    }
                    //  ------------------ Return Mail Validation ------------------ //
                    else if (Row.RequestTypeId == 3)
                    {
                        if (Row.IsReturnedMailCd == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.IsReturnedMailCd.Name));
                        }
                        else if (Row.BrandId < 1)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.BrandId.Name));
                        }
                    }
                    //  ------------------ Opt Outs Validation ------------------ //
                    else if (Row.RequestTypeId == 1)
                    {                        
                        if (Row.ChannelId == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.ChannelDescription.Name));
                        }
                        else if (Row.BrandId < 1)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.BrandId.Name));
                        }
                        else if (Row.Address1 == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Address1.Name));
                        }
                    }

                }

                if (IsCreate)
                {
                    // ------------------ Request Type ------------------ //
                    if (Row.RequestTypeId < 1)
                    {
                        throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.RequestTypeId.Name));
                    }
                    //  ------------------ Change of Address Validation ------------------ //
                    else if (Row.RequestTypeId == 2)
                    {
                        if (Row.Address1 == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Address1.Name));
                        }
                        else if (Row.BrandId == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.BrandId.Name));
                        }
                    }// if
                    //  ------------------ Opt Outs Validation ------------------ //
                    else if (Row.RequestTypeId == 1)
                    {
                        if (Row.ChannelId == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.ChannelDescription.Name));
                        }
                        else if (Row.BrandId < 1)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.BrandId.Name));
                        }
                        else if (Row.Address1 == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Address1.Name));
                        }
                    }
                }
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate)
                {
                    Row.CreatedBy = user.DisplayName;
                    Row.CreatedDate = DateTime.Now;
                    Row.ModifiedDate = DateTime.Now;
                }
                if (IsUpdate)
                {
                    Row.ModifiedBy = user.DisplayName.ToUpper();
                    Row.ModifiedDate = DateTime.Now;
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}