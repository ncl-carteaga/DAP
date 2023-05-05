
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CrlinkOverrideFinance"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.CrlinkOverrideFinance)]
    public class CrlinkOverrideFinanceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CrlinkOverrideFinance/CrlinkOverrideFinanceIndex.cshtml");
        }
    }
}