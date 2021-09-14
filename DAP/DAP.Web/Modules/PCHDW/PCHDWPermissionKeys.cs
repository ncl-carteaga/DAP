using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.PCHDW
{
    [NestedPermissionKeys]
    [DisplayName("PCHDW")]
    public class PermissionKeys
    {
        [DisplayName("EDM Support")]
        public class EDMSupport
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "PCHDW:EDMSupport:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "PCHDW:EDMSupport:Modify";
            public const string View = "PCHDW:EDMSupport:View";
        }

        [Description("[General]")]
        public const string General = "PCHDW:General";

        [Description("[EDMSupportAdmin]")]
        public const string ConfigAdmin = "PCHDW:EDMSupportAdmin";

        [DisplayName("Page")]
        public class PagePermission
        {
            public const string DimInvoice = "PCHDW:Page:DimInvoice";
            public const string DimCruise = "PCHDW:Page:DimCruise";
            public const string SqlJobList = "PCHDW:Page:SqlJobList";
            public const string ScheduledJob = "PCHDW:Page:ScheduledJob";
            public const string RevenueAdhocManagement = "PCHDW:Page:RevenueAdhocManagement";
            

        }


    }
}