
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/TblStrategicPriceControl"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.TblStrategicPriceControlRow))]
    [PageAuthorize(PermissionKeys.PagePermission.TblStrategicPriceControl)]
    public class TblStrategicPriceControlController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/TblStrategicPriceControl/TblStrategicPriceControlIndex.cshtml");
        }
    }
}