
namespace DAP.SSISConfig.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SSISConfig/GpInterfaceLog"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GpInterfaceLogRow))]
    public class GpInterfaceLogController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSISConfig/GpInterfaceLog/GpInterfaceLogIndex.cshtml");
        }
    }
}