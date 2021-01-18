
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundCommissionBkGoal"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OutboundCommissionBkGoalRow))]
    public class OutboundCommissionBkGoalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundCommissionBkGoal/OutboundCommissionBkGoalIndex.cshtml");
        }
    }
}