
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/PsGlAccountSupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PsGlAccountSuppRow))]
    public class PsGlAccountSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/PsGlAccountSupp/PsGlAccountSuppIndex.cshtml");
        }
    }
}