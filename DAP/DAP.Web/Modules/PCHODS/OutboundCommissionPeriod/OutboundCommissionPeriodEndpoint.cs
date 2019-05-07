
namespace DAP.PCHODS.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.OutboundCommissionPeriodRepository;
    using MyRow = Entities.OutboundCommissionPeriodRow;

    [RoutePrefix("Services/PCHODS/OutboundCommissionPeriod"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class OutboundCommissionPeriodController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(SaveRequest<MyRow> request)
        {
            //return new MyRepository().Create(uow, request);
            using (var connection = SqlConnections.NewByKey("PCH_ODS"))

            using (var uow = new UnitOfWork(connection))
            {

                uow.Connection.Execute("CloseCommissionPeriod",
                                        commandType: CommandType.StoredProcedure);

                uow.Commit();
                return new SaveResponse();
            }
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
