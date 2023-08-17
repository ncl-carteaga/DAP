
namespace DAP.PCHDW.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHDW"), TableName("[dbo].[dim_company]")]
    [DisplayName("Dim Company"), InstanceName("Dim Company")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DimCompanyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Tk"), Column("company_tk"), NotNull]
        public Int32? CompanyTk
        {
            get { return Fields.CompanyTk[this]; }
            set { Fields.CompanyTk[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull, QuickSearch]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Company Nm"), Column("company_nm"), Size(30), NotNull]
        public String CompanyNm
        {
            get { return Fields.CompanyNm[this]; }
            set { Fields.CompanyNm[this] = value; }
        }

        [DisplayName("Outbound Report Ind"), Column("outbound_report_ind"), Size(1)]
        public String OutboundReportInd
        {
            get { return Fields.OutboundReportInd[this]; }
            set { Fields.OutboundReportInd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DimCompanyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CompanyTk;
            public StringField CompanyCd;
            public StringField CompanyNm;
            public StringField OutboundReportInd;
        }
    }
}
