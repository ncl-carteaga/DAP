
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/SuppKeyAcctTarget"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SuppKeyAcctTargetRow))]
    public class SuppKeyAcctTargetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/SuppKeyAcctTarget/SuppKeyAcctTargetIndex.cshtml");
        }
    }
}