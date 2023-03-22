
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.UpgradeAdvAdjSuppRow;

    public class UpgradeAdvAdjSuppRepository
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

                if (this.Connection.Exists<UpgradeAdvAdjSuppRow>(
                        MyRow.Fields.UpgradeAmountMin == this.Row.UpgradeAmountMin.Value &&
                        MyRow.Fields.UpgradeAmountMax == this.Row.UpgradeAmountMax.Value &&
                        MyRow.Fields.EffectiveToDt.IsNull()
                    ))
                {
                    throw new ValidationError("Open record found for this min, max upgrade combination.");
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
                    Row.ModifiedByName = user.Username.ToUpper();
                    Row.ModifiedTs = DateTime.Now;
                }
                if (IsUpdate)
                {
                    Row.ModifiedByName = user.Username.ToUpper();
                    Row.ModifiedTs = DateTime.Now;
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}