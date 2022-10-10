
namespace DAP.PCHODS.Entities
{
    using DAP.PCHODS;
    using DAP.PCHODS.Lookups;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[UAR_UNKNOWN_REVIEWER]")]
    [DisplayName("Unknown Reviewer"), InstanceName("Uar Unknown Reviewer")]
    [ReadPermission(PermissionKeys.Outbound.View)]
    [ModifyPermission(PermissionKeys.Outbound.Modify)]
    [DeletePermission(PermissionKeys.Outbound.Delete)]
    [DataAuditLog]
    public sealed class UarUnknownReviewerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
   
        [LookupEditor("PCHODS.UarEmployeeDirectreports"), ForeignKey("[dbo].[UAR_employee_directreports]", "Employee_ID"), LeftJoin("empName")]
        [DisplayName("Employee Id"), Column("EmployeeID"), Size(255), QuickSearch, ReadOnly(true)]
        public String EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("User Login Name"), Column("USER_LOGIN_NAME"), Size(50), ReadOnly(true)]
        public String UserLoginName
        {
            get { return Fields.UserLoginName[this]; }
            set { Fields.UserLoginName[this] = value; }
        }

        [DisplayName("User Full Name"), Column("USER_FULL_NAME"), Size(200), ReadOnly(true)]
        public String UserFullName
        {
            get { return Fields.UserFullName[this]; }
            set { Fields.UserFullName[this] = value; }
        }

        [DisplayName("Firstname"), Column("FIRSTNAME"), Size(150), ReadOnly(true)]
        public String Firstname
        {
            get { return Fields.Firstname[this]; }
            set { Fields.Firstname[this] = value; }
        }

        [DisplayName("Middlename"), Column("MIDDLENAME"), Size(8000), ReadOnly(true)]
        public String Middlename
        {
            get { return Fields.Middlename[this]; }
            set { Fields.Middlename[this] = value; }
        }

        [DisplayName("Lastname"), Column("LASTNAME"), Size(150), ReadOnly(true)]
        public String Lastname
        {
            get { return Fields.Lastname[this]; }
            set { Fields.Lastname[this] = value; }
        }

        [DisplayName("Office Code"), Column("OFFICE_CODE"), Size(50), ReadOnly(true)]
        public String OfficeCode
        {
            get { return Fields.OfficeCode[this]; }
            set { Fields.OfficeCode[this] = value; }
        }

        [DisplayName("Department"), Column("DEPARTMENT"), Size(50), ReadOnly(true)]
        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        [DisplayName("Comments"), Column("COMMENTS"), Size(5000), ReadOnly(true)]
        public String Comments
        {
            get { return Fields.Comments[this]; }
            set { Fields.Comments[this] = value; }
        }

        [DisplayName("User Group Id"), Column("USER_GROUP_ID"), Size(50), ReadOnly(true)]
        public String UserGroupId
        {
            get { return Fields.UserGroupId[this]; }
            set { Fields.UserGroupId[this] = value; }
        }

        [DisplayName("User Group Name"), Column("USER_GROUP_NAME"), Size(200), ReadOnly(true)]
        public String UserGroupName
        {
            get { return Fields.UserGroupName[this]; }
            set { Fields.UserGroupName[this] = value; }
        }

        [DisplayName("Group Description"), Column("GROUP_DESCRIPTION"), Size(5000), ReadOnly(true)]
        public String GroupDescription
        {
            get { return Fields.GroupDescription[this]; }
            set { Fields.GroupDescription[this] = value; }
        }

        [DisplayName("User Group Rights"), Column("USER_GROUP_RIGHTS"), Size(200), ReadOnly(true)]
        public String UserGroupRights
        {
            get { return Fields.UserGroupRights[this]; }
            set { Fields.UserGroupRights[this] = value; }
        }

        [DisplayName("Task Id"), Column("TASK_ID"), Size(50), ReadOnly(true)]
        public String TaskId
        {
            get { return Fields.TaskId[this]; }
            set { Fields.TaskId[this] = value; }
        }

        [DisplayName("Task Name"), Column("TASK_NAME"), Size(200), ReadOnly(true)]
        public String TaskName
        {
            get { return Fields.TaskName[this]; }
            set { Fields.TaskName[this] = value; }
        }

        [DisplayName("Critical Fuction"), Column("CRITICAL_FUCTION"), Size(1), NotNull, ReadOnly(true)]
        public String CriticalFuction
        {
            get { return Fields.CriticalFuction[this]; }
            set { Fields.CriticalFuction[this] = value; }
        }

        [DisplayName("Accesstype"), Column("ACCESSTYPE"), Size(5), NotNull, ReadOnly(true)]
        public String Accesstype
        {
            get { return Fields.Accesstype[this]; }
            set { Fields.Accesstype[this] = value; }
        }

        [DisplayName("Sup Employeeid"), Column("SUP_EMPLOYEEID"), Size(20), ReadOnly(true)]
        public String SupEmployeeid
        {
            get { return Fields.SupEmployeeid[this]; }
            set { Fields.SupEmployeeid[this] = value; }
        }

        [DisplayName("Reviewer Firstname"), Column("REVIEWER_FIRSTNAME"), Size(150), ReadOnly(true)]
        public String ReviewerFirstname
        {
            get { return Fields.ReviewerFirstname[this]; }
            set { Fields.ReviewerFirstname[this] = value; }
        }

        [DisplayName("Reviewer Lastname"), Column("REVIEWER_LASTNAME"), Size(150), ReadOnly(true)]
        public String ReviewerLastname
        {
            get { return Fields.ReviewerLastname[this]; }
            set { Fields.ReviewerLastname[this] = value; }
        }

        [DisplayName("How Found"), Column("HOW_FOUND"), Size(100), ReadOnly(true)]
        public String HowFound
        {
            get { return Fields.HowFound[this]; }
            set { Fields.HowFound[this] = value; }
        }

        [DisplayName("Ad Manager"), Column("AD_Manager"), Size(50), ReadOnly(true)]
        public String AdManager
        {
            get { return Fields.AdManager[this]; }
            set { Fields.AdManager[this] = value; }
        }

        [DisplayName("Ad Active Status"), Column("AD_Active_Status"), Size(20), ReadOnly(true)]
        public String AdActiveStatus
        {
            get { return Fields.AdActiveStatus[this]; }
            set { Fields.AdActiveStatus[this] = value; }
        }

        [DisplayName("Hr Emp Status"), Column("HR_Emp_Status"), Size(20), ReadOnly(true)]
        public String HrEmpStatus
        {
            get { return Fields.HrEmpStatus[this]; }
            set { Fields.HrEmpStatus[this] = value; }
        }

        [DisplayName("Ad Description"), Column("AD_Description"), Size(200), ReadOnly(true)]
        public String AdDescription
        {
            get { return Fields.AdDescription[this]; }
            set { Fields.AdDescription[this] = value; }
        }
       
        [DisplayName("Reviewer It Compliance"), Column("Reviewer_ITCompliance"), Size(50), LookupEditor(typeof(UarEmployeeDirectreportsLookupEditor))]
        public String ReviewerItCompliance
        {
            get { return Fields.ReviewerItCompliance[this]; }
            set { Fields.ReviewerItCompliance[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmployeeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UarUnknownReviewerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField EmployeeId;
            public StringField UserLoginName;
            public StringField UserFullName;
            public StringField Firstname;
            public StringField Middlename;
            public StringField Lastname;
            public StringField OfficeCode;
            public StringField Department;
            public StringField Comments;
            public StringField UserGroupId;
            public StringField UserGroupName;
            public StringField GroupDescription;
            public StringField UserGroupRights;
            public StringField TaskId;
            public StringField TaskName;
            public StringField CriticalFuction;
            public StringField Accesstype;
            public StringField SupEmployeeid;
            public StringField ReviewerFirstname;
            public StringField ReviewerLastname;
            public StringField HowFound;
            public StringField AdManager;
            public StringField AdActiveStatus;
            public StringField HrEmpStatus;
            public StringField AdDescription;
            public StringField ReviewerItCompliance;
        }
    }
}
