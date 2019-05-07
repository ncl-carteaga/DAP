
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/OutboundAgentLocation"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OutboundAgentLocationRow))]
    public class OutboundAgentLocationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/OutboundAgentLocation/OutboundAgentLocationIndex.cshtml");
        }
    }
}