
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/NtrBudget"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.NtrBudgetRow))]
    [PageAuthorize(PermissionKeys.PagePermission.NTRBudget)]
    public class NtrBudgetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/NtrBudget/NtrBudgetIndex.cshtml");
        }
    }
}