﻿
namespace DAP.PCHODS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("PCHODS/UarSrDirAboveList"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.UarSrDirAboveList)]
    // [PageAuthorize(typeof(Entities.UarSrDirAboveListRow))]
    public class UarSrDirAboveListController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/PCHODS/UarSrDirAboveList/UarSrDirAboveListIndex.cshtml");
        }
    }
}