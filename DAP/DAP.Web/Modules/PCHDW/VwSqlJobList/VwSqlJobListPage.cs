
namespace DAP.PCHDW.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHDW/VwSqlJobList"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VwSqlJobListRow))]
    public class VwSqlJobListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHDW/VwSqlJobList/VwSqlJobListIndex.cshtml");
        }
    }
}