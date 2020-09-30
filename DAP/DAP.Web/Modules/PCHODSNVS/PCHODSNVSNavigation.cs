using Serenity.Navigation;
using MyPages = DAP.PCHODSNVS.Pages;

[assembly: NavigationMenu(int.MaxValue, "Brand Finance & Strategy", icon: "fa-bar-chart")]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Ntr Intl Dateline Cruises", typeof(MyPages.NtrIntlDatelineCruisesController), icon: "fa-calendar")]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Ntr Rpt Comment", typeof(MyPages.NtrRptCommentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Ntr Fcst", typeof(MyPages.NtrFcstController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Ntr Budget By Channel", typeof(MyPages.NtrBudgetByChannelController), icon: null)]