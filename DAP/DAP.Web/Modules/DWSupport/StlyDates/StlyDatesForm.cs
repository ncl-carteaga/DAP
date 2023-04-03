
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.StlyDates")]
    [BasedOnRow(typeof(Entities.StlyDatesRow), CheckNames = true)]
    public class StlyDatesForm
    {
        public DateTime ReportDt { get; set; }
        public DateTime DataAsOfDt { get; set; }
        public DateTime StlyDt { get; set; }
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