
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/RollupProductCodesSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.RollupProductCodesSupp)]
    public class RollupProductCodesSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/RollupProductCodesSupp/RollupProductCodesSuppIndex.cshtml");
        }
    }
}