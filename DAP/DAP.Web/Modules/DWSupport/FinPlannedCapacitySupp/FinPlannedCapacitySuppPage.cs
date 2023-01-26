
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/FinPlannedCapacitySupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FinPlannedCapacitySuppRow))]
    public class FinPlannedCapacitySuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/FinPlannedCapacitySupp/FinPlannedCapacitySuppIndex.cshtml");
        }
    }
}