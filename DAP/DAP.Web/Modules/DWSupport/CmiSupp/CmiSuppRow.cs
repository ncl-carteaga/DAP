
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CMI_SUPP]")]
    [DisplayName("Cmi Supp"), InstanceName("Cmi Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CmiSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Sail Year"), Column("SAIL_YEAR")]
        public Int32? SailYear
        {
            get { return Fields.SailYear[this]; }
            set { Fields.SailYear[this] = value; }
        }

        [DisplayName("Effective Start Date"), Column("EFFECTIVE_START_DATE")]
        public DateTime? EffectiveStartDate
        {
            get { return Fields.EffectiveStartDate[this]; }
            set { Fields.EffectiveStartDate[this] = value; }
        }

        [DisplayName("Effective End Date"), Column("EFFECTIVE_END_DATE")]
        public DateTime? EffectiveEndDate
        {
            get { return Fields.EffectiveEndDate[this]; }
            set { Fields.EffectiveEndDate[this] = value; }
        }

        [DisplayName("Voyage CD"), Column("VOYAGE_CD"), QuickSearch]
        public String VoyageCD
        {
            get { return Fields.VoyageCD[this]; }
            set { Fields.VoyageCD[this] = value; }
        }

        [DisplayName("Ship CD"), Column("SHIP_CD"), LookupEditor(typeof(ShipRow))]
        public String ShipCD
        {
            get { return Fields.ShipCD[this]; }
            set { Fields.ShipCD[this] = value; }
        }

        [DisplayName("Voyage Start Date"), Column("VOYAGE_START_DATE")]
        public DateTime? VoyageStartDate
        {
            get { return Fields.VoyageStartDate[this]; }
            set { Fields.VoyageStartDate[this] = value; }
        }

        [DisplayName("Voyage End Date"), Column("VOYAGE_END_DATE")]
        public DateTime? VoyageEndDate
        {
            get { return Fields.VoyageEndDate[this]; }
            set { Fields.VoyageEndDate[this] = value; }
        }

        [DisplayName("Agency ID"), Column("AGENCY_ID")]
        public Int32? AgencyID
        {
            get { return Fields.AgencyID[this]; }
            set { Fields.AgencyID[this] = value; }
        }

        [DisplayName("Market"), Column("MARKET")]
        public String Market
        {
            get { return Fields.Market[this]; }
            set { Fields.Market[this] = value; }
        }

        [DisplayName("CMI Type CD"), Column("CMI_TYPE_CD")]
        public String CmiTypeCd
        {
            get { return Fields.CmiTypeCd[this]; }
            set { Fields.CmiTypeCd[this] = value; }
        }

        [DisplayName("Charter Flag CD"), Column("CHARTER_FLAG_CD")]
        public String CharterFlagCd
        {
            get { return Fields.CharterFlagCd[this]; }
            set { Fields.CharterFlagCd[this] = value; }
        }

        [DisplayName("NTR"), Column("NTR")]
        public Decimal? Ntr
        {
            get { return Fields.Ntr[this]; }
            set { Fields.Ntr[this] = value; }
        }

        [DisplayName("Pax Days"), Column("PAX_DAYS")]
        public Int32? PaxDays
        {
            get { return Fields.PaxDays[this]; }
            set { Fields.PaxDays[this] = value; }
        }

        [DisplayName("Bk Cabin Days"), Column("BK_CABIN_DAYS")]
        public Int32? BkCabinDays
        {
            get { return Fields.BkCabinDays[this]; }
            set { Fields.BkCabinDays[this] = value; }
        }

        [DisplayName("Capacity Days"), Column("CAPACITY_DAYS")]
        public Int32? CapacityDays
        {
            get { return Fields.CapacityDays[this]; }
            set { Fields.CapacityDays[this] = value; }
        }

        [DisplayName("Cabin Capacity Days"), Column("CABIN_CAPACITY_DAYS")]
        public Int32? CabinCapacityDays
        {
            get { return Fields.CabinCapacityDays[this]; }
            set { Fields.CabinCapacityDays[this] = value; }
        }

        [DisplayName("Created By Name"), Column("CREATED_BY_NAM")]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Name"), Column("MODIFIED_BY_NAM")]
        public String ModifiedByName
        {
            get { return Fields.ModifiedByName[this]; }
            set { Fields.ModifiedByName[this] = value; }
        }

        [DisplayName("Modified TS"), Column("MODIFIED_TS")]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Created TS"), Column("CREATED_TS")]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CmiTypeCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CmiSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SailYear;
            public DateTimeField EffectiveStartDate;
            public DateTimeField EffectiveEndDate;
            public StringField VoyageCD;
            public StringField ShipCD;
            public DateTimeField VoyageStartDate;
            public DateTimeField VoyageEndDate;
            public Int32Field AgencyID;
            public StringField Market;
            public StringField CmiTypeCd;
            public StringField CharterFlagCd;
            public DecimalField Ntr;
            public Int32Field PaxDays;
            public Int32Field BkCabinDays;
            public Int32Field CapacityDays;
            public Int32Field CabinCapacityDays;
            public StringField CreatedByNam;
            public StringField ModifiedByName;
            public DateTimeField ModifiedTs;
            public DateTimeField CreatedTs;
        }
    }
}
