
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/DistrictMasterSupp"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.DistrictMasterSuppRow))]
    [PageAuthorize(PermissionKeys.PagePermission.DistrictMasterSupp)]
    public class DistrictMasterSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/DistrictMasterSupp/DistrictMasterSuppIndex.cshtml");
        }
    }
}