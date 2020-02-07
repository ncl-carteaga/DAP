
namespace DAP.NCLHDSAR.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Collections.Generic;
    

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[Request]")]
    [DisplayName("Request"), InstanceName("Request")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission("NCLHDSAR:Request:View|NCLHDSAR:RequestAttribute:View")]
    [ModifyPermission("NCLHDSAR:Request:Modify|NCLHDSAR:RequestAttribute:Modify")]    
    [DeletePermission("NCLHDSAR:Request:Delete|NCLHDSAR:RequestAttribute:Delete")]
    [LookupScript(typeof(Lookups.RequestTypeLookup))]
    [DataAuditLog]
    public sealed class RequestRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Size(10), PrimaryKey, QuickSearch]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("First Name"), Size(255), NotNull, QuickFilter, QuickSearch, Updatable(false)]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(255), NotNull, QuickFilter, QuickSearch, Updatable(false)]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("FullName"), QuickSearch]
        [Expression("CONCAT(T0.[FirstName], CONCAT(' ', T0.[LastName]))")]
        [Expression("(T0.FirstName || ' ' || T0.LastName)", Dialect = "Sqlite")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Created Dt"), Column("Created_dt"), NotNull, Updatable(false)]
        
        public DateTime? CreatedDt
        {
            get { return Fields.CreatedDt[this]; }
            set { Fields.CreatedDt[this] = value; }
        }

        [DisplayName("Deadline Dt"), Column("Deadline_dt"), NotNull, Updatable(false)]
        
        public DateTime? DeadlineDt
        {
            get { return Fields.DeadlineDt[this]; }
            set { Fields.DeadlineDt[this] = value; }
        }

        [DisplayName("Days Left"), AlignCenter, Updatable(false)]
        [Expression("CASE WHEN Req_Stage in ('RESOLVED', 'CLOSED','COMPLETE') THEN 0 ELSE CASE WHEN DATEDIFF(DAY, getdate(), DeadLine_dt) < 0 THEN 0 ELSE DATEDIFF(DAY, getdate(), DeadLine_dt) END END")]        
        public Int32? DaysLeft
        {
            get { return Fields.DaysLeft[this]; }
            set { Fields.DaysLeft[this] = value; }
        }

        [DisplayName("Days Old"), AlignCenter, Updatable(false)]
        [Expression("DATEDIFF(DAY,Created_dt, getdate())")]
        public Int32? DaysOld
        {
            get { return Fields.DaysOld[this]; }
            set { Fields.DaysOld[this] = value; }
        }

        [DisplayName("# Attr"), AlignCenter, Updatable(false)]
        [Expression("(SELECT COUNT(T1.Id) FROM dbo.Request_Attributes AS T1 WHERE T0.Id = T1.Id)")]
        public Int32? AttrCount
        {
            get { return Fields.AttrCount[this]; }
            set { Fields.AttrCount[this] = value; }
        }


        [DisplayName("Request Desc"), Size(255), NotNull, Updatable(false)]        
        public String RequestType
        {
            get { return Fields.RequestType[this]; }
            set { Fields.RequestType[this] = value; }
        }

        [DisplayName("Request Type"), Expression("jRequestTypeNum.[Req_desc]"), QuickFilter]
        public String RequestTypeNumDesc
        {
            get { return Fields.RequestTypeNumDesc[this]; }
            set { Fields.RequestTypeNumDesc[this] = value; }
        }
       
        [DisplayName("Extended"), AlignCenter, Column("Req_Extended"), NotNull]
        public Boolean? ReqExtended
        {
            get { return Fields.ReqExtended[this]; }
            set { Fields.ReqExtended[this] = value; }
        }

        [DisplayName("Req Stage"), Column("Req_Stage"), Size(50)]
        public String ReqStage
        {
            get { return Fields.ReqStage[this]; }
            set { Fields.ReqStage[this] = value; }
        }

        [DisplayName("Req Approver"), Column("Req_Approver"), Size(125), NotNull]
        public String ReqApprover
        {
            get { return Fields.ReqApprover[this]; }
            set { Fields.ReqApprover[this] = value; }
        }
        

        [DisplayName("Email"), Size(255), NotNull]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Req Details"), Column("Req_Details")]
        public String ReqDetails
        {
            get { return Fields.ReqDetails[this]; }
            set { Fields.ReqDetails[this] = value; }
        }

        [DisplayName("Subject Type"), Column("Subject_type"), Size(75), NotNull]
        public String SubjectType
        {
            get { return Fields.SubjectType[this]; }
            set { Fields.SubjectType[this] = value; }
        }


        [DisplayName("Address1"), Size(255)]
        public String Address1
        {
            get { return Fields.Address1[this]; }
            set { Fields.Address1[this] = value; }
        }

        [DisplayName("City"), Size(255)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), Size(255)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Ncl Yn"), Column("NCL_YN"), Size(255)]
        public String NclYn
        {
            get { return Fields.NclYn[this]; }
            set { Fields.NclYn[this] = value; }
        }

        [DisplayName("Latitudes Num"), Column("Latitudes_num"), Size(255)]
        public String LatitudesNum
        {
            get { return Fields.LatitudesNum[this]; }
            set { Fields.LatitudesNum[this] = value; }
        }

        [DisplayName("Oceania Yn"), Column("Oceania_YN"), Size(255)]
        public String OceaniaYn
        {
            get { return Fields.OceaniaYn[this]; }
            set { Fields.OceaniaYn[this] = value; }
        }

        [DisplayName("Oceania Mp Card Num"), Column("Oceania_MPCard_num"), Size(255)]
        public String OceaniaMpCardNum
        {
            get { return Fields.OceaniaMpCardNum[this]; }
            set { Fields.OceaniaMpCardNum[this] = value; }
        }

        [DisplayName("Regent Yn"), Column("Regent_YN"), Size(255)]
        public String RegentYn
        {
            get { return Fields.RegentYn[this]; }
            set { Fields.RegentYn[this] = value; }
        }

        [DisplayName("Regent Mp Card Num"), Column("Regent_MPCard_num"), Size(255)]
        public String RegentMpCardNum
        {
            get { return Fields.RegentMpCardNum[this]; }
            set { Fields.RegentMpCardNum[this] = value; }
        }

        [DisplayName("Sixthman Yn"), Column("Sixthman_YN"), Size(255)]
        public String SixthmanYn
        {
            get { return Fields.SixthmanYn[this]; }
            set { Fields.SixthmanYn[this] = value; }
        }

        [DisplayName("Identity Verification Opt Outs"), Column("Identity_Verification_OptOuts"), Size(255)]
        public String IdentityVerificationOptOuts
        {
            get { return Fields.IdentityVerificationOptOuts[this]; }
            set { Fields.IdentityVerificationOptOuts[this] = value; }
        }

        [DisplayName("Identity Verification Other Requests"), Column("Identity_Verification_OtherRequests"), Size(255)]
        public String IdentityVerificationOtherRequests
        {
            get { return Fields.IdentityVerificationOtherRequests[this]; }
            set { Fields.IdentityVerificationOtherRequests[this] = value; }
        }

        [DisplayName("Request Type Num"), Column("RequestType_num"), ForeignKey("[dbo].[Request_Type]", "Req_type"), LeftJoin("jRequestTypeNum"), RequestTypeEditor]       
        public Int32? RequestTypeNum
        {
            get { return Fields.RequestTypeNum[this]; }
            set { Fields.RequestTypeNum[this] = value; }
        }

        [DisplayName("Status"), Column("Req_status"), Size(25)]
        public String ReqStatus
        {
            get { return Fields.ReqStatus[this]; }
            set { Fields.ReqStatus[this] = value; }
        }

        [DisplayName("Load Dt"), Column("Load_dt")]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        [DisplayName("Process Dt"), Column("Process_dt")]
        public DateTime? ProcessDt
        {
            get { return Fields.ProcessDt[this]; }
            set { Fields.ProcessDt[this] = value; }
        }

        [DisplayName("Last Updated Dt"), Column("LastUpdated_dt"), NotNull]
        public DateTime? LastUpdatedDt
        {
            get { return Fields.LastUpdatedDt[this]; }
            set { Fields.LastUpdatedDt[this] = value; }
        }

        //[DisplayName("Request Attributes"), MasterDetailRelation(foreignKey: "ID", IncludeColumns = "SystemMasterSystemName"), NotMapped]
        //public List<RequestAttributesRow> DetailList
        //{
        //    get { return Fields.DetailList[this]; }
        //    set { Fields.DetailList[this] = value; }
        //}
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RequestRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public StringField FirstName;
            public StringField LastName;
            public StringField FullName;
            public StringField Email;
            public DateTimeField CreatedDt;
            public DateTimeField DeadlineDt;
            public DateTimeField LastUpdatedDt;
            public BooleanField ReqExtended;
            public StringField ReqStage;
            public StringField ReqApprover;                        
            public StringField ReqDetails;
            public StringField SubjectType;
            public StringField RequestType;
            public StringField Address1;
            public StringField City;
            public StringField Country;
            public StringField NclYn;
            public StringField LatitudesNum;
            public StringField OceaniaYn;
            public StringField OceaniaMpCardNum;
            public StringField RegentYn;
            public StringField RegentMpCardNum;
            public StringField SixthmanYn;
            public StringField IdentityVerificationOptOuts;
            public StringField IdentityVerificationOtherRequests;
            public Int32Field RequestTypeNum;
            public StringField ReqStatus;
            public DateTimeField LoadDt;
            public DateTimeField ProcessDt;
            public StringField RequestTypeNumDesc;
            public Int32Field DaysLeft;
            public Int32Field DaysOld;
            public Int32Field AttrCount;
            //   public RowListField<RequestAttributesRow> DetailList;
        }
    }
}
