
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/FullShipChartersSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.FullShipChartersSupp)]
    public class FullShipChartersSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/FullShipChartersSupp/FullShipChartersSuppIndex.cshtml");
        }
    }
}