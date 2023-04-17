
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/DimCruiseFlags"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.DimCruiseFlags)]
    public class DimCruiseFlagsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/DimCruiseFlags/DimCruiseFlagsIndex.cshtml");
        }
    }
}