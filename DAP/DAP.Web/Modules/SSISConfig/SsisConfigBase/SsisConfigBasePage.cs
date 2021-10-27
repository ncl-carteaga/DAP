
namespace DAP.SSISConfig.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SSISConfig/SsisConfigBase"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.DWHConfigBase)]
    public class SsisConfigBaseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSISConfig/SsisConfigBase/SsisConfigBaseIndex.cshtml");
        }
    }
}