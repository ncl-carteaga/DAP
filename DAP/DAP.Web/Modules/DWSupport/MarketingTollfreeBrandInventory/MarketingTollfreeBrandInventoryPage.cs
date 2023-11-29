
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/MarketingTollfreeBrandInventory"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.MarketingTollfreeBrandInventory)]
    public class MarketingTollfreeBrandInventoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/MarketingTollfreeBrandInventory/MarketingTollfreeBrandInventoryIndex.cshtml");
        }
    }
}