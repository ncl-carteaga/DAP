
namespace DAP.Avaya.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Avaya.SkillSplitMapping")]
    [BasedOnRow(typeof(Entities.SkillSplitMappingRow), CheckNames = true)]
    public class SkillSplitMappingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SkillSplitTk { get; set; }
        [EditLink]
        public Int32 CmsNo { get; set; }
        [EditLink]
        public Int32 AcdNo { get; set; }
        [EditLink]
        public Int32 SplitNo { get; set; }
        [EditLink]
        public String SkillName { get; set; }
        public String Brand { get; set; }
        public String Status { get; set; }
        public String GroupCd { get; set; }
        public String Region { get; set; }
        public String SupportChannel { get; set; }
        public String Department { get; set; }
        public String CallType { get; set; }
    }
}