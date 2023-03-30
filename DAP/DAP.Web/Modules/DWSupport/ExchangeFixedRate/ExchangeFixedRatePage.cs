
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/ExchangeFixedRate"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExchangeFixedRateRow))]
    public class ExchangeFixedRateController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/ExchangeFixedRate/ExchangeFixedRateIndex.cshtml");
        }
    }
}