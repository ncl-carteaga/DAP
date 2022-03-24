
namespace DAP.PCHODSNVS.Repositories
{
    using DAP.PCHODSNVS.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TransferEstimateOciAmtRow;

    public class TransferEstimateOciAmtRepository
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

                if (IsUpdate)
                {
                    if (this.Connection.Exists<TransferEstimateOciAmtRow>(MyRow.Fields.CruiseSegmentCd == Row.CruiseSegmentCd && MyRow.Fields.TransferId != Row.TransferId.Value))
                    {
                        throw new ValidationError("Segment Code Already Exists!");
                    }
                }

                if (IsCreate)
                {
                    if (this.Connection.Exists<TransferEstimateOciAmtRow>(MyRow.Fields.CruiseSegmentCd == Row.CruiseSegmentCd ))
                    {
                        throw new ValidationError("Segment Code Already Exists");
                    }
                }


            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                
                Row.LoadDt = DateTime.Now;

            }


        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}