
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundCommissionPeriod"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.OutboundCommissionPeriodRow))]
    [PageAuthorize(PermissionKeys.PagePermission.OutboundCommissionPeriod)]
    public class OutboundCommissionPeriodController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundCommissionPeriod/OutboundCommissionPeriodIndex.cshtml");
        }
    }
}