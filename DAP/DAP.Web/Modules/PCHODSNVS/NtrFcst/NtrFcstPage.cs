
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/NtrFcst"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NtrFcstRow))]
    public class NtrFcstController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/NtrFcst/NtrFcstIndex.cshtml");
        }
    }
}