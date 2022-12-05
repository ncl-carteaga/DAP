
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
                    if (MyRow.Fields.RequestTypeId < 1)
                    {
                        throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.RequestTypeId.Name));
                    }
                    //  ------------------ Change of Address Validation ------------------ //
                    else if (MyRow.Fields.RequestTypeId == 2)
                    {
                        if (Row.Address1 == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Address1.Name));
                        }
                        else if (Row.Title == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Title.Name));
                        }
                        else if (Row.City == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.City.Name));
                        }
                        else if (Row.State == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.State.Name));
                        }
                        else if (Row.Zip == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Zip.Name));
                        }
                        else if (Row.Country == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Country.Name));
                        }
                    }// if
                    //  ------------------ Opt Outs Validation ------------------ //
                    else if (Row.RequestTypeId == 1)
                    {
                        if (Row.OptOutStatusID == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.OptOutStatusID.Name));
                        }
                        else if (Row.ChannelId == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.ChannelDescription.Name));
                        }
                    }

                }

                if (IsCreate)
                {
                    // ------------------ Request Type ------------------ //
                    if (MyRow.Fields.RequestTypeId < 1)
                    {
                        throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.RequestTypeId.Name));
                    }
                    //  ------------------ Change of Address Validation ------------------ //
                    else if (MyRow.Fields.RequestTypeId == 2)
                    {
                        if (Row.Address1 == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Address1.Name));
                        }
                        else if (Row.Title == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Title.Name));
                        }
                        else if (Row.City == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.City.Name));
                        }
                        else if (Row.State == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.State.Name));
                        }
                        else if (Row.Zip == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Zip.Name));
                        }
                        else if (Row.Country == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.Country.Name));
                        }
                    }// if
                    //  ------------------ Opt Outs Validation ------------------ //
                    else if (Row.RequestTypeId == 1)
                    {
                        if (Row.OptOutStatusID == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.OptOutStatusID.Name));
                        }
                        else if (Row.ChannelId == null)
                        {
                            throw new ValidationError(string.Format("Field: {0} must be filled out.", MyRow.Fields.ChannelDescription.Name));
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