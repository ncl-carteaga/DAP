
namespace DAP.PCHODS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.OutboundCommissionBkGoal")]
    [BasedOnRow(typeof(Entities.OutboundCommissionBkGoalRow), CheckNames = true)]
    public class OutboundCommissionBkGoalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommissionTk { get; set; }
        public String CompanyName { get; set; }
        public DateTime CommissionMonth { get; set; }
        public Int32 NumOfBkGoal { get; set; }
        public DateTime LoadDt { get; set; }
    }
}