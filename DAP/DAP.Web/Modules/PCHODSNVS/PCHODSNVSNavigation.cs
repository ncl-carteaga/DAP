﻿using Serenity.Navigation;
using MyPages = DAP.PCHODSNVS.Pages;
using MyPages2 = DAP.PCHDW.Pages;

[assembly: NavigationMenu(int.MaxValue, "Brand Finance & Strategy", icon: "fa-bar-chart")]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Intl Dateline Cruises", typeof(MyPages.NtrIntlDatelineCruisesController), icon: "fa-calendar")]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR DR010 Comment", typeof(MyPages.NtrRptCommentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Forecast", typeof(MyPages.NtrFcstController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Budget By Channel", typeof(MyPages.NtrBudgetByChannelController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Budget", typeof(MyPages.NtrBudgetController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/NTR Actuals - APCD", typeof(MyPages.NtrPastMonthsActualController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Supp Key Acct Target", typeof(MyPages.SuppKeyAcctTargetController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/GSA Distribution List", typeof(MyPages.GsaDistributionListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Consortium Exception List", typeof(MyPages.ConsortiumExceptionListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Revenue Adhoc Management", typeof(MyPages.RevenueAdhocManagementController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Transfer Estimate OCI Amount", typeof(MyPages.TransferEstimateOciAmtController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Job Management", typeof(MyPages.JobManagementController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Disable|Enable Report Jobs", typeof(MyPages2.VwSqlJobListController), icon: null)]
