
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.NtrRptComment")]
    [BasedOnRow(typeof(Entities.NtrRptCommentRow), CheckNames = true)]
    public class NtrRptCommentForm
    {
        public String CompanyCd { get; set; }
        public DateTime ReportDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Comment { get; set; }
        public String AccountPeriodNum { get; set; }
    }
}