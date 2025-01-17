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

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[UAR_employee_directreports]")]
    [DisplayName("Uar Employee Directreports"), InstanceName("Uar Employee Directreports")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PCHODS.UarEmployeeDirectreports")]
    public sealed class UarEmployeeDirectreportsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Column("Employee_ID"), Size(20), QuickSearch]
        public String EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }
        
        [DisplayName("Employee First Name"), Column("Employee_FirstName"), Size(150)]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Employee Last Name"), Column("Employee_LastName"), Size(150)]
        public String EmployeeLastName
        {
            get { return Fields.EmployeeLastName[this]; }
            set { Fields.EmployeeLastName[this] = value; }
        }

        [DisplayName("Emp Company Cd"), Column("emp_company_cd"), Size(20)]
        public String EmpCompanyCd
        {
            get { return Fields.EmpCompanyCd[this]; }
            set { Fields.EmpCompanyCd[this] = value; }
        }

        [DisplayName("Emp Company Desc"), Column("emp_company_desc"), Size(150)]
        public String EmpCompanyDesc
        {
            get { return Fields.EmpCompanyDesc[this]; }
            set { Fields.EmpCompanyDesc[this] = value; }
        }

        [DisplayName("Emp Jobtitle"), Column("emp_jobtitle"), Size(150)]
        public String EmpJobtitle
        {
            get { return Fields.EmpJobtitle[this]; }
            set { Fields.EmpJobtitle[this] = value; }
        }

        [DisplayName("Emp Jobcode"), Column("emp_jobcode"), Size(20)]
        public String EmpJobcode
        {
            get { return Fields.EmpJobcode[this]; }
            set { Fields.EmpJobcode[this] = value; }
        }

        [DisplayName("Emp Email"), Column("emp_email"), Size(100)]
        public String EmpEmail
        {
            get { return Fields.EmpEmail[this]; }
            set { Fields.EmpEmail[this] = value; }
        }

        [DisplayName("Emp Status"), Column("Emp_Status"), Size(20)]
        public String EmpStatus
        {
            get { return Fields.EmpStatus[this]; }
            set { Fields.EmpStatus[this] = value; }
        }

        [DisplayName("Sup Employee Id"), Column("sup_EmployeeID"), Size(20)]
        public String SupEmployeeId
        {
            get { return Fields.SupEmployeeId[this]; }
            set { Fields.SupEmployeeId[this] = value; }
        }


        [Expression("CONCAT(T0.[sup_FirstName], CONCAT(' ', T0.[sup_LastName]))")]
        [DisplayName("Sup First Name"), Column("sup_FirstName"), Size(150), LookupInclude]
        public String SupFirstName
        {
            get { return Fields.SupFirstName[this]; }
            set { Fields.SupFirstName[this] = value; }
        }
        
        [DisplayName("Sup Last Name"), Column("sup_LastName"), Size(150)]
        public String SupLastName
        {
            get { return Fields.SupLastName[this]; }
            set { Fields.SupLastName[this] = value; }
        }

        [DisplayName("Sup Jobtitle"), Column("Sup_jobtitle"), Size(150)]
        public String SupJobtitle
        {
            get { return Fields.SupJobtitle[this]; }
            set { Fields.SupJobtitle[this] = value; }
        }

        [DisplayName("Sup Jobcode"), Column("sup_jobcode"), Size(20)]
        public String SupJobcode
        {
            get { return Fields.SupJobcode[this]; }
            set { Fields.SupJobcode[this] = value; }
        }

        [DisplayName("Sup Level"), Column("sup_level")]
        public Int32? SupLevel
        {
            get { return Fields.SupLevel[this]; }
            set { Fields.SupLevel[this] = value; }
        }

        [DisplayName("Is Sr Dir"), Column("Is_Sr_Dir"), NotNull]
        public Int32? IsSrDir
        {
            get { return Fields.IsSrDir[this]; }
            set { Fields.IsSrDir[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmployeeId; }
        }
        
        public static readonly RowFields Fields = new RowFields().Init();

        public UarEmployeeDirectreportsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField EmployeeId;
            public StringField EmployeeFirstName;
            public StringField EmployeeLastName;
            public StringField EmpCompanyCd;
            public StringField EmpCompanyDesc;
            public StringField EmpJobtitle;
            public StringField EmpJobcode;
            public StringField EmpEmail;
            public StringField EmpStatus;
            public StringField SupEmployeeId;
            public StringField SupFirstName;
            public StringField SupLastName;
            public StringField SupJobtitle;
            public StringField SupJobcode;
            public Int32Field SupLevel;
            public Int32Field IsSrDir;
        }
    }
}
