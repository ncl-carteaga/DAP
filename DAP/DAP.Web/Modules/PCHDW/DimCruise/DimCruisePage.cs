
namespace DAP.PCHDW.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHDW/DimCruise"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.DimCruiseRow))]
    [PageAuthorize(PermissionKeys.PagePermission.DimCruise)]
    public class DimCruiseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHDW/DimCruise/DimCruiseIndex.cshtml");
        }
    }
}