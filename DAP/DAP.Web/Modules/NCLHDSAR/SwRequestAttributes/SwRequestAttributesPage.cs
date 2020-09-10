
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/SwRequestAttributes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SwRequestAttributesRow))]
    public class SwRequestAttributesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/SwRequestAttributes/SwRequestAttributesIndex.cshtml");
        }
    }
}