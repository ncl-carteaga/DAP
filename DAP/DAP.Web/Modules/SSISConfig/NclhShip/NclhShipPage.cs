
namespace DAP.SSISConfig.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SSISConfig/NclhShip"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NclhShipRow))]
    public class NclhShipController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSISConfig/NclhShip/NclhShipIndex.cshtml");
        }
    }
}