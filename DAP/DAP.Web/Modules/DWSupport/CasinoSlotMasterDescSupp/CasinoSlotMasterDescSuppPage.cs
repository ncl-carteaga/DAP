
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CasinoSlotMasterDescSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.CasinoSlotMasterDescSupp)]
    public class CasinoSlotMasterDescSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CasinoSlotMasterDescSupp/CasinoSlotMasterDescSuppIndex.cshtml");
        }
    }
}