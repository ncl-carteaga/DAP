
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.NtrIntlDatelineCruises")]
    [BasedOnRow(typeof(Entities.NtrIntlDatelineCruisesRow), CheckNames = true)]
    public class NtrIntlDatelineCruisesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CruiseIntlTk { get; set; }
        [EditLink]
        public String CompanyCd { get; set; }
        public String CruiseSegmentCd { get; set; }
        public Int32 CruiseDaysQty { get; set; }
        public Int32 CruiseCalendarDaysQty { get; set; }
        public DateTime LoadDt { get; set; }
    }
}