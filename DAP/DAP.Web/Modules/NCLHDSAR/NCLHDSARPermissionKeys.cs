
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.NCLHDSAR
{
    [NestedPermissionKeys]
    [DisplayName("NCLHDSAR")]
    public class PermissionKeys
    {
        [DisplayName("Request")]
        public class Request
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "NCLHDSAR:Request:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "NCLHDSAR:Request:Modify";
            public const string View = "NCLHDSAR:Request:View";
        }

        [DisplayName("RequestAttribute")]
        public class RequestAttribute
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "NCLHDSAR:RequestAttribute:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "NCLHDSAR:RequestAttribute:Modify";
            public const string View = "NCLHDSAR:RequestAttribute:View";
        }

        [DisplayName("SWRequest")]
        public class SWRequest
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "NCLHDSAR:SWRequest:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "NCLHDSAR:SWRequest:Modify";
            public const string View = "NCLHDSAR:SWRequest:View";
        }

        [DisplayName("SWRequestAttribute")]
        public class SWRequestAttribute
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "NCLHDSAR:SWRequestAttribute:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "NCLHDSAR:SWRequestAttribute:Modify";
            public const string View = "NCLHDSAR:SWRequestAttribute:View";
        }


        [Description("[General]")]
        public const string General = "NCLHDSAR:General";

        [Description("[ConfigAdmin]")]
        public const string ConfigAdmin = "NCLHDSAR:ConfigAdmin";
    }
}
