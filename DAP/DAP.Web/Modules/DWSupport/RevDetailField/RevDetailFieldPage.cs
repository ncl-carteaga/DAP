﻿
namespace DAP.DWSupport.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DWSupport/RevDetailField"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.RevDetailField)]
    public class RevDetailFieldController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/DWSupport/RevDetailField/RevDetailFieldIndex.cshtml");
        }
    }
}