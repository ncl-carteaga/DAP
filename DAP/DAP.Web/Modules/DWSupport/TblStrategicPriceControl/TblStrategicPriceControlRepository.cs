
namespace DAP.DWSupport.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TblStrategicPriceControlRow;

    public class TblStrategicPriceControlRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {
                base.BeforeSave();

                this.Row.CategoryCd = this.Row.CategoryCd.ToUpper();

                if(this.Row.EffectiveFromDat == null || this.Row.EffectiveToDat == null)
                {
                    throw new ValidationError("Effective Dates are required.");
                }


                if (this.Row.EffectiveToDat < this.Row.EffectiveFromDat)
                {
                    throw new ValidationError("Invalid Effective Dates; End Date set before the Start Date.");
                }
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate)
                {
                    Row.CreatedByNam = user.Username.ToUpper();
                    Row.CreatedDat = DateTime.Now;
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.ModifiedDat = DateTime.Now;
                }
                if (IsUpdate)
                {
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.ModifiedDat = DateTime.Now;
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}