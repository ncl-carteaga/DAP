
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/SystemMaster"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.SystemMaster)]
    public class SystemMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/SystemMaster/SystemMasterIndex.cshtml");
        }
    }
}