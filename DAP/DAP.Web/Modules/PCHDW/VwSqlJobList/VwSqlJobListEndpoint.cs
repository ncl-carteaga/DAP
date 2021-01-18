
namespace DAP.PCHDW.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.VwSqlJobListRepository;
    using MyRow = Entities.VwSqlJobListRow;

    [RoutePrefix("Services/PCHDW/VwSqlJobList"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class VwSqlJobListController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse UpdateWithSP(SaveRequest<MyRow> request)
        {
            //return new MyRepository().Create(uow, request);
            int action;
            if (request.Entity.Enabled == true)
            {
                action = 0;
            } else
            {
                action = 1;
            }

            using (var connection = SqlConnections.NewByKey("PCH_DW"))

            using (var uow = new UnitOfWork(connection))
            {

                uow.Connection.Execute("usp_EnableDisableSQLJob",
                    param: new
                    {
                        JobName = request.Entity.Name,
                        Enabled = action
                    },
                    commandType: CommandType.StoredProcedure);

                uow.Commit();
                return new SaveResponse();
            }
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
