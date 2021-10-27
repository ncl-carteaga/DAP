
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
        
        [Description("[ConfigAdmin]")]
        public const string ConfigAdmin = "SSISConfig:ConfigAdmin";

        [Description("[General]")]
        public const string General = "SSISConfig:General";

        [Description("PSConfig")]
        public const string PSConfig = "SSISConfig:PSConfig";

        [DisplayName("Page")]
        public class PagePermission
        {
            public const string FidelioDataFlow = "SSISConfig:Page:FidelioDataFlow";
            public const string GpInterfaceLog = "SSISConfig:Page:GpInterfaceLog";
            public const string INTConfigBase = "SSISConfig:Page:INTConfigBase";
            public const string MicrosDataFlow = "SSISConfig:Page:MicrosDataFlow";
            public const string NCLShip = "SSISConfig:Page:NCLShip";
            public const string PSInterfaceConfig = "SSISConfig:Page:PSInterfaceConfig";
            public const string DWHConfigBase = "SSISConfig:Page:DWHConfigBase";
        }

    }
}
