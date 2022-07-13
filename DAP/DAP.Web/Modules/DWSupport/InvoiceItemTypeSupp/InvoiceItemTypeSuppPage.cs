
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/InvoiceItemTypeSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.InvoiceItemSupp)]
    public class InvoiceItemTypeSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/InvoiceItemTypeSupp/InvoiceItemTypeSuppIndex.cshtml");
        }
    }
}