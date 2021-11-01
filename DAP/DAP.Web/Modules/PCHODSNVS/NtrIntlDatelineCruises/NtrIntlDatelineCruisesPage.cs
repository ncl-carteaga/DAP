
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/NtrIntlDatelineCruises"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.NtrIntlDatelineCruisesRow))]
    [PageAuthorize(PermissionKeys.PagePermission.NTRIntlDatelineCruises)]
    public class NtrIntlDatelineCruisesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/NtrIntlDatelineCruises/NtrIntlDatelineCruisesIndex.cshtml");
        }
    }
}