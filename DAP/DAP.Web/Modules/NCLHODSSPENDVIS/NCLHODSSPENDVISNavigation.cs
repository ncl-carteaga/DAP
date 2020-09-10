using Serenity.Navigation;
using MyPages = DAP.NCLHODSSPENDVIS.Pages;

[assembly: NavigationMenu(int.MaxValue, "Spend Visibility", icon: "fa-dollar")]
[assembly: NavigationLink(int.MaxValue, "Spend Visibility/Amos level", typeof(MyPages.AmoslevelController), icon: "fa fa-level-up")]
//[assembly: NavigationLink(int.MaxValue, "SSIS Config/SAP ARIBA Data Flow", typeof(MyPages.DataFlowController), icon: null)]s