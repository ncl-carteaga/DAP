
namespace DAP.NCLHODSSPENDVIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHODSSPENDVIS/DataFlow"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.ConfigAdmin)]
    public class DataFlowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHODSSPENDVIS/DataFlow/DataFlowIndex.cshtml");
        }
    }
}