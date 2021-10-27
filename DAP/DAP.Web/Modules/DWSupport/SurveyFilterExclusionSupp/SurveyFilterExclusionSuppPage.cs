
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/SurveyFilterExclusionSupp"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.SurveyFilterExclusionSuppRow))]
    [PageAuthorize(PermissionKeys.PagePermission.SurveyFilterExclusionSupp)]
    public class SurveyFilterExclusionSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/SurveyFilterExclusionSupp/SurveyFilterExclusionSuppIndex.cshtml");
        }
    }
}