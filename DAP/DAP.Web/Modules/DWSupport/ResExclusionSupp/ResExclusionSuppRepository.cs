﻿
namespace DAP.DWSupport.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ResExclusionSuppRow;

    public class ResExclusionSuppRepository
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

                if (Row.ResId.Value < 1 || Row.FromDataAsOfDt.ToString().IsEmptyOrNull() || Row.ToDataAsOfDt.ToString().IsEmptyOrNull())
                {
                    throw new ValidationError(string.Format("Fields: |{0}|, |{1}| and |{2}| are required.", MyRow.Fields.ResId.Title, MyRow.Fields.FromDataAsOfDt.Title, MyRow.Fields.ToDataAsOfDt.Title));
                }
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate)
                {
                    Row.CreatedByNam = user.DisplayName;
                    Row.CreatedTs = DateTime.Now;
                    Row.ModifiedTs = DateTime.Now;
                    Row.ModifiedByNam = user.DisplayName;
                }
                if (IsUpdate)
                {
                    Row.ModifiedByNam = user.DisplayName.ToUpper();
                    Row.ModifiedTs = DateTime.Now;
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}