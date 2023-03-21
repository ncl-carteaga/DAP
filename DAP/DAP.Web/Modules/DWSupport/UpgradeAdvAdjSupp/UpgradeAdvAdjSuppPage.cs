
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/UpgradeAdvAdjSupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UpgradeAdvAdjSuppRow))]
    public class UpgradeAdvAdjSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/UpgradeAdvAdjSupp/UpgradeAdvAdjSuppIndex.cshtml");
        }
    }
}