﻿
namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[Outbound_Commission_Hist_br]")]
    [DisplayName("Commission Tiers BR"), InstanceName("Outbound Commission Hist Br")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Outbound.View)]
    [ModifyPermission(PermissionKeys.Outbound.Modify)]
    [DeletePermission(PermissionKeys.Outbound.Delete)]
    [LeftJoin("c", "Outbound_Company", "c.[Company_Cd] = T0.[Company_CD]")]
    [DataAuditLog]
    public sealed class OutboundCommissionHistBrRow : Row, IIdRow, INameRow
    {
        [DisplayName("Commission Id"), Column("Commission_ID"), Size(3), NotNull, QuickSearch, Visible(false)]
        public String CommissionId
        {
            get { return Fields.CommissionId[this]; }
            set { Fields.CommissionId[this] = value; }
        }

        [DisplayName("Company Cd"), Column("Company_cd"), Size(3)]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Low Num Bookings"), Column("Low_Num_Bookings"), Size(18), Scale(2)]
        public Decimal? LowNumBookings
        {
            get { return Fields.LowNumBookings[this]; }
            set { Fields.LowNumBookings[this] = value; }
        }

        [DisplayName("High Num Bookings"), Column("High_Num_Bookings"), Size(18), Scale(2)]
        public Decimal? HighNumBookings
        {
            get { return Fields.HighNumBookings[this]; }
            set { Fields.HighNumBookings[this] = value; }
        }

        [DisplayName("Commission Rate"), Column("Commission_Rate"), Size(18), Scale(4)]
        public Decimal? CommissionRate
        {
            get { return Fields.CommissionRate[this]; }
            set { Fields.CommissionRate[this] = value; }
        }

        [DisplayName("Active Dt"), Column("Active_dt")]
        public DateTime? ActiveDt
        {
            get { return Fields.ActiveDt[this]; }
            set { Fields.ActiveDt[this] = value; }
        }

        [DisplayName("Inactive Dt"), Column("Inactive_dt")]
        public DateTime? InactiveDt
        {
            get { return Fields.InactiveDt[this]; }
            set { Fields.InactiveDt[this] = value; }
        }

        [DisplayName("Commission Hist Br Id"), Identity, Visible(false)]
        public Int32? CommissionHistBrId
        {
            get { return Fields.CommissionHistBrId[this]; }
            set { Fields.CommissionHistBrId[this] = value; }
        }

        [Expression("c.[Company_nm]")]
        public string CompanyName
        {
            get { return Fields.CompanyName[this]; }

        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CommissionHistBrId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CommissionId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutboundCommissionHistBrRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CommissionId;
            public StringField CompanyCd;
            public DecimalField LowNumBookings;
            public DecimalField HighNumBookings;
            public DecimalField CommissionRate;
            public DateTimeField ActiveDt;
            public DateTimeField InactiveDt;
            public Int32Field CommissionHistBrId;

            public StringField CompanyName;
        }
    }
}
