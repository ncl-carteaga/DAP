
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/Skill2Skillgroup"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.Skill2Skillgroup)]
    public class Skill2SkillgroupController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/Skill2Skillgroup/Skill2SkillgroupIndex.cshtml");
        }
    }
}