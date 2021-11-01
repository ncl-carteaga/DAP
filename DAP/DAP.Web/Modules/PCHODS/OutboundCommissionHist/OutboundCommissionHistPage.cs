
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundCommissionHist"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.OutboundCommissionHistRow))]
    [PageAuthorize(PermissionKeys.PagePermission.OutboundCommissionHist)]
    public class OutboundCommissionHistController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundCommissionHist/OutboundCommissionHistIndex.cshtml");
        }
    }
}