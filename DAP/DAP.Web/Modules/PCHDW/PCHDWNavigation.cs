using Serenity.Navigation;
using MyPages = DAP.PCHDW.Pages;

[assembly: NavigationLink(int.MaxValue, "DWH Support/Dim Invoice", typeof(MyPages.DimInvoiceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DWH Support/Sql Job List", typeof(MyPages.VwSqlJobListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PCHDW/Scheduled Job", typeof(MyPages.ScheduledJobController), icon: null)]