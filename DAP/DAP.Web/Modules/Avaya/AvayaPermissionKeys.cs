using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.Avaya
{
    [NestedPermissionKeys]
    [DisplayName("Avaya")]
    public class PermissionKeys
    {
        [DisplayName("Avaya")]
        public class Avaya
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Avaya:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Avaya:Modify";
            public const string View = "Avaya:View";
        }

        [Description("[General]")]
        public const string General = "Avaya:General";


    }

}
