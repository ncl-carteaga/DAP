
namespace DAP.NCLHODSMICROS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHODSMICROS/DataFlow"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DataFlowRow))]
    public class DataFlowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHODSMICROS/DataFlow/DataFlowIndex.cshtml");
        }
    }
}