
namespace DAP.NCLHODSSPENDVIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHODSSPENDVIS/DataFlow"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DataFlowRow))]
    public class DataFlowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHODSSPENDVIS/DataFlow/DataFlowIndex.cshtml");
        }
    }
}