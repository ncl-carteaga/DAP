
namespace DAP.PCHDW {
    export class DimInvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'PCHDW.DimInvoice';
    }

    export interface DimInvoiceForm {
        InvoiceNum: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        PassengerQty: Serenity.IntegerEditor;
        NonrevPassengerQty: Serenity.IntegerEditor;
        NontaxPassengerQty: Serenity.IntegerEditor;
        OfficeCd: Serenity.StringEditor;
        OfficeDesc: Serenity.StringEditor;
        CurrencyCd: Serenity.StringEditor;
        CurrencyDesc: Serenity.StringEditor;
        StatusCd: Serenity.StringEditor;
        StatusDesc: Serenity.StringEditor;
        ZipCd: Serenity.StringEditor;
        CityName: Serenity.StringEditor;
        StateCd: Serenity.StringEditor;
        CountryName: Serenity.StringEditor;
        CancellationDt: Serenity.DateEditor;
        BonusSavingsCd: Serenity.StringEditor;
        BonusSavingsDesc: Serenity.StringEditor;
        AirParticipationInd: Serenity.BooleanEditor;
        HotelParticipationInd: Serenity.BooleanEditor;
        PaxAirClassCd: Serenity.StringEditor;
        DepositDt: Serenity.DateEditor;
        DepositAmt: Serenity.StringEditor;
        UserId: Serenity.StringEditor;
        Pax1FirstName: Serenity.StringEditor;
        Pax1LastName: Serenity.StringEditor;
        Pax2FirstName: Serenity.StringEditor;
        Pax2LastName: Serenity.StringEditor;
        CruiseTk: Serenity.IntegerEditor;
        ChangeDt: Serenity.DateEditor;
        CreateDt: Serenity.DateEditor;
        FirstPaymentDt: Serenity.DateEditor;
        FinalPaymentDueDt: Serenity.DateEditor;
        InitialWaitlistInd: Serenity.BooleanEditor;
        CancelBookingStatusCd: Serenity.StringEditor;
        SalesSourceCd: Serenity.StringEditor;
        SalesSourceDesc: Serenity.StringEditor;
        OriginalConsortiumCd: Serenity.StringEditor;
        OriginalConsortiumDesc: Serenity.StringEditor;
        UserName: Serenity.StringEditor;
        OriginalUserId: Serenity.StringEditor;
        OriginalUserName: Serenity.StringEditor;
        OriginalDeptCd: Serenity.StringEditor;
        OriginalDeptName: Serenity.StringEditor;
        OriginalUserActiveInd: Serenity.StringEditor;
        WaitlistDt: Serenity.DateEditor;
        FirstConfirmDt: Serenity.DateEditor;
        PastGuestInd: Serenity.IntegerEditor;
        DirectBookingInd: Serenity.StringEditor;
        AttnName: Serenity.StringEditor;
        ComboBookingInd: Serenity.StringEditor;
        OnboardTypeDesc: Serenity.StringEditor;
        CruiseSvcMgmtCrNum: Serenity.StringEditor;
        PromoCd: Serenity.StringEditor;
        GdsSystemCd: Serenity.StringEditor;
        GdsSystemDesc: Serenity.StringEditor;
        PromoDesc: Serenity.StringEditor;
        CancellationType: Serenity.StringEditor;
        ChannelTk: Serenity.IntegerEditor;
        PromoBonusComm: Serenity.StringEditor;
        PromoCommAmt: Serenity.DecimalEditor;
        ComboLegQty: Serenity.DecimalEditor;
        CancelReason: Serenity.StringEditor;
        PaidClassCd: Serenity.StringEditor;
        PaidClassCategoryDesc: Serenity.StringEditor;
        OciOfficeCd: Serenity.StringEditor;
        AirXferFeeAmt: Serenity.DecimalEditor;
        CountryCd: Serenity.StringEditor;
        FutureDepositFlag: Serenity.StringEditor;
        PromotionalAmenityCd: Serenity.StringEditor;
        CruiseCommissionAmt: Serenity.DecimalEditor;
        PostedInvoiceDt: Serenity.DateEditor;
        AgentTk: Serenity.IntegerEditor;
        Cinvoice1Num: Serenity.StringEditor;
        Cinvoice2Num: Serenity.StringEditor;
        Cinvoice3Num: Serenity.StringEditor;
        Cinvoice4Num: Serenity.StringEditor;
        Cinvoice5Num: Serenity.StringEditor;
        Cinvoice6Num: Serenity.StringEditor;
        PackageCd: Serenity.StringEditor;
        LandPackageParticipantQty: Serenity.IntegerEditor;
        LandPackageParticipantInd: Serenity.StringEditor;
        DptrFlightQty: Serenity.IntegerEditor;
        RtrnFlightQty: Serenity.IntegerEditor;
        DptrFlightClassCd: Serenity.StringEditor;
        RtrnFlightClassCd: Serenity.StringEditor;
        AirCostSourceCd: Serenity.StringEditor;
        ChannelCountryCd: Serenity.StringEditor;
        ChannelCountryName: Serenity.StringEditor;
        Pax1AirportHome1Cd: Serenity.StringEditor;
        Pax1AirportRtrn1Cd: Serenity.StringEditor;
        Pax1FirstFlightClass: Serenity.StringEditor;
        Pax1RtrnFlightClass: Serenity.StringEditor;
        Pax2AirportHome1Cd: Serenity.StringEditor;
        Pax2AirportRtrn1Cd: Serenity.StringEditor;
        Pax2FirstFlightClass: Serenity.StringEditor;
        Pax2RtrnFlightClass: Serenity.StringEditor;
        Pax1LoyaltyLevelNm: Serenity.StringEditor;
        Pax2LoyaltyLevelNm: Serenity.StringEditor;
        InstallmentPlanInd: Serenity.StringEditor;
        InstallmentPlanNum: Serenity.IntegerEditor;
        CruiseSvcMgmtId: Serenity.StringEditor;
        OutboundReportingRegionCd: Serenity.StringEditor;
        CenturionCd: Serenity.StringEditor;
        CenturionInd: Serenity.StringEditor;
        PlatinumCd: Serenity.StringEditor;
        PlatinumInd: Serenity.StringEditor;
        DwPastGuestInd: Serenity.StringEditor;
        DwPastGuest1Ind: Serenity.StringEditor;
        DwPastGuest2Ind: Serenity.StringEditor;
        Pax1NvsPgInd: Serenity.StringEditor;
        Pax2NvsPgInd: Serenity.StringEditor;
        NvsPgInd: Serenity.StringEditor;
        CurrentPackageCd: Serenity.StringEditor;
        MpcardNumPax1: Serenity.StringEditor;
        CurrentLoyaltyLevelPax1: Serenity.StringEditor;
        MpcardNumPax2: Serenity.StringEditor;
        CurrentLoyaltyLevelPax2: Serenity.StringEditor;
        FccDeferredInd: Serenity.StringEditor;
    }

    [,
        ['InvoiceNum', () => Serenity.StringEditor],
        ['CompanyCd', () => Serenity.StringEditor],
        ['PassengerQty', () => Serenity.IntegerEditor],
        ['NonrevPassengerQty', () => Serenity.IntegerEditor],
        ['NontaxPassengerQty', () => Serenity.IntegerEditor],
        ['OfficeCd', () => Serenity.StringEditor],
        ['OfficeDesc', () => Serenity.StringEditor],
        ['CurrencyCd', () => Serenity.StringEditor],
        ['CurrencyDesc', () => Serenity.StringEditor],
        ['StatusCd', () => Serenity.StringEditor],
        ['StatusDesc', () => Serenity.StringEditor],
        ['ZipCd', () => Serenity.StringEditor],
        ['CityName', () => Serenity.StringEditor],
        ['StateCd', () => Serenity.StringEditor],
        ['CountryName', () => Serenity.StringEditor],
        ['CancellationDt', () => Serenity.DateEditor],
        ['BonusSavingsCd', () => Serenity.StringEditor],
        ['BonusSavingsDesc', () => Serenity.StringEditor],
        ['AirParticipationInd', () => Serenity.BooleanEditor],
        ['HotelParticipationInd', () => Serenity.BooleanEditor],
        ['PaxAirClassCd', () => Serenity.StringEditor],
        ['DepositDt', () => Serenity.DateEditor],
        ['DepositAmt', () => Serenity.StringEditor],
        ['UserId', () => Serenity.StringEditor],
        ['Pax1FirstName', () => Serenity.StringEditor],
        ['Pax1LastName', () => Serenity.StringEditor],
        ['Pax2FirstName', () => Serenity.StringEditor],
        ['Pax2LastName', () => Serenity.StringEditor],
        ['CruiseTk', () => Serenity.IntegerEditor],
        ['ChangeDt', () => Serenity.DateEditor],
        ['CreateDt', () => Serenity.DateEditor],
        ['FirstPaymentDt', () => Serenity.DateEditor],
        ['FinalPaymentDueDt', () => Serenity.DateEditor],
        ['InitialWaitlistInd', () => Serenity.BooleanEditor],
        ['CancelBookingStatusCd', () => Serenity.StringEditor],
        ['SalesSourceCd', () => Serenity.StringEditor],
        ['SalesSourceDesc', () => Serenity.StringEditor],
        ['OriginalConsortiumCd', () => Serenity.StringEditor],
        ['OriginalConsortiumDesc', () => Serenity.StringEditor],
        ['UserName', () => Serenity.StringEditor],
        ['OriginalUserId', () => Serenity.StringEditor],
        ['OriginalUserName', () => Serenity.StringEditor],
        ['OriginalDeptCd', () => Serenity.StringEditor],
        ['OriginalDeptName', () => Serenity.StringEditor],
        ['OriginalUserActiveInd', () => Serenity.StringEditor],
        ['WaitlistDt', () => Serenity.DateEditor],
        ['FirstConfirmDt', () => Serenity.DateEditor],
        ['PastGuestInd', () => Serenity.IntegerEditor],
        ['DirectBookingInd', () => Serenity.StringEditor],
        ['AttnName', () => Serenity.StringEditor],
        ['ComboBookingInd', () => Serenity.StringEditor],
        ['OnboardTypeDesc', () => Serenity.StringEditor],
        ['CruiseSvcMgmtCrNum', () => Serenity.StringEditor],
        ['PromoCd', () => Serenity.StringEditor],
        ['GdsSystemCd', () => Serenity.StringEditor],
        ['GdsSystemDesc', () => Serenity.StringEditor],
        ['PromoDesc', () => Serenity.StringEditor],
        ['CancellationType', () => Serenity.StringEditor],
        ['ChannelTk', () => Serenity.IntegerEditor],
        ['PromoBonusComm', () => Serenity.StringEditor],
        ['PromoCommAmt', () => Serenity.DecimalEditor],
        ['ComboLegQty', () => Serenity.DecimalEditor],
        ['CancelReason', () => Serenity.StringEditor],
        ['PaidClassCd', () => Serenity.StringEditor],
        ['PaidClassCategoryDesc', () => Serenity.StringEditor],
        ['OciOfficeCd', () => Serenity.StringEditor],
        ['AirXferFeeAmt', () => Serenity.DecimalEditor],
        ['CountryCd', () => Serenity.StringEditor],
        ['FutureDepositFlag', () => Serenity.StringEditor],
        ['PromotionalAmenityCd', () => Serenity.StringEditor],
        ['CruiseCommissionAmt', () => Serenity.DecimalEditor],
        ['PostedInvoiceDt', () => Serenity.DateEditor],
        ['AgentTk', () => Serenity.IntegerEditor],
        ['Cinvoice1Num', () => Serenity.StringEditor],
        ['Cinvoice2Num', () => Serenity.StringEditor],
        ['Cinvoice3Num', () => Serenity.StringEditor],
        ['Cinvoice4Num', () => Serenity.StringEditor],
        ['Cinvoice5Num', () => Serenity.StringEditor],
        ['Cinvoice6Num', () => Serenity.StringEditor],
        ['PackageCd', () => Serenity.StringEditor],
        ['LandPackageParticipantQty', () => Serenity.IntegerEditor],
        ['LandPackageParticipantInd', () => Serenity.StringEditor],
        ['DptrFlightQty', () => Serenity.IntegerEditor],
        ['RtrnFlightQty', () => Serenity.IntegerEditor],
        ['DptrFlightClassCd', () => Serenity.StringEditor],
        ['RtrnFlightClassCd', () => Serenity.StringEditor],
        ['AirCostSourceCd', () => Serenity.StringEditor],
        ['ChannelCountryCd', () => Serenity.StringEditor],
        ['ChannelCountryName', () => Serenity.StringEditor],
        ['Pax1AirportHome1Cd', () => Serenity.StringEditor],
        ['Pax1AirportRtrn1Cd', () => Serenity.StringEditor],
        ['Pax1FirstFlightClass', () => Serenity.StringEditor],
        ['Pax1RtrnFlightClass', () => Serenity.StringEditor],
        ['Pax2AirportHome1Cd', () => Serenity.StringEditor],
        ['Pax2AirportRtrn1Cd', () => Serenity.StringEditor],
        ['Pax2FirstFlightClass', () => Serenity.StringEditor],
        ['Pax2RtrnFlightClass', () => Serenity.StringEditor],
        ['Pax1LoyaltyLevelNm', () => Serenity.StringEditor],
        ['Pax2LoyaltyLevelNm', () => Serenity.StringEditor],
        ['InstallmentPlanInd', () => Serenity.StringEditor],
        ['InstallmentPlanNum', () => Serenity.IntegerEditor],
        ['CruiseSvcMgmtId', () => Serenity.StringEditor],
        ['OutboundReportingRegionCd', () => Serenity.StringEditor],
        ['CenturionCd', () => Serenity.StringEditor],
        ['CenturionInd', () => Serenity.StringEditor],
        ['PlatinumCd', () => Serenity.StringEditor],
        ['PlatinumInd', () => Serenity.StringEditor],
        ['DwPastGuestInd', () => Serenity.StringEditor],
        ['DwPastGuest1Ind', () => Serenity.StringEditor],
        ['DwPastGuest2Ind', () => Serenity.StringEditor],
        ['Pax1NvsPgInd', () => Serenity.StringEditor],
        ['Pax2NvsPgInd', () => Serenity.StringEditor],
        ['NvsPgInd', () => Serenity.StringEditor],
        ['CurrentPackageCd', () => Serenity.StringEditor],
        ['MpcardNumPax1', () => Serenity.StringEditor],
        ['CurrentLoyaltyLevelPax1', () => Serenity.StringEditor],
        ['MpcardNumPax2', () => Serenity.StringEditor],
        ['CurrentLoyaltyLevelPax2', () => Serenity.StringEditor],
        ['FccDeferredInd', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(DimInvoiceForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}