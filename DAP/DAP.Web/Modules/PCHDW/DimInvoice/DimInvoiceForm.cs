
namespace DAP.PCHDW.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHDW.DimInvoice")]
    [BasedOnRow(typeof(Entities.DimInvoiceRow), CheckNames = true)]
    public class DimInvoiceForm
    {
        public String InvoiceNum { get; set; }
        public String CompanyCd { get; set; }
        public Int32 PassengerQty { get; set; }
        public Int32 NonrevPassengerQty { get; set; }
        public Int32 NontaxPassengerQty { get; set; }
        public String OfficeCd { get; set; }
        public String OfficeDesc { get; set; }
        public String CurrencyCd { get; set; }
        public String CurrencyDesc { get; set; }
        public String StatusCd { get; set; }
        public String StatusDesc { get; set; }
        public String ZipCd { get; set; }
        public String CityName { get; set; }
        public String StateCd { get; set; }
        public String CountryName { get; set; }
        public DateTime CancellationDt { get; set; }
        public String BonusSavingsCd { get; set; }
        public String BonusSavingsDesc { get; set; }
        public Boolean AirParticipationInd { get; set; }
        public Boolean HotelParticipationInd { get; set; }
        public String PaxAirClassCd { get; set; }
        public DateTime DepositDt { get; set; }
        public String DepositAmt { get; set; }
        public String UserId { get; set; }
        public String Pax1FirstName { get; set; }
        public String Pax1LastName { get; set; }
        public String Pax2FirstName { get; set; }
        public String Pax2LastName { get; set; }
        public Int32 CruiseTk { get; set; }
        public DateTime ChangeDt { get; set; }
        public DateTime CreateDt { get; set; }
        public DateTime FirstPaymentDt { get; set; }
        public DateTime FinalPaymentDueDt { get; set; }
        public Boolean InitialWaitlistInd { get; set; }
        public String CancelBookingStatusCd { get; set; }
        public String SalesSourceCd { get; set; }
        public String SalesSourceDesc { get; set; }
        public String OriginalConsortiumCd { get; set; }
        public String OriginalConsortiumDesc { get; set; }
        public String UserName { get; set; }
        public String OriginalUserId { get; set; }
        public String OriginalUserName { get; set; }
        public String OriginalDeptCd { get; set; }
        public String OriginalDeptName { get; set; }
        public String OriginalUserActiveInd { get; set; }
        public DateTime WaitlistDt { get; set; }
        public DateTime FirstConfirmDt { get; set; }
        public Int32 PastGuestInd { get; set; }
        public String DirectBookingInd { get; set; }
        public String AttnName { get; set; }
        public String ComboBookingInd { get; set; }
        public String OnboardTypeDesc { get; set; }
        public String CruiseSvcMgmtCrNum { get; set; }
        public String PromoCd { get; set; }
        public String GdsSystemCd { get; set; }
        public String GdsSystemDesc { get; set; }
        public String PromoDesc { get; set; }
        public String CancellationType { get; set; }
        public Int32 ChannelTk { get; set; }
        public String PromoBonusComm { get; set; }
        public Decimal PromoCommAmt { get; set; }
        public Decimal ComboLegQty { get; set; }
        public String CancelReason { get; set; }
        public String PaidClassCd { get; set; }
        public String PaidClassCategoryDesc { get; set; }
        public String OciOfficeCd { get; set; }
        public Decimal AirXferFeeAmt { get; set; }
        public String CountryCd { get; set; }
        public String FutureDepositFlag { get; set; }
        public String PromotionalAmenityCd { get; set; }
        public Decimal CruiseCommissionAmt { get; set; }
        public DateTime PostedInvoiceDt { get; set; }
        public Int32 AgentTk { get; set; }
        public String Cinvoice1Num { get; set; }
        public String Cinvoice2Num { get; set; }
        public String Cinvoice3Num { get; set; }
        public String Cinvoice4Num { get; set; }
        public String Cinvoice5Num { get; set; }
        public String Cinvoice6Num { get; set; }
        public String PackageCd { get; set; }
        public Int32 LandPackageParticipantQty { get; set; }
        public String LandPackageParticipantInd { get; set; }
        public Int32 DptrFlightQty { get; set; }
        public Int32 RtrnFlightQty { get; set; }
        public String DptrFlightClassCd { get; set; }
        public String RtrnFlightClassCd { get; set; }
        public String AirCostSourceCd { get; set; }
        public String ChannelCountryCd { get; set; }
        public String ChannelCountryName { get; set; }
        public String Pax1AirportHome1Cd { get; set; }
        public String Pax1AirportRtrn1Cd { get; set; }
        public String Pax1FirstFlightClass { get; set; }
        public String Pax1RtrnFlightClass { get; set; }
        public String Pax2AirportHome1Cd { get; set; }
        public String Pax2AirportRtrn1Cd { get; set; }
        public String Pax2FirstFlightClass { get; set; }
        public String Pax2RtrnFlightClass { get; set; }
        public String Pax1LoyaltyLevelNm { get; set; }
        public String Pax2LoyaltyLevelNm { get; set; }
        public String InstallmentPlanInd { get; set; }
        public Int32 InstallmentPlanNum { get; set; }
        public String CruiseSvcMgmtId { get; set; }
        public String OutboundReportingRegionCd { get; set; }
        public String CenturionCd { get; set; }
        public String CenturionInd { get; set; }
        public String PlatinumCd { get; set; }
        public String PlatinumInd { get; set; }
        public String DwPastGuestInd { get; set; }
        public String DwPastGuest1Ind { get; set; }
        public String DwPastGuest2Ind { get; set; }
        public String Pax1NvsPgInd { get; set; }
        public String Pax2NvsPgInd { get; set; }
        public String NvsPgInd { get; set; }
        public String CurrentPackageCd { get; set; }
        public String MpcardNumPax1 { get; set; }
        public String CurrentLoyaltyLevelPax1 { get; set; }
        public String MpcardNumPax2 { get; set; }
        public String CurrentLoyaltyLevelPax2 { get; set; }
        public String FccDeferredInd { get; set; }
    }
}