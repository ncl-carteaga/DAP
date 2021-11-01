
namespace DAP.PCHODSNVS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODSNVS/ConsortiumExceptionList"), Route("{action=index}")]
    //[PageAuthorize(typeof(Entities.ConsortiumExceptionListRow))]
    [PageAuthorize(PermissionKeys.PagePermission.ConsortiumExceptionList)]
    public class ConsortiumExceptionListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODSNVS/ConsortiumExceptionList/ConsortiumExceptionListIndex.cshtml");
        }
    }
}