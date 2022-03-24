
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/TransferEstimateOciAmt"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.TransferEstimateOciAmt)]
    public class TransferEstimateOciAmtController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/TransferEstimateOciAmt/TransferEstimateOciAmtIndex.cshtml");
        }
    }
}