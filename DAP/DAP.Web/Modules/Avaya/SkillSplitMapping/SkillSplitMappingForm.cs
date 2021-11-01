
namespace DAP.Avaya.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Avaya.SkillSplitMapping")]
    [BasedOnRow(typeof(Entities.SkillSplitMappingRow), CheckNames = true)]
    public class SkillSplitMappingForm
    {
        public Int32 CmsNo { get; set; }
        public Int32 AcdNo { get; set; }
        public Int32 SplitNo { get; set; }
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