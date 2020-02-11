
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundMonthlyRptArchiveOverride"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OutboundMonthlyRptArchiveOverrideRow))]
    public class OutboundMonthlyRptArchiveOverrideController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundMonthlyRptArchiveOverride/OutboundMonthlyRptArchiveOverrideIndex.cshtml");
        }
    }
}