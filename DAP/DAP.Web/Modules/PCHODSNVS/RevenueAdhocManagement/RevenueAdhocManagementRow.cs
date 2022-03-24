
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHODSNVS"), TableName("[dbo].[revenue_adhoc_management]")]
    [DisplayName("Revenue Adhoc Management"), InstanceName("Revenue Adhoc Management")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class RevenueAdhocManagementRow : Row, IIdRow, INameRow
    {
        [DisplayName("Key"), Column("key"), Identity]
        public Int32? Key
        {
            get { return Fields.Key[this]; }
            set { Fields.Key[this] = value; }
        }

        [DisplayName("Cube Type"), Column("database_id"), Size(50), QuickSearch]
        public String DatabaseId
        {
            get { return Fields.DatabaseId[this]; }
            set { Fields.DatabaseId[this] = value; }
        }

        [DisplayName("Cube"), Column("cube_id"), Size(50), NotNull]
        public String CubeId
        {
            get { return Fields.CubeId[this]; }
            set { Fields.CubeId[this] = value; }
        }


        [DisplayName("Adhoc Date"), Column("adhoc_date"), NotNull]
        public DateTime? AdhocDate
        {
            get { return Fields.AdhocDate[this]; }
            set { Fields.AdhocDate[this] = value; }
        }

        [DisplayName("Adhoc Date Tk"), Column("adhoc_date_tk"), NotNull, Updatable(false)]
        public Int32? AdhocDateTk
        {
            get { return Fields.AdhocDateTk[this]; }
            set { Fields.AdhocDateTk[this] = value; }
        }

        [DisplayName("Sql Job Name"), Column("Sql_Job_Name"), NotNull]
        public String SqlJobName
        {
            get { return Fields.SqlJobName[this]; }
            set { Fields.SqlJobName[this] = value; }
        }

        [DisplayName("Last Updated By"), Column("Last_Updated_By") ]
        public String LastUpdatedBy
        {
            get { return Fields.LastUpdatedBy[this]; }
            set { Fields.LastUpdatedBy[this] = value; }
        }

        [DisplayName("Last Processed Date Time"), Column("last_processed_date_time"), Updatable(false), Insertable(false), DisplayFormat("g")]
        public DateTime? LastProcessedDateTime
        {
            get { return Fields.LastProcessedDateTime[this]; }
            set { Fields.LastProcessedDateTime[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull, SelectPCHCompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Key; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DatabaseId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RevenueAdhocManagementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Key;
            public StringField DatabaseId;
            public StringField CubeId;

            public DateTimeField AdhocDate;
            public Int32Field AdhocDateTk;
            public StringField LastUpdatedBy;
            public StringField SqlJobName;
            public DateTimeField LastProcessedDateTime;
            public StringField CompanyCd;
        }
    }
}
