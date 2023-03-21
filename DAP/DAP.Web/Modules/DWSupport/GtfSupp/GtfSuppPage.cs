
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/GtfSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.GtfSupp)]
    public class GtfSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/GtfSupp/GtfSuppIndex.cshtml");
        }
    }
}