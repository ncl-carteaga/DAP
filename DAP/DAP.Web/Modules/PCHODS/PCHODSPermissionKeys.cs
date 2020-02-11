
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.PCHODS
{
    [NestedPermissionKeys]
    [DisplayName("PCHODS")]
    public class PermissionKeys
    {
        [DisplayName("Outbound")]
        public class Outbound
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "PCHODS:Outbound:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "PCHODS:Outbound:Modify";
            public const string View = "PCHODS:Outbound:View";
        }

        [Description("[General]")]
        public const string General = "PCHODS:General";
    }
}
