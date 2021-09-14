using Serenity.Navigation;
using MyPages = DAP.DWSupport.Pages;

[assembly: NavigationMenu(int.MaxValue, "DW Support", icon: "fa-exchange")]
[assembly: NavigationLink(int.MaxValue, "DW Support/Financial Report Publishing", typeof(MyPages.FinReportPublishingSuppController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/District Master", typeof(MyPages.DistrictMasterSuppController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Guest Prevent Departure", typeof(MyPages.GuestPreventDepartureController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Survey Filter Exclusion", typeof(MyPages.SurveyFilterExclusionSuppController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Strategic Price Control", typeof(MyPages.TblStrategicPriceControlController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Sailing Master", typeof(MyPages.SailingMasterSuppController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Product Codes", typeof(MyPages.ProductCodeSuppController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DW Support/Sailing Product Codes", typeof(MyPages.SlProductCodeSuppController), icon: null)]