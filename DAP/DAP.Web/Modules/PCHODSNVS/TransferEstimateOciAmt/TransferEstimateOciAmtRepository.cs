
namespace DAP.PCHODSNVS.Repositories
{
    using DAP.PCHODSNVS.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.TransferEstimateOciAmtRow;
    using MyCruiseSegmentRow = Entities.GetCruiseSegmentRow;

    public class TransferEstimateOciAmtRepository { 

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        // CREATE & UPDATE OVERRIDES
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }
        // --------------------------------------------

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


                // validate against database
                if (!this.Connection.Exists<MyCruiseSegmentRow>(new Criteria(MyRow.Fields.CruiseSegmentCd.Name) == Row.CruiseSegmentCd))
                {
                    throw new ValidationError(MyRow.Fields.CruiseSegmentCd.Title + " doesn't exist.");
                }

                /*if (!validateSegmentNShipCD())
                {
                    throw new ValidationError("Values for fields: "+MyRow.Fields.SegmentMarketName.Name+", "+MyRow.Fields.ShipCd.Name + " don't exist.");
                }*/
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                
                Row.LoadDt = DateTime.Now;
            }


            private bool validateSegmentNShipCD()
            {
                // prepared query
                var query = new SqlQuery()
                .Select("1")
                .From("[PCH_ODS_NVS].[dap].[GetCruiseSegment]")
                .Where(
                    new Criteria(MyRow.Fields.CruiseSegmentCd.Name) == Row.CruiseSegmentCd &&
                    new Criteria(MyRow.Fields.ShipCd.Name) == Row.ShipCd &&
                    new Criteria(MyRow.Fields.SegmentMarketName.Name) == Row.SegmentMarketName
                );

                // execute query
                var result = Connection.Query(query);
                var resultCount = result.ToList().Count;

                return (resultCount > 0) ? true : false;
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}