
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/RegionMasterSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.RegionMasterSupp)]
    public class RegionMasterSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/RegionMasterSupp/RegionMasterSuppIndex.cshtml");
        }
    }
}