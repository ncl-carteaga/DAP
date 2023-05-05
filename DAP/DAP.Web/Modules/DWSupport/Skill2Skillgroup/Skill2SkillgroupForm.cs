
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.Skill2Skillgroup")]
    [BasedOnRow(typeof(Entities.Skill2SkillgroupRow), CheckNames = true)]
    public class Skill2SkillgroupForm
    {
        public Int32 SplitGroupId { get; set; }
        public String SplitGroupName { get; set; }
        public Int32 Skill { get; set; }
        public String AcdSource { get; set; }
        public String AcdLevel1 { get; set; }
        public String AcdLevel2 { get; set; }
        public String Active { get; set; }
        public DateTime EffectiveStart { get; set; }
        public DateTime EffectiveEnd { get; set; }
    }
}