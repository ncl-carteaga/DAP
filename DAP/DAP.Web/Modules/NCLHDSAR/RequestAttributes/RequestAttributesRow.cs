
namespace DAP.NCLHDSAR.Entities
{
    using DAP.NCLHDSAR;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_DSAR"), Module("NCLHDSAR"), TableName("[dbo].[Request_Attributes]")]
    [DisplayName("Request Attributes"), InstanceName("Request Attributes")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission("NCLHDSAR:Request:View|NCLHDSAR:RequestAttribute:View")]
    [ModifyPermission("NCLHDSAR:Request:Modify|NCLHDSAR:RequestAttribute:Modify")]
    [DeletePermission("NCLHDSAR:Request:Delete|NCLHDSAR:RequestAttribute:Delete")]
    //[InsertPermission("Administration:General|Approver:Modify:Reviewer:Modify")]
    [LookupScript(typeof(Lookups.SystemMasterLookup))]
    [DataAuditLog]
    public sealed class RequestAttributesRow : Row, IIdRow, INameRow
    {
        IIdField IIdRow.IdField
        {
            get { return Fields.RequestAttributeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Id; }
        }

        [DisplayName("Request Id"), Column("Id"), Size(10), NotNull, ForeignKey(typeof(RequestRow)), LeftJoin("j"), QuickSearch, Updatable(false)]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

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

        [DisplayName("Resolved"), Column("Resolved_dt")]
        public DateTime? ResolvedDt
        {
            get { return Fields.ResolvedDt[this]; }
            set { Fields.ResolvedDt[this] = value; }
        }

        [DisplayName("Extracted"), Column("Extract_dt"), Visible(false)]
        public DateTime? ExtractDt
        {
            get { return Fields.ExtractDt[this]; }
            set { Fields.ExtractDt[this] = value; }
        }

        [DisplayName("First Name"), Column("First_nm"), Size(100)]
        public String FirstNm
        {
            get { return Fields.FirstNm[this]; }
            set { Fields.FirstNm[this] = value; }
        }

        [DisplayName("Middle Name"), Column("Middle_nm"), Size(100)]
        public String MiddleNm
        {
            get { return Fields.MiddleNm[this]; }
            set { Fields.MiddleNm[this] = value; }
        }

        [DisplayName("Last Name"), Column("Last_nm"), Size(100)]
        public String LastNm
        {
            get { return Fields.LastNm[this]; }
            set { Fields.LastNm[this] = value; }
        }

        [DisplayName("Address 1"), Size(255)]
        
        public String Addr1
        {
            get { return Fields.Addr1[this]; }
            set { Fields.Addr1[this] = value; }
        }

        [DisplayName("Address 2"), Size(255)]
        
        public String Addr2
        {
            get { return Fields.Addr2[this]; }
            set { Fields.Addr2[this] = value; }
        }

        [DisplayName("City"), Column("City_nm"), Size(100)]
        
        public String CityNm
        {
            get { return Fields.CityNm[this]; }
            set { Fields.CityNm[this] = value; }
        }

        [DisplayName("State"), Column("State_nm"), Size(50)]
        
        public String StateNm
        {
            get { return Fields.StateNm[this]; }
            set { Fields.StateNm[this] = value; }
        }

        [DisplayName("Postal Code"), Column("Postal_cd"), Size(25)]
        
        public String PostalCd
        {
            get { return Fields.PostalCd[this]; }
            set { Fields.PostalCd[this] = value; }
        }

        [DisplayName("Country Code"), Column("Country_cd"), Size(15)]
        
        public String CountryCd
        {
            get { return Fields.CountryCd[this]; }
            set { Fields.CountryCd[this] = value; }
        }

        [DisplayName("Email"), Column("Email"), Size(150)]
        public String Email1
        {
            get { return Fields.Email1[this]; }
            set { Fields.Email1[this] = value; }
        }

        [DisplayName("Old First Name"), Column("Old_First_nm"), Size(100)]
        public String OldFirstNm
        {
            get { return Fields.OldFirstNm[this]; }
            set { Fields.OldFirstNm[this] = value; }
        }

        [DisplayName("Old Middle Name"), Column("Old_Middle_nm"), Size(100)]
        public String OldMiddleNm
        {
            get { return Fields.OldMiddleNm[this]; }
            set { Fields.OldMiddleNm[this] = value; }
        }

        [DisplayName("Old Last Name"), Column("Old_Last_nm"), Size(100)]
        public String OldLastNm
        {
            get { return Fields.OldLastNm[this]; }
            set { Fields.OldLastNm[this] = value; }
        }


        [DisplayName("Old Address 1"), Column("Old_Addr1"), Size(255)]
        
        public String OldAddr1
        {
            get { return Fields.OldAddr1[this]; }
            set { Fields.OldAddr1[this] = value; }
        }

        [DisplayName("Old Address 2"), Column("Old_Addr2"), Size(255)]
        
        public String OldAddr2
        {
            get { return Fields.OldAddr2[this]; }
            set { Fields.OldAddr2[this] = value; }
        }

        [DisplayName("Old City"), Column("Old_City_nm"), Size(100)]
        
        public String OldCityNm
        {
            get { return Fields.OldCityNm[this]; }
            set { Fields.OldCityNm[this] = value; }
        }

        [DisplayName("Old State"), Column("Old_State_nm"), Size(50)]
        
        public String OldStateNm
        {
            get { return Fields.OldStateNm[this]; }
            set { Fields.OldStateNm[this] = value; }
        }

        [DisplayName("Old Postal Code"), Column("Old_Postal_cd"), Size(25)]
        
        public String OldPostalCd
        {
            get { return Fields.OldPostalCd[this]; }
            set { Fields.OldPostalCd[this] = value; }
        }

        [DisplayName("Old Country Code"), Column("Old_Country_cd"), Size(15)]
        
        public String OldCountryCd
        {
            get { return Fields.OldCountryCd[this]; }
            set { Fields.OldCountryCd[this] = value; }
        }

        [DisplayName("Old Email"), Column("Old_Email"), Size(150)]
        
        public String OldEmail
        {
            get { return Fields.OldEmail[this]; }
            set { Fields.OldEmail[this] = value; }
        }

        [DisplayName("Request Attribute Id"), PrimaryKey, Column("RequestAttributeID"), Identity]
        public Int32? RequestAttributeId
        {
            get { return Fields.RequestAttributeId[this]; }
            set { Fields.RequestAttributeId[this] = value; }
        }


        [DisplayName("System Name"), Expression("jSystemMaster.[System_name]")]
        public String SystemMasterSystemName
        {
            get { return Fields.SystemMasterSystemName[this]; }
            set { Fields.SystemMasterSystemName[this] = value; }
        }

        [DisplayName("System Table"), Expression("jSystemMaster.[System_table]"), LookupInclude]
        public String SystemMasterSystemTable
        {
            get { return Fields.SystemMasterSystemTable[this]; }
            set { Fields.SystemMasterSystemTable[this] = value; }
        }

        [DisplayName("System Desc")]
        [Expression("CONCAT(jSystemMaster.[System_name], CONCAT(' (', jSystemMaster.[Id], ' - ', jSystemMaster.[System_Table],  ')'))")]        
        public String SystemMasterSystemDesc
        {
            get { return Fields.SystemMasterSystemDesc[this]; }
            set { Fields.SystemMasterSystemDesc[this] = value; }
        }

        [DisplayName("System Master System Active Yn"), Expression("jSystemMaster.[System_Active_YN]")]
        public String SystemMasterSystemActiveYn
        {
            get { return Fields.SystemMasterSystemActiveYn[this]; }
            set { Fields.SystemMasterSystemActiveYn[this] = value; }
        }


        public static readonly RowFields Fields = new RowFields().Init();

        public RequestAttributesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RequestAttributeId;
            public StringField Id;
            public Int32Field SystemMasterId;
            public StringField RequestValue;
            public DateTimeField ResolvedDt;
            public DateTimeField ExtractDt;
            public StringField FirstNm;
            public StringField MiddleNm;
            public StringField LastNm;
            public StringField Addr1;
            public StringField Addr2;
            public StringField CityNm;
            public StringField StateNm;
            public StringField PostalCd;
            public StringField CountryCd;
            public StringField Email1;
            public StringField OldAddr1;
            public StringField OldAddr2;
            public StringField OldCityNm;
            public StringField OldStateNm;
            public StringField OldPostalCd;
            public StringField OldCountryCd;
            public StringField OldEmail;

            public StringField OldFirstNm;
            public StringField OldMiddleNm;
            public StringField OldLastNm;

            //  public DateTimeField CreatedDt;
            //  public DateTimeField DeadlineDt;
            //  public DateTimeField LastUpdatedDt;
            //  public BooleanField ReqExtended;
            //  public StringField ReqStage;
            //  public StringField ReqApprover;
            ////  public StringField Email;
            //  public StringField FirstName;
            //  public StringField LastName;
            //  public StringField ReqDetails;
            //  public StringField SubjectType;
            //  public StringField RequestType;
            //  public StringField Address1;
            //  public StringField City;
            //  public StringField Country;
            //  public StringField NclYn;
            //  public StringField LatitudesNum;
            //  public StringField OceaniaYn;
            //  public StringField OceaniaMpCardNum;
            //  public StringField RegentYn;
            //  public StringField RegentMpCardNum;
            //  public StringField SixthmanYn;
            //  public StringField IdentityVerificationOptOuts;
            //  public StringField IdentityVerificationOtherRequests;
            //  public Int32Field RequestTypeNum;
            //  public StringField ReqStatus;
            //  public DateTimeField LoadDt;
            //  public DateTimeField ProcessDt;

            public StringField SystemMasterSystemName;
            public StringField SystemMasterSystemTable;
            public StringField SystemMasterSystemDesc;
            public StringField SystemMasterSystemActiveYn;
        }
    }
}
