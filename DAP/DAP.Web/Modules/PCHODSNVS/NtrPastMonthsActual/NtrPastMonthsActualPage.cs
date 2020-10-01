
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/NtrPastMonthsActual"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NtrPastMonthsActualRow))]
    public class NtrPastMonthsActualController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/NtrPastMonthsActual/NtrPastMonthsActualIndex.cshtml");
        }
    }
}