
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/SwRequest"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.SwRequest)]
    public class SwRequestController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/SwRequest/SwRequestIndex.cshtml");
        }
    }
}