
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/VoyageBudgetFinalSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.VoyageBudgetFinalSupp)]
    public class VoyageBudgetFinalSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/VoyageBudgetFinalSupp/VoyageBudgetFinalSuppIndex.cshtml");
        }
    }
}