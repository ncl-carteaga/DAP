using Serenity.Navigation;
using MyPages = DAP.Avaya.Pages;

[assembly: NavigationMenu(int.MaxValue, "Avaya", icon: "fa-phone")]
[assembly: NavigationLink(int.MaxValue, "Avaya/Skill Split Mapping", typeof(MyPages.SkillSplitMappingController), icon: null)]