
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.NCLHODSMICROS
{
    [NestedPermissionKeys]
    [DisplayName("NCLHODSMICROS")]
    public class PermissionKeys
    {
        [DisplayName("NCLHODSMICROS")]
        public class Micros
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "NCLHODSMICROS:NCLHODSMICROS:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "NCLHODSMICROS:NCLHODSMICROS:Modify";
            public const string View = "NCLHODSMICROS:NCLHODSMICROS:View";
        }

        [Description("[General]")]
        public const string General = "NCLHODSMICROS:General";

        [Description("[ConfigAdmin]")]
        public const string ConfigAdmin = "NCLHODSMICROS:ConfigAdmin";

    }
}