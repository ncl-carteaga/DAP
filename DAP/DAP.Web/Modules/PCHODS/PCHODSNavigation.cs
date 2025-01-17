﻿using Serenity.Navigation;
using MyPages = DAP.PCHODS.Pages;

[assembly: NavigationMenu(int.MaxValue, "Outbound", icon: "fa-sign-out")]
[assembly: NavigationMenu(int.MaxValue, "Inbound", icon: "fa-sign-in")]
[assembly: NavigationLink(int.MaxValue, "Inbound/Inbound User Override", typeof(MyPages.InboundUserOverrideController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission Period", typeof(MyPages.OutboundCommissionPeriodController), icon: "fa-calendar-check-o")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Agent Location", typeof(MyPages.OutboundAgentLocationController), icon: "fa-location-arrow")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Agents", typeof(MyPages.OutboundAgentController), icon: "fa-user-plus")]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission Tiers US", typeof(MyPages.OutboundCommissionHistController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission Tiers AU", typeof(MyPages.OutboundCommissionHistAuController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission Tiers BR", typeof(MyPages.OutboundCommissionHistBrController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Monthly Rpt Archive", typeof(MyPages.OutboundMonthlyRptArchiveOverrideController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Outbound/Commission Bk Goal", typeof(MyPages.OutboundCommissionBkGoalController), icon: null)]
[assembly: NavigationMenu(int.MaxValue, "UAR", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "UAR/Sr. Dir. Above List", typeof(MyPages.UarSrDirAboveListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "UAR/Unknown Reviewer", typeof(MyPages.UarUnknownReviewerController), icon: null)]
