
using Serenity;
using Serenity.Extensibility;
using System.ComponentModel;
using static MVC.Views.Administration;

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

        [Description("DWSupport_Revenue")]
        public const string DWSupport_Revenue = "DWSupport:DWSupport_Revenue";

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
            public const string InvoiceItemSupp = "DWSupp:Page:InvoiceItemSupp";
            public const string AmenitySupp = "DWSupp:Page:AmenitySupp";
            public const string AmenityDetailSupp = "DWSupp:Page:AmenityDetailSupp";
            public const string AgencySnapshotRequest = "DWSupp:Page:AgencySnapshotRequest";

            public const string CasinoSlotMasterDescSupp = "DWSupp:Page:CasinoSlotMasterDescSupp";
            public const string CategoryMasterSupp = "DWSupp:Page:CategoryMasterSupp";
            public const string CurrencyExchangeRateSupp = "DWSupp:Page:CurrencyExchangeRateSupp";
            public const string FullShipChartersSupp = "DWSupp:Page:FullShipChartersSupp";
            public const string MinibarSetupSupp = "DWSupp:Page:MinibarSetupSupp";
            public const string RollupProductCodesSupp = "DWSupp:Page:RollupProductCodesSupp";
            public const string PsGlAccountSupp = "DWSupp:Page:PsGlAccountSupp";
            public const string CmiSupp = "DWSupp:Page:CmiSupp";
            public const string FinPlannedCapacitySupp = "DWSupp:Page:FinPlannedCapacitySupp";
            public const string GtfSupp = "DWSupp:Page:GtfSupp";

            
        }
    }    
}
