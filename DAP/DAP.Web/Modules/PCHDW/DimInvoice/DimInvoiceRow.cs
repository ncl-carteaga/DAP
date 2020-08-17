
namespace DAP.PCHDW.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHDW"), TableName("[dbo].[dim_invoice]")]
    [DisplayName("Dim Invoice"), InstanceName("Dim Invoice")]
    [ReadPermission(PermissionKeys.ConfigAdmin)]
    [ModifyPermission(PermissionKeys.ConfigAdmin)]
    [DataAuditLog]
    public sealed class DimInvoiceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Invoice Tk"), Column("invoice_tk"), Identity, Visible(false)]
        public Int32? InvoiceTk
        {
            get { return Fields.InvoiceTk[this]; }
            set { Fields.InvoiceTk[this] = value; }
        }

        [DisplayName("Invoice Num"), Column("invoice_num"), Size(10), NotNull, QuickSearch, Updatable(false)]
        public String InvoiceNum
        {
            get { return Fields.InvoiceNum[this]; }
            set { Fields.InvoiceNum[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull, QuickFilter, Updatable(false)]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Passenger Qty"), Column("passenger_qty"), Visible(false)]
        public Int32? PassengerQty
        {
            get { return Fields.PassengerQty[this]; }
            set { Fields.PassengerQty[this] = value; }
        }

        [DisplayName("Nonrev Passenger Qty"), Column("nonrev_passenger_qty"), Visible(false)]
        public Int32? NonrevPassengerQty
        {
            get { return Fields.NonrevPassengerQty[this]; }
            set { Fields.NonrevPassengerQty[this] = value; }
        }

        [DisplayName("Nontax Passenger Qty"), Column("nontax_passenger_qty"), NotNull, Visible(false)]
        public Int32? NontaxPassengerQty
        {
            get { return Fields.NontaxPassengerQty[this]; }
            set { Fields.NontaxPassengerQty[this] = value; }
        }

        [DisplayName("Office Cd"), Column("office_cd"), Size(10), Visible(false)]
        public String OfficeCd
        {
            get { return Fields.OfficeCd[this]; }
            set { Fields.OfficeCd[this] = value; }
        }

        [DisplayName("Office Desc"), Column("office_desc"), Size(60), Visible(false)]
        public String OfficeDesc
        {
            get { return Fields.OfficeDesc[this]; }
            set { Fields.OfficeDesc[this] = value; }
        }

        [DisplayName("Currency Cd"), Column("currency_cd"), Size(5), Updatable(false)]
        public String CurrencyCd
        {
            get { return Fields.CurrencyCd[this]; }
            set { Fields.CurrencyCd[this] = value; }
        }

        [DisplayName("Currency Desc"), Column("currency_desc"), Size(60), Visible(false)]
        public String CurrencyDesc
        {
            get { return Fields.CurrencyDesc[this]; }
            set { Fields.CurrencyDesc[this] = value; }
        }

        [DisplayName("Status Cd"), Column("status_cd"), Size(5), Updatable(false)]
        public String StatusCd
        {
            get { return Fields.StatusCd[this]; }
            set { Fields.StatusCd[this] = value; }
        }

        [DisplayName("Status Desc"), Column("status_desc"), Size(60),Visible(false)]
        public String StatusDesc
        {
            get { return Fields.StatusDesc[this]; }
            set { Fields.StatusDesc[this] = value; }
        }

        [DisplayName("Zip Cd"), Column("zip_cd"), Size(10), Visible(false)]
        public String ZipCd
        {
            get { return Fields.ZipCd[this]; }
            set { Fields.ZipCd[this] = value; }
        }

        [DisplayName("City Name"), Column("city_name"), Size(35), Visible(false)]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("State Cd"), Column("state_cd"), Size(20), Visible(false)]
        public String StateCd
        {
            get { return Fields.StateCd[this]; }
            set { Fields.StateCd[this] = value; }
        }

        [DisplayName("Country Name"), Column("country_name"), Size(35), Visible(false)]
        public String CountryName
        {
            get { return Fields.CountryName[this]; }
            set { Fields.CountryName[this] = value; }
        }

        [DisplayName("Cancellation Dt"), Column("cancellation_dt"), Visible(false)]
        public DateTime? CancellationDt
        {
            get { return Fields.CancellationDt[this]; }
            set { Fields.CancellationDt[this] = value; }
        }

        [DisplayName("Bonus Savings Cd"), Column("bonus_savings_cd"), Size(3), Visible(false)]
        public String BonusSavingsCd
        {
            get { return Fields.BonusSavingsCd[this]; }
            set { Fields.BonusSavingsCd[this] = value; }
        }

        [DisplayName("Bonus Savings Desc"), Column("bonus_savings_desc"), Size(30), Visible(false)]
        public String BonusSavingsDesc
        {
            get { return Fields.BonusSavingsDesc[this]; }
            set { Fields.BonusSavingsDesc[this] = value; }
        }

        [DisplayName("Air Participation Ind"), Column("air_participation_ind"), NotNull, Visible(false)]
        public Boolean? AirParticipationInd
        {
            get { return Fields.AirParticipationInd[this]; }
            set { Fields.AirParticipationInd[this] = value; }
        }

        [DisplayName("Hotel Participation Ind"), Column("hotel_participation_ind"), NotNull, Visible(false)]
        public Boolean? HotelParticipationInd
        {
            get { return Fields.HotelParticipationInd[this]; }
            set { Fields.HotelParticipationInd[this] = value; }
        }

        [DisplayName("Pax Air Class Cd"), Column("pax_air_class_cd"), Size(20), Visible(false)]
        public String PaxAirClassCd
        {
            get { return Fields.PaxAirClassCd[this]; }
            set { Fields.PaxAirClassCd[this] = value; }
        }

        [DisplayName("Deposit Dt"), Column("deposit_dt"), Visible(false)]
        public DateTime? DepositDt
        {
            get { return Fields.DepositDt[this]; }
            set { Fields.DepositDt[this] = value; }
        }

        [DisplayName("Deposit Amt"), Column("deposit_amt"), Size(25), Visible(false)]
        public String DepositAmt
        {
            get { return Fields.DepositAmt[this]; }
            set { Fields.DepositAmt[this] = value; }
        }

        [DisplayName("User Id"), Column("user_id"), Size(10), Visible(false)]
        public String UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Pax1 First Name"), Column("pax1_first_name"), Size(30), Visible(false)]
        public String Pax1FirstName
        {
            get { return Fields.Pax1FirstName[this]; }
            set { Fields.Pax1FirstName[this] = value; }
        }

        [DisplayName("Pax1 Last Name"), Column("pax1_last_name"), Size(30), Visible(false)]
        public String Pax1LastName
        {
            get { return Fields.Pax1LastName[this]; }
            set { Fields.Pax1LastName[this] = value; }
        }

        [DisplayName("Pax2 First Name"), Column("pax2_first_name"), Size(30), Visible(false)]
        public String Pax2FirstName
        {
            get { return Fields.Pax2FirstName[this]; }
            set { Fields.Pax2FirstName[this] = value; }
        }

        [DisplayName("Pax2 Last Name"), Column("pax2_last_name"), Size(30), Visible(false)]
        public String Pax2LastName
        {
            get { return Fields.Pax2LastName[this]; }
            set { Fields.Pax2LastName[this] = value; }
        }

        [DisplayName("Cruise Tk"), Column("cruise_tk"), Updatable(false)]
        public Int32? CruiseTk
        {
            get { return Fields.CruiseTk[this]; }
            set { Fields.CruiseTk[this] = value; }
        }

        [DisplayName("Change Dt"), Column("change_dt"), Visible(false)]
        public DateTime? ChangeDt
        {
            get { return Fields.ChangeDt[this]; }
            set { Fields.ChangeDt[this] = value; }
        }

        [DisplayName("Create Dt"), Column("create_dt"), Visible(false)]
        public DateTime? CreateDt
        {
            get { return Fields.CreateDt[this]; }
            set { Fields.CreateDt[this] = value; }
        }

        [DisplayName("First Payment Dt"), Column("first_payment_dt")]
        public DateTime? FirstPaymentDt
        {
            get { return Fields.FirstPaymentDt[this]; }
            set { Fields.FirstPaymentDt[this] = value; }
        }

        [DisplayName("Final Payment Due Dt"), Column("final_payment_due_dt"), Visible(false)]
        public DateTime? FinalPaymentDueDt
        {
            get { return Fields.FinalPaymentDueDt[this]; }
            set { Fields.FinalPaymentDueDt[this] = value; }
        }

        [DisplayName("Initial Waitlist Ind"), Column("initial_waitlist_ind"), Visible(false)]
        public Boolean? InitialWaitlistInd
        {
            get { return Fields.InitialWaitlistInd[this]; }
            set { Fields.InitialWaitlistInd[this] = value; }
        }

        [DisplayName("Cancel Booking Status Cd"), Column("cancel_booking_status_cd"), Size(15), Visible(false)]
        public String CancelBookingStatusCd
        {
            get { return Fields.CancelBookingStatusCd[this]; }
            set { Fields.CancelBookingStatusCd[this] = value; }
        }

        [DisplayName("Sales Source Cd"), Column("sales_source_cd"), Size(4), Visible(false)]
        public String SalesSourceCd
        {
            get { return Fields.SalesSourceCd[this]; }
            set { Fields.SalesSourceCd[this] = value; }
        }

        [DisplayName("Sales Source Desc"), Column("sales_source_desc"), Size(55), Visible(false)]
        public String SalesSourceDesc
        {
            get { return Fields.SalesSourceDesc[this]; }
            set { Fields.SalesSourceDesc[this] = value; }
        }

        [DisplayName("Original Consortium Cd"), Column("original_consortium_cd"), Size(8), Visible(false)]
        public String OriginalConsortiumCd
        {
            get { return Fields.OriginalConsortiumCd[this]; }
            set { Fields.OriginalConsortiumCd[this] = value; }
        }

        [DisplayName("Original Consortium Desc"), Column("original_consortium_desc"), Size(50), Visible(false)]
        public String OriginalConsortiumDesc
        {
            get { return Fields.OriginalConsortiumDesc[this]; }
            set { Fields.OriginalConsortiumDesc[this] = value; }
        }

        [DisplayName("User Name"), Column("user_name"), Size(50), Visible(false)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Original User Id"), Column("original_user_id"), Size(10), Visible(false)]
        public String OriginalUserId
        {
            get { return Fields.OriginalUserId[this]; }
            set { Fields.OriginalUserId[this] = value; }
        }

        [DisplayName("Original User Name"), Column("original_user_name"), Size(50), Visible(false)]
        public String OriginalUserName
        {
            get { return Fields.OriginalUserName[this]; }
            set { Fields.OriginalUserName[this] = value; }
        }

        [DisplayName("Original Dept Cd"), Column("original_dept_cd"), Size(5), Visible(false)]
        public String OriginalDeptCd
        {
            get { return Fields.OriginalDeptCd[this]; }
            set { Fields.OriginalDeptCd[this] = value; }
        }

        [DisplayName("Original Dept Name"), Column("original_dept_name"), Size(60), Visible(false)]
        public String OriginalDeptName
        {
            get { return Fields.OriginalDeptName[this]; }
            set { Fields.OriginalDeptName[this] = value; }
        }

        [DisplayName("Original User Active Ind"), Column("original_user_active_ind"), Size(1), Visible(false)]
        public String OriginalUserActiveInd
        {
            get { return Fields.OriginalUserActiveInd[this]; }
            set { Fields.OriginalUserActiveInd[this] = value; }
        }

        [DisplayName("Waitlist Dt"), Column("waitlist_dt"), Visible(false)]
        public DateTime? WaitlistDt
        {
            get { return Fields.WaitlistDt[this]; }
            set { Fields.WaitlistDt[this] = value; }
        }

        [DisplayName("First Confirm Dt"), Column("first_confirm_dt")]
        public DateTime? FirstConfirmDt
        {
            get { return Fields.FirstConfirmDt[this]; }
            set { Fields.FirstConfirmDt[this] = value; }
        }

        [DisplayName("Past Guest Ind"), Column("past_guest_ind"), Visible(false)]
        public Int32? PastGuestInd
        {
            get { return Fields.PastGuestInd[this]; }
            set { Fields.PastGuestInd[this] = value; }
        }

        [DisplayName("Direct Booking Ind"), Column("direct_booking_ind"), Size(1), Visible(false)]
        public String DirectBookingInd
        {
            get { return Fields.DirectBookingInd[this]; }
            set { Fields.DirectBookingInd[this] = value; }
        }

        [DisplayName("Attn Name"), Column("attn_name"), Size(255), Visible(false)]
        public String AttnName
        {
            get { return Fields.AttnName[this]; }
            set { Fields.AttnName[this] = value; }
        }

        [DisplayName("Combo Booking Ind"), Column("combo_booking_ind"), Size(1), Visible(false)]
        public String ComboBookingInd
        {
            get { return Fields.ComboBookingInd[this]; }
            set { Fields.ComboBookingInd[this] = value; }
        }

        [DisplayName("Onboard Type Desc"), Column("onboard_type_desc"), Size(75), Visible(false)]
        public String OnboardTypeDesc
        {
            get { return Fields.OnboardTypeDesc[this]; }
            set { Fields.OnboardTypeDesc[this] = value; }
        }

        [DisplayName("Cruise Svc Mgmt Cr Num"), Column("cruise_svc_mgmt_cr_num"), Size(10), Visible(false)]
        public String CruiseSvcMgmtCrNum
        {
            get { return Fields.CruiseSvcMgmtCrNum[this]; }
            set { Fields.CruiseSvcMgmtCrNum[this] = value; }
        }

        [DisplayName("Promo Cd"), Column("promo_cd"), Size(25), Visible(false)]
        public String PromoCd
        {
            get { return Fields.PromoCd[this]; }
            set { Fields.PromoCd[this] = value; }
        }

        [DisplayName("Gds System Cd"), Column("gds_system_cd"), Size(25), Visible(false)]
        public String GdsSystemCd
        {
            get { return Fields.GdsSystemCd[this]; }
            set { Fields.GdsSystemCd[this] = value; }
        }

        [DisplayName("Gds System Desc"), Column("gds_system_desc"), Size(150), Visible(false)]
        public String GdsSystemDesc
        {
            get { return Fields.GdsSystemDesc[this]; }
            set { Fields.GdsSystemDesc[this] = value; }
        }

        [DisplayName("Promo Desc"), Column("promo_desc"), Size(30), Visible(false)]
        public String PromoDesc
        {
            get { return Fields.PromoDesc[this]; }
            set { Fields.PromoDesc[this] = value; }
        }

        [DisplayName("Cancellation Type"), Column("cancellation_type"), Size(50), Visible(false)]
        public String CancellationType
        {
            get { return Fields.CancellationType[this]; }
            set { Fields.CancellationType[this] = value; }
        }

        [DisplayName("Channel Tk"), Column("channel_tk"), Visible(false)]
        public Int32? ChannelTk
        {
            get { return Fields.ChannelTk[this]; }
            set { Fields.ChannelTk[this] = value; }
        }

        [DisplayName("Promo Bonus Comm"), Column("promo_bonus_comm"), Size(1), Visible(false)]
        public String PromoBonusComm
        {
            get { return Fields.PromoBonusComm[this]; }
            set { Fields.PromoBonusComm[this] = value; }
        }

        [DisplayName("Promo Comm Amt"), Column("promo_comm_amt"), Size(7), Scale(2), Visible(false)]
        public Decimal? PromoCommAmt
        {
            get { return Fields.PromoCommAmt[this]; }
            set { Fields.PromoCommAmt[this] = value; }
        }

        [DisplayName("Combo Leg Qty"), Column("combo_leg_qty"), Size(3), Visible(false)]
        public Decimal? ComboLegQty
        {
            get { return Fields.ComboLegQty[this]; }
            set { Fields.ComboLegQty[this] = value; }
        }

        [DisplayName("Cancel Reason"), Column("cancel_reason"), Size(30), Visible(false)]
        public String CancelReason
        {
            get { return Fields.CancelReason[this]; }
            set { Fields.CancelReason[this] = value; }
        }

        [DisplayName("Paid Class Cd"), Column("paid_class_cd"), Size(15), Visible(false)]
        public String PaidClassCd
        {
            get { return Fields.PaidClassCd[this]; }
            set { Fields.PaidClassCd[this] = value; }
        }

        [DisplayName("Paid Class Category Desc"), Column("paid_class_category_desc"), Size(120), Visible(false)]
        public String PaidClassCategoryDesc
        {
            get { return Fields.PaidClassCategoryDesc[this]; }
            set { Fields.PaidClassCategoryDesc[this] = value; }
        }

        [DisplayName("Oci Office Cd"), Column("oci_office_cd"), Size(3), Visible(false)]
        public String OciOfficeCd
        {
            get { return Fields.OciOfficeCd[this]; }
            set { Fields.OciOfficeCd[this] = value; }
        }

        [DisplayName("Air Xfer Fee Amt"), Column("air_xfer_fee_amt"), Size(12), Scale(2), Visible(false)]
        public Decimal? AirXferFeeAmt
        {
            get { return Fields.AirXferFeeAmt[this]; }
            set { Fields.AirXferFeeAmt[this] = value; }
        }

        [DisplayName("Country Cd"), Column("country_cd"), Size(10), Visible(false)]
        public String CountryCd
        {
            get { return Fields.CountryCd[this]; }
            set { Fields.CountryCd[this] = value; }
        }

        [DisplayName("Future Deposit Flag"), Column("future_deposit_flag"), Size(1), Visible(false)]
        public String FutureDepositFlag
        {
            get { return Fields.FutureDepositFlag[this]; }
            set { Fields.FutureDepositFlag[this] = value; }
        }

        [DisplayName("Promotional Amenity Cd"), Column("promotional_amenity_cd"), Size(15), Visible(false)]
        public String PromotionalAmenityCd
        {
            get { return Fields.PromotionalAmenityCd[this]; }
            set { Fields.PromotionalAmenityCd[this] = value; }
        }

        [DisplayName("Cruise Commission Amt"), Column("cruise_commission_amt"), Size(12), Scale(2), Visible(false)]
        public Decimal? CruiseCommissionAmt
        {
            get { return Fields.CruiseCommissionAmt[this]; }
            set { Fields.CruiseCommissionAmt[this] = value; }
        }

        [DisplayName("Posted Invoice Dt"), Column("posted_invoice_dt"), Visible(false)]
        public DateTime? PostedInvoiceDt
        {
            get { return Fields.PostedInvoiceDt[this]; }
            set { Fields.PostedInvoiceDt[this] = value; }
        }

        [DisplayName("Agent Tk"), Column("agent_tk"), Visible(false)]
        public Int32? AgentTk
        {
            get { return Fields.AgentTk[this]; }
            set { Fields.AgentTk[this] = value; }
        }

        [DisplayName("Cinvoice1 Num"), Column("cinvoice1_num"), Size(10), Visible(false)]
        public String Cinvoice1Num
        {
            get { return Fields.Cinvoice1Num[this]; }
            set { Fields.Cinvoice1Num[this] = value; }
        }

        [DisplayName("Cinvoice2 Num"), Column("cinvoice2_num"), Size(10), Visible(false)]
        public String Cinvoice2Num
        {
            get { return Fields.Cinvoice2Num[this]; }
            set { Fields.Cinvoice2Num[this] = value; }
        }

        [DisplayName("Cinvoice3 Num"), Column("cinvoice3_num"), Size(10), Visible(false)]
        public String Cinvoice3Num
        {
            get { return Fields.Cinvoice3Num[this]; }
            set { Fields.Cinvoice3Num[this] = value; }
        }

        [DisplayName("Cinvoice4 Num"), Column("cinvoice4_num"), Size(10), Visible(false)]
        public String Cinvoice4Num
        {
            get { return Fields.Cinvoice4Num[this]; }
            set { Fields.Cinvoice4Num[this] = value; }
        }

        [DisplayName("Cinvoice5 Num"), Column("cinvoice5_num"), Size(10), Visible(false)]
        public String Cinvoice5Num
        {
            get { return Fields.Cinvoice5Num[this]; }
            set { Fields.Cinvoice5Num[this] = value; }
        }

        [DisplayName("Cinvoice6 Num"), Column("cinvoice6_num"), Size(10), Visible(false)]
        public String Cinvoice6Num
        {
            get { return Fields.Cinvoice6Num[this]; }
            set { Fields.Cinvoice6Num[this] = value; }
        }

        [DisplayName("Package Cd"), Column("package_cd"), Size(3), Visible(false)]
        public String PackageCd
        {
            get { return Fields.PackageCd[this]; }
            set { Fields.PackageCd[this] = value; }
        }

        [DisplayName("Land Package Participant Qty"), Column("land_package_participant_qty"), Visible(false)]
        public Int32? LandPackageParticipantQty
        {
            get { return Fields.LandPackageParticipantQty[this]; }
            set { Fields.LandPackageParticipantQty[this] = value; }
        }

        [DisplayName("Land Package Participant Ind"), Column("land_package_participant_ind"), Size(1), Visible(false)]
        public String LandPackageParticipantInd
        {
            get { return Fields.LandPackageParticipantInd[this]; }
            set { Fields.LandPackageParticipantInd[this] = value; }
        }

        [DisplayName("Dptr Flight Qty"), Column("dptr_flight_qty"), Visible(false)]
        public Int32? DptrFlightQty
        {
            get { return Fields.DptrFlightQty[this]; }
            set { Fields.DptrFlightQty[this] = value; }
        }

        [DisplayName("Rtrn Flight Qty"), Column("rtrn_flight_qty"), Visible(false)]
        public Int32? RtrnFlightQty
        {
            get { return Fields.RtrnFlightQty[this]; }
            set { Fields.RtrnFlightQty[this] = value; }
        }

        [DisplayName("Dptr Flight Class Cd"), Column("dptr_flight_class_cd"), Size(10), Visible(false)]
        public String DptrFlightClassCd
        {
            get { return Fields.DptrFlightClassCd[this]; }
            set { Fields.DptrFlightClassCd[this] = value; }
        }

        [DisplayName("Rtrn Flight Class Cd"), Column("rtrn_flight_class_cd"), Size(10), Visible(false)]
        public String RtrnFlightClassCd
        {
            get { return Fields.RtrnFlightClassCd[this]; }
            set { Fields.RtrnFlightClassCd[this] = value; }
        }

        [DisplayName("Air Cost Source Cd"), Column("air_cost_source_cd"), Size(10), Visible(false)]
        public String AirCostSourceCd
        {
            get { return Fields.AirCostSourceCd[this]; }
            set { Fields.AirCostSourceCd[this] = value; }
        }

        [DisplayName("Channel Country Cd"), Column("channel_country_cd"), Size(10), Visible(false)]
        public String ChannelCountryCd
        {
            get { return Fields.ChannelCountryCd[this]; }
            set { Fields.ChannelCountryCd[this] = value; }
        }

        [DisplayName("Channel Country Name"), Column("channel_country_name"), Size(100), Visible(false)]
        public String ChannelCountryName
        {
            get { return Fields.ChannelCountryName[this]; }
            set { Fields.ChannelCountryName[this] = value; }
        }

        [DisplayName("Pax1 Airport Home1 Cd"), Column("pax1_airport_home1_cd"), Size(15), Visible(false)]
        public String Pax1AirportHome1Cd
        {
            get { return Fields.Pax1AirportHome1Cd[this]; }
            set { Fields.Pax1AirportHome1Cd[this] = value; }
        }

        [DisplayName("Pax1 Airport Rtrn1 Cd"), Column("pax1_airport_rtrn1_cd"), Size(15), Visible(false)]
        public String Pax1AirportRtrn1Cd
        {
            get { return Fields.Pax1AirportRtrn1Cd[this]; }
            set { Fields.Pax1AirportRtrn1Cd[this] = value; }
        }

        [DisplayName("Pax1 First Flight Class"), Column("pax1_first_flight_class"), Size(15), Visible(false)]
        public String Pax1FirstFlightClass
        {
            get { return Fields.Pax1FirstFlightClass[this]; }
            set { Fields.Pax1FirstFlightClass[this] = value; }
        }

        [DisplayName("Pax1 Rtrn Flight Class"), Column("pax1_rtrn_flight_class"), Size(15), Visible(false)]
        public String Pax1RtrnFlightClass
        {
            get { return Fields.Pax1RtrnFlightClass[this]; }
            set { Fields.Pax1RtrnFlightClass[this] = value; }
        }

        [DisplayName("Pax2 Airport Home1 Cd"), Column("pax2_airport_home1_cd"), Size(15), Visible(false)]
        public String Pax2AirportHome1Cd
        {
            get { return Fields.Pax2AirportHome1Cd[this]; }
            set { Fields.Pax2AirportHome1Cd[this] = value; }
        }

        [DisplayName("Pax2 Airport Rtrn1 Cd"), Column("pax2_airport_rtrn1_cd"), Size(15), Visible(false)]
        public String Pax2AirportRtrn1Cd
        {
            get { return Fields.Pax2AirportRtrn1Cd[this]; }
            set { Fields.Pax2AirportRtrn1Cd[this] = value; }
        }

        [DisplayName("Pax2 First Flight Class"), Column("pax2_first_flight_class"), Size(15), Visible(false)]
        public String Pax2FirstFlightClass
        {
            get { return Fields.Pax2FirstFlightClass[this]; }
            set { Fields.Pax2FirstFlightClass[this] = value; }
        }

        [DisplayName("Pax2 Rtrn Flight Class"), Column("pax2_rtrn_flight_class"), Size(10), Visible(false)]
        public String Pax2RtrnFlightClass
        {
            get { return Fields.Pax2RtrnFlightClass[this]; }
            set { Fields.Pax2RtrnFlightClass[this] = value; }
        }

        [DisplayName("Pax1 Loyalty Level Nm"), Column("pax1_loyalty_level_nm"), Size(20), Visible(false)]
        public String Pax1LoyaltyLevelNm
        {
            get { return Fields.Pax1LoyaltyLevelNm[this]; }
            set { Fields.Pax1LoyaltyLevelNm[this] = value; }
        }

        [DisplayName("Pax2 Loyalty Level Nm"), Column("pax2_loyalty_level_nm"), Size(20), Visible(false)]
        public String Pax2LoyaltyLevelNm
        {
            get { return Fields.Pax2LoyaltyLevelNm[this]; }
            set { Fields.Pax2LoyaltyLevelNm[this] = value; }
        }

        [DisplayName("Installment Plan Ind"), Column("installment_plan_ind"), Size(1), Visible(false)]
        public String InstallmentPlanInd
        {
            get { return Fields.InstallmentPlanInd[this]; }
            set { Fields.InstallmentPlanInd[this] = value; }
        }

        [DisplayName("Installment Plan Num"), Column("installment_plan_num"), Visible(false)]
        public Int32? InstallmentPlanNum
        {
            get { return Fields.InstallmentPlanNum[this]; }
            set { Fields.InstallmentPlanNum[this] = value; }
        }

        [DisplayName("Cruise Svc Mgmt Id"), Column("cruise_svc_mgmt_id"), Size(100), Visible(false)]
        public String CruiseSvcMgmtId
        {
            get { return Fields.CruiseSvcMgmtId[this]; }
            set { Fields.CruiseSvcMgmtId[this] = value; }
        }

        [DisplayName("Outbound Reporting Region Cd"), Column("outbound_reporting_region_cd"), Size(150), Visible(false)]
        public String OutboundReportingRegionCd
        {
            get { return Fields.OutboundReportingRegionCd[this]; }
            set { Fields.OutboundReportingRegionCd[this] = value; }
        }

        [DisplayName("Centurion Cd"), Column("centurion_cd"), Size(150), Visible(false)]
        public String CenturionCd
        {
            get { return Fields.CenturionCd[this]; }
            set { Fields.CenturionCd[this] = value; }
        }

        [DisplayName("Centurion Ind"), Column("centurion_ind"), Size(150), Visible(false)]
        public String CenturionInd
        {
            get { return Fields.CenturionInd[this]; }
            set { Fields.CenturionInd[this] = value; }
        }

        [DisplayName("Platinum Cd"), Column("platinum_cd"), Size(150), Visible(false)]
        public String PlatinumCd
        {
            get { return Fields.PlatinumCd[this]; }
            set { Fields.PlatinumCd[this] = value; }
        }

        [DisplayName("Platinum Ind"), Column("platinum_ind"), Size(150), Visible(false)]
        public String PlatinumInd
        {
            get { return Fields.PlatinumInd[this]; }
            set { Fields.PlatinumInd[this] = value; }
        }

        [DisplayName("Dw Past Guest Ind"), Column("dw_past_guest_ind"), Size(150), Visible(false)]
        public String DwPastGuestInd
        {
            get { return Fields.DwPastGuestInd[this]; }
            set { Fields.DwPastGuestInd[this] = value; }
        }

        [DisplayName("Dw Past Guest1 Ind"), Column("dw_past_guest1_ind"), Size(2), Visible(false)]
        public String DwPastGuest1Ind
        {
            get { return Fields.DwPastGuest1Ind[this]; }
            set { Fields.DwPastGuest1Ind[this] = value; }
        }

        [DisplayName("Dw Past Guest2 Ind"), Column("dw_past_guest2_ind"), Size(2), Visible(false)]
        public String DwPastGuest2Ind
        {
            get { return Fields.DwPastGuest2Ind[this]; }
            set { Fields.DwPastGuest2Ind[this] = value; }
        }

        [DisplayName("Pax1 Nvs Pg Ind"), Column("pax1_nvs_pg_ind"), Size(1), Visible(false)]
        public String Pax1NvsPgInd
        {
            get { return Fields.Pax1NvsPgInd[this]; }
            set { Fields.Pax1NvsPgInd[this] = value; }
        }

        [DisplayName("Pax2 Nvs Pg Ind"), Column("pax2_nvs_pg_ind"), Size(1), Visible(false)]
        public String Pax2NvsPgInd
        {
            get { return Fields.Pax2NvsPgInd[this]; }
            set { Fields.Pax2NvsPgInd[this] = value; }
        }

        [DisplayName("Nvs Pg Ind"), Column("nvs_pg_ind"), Size(1), Visible(false)]
        public String NvsPgInd
        {
            get { return Fields.NvsPgInd[this]; }
            set { Fields.NvsPgInd[this] = value; }
        }

        [DisplayName("Current Package Cd"), Column("current_package_cd"), Size(15), Visible(false)]
        public String CurrentPackageCd
        {
            get { return Fields.CurrentPackageCd[this]; }
            set { Fields.CurrentPackageCd[this] = value; }
        }

        [DisplayName("Mpcard Num Pax1"), Column("mpcard_num_pax1"), Size(100), Visible(false)]
        public String MpcardNumPax1
        {
            get { return Fields.MpcardNumPax1[this]; }
            set { Fields.MpcardNumPax1[this] = value; }
        }

        [DisplayName("Current Loyalty Level Pax1"), Column("current_loyalty_level_pax1"), Size(50), Visible(false)]
        public String CurrentLoyaltyLevelPax1
        {
            get { return Fields.CurrentLoyaltyLevelPax1[this]; }
            set { Fields.CurrentLoyaltyLevelPax1[this] = value; }
        }

        [DisplayName("Mpcard Num Pax2"), Column("mpcard_num_pax2"), Size(100), Visible(false)]
        public String MpcardNumPax2
        {
            get { return Fields.MpcardNumPax2[this]; }
            set { Fields.MpcardNumPax2[this] = value; }
        }

        [DisplayName("Current Loyalty Level Pax2"), Column("current_loyalty_level_pax2"), Size(50), Visible(false)]
        public String CurrentLoyaltyLevelPax2
        {
            get { return Fields.CurrentLoyaltyLevelPax2[this]; }
            set { Fields.CurrentLoyaltyLevelPax2[this] = value; }
        }

        [DisplayName("Fcc Deferred Ind"), Column("fcc_deferred_ind"), Size(1), Visible(false)]
        public String FccDeferredInd
        {
            get { return Fields.FccDeferredInd[this]; }
            set { Fields.FccDeferredInd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InvoiceTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceNum; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DimInvoiceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field InvoiceTk;
            public StringField InvoiceNum;
            public StringField CompanyCd;
            public Int32Field PassengerQty;
            public Int32Field NonrevPassengerQty;
            public Int32Field NontaxPassengerQty;
            public StringField OfficeCd;
            public StringField OfficeDesc;
            public StringField CurrencyCd;
            public StringField CurrencyDesc;
            public StringField StatusCd;
            public StringField StatusDesc;
            public StringField ZipCd;
            public StringField CityName;
            public StringField StateCd;
            public StringField CountryName;
            public DateTimeField CancellationDt;
            public StringField BonusSavingsCd;
            public StringField BonusSavingsDesc;
            public BooleanField AirParticipationInd;
            public BooleanField HotelParticipationInd;
            public StringField PaxAirClassCd;
            public DateTimeField DepositDt;
            public StringField DepositAmt;
            public StringField UserId;
            public StringField Pax1FirstName;
            public StringField Pax1LastName;
            public StringField Pax2FirstName;
            public StringField Pax2LastName;
            public Int32Field CruiseTk;
            public DateTimeField ChangeDt;
            public DateTimeField CreateDt;
            public DateTimeField FirstPaymentDt;
            public DateTimeField FinalPaymentDueDt;
            public BooleanField InitialWaitlistInd;
            public StringField CancelBookingStatusCd;
            public StringField SalesSourceCd;
            public StringField SalesSourceDesc;
            public StringField OriginalConsortiumCd;
            public StringField OriginalConsortiumDesc;
            public StringField UserName;
            public StringField OriginalUserId;
            public StringField OriginalUserName;
            public StringField OriginalDeptCd;
            public StringField OriginalDeptName;
            public StringField OriginalUserActiveInd;
            public DateTimeField WaitlistDt;
            public DateTimeField FirstConfirmDt;
            public Int32Field PastGuestInd;
            public StringField DirectBookingInd;
            public StringField AttnName;
            public StringField ComboBookingInd;
            public StringField OnboardTypeDesc;
            public StringField CruiseSvcMgmtCrNum;
            public StringField PromoCd;
            public StringField GdsSystemCd;
            public StringField GdsSystemDesc;
            public StringField PromoDesc;
            public StringField CancellationType;
            public Int32Field ChannelTk;
            public StringField PromoBonusComm;
            public DecimalField PromoCommAmt;
            public DecimalField ComboLegQty;
            public StringField CancelReason;
            public StringField PaidClassCd;
            public StringField PaidClassCategoryDesc;
            public StringField OciOfficeCd;
            public DecimalField AirXferFeeAmt;
            public StringField CountryCd;
            public StringField FutureDepositFlag;
            public StringField PromotionalAmenityCd;
            public DecimalField CruiseCommissionAmt;
            public DateTimeField PostedInvoiceDt;
            public Int32Field AgentTk;
            public StringField Cinvoice1Num;
            public StringField Cinvoice2Num;
            public StringField Cinvoice3Num;
            public StringField Cinvoice4Num;
            public StringField Cinvoice5Num;
            public StringField Cinvoice6Num;
            public StringField PackageCd;
            public Int32Field LandPackageParticipantQty;
            public StringField LandPackageParticipantInd;
            public Int32Field DptrFlightQty;
            public Int32Field RtrnFlightQty;
            public StringField DptrFlightClassCd;
            public StringField RtrnFlightClassCd;
            public StringField AirCostSourceCd;
            public StringField ChannelCountryCd;
            public StringField ChannelCountryName;
            public StringField Pax1AirportHome1Cd;
            public StringField Pax1AirportRtrn1Cd;
            public StringField Pax1FirstFlightClass;
            public StringField Pax1RtrnFlightClass;
            public StringField Pax2AirportHome1Cd;
            public StringField Pax2AirportRtrn1Cd;
            public StringField Pax2FirstFlightClass;
            public StringField Pax2RtrnFlightClass;
            public StringField Pax1LoyaltyLevelNm;
            public StringField Pax2LoyaltyLevelNm;
            public StringField InstallmentPlanInd;
            public Int32Field InstallmentPlanNum;
            public StringField CruiseSvcMgmtId;
            public StringField OutboundReportingRegionCd;
            public StringField CenturionCd;
            public StringField CenturionInd;
            public StringField PlatinumCd;
            public StringField PlatinumInd;
            public StringField DwPastGuestInd;
            public StringField DwPastGuest1Ind;
            public StringField DwPastGuest2Ind;
            public StringField Pax1NvsPgInd;
            public StringField Pax2NvsPgInd;
            public StringField NvsPgInd;
            public StringField CurrentPackageCd;
            public StringField MpcardNumPax1;
            public StringField CurrentLoyaltyLevelPax1;
            public StringField MpcardNumPax2;
            public StringField CurrentLoyaltyLevelPax2;
            public StringField FccDeferredInd;
        }
    }
}
