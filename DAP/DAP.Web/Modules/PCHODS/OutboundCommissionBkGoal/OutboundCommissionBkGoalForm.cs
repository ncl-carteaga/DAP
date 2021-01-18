
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.OutboundCommissionBkGoal")]
    [BasedOnRow(typeof(Entities.OutboundCommissionBkGoalRow), CheckNames = true)]
    public class OutboundCommissionBkGoalForm
    {
        public Int32 CompanyCd { get; set; }
        public DateTime CommissionMonth { get; set; }
        public Int32 NumOfBkGoal { get; set; }
        public DateTime LoadDt { get; set; }
    }
}