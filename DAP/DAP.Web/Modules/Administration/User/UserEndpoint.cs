﻿
namespace DAP.Administration.Endpoints
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Security.Cryptography;
    using System.Text;
    using System.Web.Mvc;
    using MyRepository = Repositories.UserRepository;
    using MyRow = Entities.UserRow;

    [RoutePrefix("Services/Administration/User"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserController : ServiceEndpoint
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

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, UserListRequest request)
        {
            if (request != null && Serenity.Authorization.HasPermission("ImpersonateAs"))
            {
                var clientId = Request.UserAgent + "|" + Request.UserHostAddress;
                using (var md5 = new MD5CryptoServiceProvider())
                    request.ClientHash = md5.ComputeHash(Encoding.UTF8.GetBytes(clientId));
            }

            return new MyRepository().List(connection, request);
        }
    }
}
