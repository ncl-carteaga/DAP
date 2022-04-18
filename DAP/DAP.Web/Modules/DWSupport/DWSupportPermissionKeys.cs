
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

        [DisplayName("Page")]
        public class PagePermission
        {
            public const string GuestPreventDeparture = "DWSupp:Page:GuestPreventDeparture";
            public const string DistrictMasterSupp = "DWSupp:Page:DistrictMasterSupp";
            public const string FinReportPublishingSupp = "DWSupp:Page:FinReportPublishingSupp";
            public const string SailingMasterSupp = "DWSupp:Page:SailingMasterSupp";
            public const string SurveyFilterExclusionSupp = "DWSupp:Page:SurveyFilterExclusionSupp";
            public const string TblStrategicPriceControl = "DWSupp:Page:TblStrategicPriceControl";
            public const string PortSubstitutionSupp = "DWSupp:Page:PortSubstitutionSupp";
            public const string InvoiceItemMasterSupp = "DWSupp:Page:InvoiceItemMasterSupp";
            public const string AmenitySupp = "DWSupp:Page:AmenitySupp";
            public const string AmenityDetailSupp = "DWSupp:Page:AmenityDetailSupp";
        }
    }

    
}
