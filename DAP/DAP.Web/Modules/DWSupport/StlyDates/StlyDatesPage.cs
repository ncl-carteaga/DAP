
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/StlyDates"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.StlyDates)]
    public class StlyDatesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/StlyDates/StlyDatesIndex.cshtml");
        }
    }
}