
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/ProductCodeSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.SailingMasterSupp)]
    public class ProductCodeSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/ProductCodeSupp/ProductCodeSuppIndex.cshtml");
        }
    }
}