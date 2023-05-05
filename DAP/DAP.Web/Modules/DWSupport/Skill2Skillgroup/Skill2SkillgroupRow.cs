
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[gamification].[SKILL2SKILLGROUP]")]
    [DisplayName("Skill To Skill Group"), InstanceName("Skill To Skill Group")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class Skill2SkillgroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Skill2 Skillgroup Sk"), Column("SKILL2SKILLGROUP_SK"), Identity, Visible(false)]
        public Int32? Skill2SkillgroupSk
        {
            get { return Fields.Skill2SkillgroupSk[this]; }
            set { Fields.Skill2SkillgroupSk[this] = value; }
        }

        [DisplayName("Split Group Id"), Column("SPLIT_GROUP_ID"), NotNull]
        public Int32? SplitGroupId
        {
            get { return Fields.SplitGroupId[this]; }
            set { Fields.SplitGroupId[this] = value; }
        }

        [DisplayName("Split Group Name"), Column("SPLIT_GROUP_NAME"), Size(250), NotNull, QuickSearch]
        public String SplitGroupName
        {
            get { return Fields.SplitGroupName[this]; }
            set { Fields.SplitGroupName[this] = value; }
        }

        [DisplayName("Skill"), Column("SKILL"), NotNull]
        public Int32? Skill
        {
            get { return Fields.Skill[this]; }
            set { Fields.Skill[this] = value; }
        }

        [DisplayName("Acd Source"), Column("ACD_SOURCE"), Size(250)]
        public String AcdSource
        {
            get { return Fields.AcdSource[this]; }
            set { Fields.AcdSource[this] = value; }
        }

        [DisplayName("Acd Level 1"), Column("ACD_LEVEL_1"), Size(250)]
        public String AcdLevel1
        {
            get { return Fields.AcdLevel1[this]; }
            set { Fields.AcdLevel1[this] = value; }
        }

        [DisplayName("Acd Level 2"), Column("ACD_LEVEL_2"), Size(250)]
        public String AcdLevel2
        {
            get { return Fields.AcdLevel2[this]; }
            set { Fields.AcdLevel2[this] = value; }
        }

        [DisplayName("Active"), Column("ACTIVE"), Size(1)]
        public String Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Effective Start"), Column("EFFECTIVE_START")]
        public DateTime? EffectiveStart
        {
            get { return Fields.EffectiveStart[this]; }
            set { Fields.EffectiveStart[this] = value; }
        }

        [DisplayName("Effective End"), Column("EFFECTIVE_END")]
        public DateTime? EffectiveEnd
        {
            get { return Fields.EffectiveEnd[this]; }
            set { Fields.EffectiveEnd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Skill2SkillgroupSk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SplitGroupName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public Skill2SkillgroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Skill2SkillgroupSk;
            public Int32Field SplitGroupId;
            public StringField SplitGroupName;
            public Int32Field Skill;
            public StringField AcdSource;
            public StringField AcdLevel1;
            public StringField AcdLevel2;
            public StringField Active;
            public DateTimeField EffectiveStart;
            public DateTimeField EffectiveEnd;
        }
    }
}
