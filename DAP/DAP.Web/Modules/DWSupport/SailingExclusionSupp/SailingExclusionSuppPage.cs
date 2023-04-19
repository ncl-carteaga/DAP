
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/SailingExclusionSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.SailingExclusionSupp)]
    public class SailingExclusionSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/SailingExclusionSupp/SailingExclusionSuppIndex.cshtml");
        }
    }
}