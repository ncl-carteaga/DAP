
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/Assignee"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssigneeRow))]
    public class AssigneeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/Assignee/AssigneeIndex.cshtml");
        }
    }
}