using Serenity.Navigation;
using MyPages = DAP.NCLHDSAR.Pages;

[assembly: NavigationMenu(int.MaxValue, "DSAR", icon: "fa-ship")]
[assembly: NavigationLink(int.MaxValue, "DSAR/System Master", typeof(MyPages.SystemMasterController), icon: "fa-laptop")]
[assembly: NavigationLink(int.MaxValue, "DSAR/Request Type", typeof(MyPages.RequestTypeController), icon: "fa-info")]
[assembly: NavigationLink(int.MaxValue, "DSAR/Request", typeof(MyPages.RequestController), icon: "fa-key")]
//[assembly: NavigationLink(int.MaxValue, "NCLHDSAR/Request Attributes", typeof(MyPages.RequestAttributesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "DSAR/Assignee", typeof(MyPages.AssigneeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "DSAR/Request Status", typeof(MyPages.RequestStatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DSAR/CCPA Request", typeof(MyPages.SwRequestController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "NCLHDSAR/Sw Request Attributes", typeof(MyPages.SwRequestAttributesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "DSAR/Marketing Request", typeof(MyPages.MarketingRequestController), icon: null)]