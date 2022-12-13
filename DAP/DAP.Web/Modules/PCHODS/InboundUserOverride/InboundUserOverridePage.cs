
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/InboundUserOverride"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InboundUserOverrideRow))]
    public class InboundUserOverrideController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/InboundUserOverride/InboundUserOverrideIndex.cshtml");
        }
    }
}