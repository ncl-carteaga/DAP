
namespace DAP.PCHDW.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHDW/DimInvoice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DimInvoiceRow))]
    public class DimInvoiceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHDW/DimInvoice/DimInvoiceIndex.cshtml");
        }
    }
}