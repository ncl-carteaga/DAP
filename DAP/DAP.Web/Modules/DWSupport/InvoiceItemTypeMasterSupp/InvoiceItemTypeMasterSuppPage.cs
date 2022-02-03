
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/InvoiceItemTypeMasterSupp"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InvoiceItemTypeMasterSuppRow))]
    public class InvoiceItemTypeMasterSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/InvoiceItemTypeMasterSupp/InvoiceItemTypeMasterSuppIndex.cshtml");
        }
    }
}