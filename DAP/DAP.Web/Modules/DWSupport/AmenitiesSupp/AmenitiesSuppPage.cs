
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/AmenitiesSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.AmenitySupp)]
    public class AmenitiesSuppController : Controller
    {
        public ActionResult Index()
        {
            //return View("~/Modules/DWSupport/AmenitiesSupp/AmenitiesSuppIndex.cshtml");
            return View("~/Modules/DWSupport/AmenityMasterDetail/Index.cshtml");
        }
    }
}