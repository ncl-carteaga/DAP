
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/SuperPriceProgramsSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.SuperPriceProgramsSupp)]
    public class SuperPriceProgramsSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/SuperPriceProgramsSupp/SuperPriceProgramsSuppIndex.cshtml");
        }
    }
}