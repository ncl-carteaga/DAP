
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dbo].[ntr_past_months_actual]")]
    [DisplayName("Ntr Past Months Actual"), InstanceName("Ntr Past Months Actual")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class NtrPastMonthsActualRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Cd"), Column("company_cd"), Size(3), PrimaryKey, QuickSearch, DAP.PCHODS.CompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Year Month"), Column("year_month"), Size(255), PrimaryKey, SortOrder(1, descending: true)]
        public String YearMonth
        {
            get { return Fields.YearMonth[this]; }
            set { Fields.YearMonth[this] = value; }
        }

        [DisplayName("Ntr Final"), Column("ntr_final")]
        public Double? NtrFinal
        {
            get { return Fields.NtrFinal[this]; }
            set { Fields.NtrFinal[this] = value; }
        }

        [DisplayName("Cx Rev"), Column("cx_rev")]
        public Double? CxRev
        {
            get { return Fields.CxRev[this]; }
            set { Fields.CxRev[this] = value; }
        }

        [DisplayName("Pds Final Total"), Column("pds_final_total")]
        public Double? PdsFinalTotal
        {
            get { return Fields.PdsFinalTotal[this]; }
            set { Fields.PdsFinalTotal[this] = value; }
        }

        [DisplayName("Apcd Final"), Column("apcd_final")]
        public Double? ApcdFinal
        {
            get { return Fields.ApcdFinal[this]; }
            set { Fields.ApcdFinal[this] = value; }
        }

        [DisplayName("Booked Num Of Cabins"), Column("booked_num_of_cabins"), Size(12), Scale(4)]
        public Decimal? BookedNumOfCabins
        {
            get { return Fields.BookedNumOfCabins[this]; }
            set { Fields.BookedNumOfCabins[this] = value; }
        }

        [DisplayName("Available Num Of Cabins"), Column("available_num_of_cabins"), Size(12), Scale(4)]
        public Decimal? AvailableNumOfCabins
        {
            get { return Fields.AvailableNumOfCabins[this]; }
            set { Fields.AvailableNumOfCabins[this] = value; }
        }

        [DisplayName("Stly Booked Num Of Cabins"), Column("stly_booked_num_of_cabins"), Size(12), Scale(4)]
        public Decimal? StlyBookedNumOfCabins
        {
            get { return Fields.StlyBookedNumOfCabins[this]; }
            set { Fields.StlyBookedNumOfCabins[this] = value; }
        }

        [DisplayName("Stly Available Num Of Cabins"), Column("stly_available_num_of_cabins"), Size(12), Scale(4)]
        public Decimal? StlyAvailableNumOfCabins
        {
            get { return Fields.StlyAvailableNumOfCabins[this]; }
            set { Fields.StlyAvailableNumOfCabins[this] = value; }
        }

        [DisplayName("Pastmonthactual Tk"), Column("pastmonthactual_tk"), Identity, Visible(false)]
        public Int32? PastmonthactualTk
        {
            get { return Fields.PastmonthactualTk[this]; }
            set { Fields.PastmonthactualTk[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PastmonthactualTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NtrPastMonthsActualRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CompanyCd;
            public StringField YearMonth;
            public DoubleField NtrFinal;
            public DoubleField CxRev;
            public DoubleField PdsFinalTotal;
            public DoubleField ApcdFinal;
            public DecimalField BookedNumOfCabins;
            public DecimalField AvailableNumOfCabins;
            public DecimalField StlyBookedNumOfCabins;
            public DecimalField StlyAvailableNumOfCabins;
            public Int32Field PastmonthactualTk;
        }
    }
}
