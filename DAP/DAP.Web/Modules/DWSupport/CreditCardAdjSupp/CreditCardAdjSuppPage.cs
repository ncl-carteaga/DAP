
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CreditCardAdjSupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CreditCardAdjSuppRow))]
    public class CreditCardAdjSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CreditCardAdjSupp/CreditCardAdjSuppIndex.cshtml");
        }
    }
}