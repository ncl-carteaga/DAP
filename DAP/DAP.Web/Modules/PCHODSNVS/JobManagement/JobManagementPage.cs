
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/JobManagement"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.VwSqlJobListRow))]
    [PageAuthorize(PermissionKeys.PagePermission.JobManagement)]
    public class JobManagementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/JobManagement/JobManagementIndex.cshtml");
        }
    }
}