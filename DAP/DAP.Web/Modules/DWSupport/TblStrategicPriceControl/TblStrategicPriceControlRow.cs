
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[TBL_STRATEGIC_PRICE_CONTROL]")]
    [DisplayName("Tbl Strategic Price Control"), InstanceName("Tbl Strategic Price Control")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class TblStrategicPriceControlRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("Strategic_Price_Control_Id"), Identity, Visible(false)]
        public Int64? StrategicPriceControlId
        {
            get { return Fields.StrategicPriceControlId[this]; }
            set { Fields.StrategicPriceControlId[this] = value; }
        }


        [DisplayName("Sail Id"), Column("SAIL_ID"), Updatable(false)]
        public Int64? SailId
        {
            get { return Fields.SailId[this]; }
            set { Fields.SailId[this] = value; }
        }

        [DisplayName("Category Cd"), Column("CATEGORY_CD"), Size(4), QuickSearch, Updatable(false)]
        public String CategoryCd
        {
            get { return Fields.CategoryCd[this]; }
            set { Fields.CategoryCd[this] = value; }
        }

        [DisplayName("Effective From Dat"), Column("EFFECTIVE_FROM_DAT")]
        public DateTime? EffectiveFromDat
        {
            get { return Fields.EffectiveFromDat[this]; }
            set { Fields.EffectiveFromDat[this] = value; }
        }

        [DisplayName("Effective To Dat"), Column("EFFECTIVE_TO_DAT")]
        public DateTime? EffectiveToDat
        {
            get { return Fields.EffectiveToDat[this]; }
            set { Fields.EffectiveToDat[this] = value; }
        }

        [DisplayName("Disc Pct"), Column("DISC_PCT")]
        public Int32? DiscPct
        {
            get { return Fields.DiscPct[this]; }
            set { Fields.DiscPct[this] = value; }
        }

        [DisplayName("Created Dat"), Column("CREATED_DAT"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedDat
        {
            get { return Fields.CreatedDat[this]; }
            set { Fields.CreatedDat[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(100), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Dat"), Column("MODIFIED_DAT"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? ModifiedDat
        {
            get { return Fields.ModifiedDat[this]; }
            set { Fields.ModifiedDat[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(100), NotNull, Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StrategicPriceControlId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblStrategicPriceControlRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field SailId;
            public StringField CategoryCd;
            public DateTimeField EffectiveFromDat;
            public DateTimeField EffectiveToDat;
            public Int32Field DiscPct;
            public DateTimeField CreatedDat;
            public StringField CreatedByNam;
            public DateTimeField ModifiedDat;
            public StringField ModifiedByNam;

            public Int64Field StrategicPriceControlId;
        }
    }
}
