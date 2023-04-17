
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/AirCostAdjSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.AirCostAdjSupp)]
    public class AirCostAdjSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/AirCostAdjSupp/AirCostAdjSuppIndex.cshtml");
        }
    }
}