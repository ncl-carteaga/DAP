
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundCommissionHistBr"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.OutboundCommissionHistBrRow))]
    [PageAuthorize(PermissionKeys.PagePermission.OutboundCommissionHistBr)]
    public class OutboundCommissionHistBrController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundCommissionHistBr/OutboundCommissionHistBrIndex.cshtml");
        }
    }
}