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

        [Description("Finance_100")]
        public const string Finance100 = "PCHODSNVS:Finance100";

        [Description("Finance_110")]
        public const string Finance110 = "PCHODSNVS:Finance110";

        [Description("Finance_KeyAcctTarget")]
        public const string KeyAcctTarget = "PCHODSNVS:KeyAcctTarget";
    }

}
