
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/NtrRptComment"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.NtrRptCommentRow))]
    [PageAuthorize(PermissionKeys.PagePermission.NTRDR010Comment)]
    public class NtrRptCommentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/NtrRptComment/NtrRptCommentIndex.cshtml");
        }
    }
}