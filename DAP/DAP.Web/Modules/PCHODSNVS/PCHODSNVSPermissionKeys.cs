using Serenity.Extensibility;
using System.ComponentModel;

namespace DAP.PCHODSNVS
{
    [NestedPermissionKeys]
    [DisplayName("PCHODSNVS")]
    public class PermissionKeys
    {
        [DisplayName("Finance")]
        public class Finance
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "PCHODSNVS:Finance:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "PCHODSNVS:Finance:Modify";
            public const string View = "PCHODSNVS:Finance:View";
        }

        [Description("[General]")]
        public const string General = "PCHODSNVS:General";

        [Description("Finance_100")]
        public const string Finance100 = "PCHODSNVS:Finance100";

        [Description("Finance_110")]
        public const string Finance110 = "PCHODSNVS:Finance110";

        [DisplayName("Page")]
        public class PagePermission
        {
            public const string KeyAcctTarget = "PCHODSNVS:Page:KeyAcctTarget";
            public const string GSADistributionList = "PCHODSNVS:Page:GSADistributionList";
            public const string ConsortiumExceptionList = "PCHODSNVS:Page:ConsortiumExceptionList";
            public const string NTRIntlDatelineCruises = "PCHODSNVS:Page:NTRIntlDatelineCruises";
            public const string NTRDR010Comment = "PCHODSNVS:Page:NTRDR010Comment";
            public const string NTRForecast = "PCHODSNVS:Page:NTRForecast";
            public const string NTRBudgetByChannel = "PCHODSNVS:Page:NTRBudgetByChannel";
            public const string NTRBudget = "PCHODSNVS:Page:NTRBudget";
            public const string NTRActuals = "PCHODSNVS:Page:NTRActuals";

        }

    }

}
