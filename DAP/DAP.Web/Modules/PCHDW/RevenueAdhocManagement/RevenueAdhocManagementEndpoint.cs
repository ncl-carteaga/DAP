
namespace DAP.PCHDW.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Data.SqlClient;
    using System.Web.Mvc;
    using MyRepository = Repositories.RevenueAdhocManagementRepository;
    using MyRow = Entities.RevenueAdhocManagementRow;

    [RoutePrefix("Services/PCHDW/RevenueAdhocManagement"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class RevenueAdhocManagementController : ServiceEndpoint
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


        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse ExecuteSP(SaveRequest<MyRow> request)
        {
            int? KeyValue;
            KeyValue = request.Entity.Key;

            int rv;

            using (var connection = SqlConnections.NewByKey("PCH_DW"))
            using (var uow = new UnitOfWork(connection))
            {

                rv = uow.Connection.Execute("dbo.usp_ExecuteRevenueAdhocSQLJob",
                    param: new
                    {
                        Key = KeyValue                        
                    },
                    commandType: CommandType.StoredProcedure);

                uow.Commit();
                return new MyRepository().Update(uow, request); 
            }
            
        }
    }
}
