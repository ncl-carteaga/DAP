
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CurrencyExchangeRateSupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CurrencyExchangeRateSuppRow))]
    public class CurrencyExchangeRateSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CurrencyExchangeRateSupp/CurrencyExchangeRateSuppIndex.cshtml");
        }
    }
}