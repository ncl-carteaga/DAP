
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundAgent"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.OutboundAgentRow))]
    [PageAuthorize(PermissionKeys.PagePermission.OutboundAgent)]
    public class OutboundAgentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundAgent/OutboundAgentIndex.cshtml");
        }
    }
}