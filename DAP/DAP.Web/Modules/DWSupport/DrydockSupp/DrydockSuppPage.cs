
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/DrydockSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.DrydockSupp)]
    public class DrydockSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/DrydockSupp/DrydockSuppIndex.cshtml");
        }
    }
}