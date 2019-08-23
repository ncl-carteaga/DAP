using Serenity.Navigation;
using MyPages = DAP.PCHODS.Pages;

[assembly: NavigationMenu(int.MaxValue, "Outbound", icon: "fa-sign-out")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission Period", typeof(MyPages.OutboundCommissionPeriodController), icon: "fa-calendar-check-o")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Agent Location", typeof(MyPages.OutboundAgentLocationController), icon: "fa-location-arrow")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Agents", typeof(MyPages.OutboundAgentController), icon: "fa-user-plus")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission History US", typeof(MyPages.OutboundCommissionHistController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission History AU", typeof(MyPages.OutboundCommissionHistAuController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission History BR", typeof(MyPages.OutboundCommissionHistBrController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Monthly Report Archive", typeof(MyPages.VwOutboundMonthlyRptArchiveOverrideController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PCHODS/Outbound Monthly Rpt Archive Override", typeof(MyPages.OutboundMonthlyRptArchiveOverrideController), icon: null)]