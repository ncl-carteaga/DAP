
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/AmenityDetailsSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.AmenityDetailSupp)]
    public class AmenityDetailsSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/AmenityDetailsSupp/AmenityDetailsSuppIndex.cshtml");
        }
    }
}