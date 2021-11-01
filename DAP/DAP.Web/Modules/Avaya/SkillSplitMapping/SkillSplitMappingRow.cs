
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Skill_Split_Mapping]")]
    [DisplayName("Skill Split Mapping"), InstanceName("Skill Split Mapping")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [ModifyPermission(PermissionKeys.Avaya.Modify)]
    [DataAuditLog]
    public sealed class SkillSplitMappingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Skill Split Tk"), Column("Skill_Split_tk"), Identity, Visible(false)]
        public Int32? SkillSplitTk
        {
            get { return Fields.SkillSplitTk[this]; }
            set { Fields.SkillSplitTk[this] = value; }
        }

        [DisplayName("Cms No"), Column("CMS_No"), NotNull]
        public Int32? CmsNo
        {
            get { return Fields.CmsNo[this]; }
            set { Fields.CmsNo[this] = value; }
        }

        [DisplayName("Acd No"), Column("ACD_No"), NotNull]
        public Int32? AcdNo
        {
            get { return Fields.AcdNo[this]; }
            set { Fields.AcdNo[this] = value; }
        }

        [DisplayName("Split No"), Column("Split_No"), NotNull]
        public Int32? SplitNo
        {
            get { return Fields.SplitNo[this]; }
            set { Fields.SplitNo[this] = value; }
        }

        [DisplayName("Skill Name"), Column("Skill_Name"), Size(250), QuickSearch]
        public String SkillName
        {
            get { return Fields.SkillName[this]; }
            set { Fields.SkillName[this] = value; }
        }

        [DisplayName("Brand"), Size(10), ForeignKey("[avaya].[Brand]", "Brand"), LeftJoin("jBrand"), LookupEditor("Avaya.Brand")]
        public String Brand
        {
            get { return Fields.Brand[this]; }
            set { Fields.Brand[this] = value; }
        }

        [DisplayName("Status"), Size(50), ForeignKey("[avaya].[Status]", "StatusDesc"), LeftJoin("jStatus"), LookupEditor("Avaya.Status")]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Group Cd"), Column("Group_Cd"), Size(50), ForeignKey("[avaya].[Group]", "Group_Cd"), LeftJoin("jGroupCd"), LookupEditor("Avaya.Group")]
        public String GroupCd
        {
            get { return Fields.GroupCd[this]; }
            set { Fields.GroupCd[this] = value; }
        }

        [DisplayName("Region"), Size(250), ForeignKey("[avaya].[Region]", "Region"), LeftJoin("jRegion"), LookupEditor("Avaya.Region")]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Support Channel"), Column("Support_Channel"), Size(50), ForeignKey("[avaya].[Support_Channel]", "Support_Channel"), LeftJoin("jSupportChannel"), LookupEditor("Avaya.Support_Channel")]
        public String SupportChannel
        {
            get { return Fields.SupportChannel[this]; }
            set { Fields.SupportChannel[this] = value; }
        }

        [DisplayName("Department"), Size(250), ForeignKey("[avaya].[Department]", "Department"), LeftJoin("jDepartment"), LookupEditor("Avaya.Department")]
        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        [DisplayName("Call Type"), Column("Call_Type"), Size(50), ForeignKey("[avaya].[Call_Type]", "Call_Type"), LeftJoin("jCallType"), LookupEditor("Avaya.Call_Type")]
        public String CallType
        {
            get { return Fields.CallType[this]; }
            set { Fields.CallType[this] = value; }
        }

        [DisplayName("Brand Brand Tk"), Expression("jBrand.[Brand_tk]")]
        public Int32? BrandBrandTk
        {
            get { return Fields.BrandBrandTk[this]; }
            set { Fields.BrandBrandTk[this] = value; }
        }

        [DisplayName("Status Status Tk"), Expression("jStatus.[Status_tk]")]
        public Int32? StatusStatusTk
        {
            get { return Fields.StatusStatusTk[this]; }
            set { Fields.StatusStatusTk[this] = value; }
        }

        [DisplayName("Group Cd Tk"), Expression("jGroupCd.[Group_tk]")]
        public Int32? GroupCdTk
        {
            get { return Fields.GroupCdTk[this]; }
            set { Fields.GroupCdTk[this] = value; }
        }

        [DisplayName("Region Region Tk"), Expression("jRegion.[Region_tk]")]
        public Int32? RegionRegionTk
        {
            get { return Fields.RegionRegionTk[this]; }
            set { Fields.RegionRegionTk[this] = value; }
        }

        [DisplayName("Support Channel Supp Channel Tk"), Expression("jSupportChannel.[SuppChannel_tk]")]
        public Int32? SupportChannelSuppChannelTk
        {
            get { return Fields.SupportChannelSuppChannelTk[this]; }
            set { Fields.SupportChannelSuppChannelTk[this] = value; }
        }

        [DisplayName("Department Department Tk"), Expression("jDepartment.[Department_tk]")]
        public Int32? DepartmentDepartmentTk
        {
            get { return Fields.DepartmentDepartmentTk[this]; }
            set { Fields.DepartmentDepartmentTk[this] = value; }
        }

        [DisplayName("Call Type Type Tk"), Expression("jCallType.[Call_Type_tk]")]
        public Int32? CallTypeTypeTk
        {
            get { return Fields.CallTypeTypeTk[this]; }
            set { Fields.CallTypeTypeTk[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SkillSplitTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SkillName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SkillSplitMappingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SkillSplitTk;
            public Int32Field CmsNo;
            public Int32Field AcdNo;
            public Int32Field SplitNo;
            public StringField SkillName;
            public StringField Brand;
            public StringField Status;
            public StringField GroupCd;
            public StringField Region;
            public StringField SupportChannel;
            public StringField Department;
            public StringField CallType;

            public Int32Field BrandBrandTk;

            public Int32Field StatusStatusTk;

            public Int32Field GroupCdTk;

            public Int32Field RegionRegionTk;

            public Int32Field SupportChannelSuppChannelTk;

            public Int32Field DepartmentDepartmentTk;

            public Int32Field CallTypeTypeTk;
        }
    }
}
