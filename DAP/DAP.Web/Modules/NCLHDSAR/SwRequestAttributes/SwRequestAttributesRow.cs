
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[SWRequest_Attributes]")]
    [DisplayName("Sw Request Attributes"), InstanceName("Sw Request Attributes")]
    [ReadPermission("NCLHDSAR:Request:View|NCLHDSAR:SwRequestAttribute:View")]
    [ModifyPermission("NCLHDSAR:Request:Modify|NCLHDSAR:SwRequestAttribute:Modify")]
    [DeletePermission("NCLHDSAR:Request:Delete|NCLHDSAR:SwRequestAttribute:Delete")]
    [DataAuditLog]
    public sealed class SwRequestAttributesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Size(15), PrimaryKey, QuickSearch, Updatable(false)]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }


        //[DisplayName("System Master Id"), Column("System_Master_ID"), PrimaryKey]
        //public Int32? SystemMasterId
        //{
        //    get { return Fields.SystemMasterId[this]; }
        //    set { Fields.SystemMasterId[this] = value; }
        //}

        [DisplayName("System"), Column("System_Master_ID"), ForeignKey("[dbo].[System_Master]", "Id"), LeftJoin("jSystemMaster"), SystemMasterEditor]
        public Int32? SystemMasterId
        {
            get { return Fields.SystemMasterId[this]; }
            set { Fields.SystemMasterId[this] = value; }
        }


        [DisplayName("Request Value"), Column("Request_Value"), Size(255), PrimaryKey]
        public String RequestValue
        {
            get { return Fields.RequestValue[this]; }
            set { Fields.RequestValue[this] = value; }
        }

        [DisplayName("Resolved Dt"), Column("Resolved_dt")]
        public DateTime? ResolvedDt
        {
            get { return Fields.ResolvedDt[this]; }
            set { Fields.ResolvedDt[this] = value; }
        }

        [DisplayName("Extract Dt"), Column("Extract_dt"), Visible(false)]
        public DateTime? ExtractDt
        {
            get { return Fields.ExtractDt[this]; }
            set { Fields.ExtractDt[this] = value; }
        }


        [DisplayName("Request Attribute Id"), Column("RequestAttributeID"), Identity, Visible(false)]
        public Int32? RequestAttributeId
        {
            get { return Fields.RequestAttributeId[this]; }
            set { Fields.RequestAttributeId[this] = value; }
        }
        

        [DisplayName("Last Updated"), Visible(false)]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("System Desc")]
        [Expression("CONCAT(jSystemMaster.[System_name], CONCAT(' (', jSystemMaster.[Id], ' - ', jSystemMaster.[System_Table],  ')'))")]
        public String SystemMasterSystemDesc
        {
            get { return Fields.SystemMasterSystemDesc[this]; }
            set { Fields.SystemMasterSystemDesc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RequestAttributeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RequestValue; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SwRequestAttributesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SystemMasterId;
            public StringField RequestValue;
            public DateTimeField ResolvedDt;
            public DateTimeField ExtractDt;
            
            public Int32Field RequestAttributeId;
            
            public DateTimeField LastUpdated;

            public StringField SystemMasterSystemDesc;
        }
    }
}
