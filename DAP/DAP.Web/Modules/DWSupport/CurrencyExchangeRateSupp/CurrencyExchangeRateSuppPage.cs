
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/CurrencyExchangeRateSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.CurrencyExchangeRateSupp)]
    public class CurrencyExchangeRateSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/CurrencyExchangeRateSupp/CurrencyExchangeRateSuppIndex.cshtml");
        }
    }
}