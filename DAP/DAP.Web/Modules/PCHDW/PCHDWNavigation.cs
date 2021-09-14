using Serenity.Navigation;
using MyPages = DAP.PCHDW.Pages;

[assembly: NavigationMenu(int.MaxValue, "EDM Support", icon: "fa-database")]
[assembly: NavigationLink(int.MaxValue, "EDM Support/Dim Invoice", typeof(MyPages.DimInvoiceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "EDM Support/Sql Job List", typeof(MyPages.VwSqlJobListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "EDM Support/Scheduled Job", typeof(MyPages.ScheduledJobController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "EDM Support/Dim Cruise", typeof(MyPages.DimCruiseController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Revenue Adhoc Management", typeof(MyPages.RevenueAdhocManagementController), icon: null)]