using Serenity.Navigation;
using MyPages = DAP.PCHODSNVS.Pages;

[assembly: NavigationMenu(int.MaxValue, "Brand Finance & Strategy", icon: "fa-bar-chart")]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Intl Dateline Cruises", typeof(MyPages.NtrIntlDatelineCruisesController), icon: "fa-calendar")]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR DR010 Comment", typeof(MyPages.NtrRptCommentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Forecast", typeof(MyPages.NtrFcstController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Budget By Channel", typeof(MyPages.NtrBudgetByChannelController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Budget", typeof(MyPages.NtrBudgetController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Actuals", typeof(MyPages.NtrPastMonthsActualController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Supp Key Acct Target", typeof(MyPages.SuppKeyAcctTargetController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/GSA Distribution List", typeof(MyPages.GsaDistributionListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Consortium Exception List", typeof(MyPages.ConsortiumExceptionListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Revenue Adhoc Management", typeof(MyPages.RevenueAdhocManagementController), icon: null)]