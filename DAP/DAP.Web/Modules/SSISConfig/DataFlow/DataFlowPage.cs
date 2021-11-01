
namespace DAP.SSISConfig.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SSISConfig/DataFlow"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.FidelioDataFlow)]
    public class DataFlowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSISConfig/DataFlow/DataFlowIndex.cshtml");
        }
    }
}