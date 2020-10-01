
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.NtrPastMonthsActual")]
    [BasedOnRow(typeof(Entities.NtrPastMonthsActualRow), CheckNames = true)]
    public class NtrPastMonthsActualColumns
    {
        [EditLink]
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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PastmonthactualTk { get; set; }
    }
}