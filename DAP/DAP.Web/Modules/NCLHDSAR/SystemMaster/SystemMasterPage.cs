
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/SystemMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SystemMasterRow))]
    public class SystemMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/SystemMaster/SystemMasterIndex.cshtml");
        }
    }
}