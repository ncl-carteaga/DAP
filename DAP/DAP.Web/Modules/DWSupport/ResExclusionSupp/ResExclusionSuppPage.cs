
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/ResExclusionSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.ResExclusionSupp)]
    public class ResExclusionSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/ResExclusionSupp/ResExclusionSuppIndex.cshtml");
        }
    }
}