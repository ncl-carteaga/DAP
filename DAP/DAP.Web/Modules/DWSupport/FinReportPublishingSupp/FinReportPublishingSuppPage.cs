
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/FinReportPublishingSupp"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.FinReportPublishingSuppRow))]
    [PageAuthorize(PermissionKeys.PagePermission.FinReportPublishingSupp)]
    public class FinReportPublishingSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/FinReportPublishingSupp/FinReportPublishingSuppIndex.cshtml");
        }
    }
}