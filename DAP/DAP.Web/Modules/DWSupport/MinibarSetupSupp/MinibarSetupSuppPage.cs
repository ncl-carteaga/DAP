﻿
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/MinibarSetupSupp"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.MinibarSetupSupp)]
    public class MinibarSetupSuppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/MinibarSetupSupp/MinibarSetupSuppIndex.cshtml");
        }
    }
}