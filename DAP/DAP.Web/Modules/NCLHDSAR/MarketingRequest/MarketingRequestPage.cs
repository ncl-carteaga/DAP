﻿
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/MarketingRequest"), Route("{action=index}")]
    [PageAuthorize(PermissionKeys.PagePermission.MarketingRequest)]
    public class MarketingRequestController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/MarketingRequest/MarketingRequestIndex.cshtml");
        }
    }
}