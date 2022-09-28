
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/FullShipChartersSupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FullShipChartersSuppRow))]
    public class FullShipChartersSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/FullShipChartersSupp/FullShipChartersSuppIndex.cshtml");
        }
    }
}