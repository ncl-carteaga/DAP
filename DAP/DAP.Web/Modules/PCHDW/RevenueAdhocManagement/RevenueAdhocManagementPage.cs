
namespace DAP.PCHDW.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHDW/RevenueAdhocManagement"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.RevenueAdhocManagementRow))]
    [PageAuthorize(PermissionKeys.PagePermission.RevenueAdhocManagement)]
    public class RevenueAdhocManagementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHDW/RevenueAdhocManagement/RevenueAdhocManagementIndex.cshtml");
        }
    }
}