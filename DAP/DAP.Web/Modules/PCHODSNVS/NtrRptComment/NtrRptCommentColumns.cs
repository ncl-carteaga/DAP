
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.NtrRptComment")]
    [BasedOnRow(typeof(Entities.NtrRptCommentRow), CheckNames = true)]
    public class NtrRptCommentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommentTk { get; set; }
        [EditLink]
        public String CompanyCd { get; set; }
        public DateTime ReportDate { get; set; }
        public String Comment { get; set; }
        public String AccountPeriodNum { get; set; }
    }
}