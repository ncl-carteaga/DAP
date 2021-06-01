
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.GsaDistributionList")]
    [BasedOnRow(typeof(Entities.GsaDistributionListRow), CheckNames = true)]
    public class GsaDistributionListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GsaDistributionListTk { get; set; }
        [EditLink]
        public String CompanyCd { get; set; }
        [EditLink]
        public String AgencyCd { get; set; }
        public String AccountName { get; set; }
        public String ContactName { get; set; }
        public String Email { get; set; }
        public DateTime LoadDt { get; set; }
    }
}