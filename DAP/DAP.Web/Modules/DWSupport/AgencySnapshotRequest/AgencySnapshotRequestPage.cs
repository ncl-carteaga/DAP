
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/AgencySnapshotRequest"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.AgencySnapshotRequest)]
    public class AgencySnapshotRequestController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/AgencySnapshotRequest/AgencySnapshotRequestIndex.cshtml");
        }
    }
}