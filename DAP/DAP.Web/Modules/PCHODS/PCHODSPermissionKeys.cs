
using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.PCHODS
{
    [NestedPermissionKeys]
    [DisplayName("PCHODS")]
    public class PermissionKeys
    {
        [DisplayName("Outbound")]
        public class Outbound
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "PCHODS:Outbound:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "PCHODS:Outbound:Modify";
            public const string View = "PCHODS:Outbound:View";
        }

        [Description("[General]")]
        public const string General = "PCHODS:General";

        [DisplayName("Page")]
        public class PagePermission
        {
            public const string OutboundAgent = "PCHODS:Page:OutboundAgent";
            public const string OutboundAgentLocation = "PCHODS:Page:OutboundAgentLocation";
            public const string OutboundCommissionBkGoal = "PCHODS:Page:OutboundCommissionBkGoal";
            public const string OutboundCommissionHist = "PCHODS:Page:OutboundCommissionHist";
            public const string OutboundCommissionHistAu = "PCHODS:Page:OutboundCommissionHistAu";
            public const string OutboundCommissionHistBr = "PCHODS:Page:OutboundCommissionHistBr";
            public const string OutboundCommissionPeriod = "PCHODS:Page:OutboundCommissionPeriod";
            public const string OutboundMonthlyRptArchiveOverride = "PCHODS:Page:OutboundMonthlyRptArchiveOverride";
            public const string UarSrDirAboveList = "PCHODS:Page:UarSrDirAboveListController";
            public const string UarUnknownReviewer = "PCHODS:Page:UarUnknownReviewerController";
        }

    }
}
