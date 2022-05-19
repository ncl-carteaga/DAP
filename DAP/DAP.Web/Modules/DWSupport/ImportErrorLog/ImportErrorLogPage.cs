
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/ImportErrorLog"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImportErrorLogRow))]
    public class ImportErrorLogController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/ImportErrorLog/ImportErrorLogIndex.cshtml");
        }
    }
}