using Serenity.Navigation;
using MyPages = DAP.PCHODSNVS.Pages;

[assembly: NavigationMenu(int.MaxValue, "Brand Finance & Strategy", icon: "fa-bar-chart")]
[assembly: NavigationLink(int.MaxValue, "Brand Finance & Strategy/Ntr Intl Dateline Cruises", typeof(MyPages.NtrIntlDatelineCruisesController), icon: "fa-calendar")]