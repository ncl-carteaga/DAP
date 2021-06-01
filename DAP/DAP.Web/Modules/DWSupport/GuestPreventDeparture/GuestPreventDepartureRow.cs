
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[GUEST_PREVENT_DEPARTURE]")]
    [DisplayName("Guest Prevent Departure"), InstanceName("Guest Prevent Departure")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    public sealed class GuestPreventDepartureRow : Row, IIdRow, INameRow
    {
        [DisplayName("Guest Prevent Departure Key"), Column("GUEST_PREVENT_DEPARTURE_KEY"), Identity]
        public Int64? GuestPreventDepartureKey
        {
            get { return Fields.GuestPreventDepartureKey[this]; }
            set { Fields.GuestPreventDepartureKey[this] = value; }
        }

        [DisplayName("Guest First Nam"), Column("GUEST_FIRST_NAM"), Size(50), NotNull, QuickSearch]
        public String GuestFirstNam
        {
            get { return Fields.GuestFirstNam[this]; }
            set { Fields.GuestFirstNam[this] = value; }
        }

        [DisplayName("Guest Last Nam"), Column("GUEST_LAST_NAM"), Size(50), NotNull, QuickSearch]
        public String GuestLastNam
        {
            get { return Fields.GuestLastNam[this]; }
            set { Fields.GuestLastNam[this] = value; }
        }

        [DisplayName("Name Type Desc"), Column("NAME_TYPE_DESC"), Size(25), NotNull]
        public String NameTypeDesc
        {
            get { return Fields.NameTypeDesc[this]; }
            set { Fields.NameTypeDesc[this] = value; }
        }

        [DisplayName("From Report Nbr"), Column("FROM_REPORT_NBR"), NotNull, DefaultValue(0), Visible(false)]
        public Int32? FromReportNbr
        {
            get { return Fields.FromReportNbr[this]; }
            set { Fields.FromReportNbr[this] = value; }
        }

        [DisplayName("Internal External Cd"), Column("INTERNAL_EXTERNAL_CD"), Size(1), NotNull]
        public String InternalExternalCd
        {
            get { return Fields.InternalExternalCd[this]; }
            set { Fields.InternalExternalCd[this] = value; }
        }

        [DisplayName("Type Cd"), Column("TYPE_CD"), Size(50), LookupEditor(typeof(Lookups.TypeLookup))]
        public String TypeCd
        {
            get { return Fields.TypeCd[this]; }
            set { Fields.TypeCd[this] = value; }
        }

        [DisplayName("Sirs Nbr Txt"), Column("SIRS_NBR_TXT"), Size(15)]
        public String SirsNbrTxt
        {
            get { return Fields.SirsNbrTxt[this]; }
            set { Fields.SirsNbrTxt[this] = value; }
        }

        [DisplayName("Incident Reported Dat"), Column("INCIDENT_REPORTED_DAT")]
        public DateTime? IncidentReportedDat
        {
            get { return Fields.IncidentReportedDat[this]; }
            set { Fields.IncidentReportedDat[this] = value; }
        }

        [DisplayName("Boarding Denial Reason Desc"), Column("BOARDING_DENIAL_REASON_DESC"), Size(255), QuickFilter]
        public String BoardingDenialReasonDesc
        {
            get { return Fields.BoardingDenialReasonDesc[this]; }
            set { Fields.BoardingDenialReasonDesc[this] = value; }
        }

        [DisplayName("Casino Incident Nbr Txt"), Column("CASINO_INCIDENT_NBR_TXT"), Size(50)]
        public String CasinoIncidentNbrTxt
        {
            get { return Fields.CasinoIncidentNbrTxt[this]; }
            set { Fields.CasinoIncidentNbrTxt[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), Updatable(false), Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50), Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GuestPreventDepartureKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GuestFirstNam; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GuestPreventDepartureRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field GuestPreventDepartureKey;
            public StringField GuestFirstNam;
            public StringField GuestLastNam;
            public StringField NameTypeDesc;
            public Int32Field FromReportNbr;
            public StringField InternalExternalCd;
            public StringField TypeCd;
            public StringField SirsNbrTxt;
            public DateTimeField IncidentReportedDat;
            public StringField BoardingDenialReasonDesc;
            public StringField CasinoIncidentNbrTxt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}
