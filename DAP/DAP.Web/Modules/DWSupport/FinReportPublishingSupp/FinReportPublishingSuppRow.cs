
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[FIN_REPORT_PUBLISHING_SUPP]")]
    [DisplayName("Financial Report Publishing"), InstanceName("Fin Report Publishing Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class FinReportPublishingSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Fin Report Publishing Sur Key"), Column("FIN_REPORT_PUBLISHING_SUR_KEY"), Identity, Visible(false)]
        public Int32? FinReportPublishingSurKey
        {
            get { return Fields.FinReportPublishingSurKey[this]; }
            set { Fields.FinReportPublishingSurKey[this] = value; }
        }

        [DisplayName("On Hold"), Column("ON_HOLD"), NotNull]
        public Boolean? OnHold
        {
            get { return Fields.OnHold[this]; }
            set { Fields.OnHold[this] = value; }
        }

        [DisplayName("Report Name"), Column("REPORT_NAME"), Size(250), QuickSearch, Updatable(false)]
        public String ReportName
        {
            get { return Fields.ReportName[this]; }
            set { Fields.ReportName[this] = value; }
        }

        [DisplayName("Created Date"), Column("CREATED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Date"), Column("MODIFIED_TS"), Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Modified By"), Column("MODIFIED_BY_NAM"), Size(50), Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.FinReportPublishingSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReportName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinReportPublishingSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FinReportPublishingSurKey;
            public BooleanField OnHold;
            public StringField ReportName;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;

        }
    }
}
