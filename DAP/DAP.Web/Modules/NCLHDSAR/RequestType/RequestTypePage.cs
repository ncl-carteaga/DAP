
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/RequestType"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.RequestType)]
    public class RequestTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/RequestType/RequestTypeIndex.cshtml");
        }
    }
}