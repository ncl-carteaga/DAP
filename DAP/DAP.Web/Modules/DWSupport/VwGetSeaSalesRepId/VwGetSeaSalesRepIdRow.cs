
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[vw_GetSEASalesRepID]")]
    [DisplayName("Vw Get Sea Sales Rep Id"), InstanceName("Vw Get Sea Sales Rep Id")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [LookupScript("DWSupport.LoginName")]
    public sealed class VwGetSeaSalesRepIdRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Id"), Column("USER_ID"), Size(9), NotNull]
        public Decimal? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("User Login Name"), Column("USER_LOGIN_NAME"), Size(30), NotNull, QuickSearch, LookupInclude]
        public String UserLoginName
        {
            get { return Fields.UserLoginName[this]; }
            set { Fields.UserLoginName[this] = value; }
        }

        [DisplayName("User Full Name"), Column("USER_FULL_NAME"), Size(60), LookupInclude]
        public String UserFullName
        {
            get { return Fields.UserFullName[this]; }
            set { Fields.UserFullName[this] = value; }
        }

        [DisplayName("Comments"), Column("COMMENTS"), Size(255)]
        public String Comments
        {
            get { return Fields.Comments[this]; }
            set { Fields.Comments[this] = value; }
        }

        [DisplayName("Office Code"), Column("OFFICE_CODE"), Size(15), NotNull]
        public String OfficeCode
        {
            get { return Fields.OfficeCode[this]; }
            set { Fields.OfficeCode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserLoginName; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UserLoginName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VwGetSeaSalesRepIdRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public DecimalField UserId;
            public StringField UserLoginName;
            public StringField UserFullName;
            public StringField Comments;
            public StringField OfficeCode;
        }
    }
}
