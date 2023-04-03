
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[nvs].[Region]")]
    [DisplayName("Region"), InstanceName("Region")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class RegionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Region Id"), Column("RegionID"), Identity]
        public Int32? RegionId
        {
            get { return Fields.RegionId[this]; }
            set { Fields.RegionId[this] = value; }
        }

        [DisplayName("Region Cd"), Column("Region_CD"), Size(2), NotNull, QuickSearch]
        public String RegionCd
        {
            get { return Fields.RegionCd[this]; }
            set { Fields.RegionCd[this] = value; }
        }

        [DisplayName("Region Type"), Column("Region_Type"), Size(50)]
        public String RegionType
        {
            get { return Fields.RegionType[this]; }
            set { Fields.RegionType[this] = value; }
        }

        [DisplayName("Company Cd"), Column("Company_CD"), Size(3), NotNull]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Effective From"), Column("Effective_From"), NotNull]
        public DateTime? EffectiveFrom
        {
            get { return Fields.EffectiveFrom[this]; }
            set { Fields.EffectiveFrom[this] = value; }
        }

        [DisplayName("Effective To"), Column("Effective_To"), DefaultValue("12/30/9999")]
        public DateTime? EffectiveTo
        {
            get { return Fields.EffectiveTo[this]; }
            set { Fields.EffectiveTo[this] = value; }
        }

        [DisplayName("Load Dt"), Column("Load_Dt"), NotNull]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RegionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RegionCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RegionId;
            public StringField RegionCd;
            public StringField RegionType;
            public StringField CompanyCd;
            public DateTimeField EffectiveFrom;
            public DateTimeField EffectiveTo;
            public DateTimeField LoadDt;
        }
    }
}
