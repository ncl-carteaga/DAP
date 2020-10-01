
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.NtrPastMonthsActual")]
    [BasedOnRow(typeof(Entities.NtrPastMonthsActualRow), CheckNames = true)]
    public class NtrPastMonthsActualForm
    {
        public String CompanyCd { get; set; }
        public String YearMonth { get; set; }
        public Double NtrFinal { get; set; }
        public Double CxRev { get; set; }
        public Double PdsFinalTotal { get; set; }
        public Double ApcdFinal { get; set; }
        public Decimal BookedNumOfCabins { get; set; }
        public Decimal AvailableNumOfCabins { get; set; }
        public Decimal StlyBookedNumOfCabins { get; set; }
        public Decimal StlyAvailableNumOfCabins { get; set; }
    }
}