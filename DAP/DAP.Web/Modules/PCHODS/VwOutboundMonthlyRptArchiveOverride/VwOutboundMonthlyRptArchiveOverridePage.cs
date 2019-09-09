
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/VwOutboundMonthlyRptArchiveOverride"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VwOutboundMonthlyRptArchiveOverrideRow))]
    public class VwOutboundMonthlyRptArchiveOverrideController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/VwOutboundMonthlyRptArchiveOverride/VwOutboundMonthlyRptArchiveOverrideIndex.cshtml");
        }
    }
}