using Serenity.Navigation;
using MyPages = DAP.DWSupport.Pages;

[assembly: NavigationLink(int.MaxValue, "DW Support/Financial Report Publishing", typeof(MyPages.FinReportPublishingSuppController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/District Master", typeof(MyPages.DistrictMasterSuppController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Guest Prevent Departure", typeof(MyPages.GuestPreventDepartureController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Sailing Master Supp", typeof(MyPages.SailingMasterSuppController), icon: null)]