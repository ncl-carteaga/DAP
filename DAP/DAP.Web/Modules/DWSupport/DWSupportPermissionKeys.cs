
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.DWSupport
{
    [NestedPermissionKeys]
    [DisplayName("DWSupp")]
    public class PermissionKeys
    {
        [DisplayName("DWSupport")]
        public class DWSupport
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "DWSupp:DWSupport:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "DWSupp:DWSupport:Modify";
            public const string View = "DWSupp:DWSupport:View";
        }

        [Description("[General]")]
        public const string General = "DWSupport:General";
    }
}
