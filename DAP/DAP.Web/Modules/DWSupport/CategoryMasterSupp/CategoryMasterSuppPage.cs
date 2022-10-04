
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CategoryMasterSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.CategoryMasterSupp)]
    public class CategoryMasterSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CategoryMasterSupp/CategoryMasterSuppIndex.cshtml");
        }
    }
}