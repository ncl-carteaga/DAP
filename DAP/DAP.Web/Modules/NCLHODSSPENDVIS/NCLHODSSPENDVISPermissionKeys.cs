
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.NCLHODSSPENDVIS
{
    [NestedPermissionKeys]
    [DisplayName("SPENDVIS")]
    public class PermissionKeys
    {
        [DisplayName("SPENDVIS")]
        public class SPENDVIS
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "SPENDVIS:SPENDVIS:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "SPENDVIS:SPENDVIS:Modify";
            public const string View = "SPENDVIS:SPENDVIS:View";
        }

        [Description("[General]")]
        public const string General = "SPENDVIS:General";

        [Description("[ConfigAdmin]")]
        public const string ConfigAdmin = "SPENDVIS:ConfigAdmin";

    }
}