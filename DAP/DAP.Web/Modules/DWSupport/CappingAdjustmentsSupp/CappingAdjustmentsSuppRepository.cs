
namespace DAP.DWSupport.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CappingAdjustmentsSuppRow;

    public class CappingAdjustmentsSuppRepository
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

                var t = Row;

                if (    Row.ShipCd.IsEmptyOrNull() 
                    ||  Row.EffectiveFromDate.ToString().IsEmptyOrNull() 
                    ||  Row.EffectiveToDate.ToString().IsEmptyOrNull()
                    ||  Row.CappedCabinCapacity.ToString().IsEmptyOrNull()
                    ||  Row.SingleCabinCapacity.ToString().IsEmptyOrNull()
                )
                {
                    throw new ValidationError(string.Format(
                        "Missing values for {0}, {1}, {2}, {3} or {4}."
                        , MyRow.Fields.ShipCd.Title
                        , MyRow.Fields.EffectiveFromDate.Title
                        , MyRow.Fields.EffectiveToDate.Title
                        , MyRow.Fields.CappedCabinCapacity.Title
                        , MyRow.Fields.SingleCabinCapacity.Title
                    ));
                }
            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate || IsUpdate)
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