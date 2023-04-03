
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.StlyDates")]
    [BasedOnRow(typeof(Entities.StlyDatesRow), CheckNames = true)]
    public class StlyDatesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Stlyid { get; set; }
        public DateTime ReportDt { get; set; }
        public DateTime DataAsOfDt { get; set; }
        public DateTime StlyDt { get; set; }
        [EditLink]
        public String DayOfWeek { get; set; }
        public Int32 WeekNum { get; set; }
        public Boolean SystemIssuesInd { get; set; }
        public Boolean HolidayInd { get; set; }
        public Boolean DisasterInd { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        public DateTime LoadDt { get; set; }
    }
}