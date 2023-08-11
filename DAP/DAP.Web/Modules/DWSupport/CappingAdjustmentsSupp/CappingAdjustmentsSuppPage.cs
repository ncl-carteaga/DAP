
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CappingAdjustmentsSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.CappingAdjustmentsSupp)]
    public class CappingAdjustmentsSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CappingAdjustmentsSupp/CappingAdjustmentsSuppIndex.cshtml");
        }
    }
}