
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/PortSubstitutionSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.PortSubstitutionSupp)]
    public class PortSubstitutionSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/PortSubstitutionSupp/PortSubstitutionSuppIndex.cshtml");
        }
    }
}