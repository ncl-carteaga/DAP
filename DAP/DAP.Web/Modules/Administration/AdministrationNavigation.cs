using Serenity.Navigation;
using Administration = DAP.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Data Audit Log", typeof(Administration.DataAuditLogController))]
[assembly: NavigationLink(9000, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: DAP.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Administration/Mail Queue", typeof(DAP.Common.Pages.MailController), icon: "fa-envelope-o premium-sample")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]