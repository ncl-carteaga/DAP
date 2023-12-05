
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CapacitySupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CapacitySuppRow))]
    public class CapacitySuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CapacitySupp/CapacitySuppIndex.cshtml");
        }
    }
}