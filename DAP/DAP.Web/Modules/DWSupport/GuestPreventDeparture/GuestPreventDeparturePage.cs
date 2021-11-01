
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/GuestPreventDeparture"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.GuestPreventDepartureRow))]
    [PageAuthorize(PermissionKeys.PagePermission.GuestPreventDeparture)]
    public class GuestPreventDepartureController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/GuestPreventDeparture/GuestPreventDepartureIndex.cshtml");
        }
    }
}