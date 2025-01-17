﻿
namespace DAP.NCLHDSAR.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("NCLHDSAR/DataFlow"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DataFlowRow))]
    public class DataFlowController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/NCLHDSAR/DataFlow/DataFlowIndex.cshtml");
        }
    }
}