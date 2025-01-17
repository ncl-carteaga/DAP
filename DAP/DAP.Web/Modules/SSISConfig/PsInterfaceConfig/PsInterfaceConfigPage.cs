﻿
namespace DAP.SSISConfig.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SSISConfig/PsInterfaceConfig"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.PSInterfaceConfig)]
    public class PsInterfaceConfigController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSISConfig/PsInterfaceConfig/PsInterfaceConfigIndex.cshtml");
        }
    }
}