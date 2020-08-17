
namespace DAP.SSISConfig.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SSISConfig/MicrosDataFlow"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MicrosDataFlowRow))]
    public class MicrosDataFlowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSISConfig/MicrosDataFlow/MicrosDataFlowIndex.cshtml");
        }
    }
}