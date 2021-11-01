
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/NtrBudgetByChannel"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.NtrBudgetByChannelRow))]
    [PageAuthorize(PermissionKeys.PagePermission.NTRBudgetByChannel)]
    public class NtrBudgetByChannelController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/NtrBudgetByChannel/NtrBudgetByChannelIndex.cshtml");
        }
    }
}