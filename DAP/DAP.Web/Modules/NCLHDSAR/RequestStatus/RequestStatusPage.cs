
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/RequestStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RequestStatusRow))]
    public class RequestStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/RequestStatus/RequestStatusIndex.cshtml");
        }
    }
}