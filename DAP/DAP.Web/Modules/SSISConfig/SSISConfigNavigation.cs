using Serenity.Navigation;
using MyPages = DAP.SSISConfig.Pages;
using MyPages2 = DAP.NCLHODSMICROS.Pages;
using MyPages3 = DAP.NCLHODSSPENDVIS.Pages;

[assembly: NavigationMenu(int.MaxValue, "SSIS Config", icon: "fa fa-gear")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/Config Base (DWH)", typeof(MyPages.SsisConfigBaseController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/Config Base (INT)", typeof(MyPages.INTConfigBaseController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/PS Interface Config", typeof(MyPages.PsInterfaceConfigController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/GP Interface Log", typeof(MyPages.GpInterfaceLogController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/Fidelio Data Flow", typeof(MyPages.DataFlowController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/GSC Micros Data Flow", typeof(MyPages.MicrosDataFlowController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/CBS FR Data Flow", typeof(MyPages2.DataFlowController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSIS Config/SAP ARIBA Data Flow", typeof(MyPages3.DataFlowController), icon: "fa fa-wrench")]
[assembly: NavigationLink(int.MaxValue, "SSISConfig/Nclh Ship", typeof(MyPages.NclhShipController), icon: null)]