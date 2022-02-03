
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/Master"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterRow))]
    public class MasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/SplitMasterDetail/Index.cshtml");
        }
    }
}