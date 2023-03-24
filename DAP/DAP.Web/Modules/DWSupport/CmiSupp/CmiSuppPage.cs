
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CmiSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.CmiSupp)]
    public class CmiSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CmiSupp/CmiSuppIndex.cshtml");
        }
    }
}