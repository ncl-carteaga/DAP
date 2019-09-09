
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.NtrIntlDatelineCruises")]
    [BasedOnRow(typeof(Entities.NtrIntlDatelineCruisesRow), CheckNames = true)]
    public class NtrIntlDatelineCruisesForm
    {
        public String CompanyCd { get; set; }
        public String CruiseSegmentCd { get; set; }
        public Int32 CruiseDaysQty { get; set; }
        public Int32 CruiseCalendarDaysQty { get; set; }
        public DateTime LoadDt { get; set; }
    }
}