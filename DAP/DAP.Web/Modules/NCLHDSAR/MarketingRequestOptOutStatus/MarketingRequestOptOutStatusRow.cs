﻿
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[MarketingRequestOptOutStatus]")]
    [DisplayName("Marketing Request Opt Out Status"), InstanceName("Marketing Request Opt Out Status")]
    [ReadPermission(PermissionKeys.Request.View)]
    public sealed class MarketingRequestOptOutStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Description"), Size(3), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MarketingRequestOptOutStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field Id;
            public StringField Description;
        }
    }
}