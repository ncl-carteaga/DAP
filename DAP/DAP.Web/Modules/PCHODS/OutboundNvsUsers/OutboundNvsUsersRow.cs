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

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[Outbound_NVS_Users]")]
    [DisplayName("Outbound Nvs Users"), InstanceName("Outbound Nvs Users")]
    [ReadPermission(PermissionKeys.Outbound.View)]
    [ModifyPermission(PermissionKeys.Outbound.Modify)]
    [DeletePermission(PermissionKeys.Outbound.Delete)]
    [LookupScript("NCLHDSAR.OutboundNvsUsers")]
    public sealed class OutboundNvsUsersRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Id"), Column("user_id"), Size(10), NotNull, QuickSearch]
        public String UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("User First Name"), Column("user_first_name"), Size(15), NotNull,LookupInclude]
        public String UserFirstName
        {
            get { return Fields.UserFirstName[this]; }
            set { Fields.UserFirstName[this] = value; }
        }

        [DisplayName("User Last Name"), Column("user_last_name"), Size(15), NotNull,LookupInclude]
        public String UserLastName
        {
            get { return Fields.UserLastName[this]; }
            set { Fields.UserLastName[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull,LookupInclude]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Active Ind"), Column("active_ind"), Size(1), NotNull]
        public String ActiveInd
        {
            get { return Fields.ActiveInd[this]; }
            set { Fields.ActiveInd[this] = value; }
        }

        [DisplayName("Department Cd"), Column("department_cd"), Size(6), NotNull]
        public String DepartmentCd
        {
            get { return Fields.DepartmentCd[this]; }
            set { Fields.DepartmentCd[this] = value; }
        }

        [DisplayName("Department Desc"), Column("department_desc"), Size(30), NotNull, LookupInclude]
        public String DepartmentDesc
        {
            get { return Fields.DepartmentDesc[this]; }
            set { Fields.DepartmentDesc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutboundNvsUsersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField UserId;
            public StringField UserFirstName;
            public StringField UserLastName;
            public StringField CompanyCd;
            public StringField ActiveInd;
            public StringField DepartmentCd;
            public StringField DepartmentDesc;
        }
    }
}
