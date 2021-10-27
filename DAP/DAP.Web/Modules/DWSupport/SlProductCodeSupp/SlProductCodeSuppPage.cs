
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/SlProductCodeSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.SailingMasterSupp)]
    public class SlProductCodeSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/SlProductCodeSupp/SlProductCodeSuppIndex.cshtml");
        }
    }
}