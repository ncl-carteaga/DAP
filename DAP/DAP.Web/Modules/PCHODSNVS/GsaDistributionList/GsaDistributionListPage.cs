
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/GsaDistributionList"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.GsaDistributionListRow))]
    [PageAuthorize(PermissionKeys.PagePermission.GSADistributionList)]
    public class GsaDistributionListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/GsaDistributionList/GsaDistributionListIndex.cshtml");
        }
    }
}