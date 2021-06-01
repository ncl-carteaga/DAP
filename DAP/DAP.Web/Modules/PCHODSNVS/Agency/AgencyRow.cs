
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[nvs].[Agency]")]
    [DisplayName("Agency"), InstanceName("Agency")]
    [ReadPermission(PermissionKeys.Finance.View)]

    [LookupScript("PCHODSNVS.Agency")]
    public sealed class AgencyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Cd"), Column("Company_cd"), Size(3), PrimaryKey, QuickSearch]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Agency Cd"), Column("Agency_cd"), Size(6), PrimaryKey, LookupInclude]
        public String AgencyCd
        {
            get { return Fields.AgencyCd[this]; }
            set { Fields.AgencyCd[this] = value; }
        }

        [DisplayName("Attn Desc"), Column("Attn_desc"), Size(30), NotNull]
        public String AttnDesc
        {
            get { return Fields.AttnDesc[this]; }
            set { Fields.AttnDesc[this] = value; }
        }

        [DisplayName("Agency Name Desc"), Column("Agency_Name_desc"), Size(50), LookupInclude]
        public String AgencyNameDesc
        {
            get { return Fields.AgencyNameDesc[this]; }
            set { Fields.AgencyNameDesc[this] = value; }
        }

        [DisplayName("Addr1"), Size(35), NotNull]
        public String Addr1
        {
            get { return Fields.Addr1[this]; }
            set { Fields.Addr1[this] = value; }
        }

        [DisplayName("Addr2"), Size(35), NotNull]
        public String Addr2
        {
            get { return Fields.Addr2[this]; }
            set { Fields.Addr2[this] = value; }
        }

        [DisplayName("Addr3"), Size(35), NotNull]
        public String Addr3
        {
            get { return Fields.Addr3[this]; }
            set { Fields.Addr3[this] = value; }
        }

        [DisplayName("City Name"), Column("City_Name"), Size(35), NotNull]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("State Nm"), Column("State_nm"), Size(20), NotNull]
        public String StateNm
        {
            get { return Fields.StateNm[this]; }
            set { Fields.StateNm[this] = value; }
        }

        [DisplayName("Zip Cd"), Column("Zip_cd"), Size(10), NotNull]
        public String ZipCd
        {
            get { return Fields.ZipCd[this]; }
            set { Fields.ZipCd[this] = value; }
        }

        [DisplayName("Zip2 Cd"), Column("Zip2_cd"), Size(4)]
        public String Zip2Cd
        {
            get { return Fields.Zip2Cd[this]; }
            set { Fields.Zip2Cd[this] = value; }
        }

        [DisplayName("Phone1 Num"), Column("Phone1_num"), Size(20), NotNull]
        public String Phone1Num
        {
            get { return Fields.Phone1Num[this]; }
            set { Fields.Phone1Num[this] = value; }
        }

        [DisplayName("Phone2 Num"), Column("Phone2_num"), Size(20), NotNull]
        public String Phone2Num
        {
            get { return Fields.Phone2Num[this]; }
            set { Fields.Phone2Num[this] = value; }
        }

        [DisplayName("Fax Num"), Column("Fax_num"), Size(20), NotNull]
        public String FaxNum
        {
            get { return Fields.FaxNum[this]; }
            set { Fields.FaxNum[this] = value; }
        }

        [DisplayName("Commission Pct"), Column("Commission_pct"), Size(4), Scale(1), NotNull]
        public Decimal? CommissionPct
        {
            get { return Fields.CommissionPct[this]; }
            set { Fields.CommissionPct[this] = value; }
        }

        [DisplayName("Gsa Ind"), Column("GSA_ind"), Size(1), NotNull]
        public String GsaInd
        {
            get { return Fields.GsaInd[this]; }
            set { Fields.GsaInd[this] = value; }
        }

        [DisplayName("National Acct Ind"), Column("National_Acct_ind"), Size(1), NotNull]
        public String NationalAcctInd
        {
            get { return Fields.NationalAcctInd[this]; }
            set { Fields.NationalAcctInd[this] = value; }
        }

        [DisplayName("Gsa Price Level Amt"), Column("GSA_Price_Level_amt"), Size(1), NotNull]
        public Decimal? GsaPriceLevelAmt
        {
            get { return Fields.GsaPriceLevelAmt[this]; }
            set { Fields.GsaPriceLevelAmt[this] = value; }
        }

        [DisplayName("Comment1 Desc"), Column("Comment1_desc"), Size(35), NotNull]
        public String Comment1Desc
        {
            get { return Fields.Comment1Desc[this]; }
            set { Fields.Comment1Desc[this] = value; }
        }

        [DisplayName("Comment2 Desc"), Column("Comment2_desc"), Size(35), NotNull]
        public String Comment2Desc
        {
            get { return Fields.Comment2Desc[this]; }
            set { Fields.Comment2Desc[this] = value; }
        }

        [DisplayName("Consortium Cd"), Column("Consortium_cd"), Size(8), NotNull]
        public String ConsortiumCd
        {
            get { return Fields.ConsortiumCd[this]; }
            set { Fields.ConsortiumCd[this] = value; }
        }

        [DisplayName("Iata Num"), Column("IATA_num"), Size(10), NotNull]
        public String IataNum
        {
            get { return Fields.IataNum[this]; }
            set { Fields.IataNum[this] = value; }
        }

        [DisplayName("Clia Num"), Column("CLIA_num"), Size(12), NotNull]
        public String CliaNum
        {
            get { return Fields.CliaNum[this]; }
            set { Fields.CliaNum[this] = value; }
        }

        [DisplayName("Previous Yr Pax Qty"), Column("Previous_yr_pax_qty"), Size(6), NotNull]
        public Decimal? PreviousYrPaxQty
        {
            get { return Fields.PreviousYrPaxQty[this]; }
            set { Fields.PreviousYrPaxQty[this] = value; }
        }

        [DisplayName("Previous Yr Rev Amt"), Column("Previous_yr_rev_amt"), Size(11), Scale(2), NotNull]
        public Decimal? PreviousYrRevAmt
        {
            get { return Fields.PreviousYrRevAmt[this]; }
            set { Fields.PreviousYrRevAmt[this] = value; }
        }

        [DisplayName("Last Year Sales Amt"), Column("Last_Year_sales_amt"), Size(11), Scale(2), NotNull]
        public Decimal? LastYearSalesAmt
        {
            get { return Fields.LastYearSalesAmt[this]; }
            set { Fields.LastYearSalesAmt[this] = value; }
        }

        [DisplayName("Current Year Sales Amt"), Column("Current_Year_sales_amt"), Size(11), Scale(2), NotNull]
        public Decimal? CurrentYearSalesAmt
        {
            get { return Fields.CurrentYearSalesAmt[this]; }
            set { Fields.CurrentYearSalesAmt[this] = value; }
        }

        [DisplayName("User In Use By Id"), Column("User_InUse_by_id"), Size(10), NotNull]
        public String UserInUseById
        {
            get { return Fields.UserInUseById[this]; }
            set { Fields.UserInUseById[this] = value; }
        }

        [DisplayName("Key Acct Ind"), Column("Key_Acct_ind"), Size(4), NotNull]
        public String KeyAcctInd
        {
            get { return Fields.KeyAcctInd[this]; }
            set { Fields.KeyAcctInd[this] = value; }
        }

        [DisplayName("Agency Default Status Ind"), Column("Agency_Default_Status_ind"), Size(1), NotNull]
        public String AgencyDefaultStatusInd
        {
            get { return Fields.AgencyDefaultStatusInd[this]; }
            set { Fields.AgencyDefaultStatusInd[this] = value; }
        }

        [DisplayName("Last Year Key Acct Cd"), Column("Last_Year_KeyAcct_cd"), Size(4), NotNull]
        public String LastYearKeyAcctCd
        {
            get { return Fields.LastYearKeyAcctCd[this]; }
            set { Fields.LastYearKeyAcctCd[this] = value; }
        }

        [DisplayName("Sales Region Cd"), Column("Sales_Region_cd"), Size(2), NotNull]
        public String SalesRegionCd
        {
            get { return Fields.SalesRegionCd[this]; }
            set { Fields.SalesRegionCd[this] = value; }
        }

        [DisplayName("Rev Label Cd"), Column("Rev_Label_cd"), Size(1), NotNull]
        public String RevLabelCd
        {
            get { return Fields.RevLabelCd[this]; }
            set { Fields.RevLabelCd[this] = value; }
        }

        [DisplayName("Pseudo City Cd"), Column("PseudoCity_cd"), Size(4), NotNull]
        public String PseudoCityCd
        {
            get { return Fields.PseudoCityCd[this]; }
            set { Fields.PseudoCityCd[this] = value; }
        }

        [DisplayName("Apollo Ind"), Column("Apollo_ind"), Size(1), NotNull]
        public String ApolloInd
        {
            get { return Fields.ApolloInd[this]; }
            set { Fields.ApolloInd[this] = value; }
        }

        [DisplayName("Country"), Size(35), NotNull]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Corporation Ind"), Column("Corporation_ind"), Size(1), NotNull]
        public String CorporationInd
        {
            get { return Fields.CorporationInd[this]; }
            set { Fields.CorporationInd[this] = value; }
        }

        [DisplayName("Tax Id Num"), Column("TaxID_num"), Size(11)]
        public String TaxIdNum
        {
            get { return Fields.TaxIdNum[this]; }
            set { Fields.TaxIdNum[this] = value; }
        }

        [DisplayName("Corp Com Desc"), Column("CorpCom_desc"), Size(40), NotNull]
        public String CorpComDesc
        {
            get { return Fields.CorpComDesc[this]; }
            set { Fields.CorpComDesc[this] = value; }
        }

        [DisplayName("Prt1099 Ind"), Column("Prt1099_ind"), Size(1), NotNull]
        public String Prt1099Ind
        {
            get { return Fields.Prt1099Ind[this]; }
            set { Fields.Prt1099Ind[this] = value; }
        }

        [DisplayName("Prt D1099 Dt"), Column("PrtD1099_dt")]
        public DateTime? PrtD1099Dt
        {
            get { return Fields.PrtD1099Dt[this]; }
            set { Fields.PrtD1099Dt[this] = value; }
        }

        [DisplayName("Tax Info Received Dt"), Column("TaxInfo_Received_dt")]
        public DateTime? TaxInfoReceivedDt
        {
            get { return Fields.TaxInfoReceivedDt[this]; }
            set { Fields.TaxInfoReceivedDt[this] = value; }
        }

        [DisplayName("Ins Default Cd"), Column("InsDefault_cd"), Size(1), NotNull]
        public String InsDefaultCd
        {
            get { return Fields.InsDefaultCd[this]; }
            set { Fields.InsDefaultCd[this] = value; }
        }

        [DisplayName("Gds Sys Cd"), Column("GDS_sys_cd"), Size(2), NotNull]
        public String GdsSysCd
        {
            get { return Fields.GdsSysCd[this]; }
            set { Fields.GdsSysCd[this] = value; }
        }

        [DisplayName("Allow Plat Ind"), Column("AllowPLAT_ind"), Size(1), NotNull]
        public String AllowPlatInd
        {
            get { return Fields.AllowPlatInd[this]; }
            set { Fields.AllowPlatInd[this] = value; }
        }

        [DisplayName("Allow Sdbd Ind"), Column("AllowSDBD_ind"), Size(1), NotNull]
        public String AllowSdbdInd
        {
            get { return Fields.AllowSdbdInd[this]; }
            set { Fields.AllowSdbdInd[this] = value; }
        }

        [DisplayName("Allow Gp Ind"), Column("AllowGP_ind"), Size(1), NotNull]
        public String AllowGpInd
        {
            get { return Fields.AllowGpInd[this]; }
            set { Fields.AllowGpInd[this] = value; }
        }

        [DisplayName("Mahana Club Ind"), Column("MahanaClub_ind"), Size(1), NotNull]
        public String MahanaClubInd
        {
            get { return Fields.MahanaClubInd[this]; }
            set { Fields.MahanaClubInd[this] = value; }
        }

        [DisplayName("Mc Active Ind"), Column("MCActive_ind"), Size(1), NotNull]
        public String McActiveInd
        {
            get { return Fields.McActiveInd[this]; }
            set { Fields.McActiveInd[this] = value; }
        }

        [DisplayName("E Member Desc"), Column("EMember_desc"), Size(20), NotNull]
        public String EMemberDesc
        {
            get { return Fields.EMemberDesc[this]; }
            set { Fields.EMemberDesc[this] = value; }
        }

        [DisplayName("Agency Status Cd"), Column("Agency_Status_cd"), Size(1), NotNull]
        public String AgencyStatusCd
        {
            get { return Fields.AgencyStatusCd[this]; }
            set { Fields.AgencyStatusCd[this] = value; }
        }

        [DisplayName("Currency Cd"), Column("Currency_cd"), Size(3), NotNull]
        public String CurrencyCd
        {
            get { return Fields.CurrencyCd[this]; }
            set { Fields.CurrencyCd[this] = value; }
        }

        [DisplayName("Secondary Currency Cd"), Column("Secondary_Currency_cd"), Size(3), NotNull]
        public String SecondaryCurrencyCd
        {
            get { return Fields.SecondaryCurrencyCd[this]; }
            set { Fields.SecondaryCurrencyCd[this] = value; }
        }

        [DisplayName("Office Cd"), Column("Office_cd"), Size(3), NotNull]
        public String OfficeCd
        {
            get { return Fields.OfficeCd[this]; }
            set { Fields.OfficeCd[this] = value; }
        }

        [DisplayName("Agency Email"), Column("Agency_Email"), Size(100), NotNull]
        public String AgencyEmail
        {
            get { return Fields.AgencyEmail[this]; }
            set { Fields.AgencyEmail[this] = value; }
        }

        [DisplayName("Agency Web Address"), Column("Agency_Web_Address"), Size(40), NotNull]
        public String AgencyWebAddress
        {
            get { return Fields.AgencyWebAddress[this]; }
            set { Fields.AgencyWebAddress[this] = value; }
        }

        [DisplayName("Promo Ad Ind"), Column("PromoAD_ind"), Size(1), NotNull]
        public String PromoAdInd
        {
            get { return Fields.PromoAdInd[this]; }
            set { Fields.PromoAdInd[this] = value; }
        }

        [DisplayName("Vat Id"), Column("VAT_id"), Size(16), NotNull]
        public String VatId
        {
            get { return Fields.VatId[this]; }
            set { Fields.VatId[this] = value; }
        }

        [DisplayName("Self Bill Ind"), Column("SelfBill_ind"), Size(1), NotNull]
        public String SelfBillInd
        {
            get { return Fields.SelfBillInd[this]; }
            set { Fields.SelfBillInd[this] = value; }
        }

        [DisplayName("Preferred Communication Cd"), Column("Preferred_Communication_cd"), Size(5), NotNull]
        public String PreferredCommunicationCd
        {
            get { return Fields.PreferredCommunicationCd[this]; }
            set { Fields.PreferredCommunicationCd[this] = value; }
        }

        [DisplayName("Preferred Language Desc"), Column("Preferred_Language_desc"), Size(15), NotNull]
        public String PreferredLanguageDesc
        {
            get { return Fields.PreferredLanguageDesc[this]; }
            set { Fields.PreferredLanguageDesc[this] = value; }
        }

        [DisplayName("Nacta Num"), Column("NACTA_num"), Size(8), NotNull]
        public String NactaNum
        {
            get { return Fields.NactaNum[this]; }
            set { Fields.NactaNum[this] = value; }
        }

        [DisplayName("Active Ind"), Column("Active_ind"), Size(1), NotNull]
        public String ActiveInd
        {
            get { return Fields.ActiveInd[this]; }
            set { Fields.ActiveInd[this] = value; }
        }

        [DisplayName("Bdm Cd"), Column("BDM_cd"), Size(5), NotNull]
        public String BdmCd
        {
            get { return Fields.BdmCd[this]; }
            set { Fields.BdmCd[this] = value; }
        }

        [DisplayName("Send Cust Inv Ind"), Column("Send_CustInv_ind"), Size(1), NotNull]
        public String SendCustInvInd
        {
            get { return Fields.SendCustInvInd[this]; }
            set { Fields.SendCustInvInd[this] = value; }
        }

        [DisplayName("Credit Agt Ind"), Column("CreditAgt_ind"), Size(1), NotNull]
        public String CreditAgtInd
        {
            get { return Fields.CreditAgtInd[this]; }
            set { Fields.CreditAgtInd[this] = value; }
        }

        [DisplayName("Agent Num"), Column("Agent_num"), Size(15), NotNull]
        public String AgentNum
        {
            get { return Fields.AgentNum[this]; }
            set { Fields.AgentNum[this] = value; }
        }

        [DisplayName("Pin Club Ind"), Column("PinClub_ind"), Size(1), NotNull]
        public String PinClubInd
        {
            get { return Fields.PinClubInd[this]; }
            set { Fields.PinClubInd[this] = value; }
        }

        [DisplayName("Fin Hold Ind"), Column("FinHold_ind"), Size(1), NotNull]
        public String FinHoldInd
        {
            get { return Fields.FinHoldInd[this]; }
            set { Fields.FinHoldInd[this] = value; }
        }

        [DisplayName("L7days Num"), Column("l7days_num"), Size(3), NotNull]
        public Decimal? L7daysNum
        {
            get { return Fields.L7daysNum[this]; }
            set { Fields.L7daysNum[this] = value; }
        }

        [DisplayName("Option1 Due Days Qty"), Column("Option1_Due_Days_qty"), Size(2), NotNull]
        public Decimal? Option1DueDaysQty
        {
            get { return Fields.Option1DueDaysQty[this]; }
            set { Fields.Option1DueDaysQty[this] = value; }
        }

        [DisplayName("Option2 Due Days Qty"), Column("Option2_Due_Days_qty"), Size(2), NotNull]
        public Decimal? Option2DueDaysQty
        {
            get { return Fields.Option2DueDaysQty[this]; }
            set { Fields.Option2DueDaysQty[this] = value; }
        }

        [DisplayName("Auto Cxl Ind"), Column("AutoCXL_ind"), Size(1)]
        public String AutoCxlInd
        {
            get { return Fields.AutoCxlInd[this]; }
            set { Fields.AutoCxlInd[this] = value; }
        }

        [DisplayName("Consortium Added Dt"), Column("Consortium_Added_dt")]
        public DateTime? ConsortiumAddedDt
        {
            get { return Fields.ConsortiumAddedDt[this]; }
            set { Fields.ConsortiumAddedDt[this] = value; }
        }

        [DisplayName("Master Agency Ind"), Column("Master_Agency_ind"), Size(1)]
        public String MasterAgencyInd
        {
            get { return Fields.MasterAgencyInd[this]; }
            set { Fields.MasterAgencyInd[this] = value; }
        }

        [DisplayName("Owner Cd"), Column("Owner_cd"), Size(6)]
        public String OwnerCd
        {
            get { return Fields.OwnerCd[this]; }
            set { Fields.OwnerCd[this] = value; }
        }

        [DisplayName("Auto Envo Ind"), Column("AutoEnvo_ind"), Size(1)]
        public String AutoEnvoInd
        {
            get { return Fields.AutoEnvoInd[this]; }
            set { Fields.AutoEnvoInd[this] = value; }
        }

        [DisplayName("Over Vac Summ Ind"), Column("OverVacSumm_ind"), Size(1), NotNull]
        public String OverVacSummInd
        {
            get { return Fields.OverVacSummInd[this]; }
            set { Fields.OverVacSummInd[this] = value; }
        }

        [DisplayName("Vac Summ Email Desc"), Column("VacSummEmail_desc"), Size(100), NotNull]
        public String VacSummEmailDesc
        {
            get { return Fields.VacSummEmailDesc[this]; }
            set { Fields.VacSummEmailDesc[this] = value; }
        }

        [DisplayName("Tax Payer1099 Name"), Column("TaxPayer1099_name"), Size(60), NotNull]
        public String TaxPayer1099Name
        {
            get { return Fields.TaxPayer1099Name[this]; }
            set { Fields.TaxPayer1099Name[this] = value; }
        }

        [DisplayName("Agent Link Desc"), Column("Agent_Link_desc"), Size(8), NotNull]
        public String AgentLinkDesc
        {
            get { return Fields.AgentLinkDesc[this]; }
            set { Fields.AgentLinkDesc[this] = value; }
        }

        [DisplayName("Allow Bank Ind"), Column("AllowBank_ind"), Size(1), NotNull]
        public String AllowBankInd
        {
            get { return Fields.AllowBankInd[this]; }
            set { Fields.AllowBankInd[this] = value; }
        }

        [DisplayName("Bank Account Bal Amt"), Column("Bank_Account_Bal_amt"), Size(12), Scale(2), NotNull]
        public Decimal? BankAccountBalAmt
        {
            get { return Fields.BankAccountBalAmt[this]; }
            set { Fields.BankAccountBalAmt[this] = value; }
        }

        [DisplayName("Bank Acct2 Amt"), Column("Bank_Acct2_amt"), Size(12), Scale(2), NotNull]
        public Decimal? BankAcct2Amt
        {
            get { return Fields.BankAcct2Amt[this]; }
            set { Fields.BankAcct2Amt[this] = value; }
        }

        [DisplayName("Payment Via Wire Ind"), Column("Payment_VIAWire_ind"), Size(1), NotNull]
        public String PaymentViaWireInd
        {
            get { return Fields.PaymentViaWireInd[this]; }
            set { Fields.PaymentViaWireInd[this] = value; }
        }

        [DisplayName("Consortium Region Cd"), Column("Consortium_Region_cd"), Size(1)]
        public String ConsortiumRegionCd
        {
            get { return Fields.ConsortiumRegionCd[this]; }
            set { Fields.ConsortiumRegionCd[this] = value; }
        }

        [DisplayName("Consort Rgn Num"), Column("ConsortRGN_num"), Size(6)]
        public String ConsortRgnNum
        {
            get { return Fields.ConsortRgnNum[this]; }
            set { Fields.ConsortRgnNum[this] = value; }
        }

        [DisplayName("Consortium Region Added Dt"), Column("Consortium_Region_Added_dt")]
        public DateTime? ConsortiumRegionAddedDt
        {
            get { return Fields.ConsortiumRegionAddedDt[this]; }
            set { Fields.ConsortiumRegionAddedDt[this] = value; }
        }

        [DisplayName("Required Secondary Agent Ind"), Column("Required_Secondary_Agent_ind"), Size(1), NotNull]
        public String RequiredSecondaryAgentInd
        {
            get { return Fields.RequiredSecondaryAgentInd[this]; }
            set { Fields.RequiredSecondaryAgentInd[this] = value; }
        }

        [DisplayName("Override Final Days Ind"), Column("Override_Final_Days_ind"), Size(1), NotNull]
        public String OverrideFinalDaysInd
        {
            get { return Fields.OverrideFinalDaysInd[this]; }
            set { Fields.OverrideFinalDaysInd[this] = value; }
        }

        [DisplayName("Final Days Qty"), Column("Final_Days_qty"), Size(3), NotNull]
        public Decimal? FinalDaysQty
        {
            get { return Fields.FinalDaysQty[this]; }
            set { Fields.FinalDaysQty[this] = value; }
        }

        [DisplayName("Override Option1 Days Ind"), Column("Override_Option1_Days_ind"), Size(1), NotNull]
        public String OverrideOption1DaysInd
        {
            get { return Fields.OverrideOption1DaysInd[this]; }
            set { Fields.OverrideOption1DaysInd[this] = value; }
        }

        [DisplayName("Override Option2 Days Ind"), Column("Override_Option2_Days_ind"), Size(1), NotNull]
        public String OverrideOption2DaysInd
        {
            get { return Fields.OverrideOption2DaysInd[this]; }
            set { Fields.OverrideOption2DaysInd[this] = value; }
        }

        [DisplayName("First Booking Dt"), Column("First_Booking_dt")]
        public DateTime? FirstBookingDt
        {
            get { return Fields.FirstBookingDt[this]; }
            set { Fields.FirstBookingDt[this] = value; }
        }

        [DisplayName("Agency Create Dt"), Column("Agency_Create_dt")]
        public DateTime? AgencyCreateDt
        {
            get { return Fields.AgencyCreateDt[this]; }
            set { Fields.AgencyCreateDt[this] = value; }
        }

        [DisplayName("Bdm Rep Cd"), Column("BDM_Rep_cd"), Size(2)]
        public String BdmRepCd
        {
            get { return Fields.BdmRepCd[this]; }
            set { Fields.BdmRepCd[this] = value; }
        }

        [DisplayName("Ssr Rep Cd"), Column("SSR_Rep_cd"), Size(2)]
        public String SsrRepCd
        {
            get { return Fields.SsrRepCd[this]; }
            set { Fields.SsrRepCd[this] = value; }
        }

        [DisplayName("Nvs Key Acct Ind"), Column("NVS_Key_Acct_ind"), Size(1)]
        public String NvsKeyAcctInd
        {
            get { return Fields.NvsKeyAcctInd[this]; }
            set { Fields.NvsKeyAcctInd[this] = value; }
        }

        [DisplayName("Last Updated"), NotNull]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("Key1"), Column("KEY1"), Size(4)]
        public String Key1
        {
            get { return Fields.Key1[this]; }
            set { Fields.Key1[this] = value; }
        }

        [DisplayName("Sibling Id"), Column("SiblingID")]
        public Int32? SiblingId
        {
            get { return Fields.SiblingId[this]; }
            set { Fields.SiblingId[this] = value; }
        }

        [DisplayName("Agency"), Expression("CONCAT(T0.[Agency_Cd], ' - ', T0.[Agency_Name_desc])"), LookupInclude]
        public String AgencyCdName
        {
            get { return Fields.AgencyCdName[this]; }
            set { Fields.AgencyCdName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AgencyCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AgencyCdName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AgencyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CompanyCd;
            public StringField AgencyCd;
            public StringField AttnDesc;
            public StringField AgencyNameDesc;
            public StringField Addr1;
            public StringField Addr2;
            public StringField Addr3;
            public StringField CityName;
            public StringField StateNm;
            public StringField ZipCd;
            public StringField Zip2Cd;
            public StringField Phone1Num;
            public StringField Phone2Num;
            public StringField FaxNum;
            public DecimalField CommissionPct;
            public StringField GsaInd;
            public StringField NationalAcctInd;
            public DecimalField GsaPriceLevelAmt;
            public StringField Comment1Desc;
            public StringField Comment2Desc;
            public StringField ConsortiumCd;
            public StringField IataNum;
            public StringField CliaNum;
            public DecimalField PreviousYrPaxQty;
            public DecimalField PreviousYrRevAmt;
            public DecimalField LastYearSalesAmt;
            public DecimalField CurrentYearSalesAmt;
            public StringField UserInUseById;
            public StringField KeyAcctInd;
            public StringField AgencyDefaultStatusInd;
            public StringField LastYearKeyAcctCd;
            public StringField SalesRegionCd;
            public StringField RevLabelCd;
            public StringField PseudoCityCd;
            public StringField ApolloInd;
            public StringField Country;
            public StringField CorporationInd;
            public StringField TaxIdNum;
            public StringField CorpComDesc;
            public StringField Prt1099Ind;
            public DateTimeField PrtD1099Dt;
            public DateTimeField TaxInfoReceivedDt;
            public StringField InsDefaultCd;
            public StringField GdsSysCd;
            public StringField AllowPlatInd;
            public StringField AllowSdbdInd;
            public StringField AllowGpInd;
            public StringField MahanaClubInd;
            public StringField McActiveInd;
            public StringField EMemberDesc;
            public StringField AgencyStatusCd;
            public StringField CurrencyCd;
            public StringField SecondaryCurrencyCd;
            public StringField OfficeCd;
            public StringField AgencyEmail;
            public StringField AgencyWebAddress;
            public StringField PromoAdInd;
            public StringField VatId;
            public StringField SelfBillInd;
            public StringField PreferredCommunicationCd;
            public StringField PreferredLanguageDesc;
            public StringField NactaNum;
            public StringField ActiveInd;
            public StringField BdmCd;
            public StringField SendCustInvInd;
            public StringField CreditAgtInd;
            public StringField AgentNum;
            public StringField PinClubInd;
            public StringField FinHoldInd;
            public DecimalField L7daysNum;
            public DecimalField Option1DueDaysQty;
            public DecimalField Option2DueDaysQty;
            public StringField AutoCxlInd;
            public DateTimeField ConsortiumAddedDt;
            public StringField MasterAgencyInd;
            public StringField OwnerCd;
            public StringField AutoEnvoInd;
            public StringField OverVacSummInd;
            public StringField VacSummEmailDesc;
            public StringField TaxPayer1099Name;
            public StringField AgentLinkDesc;
            public StringField AllowBankInd;
            public DecimalField BankAccountBalAmt;
            public DecimalField BankAcct2Amt;
            public StringField PaymentViaWireInd;
            public StringField ConsortiumRegionCd;
            public StringField ConsortRgnNum;
            public DateTimeField ConsortiumRegionAddedDt;
            public StringField RequiredSecondaryAgentInd;
            public StringField OverrideFinalDaysInd;
            public DecimalField FinalDaysQty;
            public StringField OverrideOption1DaysInd;
            public StringField OverrideOption2DaysInd;
            public DateTimeField FirstBookingDt;
            public DateTimeField AgencyCreateDt;
            public StringField BdmRepCd;
            public StringField SsrRepCd;
            public StringField NvsKeyAcctInd;
            public DateTimeField LastUpdated;
            public StringField Key1;
            public Int32Field SiblingId;


            public StringField AgencyCdName;
        }
    }
}
