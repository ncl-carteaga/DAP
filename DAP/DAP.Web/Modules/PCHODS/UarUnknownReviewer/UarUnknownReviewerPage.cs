
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/UarUnknownReviewer"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.UarUnknownReviewerController)]
    public class UarUnknownReviewerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/UarUnknownReviewer/UarUnknownReviewerIndex.cshtml");
        }
    }
}