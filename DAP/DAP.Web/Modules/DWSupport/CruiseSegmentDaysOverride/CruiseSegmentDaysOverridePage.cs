
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CruiseSegmentDaysOverride"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.CruiseSegmentDaysOverride)]
    public class CruiseSegmentDaysOverrideController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CruiseSegmentDaysOverride/CruiseSegmentDaysOverrideIndex.cshtml");
        }
    }
}