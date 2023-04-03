
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/Region"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.Region)]
    public class RegionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/Region/RegionIndex.cshtml");
        }
    }
}