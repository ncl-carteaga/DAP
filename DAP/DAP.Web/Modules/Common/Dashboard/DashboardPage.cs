
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
                       model.Overdue = connection.Count<RequestRow>(o.DaysLeft < 0 && o.ReqStage != "Complete" && o.ReqStage != "Closed" && o.ReqStage != "Resolved");
                       //var totalOrders = model.OpenOrders + closedOrders;
                       //model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                       //    ((double)closedOrders / (double)totalOrders * 100));
                       //model.CustomerCount = connection.Count<CustomerRow>();
                       //model.ProductCount = connection.Count<ProductRow>();
                   }
                   return model;
               });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
