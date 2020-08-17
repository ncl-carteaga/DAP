
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.SSISConfig
{
    [NestedPermissionKeys]
    [DisplayName("SSISConfig")]
    public class PermissionKeys
    {
        [DisplayName("SSISConfig")]
        public class SSISConfig
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "SSISConfig:Config:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "SSISConfig:Config:Modify";
            public const string View = "SSISConfig:Config:View";
        }

        [DisplayName("INTConfig")]
        public class INTConfig
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "SSISConfig:INTConfig:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "SSISConfig:INTConfig:Modify";
            public const string View = "SSISConfig:INTConfig:View";
        }

        [Description("[ConfigAdmin]")]
        public const string ConfigAdmin = "SSISConfig:ConfigAdmin";

        [Description("[General]")]
        public const string General = "SSISConfig:General";

        [Description("PSConfig")]
        public const string PSConfig = "SSISConfig:PSConfig";
    }
}
