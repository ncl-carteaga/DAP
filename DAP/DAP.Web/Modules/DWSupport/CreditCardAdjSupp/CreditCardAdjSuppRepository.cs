﻿
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CreditCardAdjSuppRow;

    public class CreditCardAdjSuppRepository
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
                    if (this.Connection.Exists<CreditCardAdjSuppRow>(
                        MyRow.Fields.Office == this.Row.Office &&
                        MyRow.Fields.EffectiveToDt > DateTime.Now &&
                        MyRow.Fields.CreditcardAdjId != Row.CreditcardAdjId.Value
                    ))
                    {
                        throw new ValidationError("There is already an active record for this office.");
                    }
                }
                if (IsCreate)
                {
                    if (this.Connection.Exists<CreditCardAdjSuppRow>(
                        MyRow.Fields.Office == this.Row.Office &&
                        MyRow.Fields.EffectiveToDt == this.Row.EffectiveToDt.Value
                    ))
                    {
                        throw new ValidationError("There is already an active record for this office.");
                    }
                }
            }


            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate)
                {
                    Row.CreatedByName = user.Username.ToUpper();
                    Row.CreatedTs = DateTime.Now;
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.ModifiedTs = DateTime.Now;
                }
                if (IsUpdate)
                {
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.ModifiedTs = DateTime.Now;
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}