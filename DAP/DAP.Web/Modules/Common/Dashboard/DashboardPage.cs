
namespace DAP.Common.Pages
{
    using DAP.NCLHDSAR;
    using DAP.NCLHDSAR.Entities;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
               RequestRow.Fields.GenerationKey, () =>
               {
                   var model = new DashboardPageModel();
                   var o = RequestRow.Fields;
                   using (var connection = SqlConnections.NewFor<RequestRow>())
                   {
                       model.AllRequests = connection.Count<RequestRow>(o.ReqStage != "Complete" && o.ReqStage != "Closed" && o.ReqStage != "Resolved");
                       model.Due10Days = connection.Count<RequestRow>(o.DaysLeft <= 10 && o.DaysLeft >= 0 && o.ReqStage != "Complete" && o.ReqStage != "Closed" && o.ReqStage != "Resolved");
                       model.Overdue = connection.Count<RequestRow>(o.DaysLeft == 0 && o.ReqStage != "Complete" && o.ReqStage != "Closed" && o.ReqStage != "Resolved");
                       
                   }
                   var s = SwRequestRow.Fields;
                   using (var connection = SqlConnections.NewFor<SwRequestRow>())
                   {

                       model.AllSwRequests = connection.Count<SwRequestRow>(s.StatusId != 3 && s.StatusId != 4);
                       model.SwDue10Days = connection.Count<SwRequestRow>(s.DaysLeft <= 10 && s.DaysLeft >= 0 && s.StatusId != 3 && s.StatusId != 4);
                       model.SwOverdue = connection.Count<SwRequestRow>(s.DaysLeft == 0 && s.StatusId != 3 && s.StatusId != 4);

                   }

                   return model;
               });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
