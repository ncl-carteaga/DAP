using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.PCHODSNVS
{
    [NestedPermissionKeys]
    [DisplayName("PCHODSNVS")]
    public class PermissionKeys
    {
        [DisplayName("Finance")]
        public class Finance
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "PCHODSNVS:Finance:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "PCHODSNVS:Finance:Modify";
            public const string View = "PCHODSNVS:Finance:View";
        }

        [Description("[General]")]
        public const string General = "PCHODSNVS:General";
    }

}
