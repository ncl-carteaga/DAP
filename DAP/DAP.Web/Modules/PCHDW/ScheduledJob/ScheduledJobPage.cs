
namespace DAP.PCHDW.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHDW/ScheduledJob"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ScheduledJobRow))]
    public class ScheduledJobController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHDW/ScheduledJob/ScheduledJobIndex.cshtml");
        }
    }
}