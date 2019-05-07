using Serenity.Navigation;
using MyPages = DAP.PCHODS.Pages;

[assembly: NavigationMenu(int.MaxValue, "Outbound", icon: "fa-sign-out")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission Period", typeof(MyPages.OutboundCommissionPeriodController), icon: "fa-calendar-check-o")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Agent Location", typeof(MyPages.OutboundAgentLocationController), icon: "fa-location-arrow")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Agents", typeof(MyPages.OutboundAgentController), icon: "fa-user-plus")]