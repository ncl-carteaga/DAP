
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/RequestAttributes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RequestAttributesRow))]
    public class RequestAttributesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/RequestAttributes/RequestAttributesIndex.cshtml");
        }
    }
}