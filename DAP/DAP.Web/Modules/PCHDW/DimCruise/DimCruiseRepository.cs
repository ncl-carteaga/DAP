
namespace DAP.PCHDW.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.DimCruiseRow;

    public class DimCruiseRepository
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
                
                if (this.Row.CruiseToDt < this.Row.CruiseFromDt)
                {
                    throw new ValidationError("Invalid Cruise Dates; End Date set before the Start Date.");
                }

                if (this.Row.CruiseSegmentToDt < this.Row.CruiseSegmentFromDt)
                {
                    throw new ValidationError("Invalid Cruise Segment Dates; End Date set before the Start Date.");
                }
              
                if (DateTime.ParseExact(this.Row.CruiseFromDtMmddyyyy, "MMddyyyy",null) > DateTime.ParseExact(this.Row.CruiseToDtMmddyyyy,"MMddyyyy",null))
                {
                  
                    throw new ValidationError("Invalid CruiseToDtMmddyyyy Date set before the CruiseFromDtMmddyyyy Date.");
                   
                }
                
                if (DateTime.ParseExact(this.Row.SegmentFromDtMmddyyyy,"MMddyyyy",null) > DateTime.ParseExact(this.Row.SegmentToDtMmddyyyy,"MMddyyyy",null))
                {
                   
                    throw new ValidationError("Invalid SegmentToDtMmddyyyy Date set before the CruiseFromDtMmddyyyy Date.");
                   
                }
                

            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}