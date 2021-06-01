
namespace DAP.Avaya.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Avaya/SkillSplitMapping"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SkillSplitMappingRow))]
    public class SkillSplitMappingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Avaya/SkillSplitMapping/SkillSplitMappingIndex.cshtml");
        }
    }
}