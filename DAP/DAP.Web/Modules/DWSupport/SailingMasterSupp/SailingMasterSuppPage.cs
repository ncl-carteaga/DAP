
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/SailingMasterSupp"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.SailingMasterSuppRow))]
    [PageAuthorize(PermissionKeys.PagePermission.SailingMasterSupp)]
    public class SailingMasterSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/SailingMasterSupp/SailingMasterSuppIndex.cshtml");
        }
    }
}