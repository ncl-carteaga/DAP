
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundCommissionHistAu"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.OutboundCommissionHistAuRow))]
    [PageAuthorize(PermissionKeys.PagePermission.OutboundCommissionHistAu)]
    public class OutboundCommissionHistAuController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundCommissionHistAu/OutboundCommissionHistAuIndex.cshtml");
        }
    }
}