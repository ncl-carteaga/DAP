
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.PCHDW
{
    [NestedPermissionKeys]
    [DisplayName("PCHDW")]
    public class PermissionKeys
    {
        [DisplayName("PCHDW")]
        public class PCHDW
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "PCHDW:PCHDW:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "PCHDW:PCHDW:Modify";
            public const string View = "PCHDW:PCHDW:View";
        }

        [Description("[General]")]
        public const string General = "PCHDW:General";

        [Description("[ConfigAdmin]")]
        public const string ConfigAdmin = "PCHDW:ConfigAdmin";

    }
}