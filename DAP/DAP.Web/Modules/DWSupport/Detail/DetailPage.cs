
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/Detail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DetailRow))]
    public class DetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/Detail/DetailIndex.cshtml");
        }
    }
}