﻿
namespace DAP.SSISConfig.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("SSISConfig/INTConfigBase"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.INTConfigBaseRow))]
    public class INTConfigBaseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSISConfig/INTConfigBase/INTConfigBaseIndex.cshtml");
        }
    }
}