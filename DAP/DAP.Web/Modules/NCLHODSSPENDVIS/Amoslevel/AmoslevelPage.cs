
namespace DAP.NCLHODSSPENDVIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHODSSPENDVIS/Amoslevel"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AmoslevelRow))]
    public class AmoslevelController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHODSSPENDVIS/Amoslevel/AmoslevelIndex.cshtml");
        }
    }
}