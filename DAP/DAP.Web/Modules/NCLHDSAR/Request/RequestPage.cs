
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/Request"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RequestRow))]
    public class RequestController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/Request/RequestIndex.cshtml");
        }
    }
}