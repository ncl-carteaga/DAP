namespace DAP.PCHDW {
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

    export class DimInvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'PCHDW.DimInvoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DimInvoiceForm.init)  {
                DimInvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(DimInvoiceForm, [
                    'InvoiceNum', w0,
                    'CompanyCd', w0,
                    'PassengerQty', w1,
                    'NonrevPassengerQty', w1,
                    'NontaxPassengerQty', w1,
                    'OfficeCd', w0,
                    'OfficeDesc', w0,
                    'CurrencyCd', w0,
                    'CurrencyDesc', w0,
                    'StatusCd', w0,
                    'StatusDesc', w0,
                    'ZipCd', w0,
                    'CityName', w0,
                    'StateCd', w0,
                    'CountryName', w0,
                    'CancellationDt', w2,
                    'BonusSavingsCd', w0,
                    'BonusSavingsDesc', w0,
                    'AirParticipationInd', w3,
                    'HotelParticipationInd', w3,
                    'PaxAirClassCd', w0,
                    'DepositDt', w2,
                    'DepositAmt', w0,
                    'UserId', w0,
                    'Pax1FirstName', w0,
                    'Pax1LastName', w0,
                    'Pax2FirstName', w0,
                    'Pax2LastName', w0,
                    'CruiseTk', w1,
                    'ChangeDt', w2,
                    'CreateDt', w2,
                    'FirstPaymentDt', w2,
                    'FinalPaymentDueDt', w2,
                    'InitialWaitlistInd', w3,
                    'CancelBookingStatusCd', w0,
                    'SalesSourceCd', w0,
                    'SalesSourceDesc', w0,
                    'OriginalConsortiumCd', w0,
                    'OriginalConsortiumDesc', w0,
                    'UserName', w0,
                    'OriginalUserId', w0,
                    'OriginalUserName', w0,
                    'OriginalDeptCd', w0,
                    'OriginalDeptName', w0,
                    'OriginalUserActiveInd', w0,
                    'WaitlistDt', w2,
                    'FirstConfirmDt', w2,
                    'PastGuestInd', w1,
                    'DirectBookingInd', w0,
                    'AttnName', w0,
                    'ComboBookingInd', w0,
                    'OnboardTypeDesc', w0,
                    'CruiseSvcMgmtCrNum', w0,
                    'PromoCd', w0,
                    'GdsSystemCd', w0,
                    'GdsSystemDesc', w0,
                    'PromoDesc', w0,
                    'CancellationType', w0,
                    'ChannelTk', w1,
                    'PromoBonusComm', w0,
                    'PromoCommAmt', w4,
                    'ComboLegQty', w4,
                    'CancelReason', w0,
                    'PaidClassCd', w0,
                    'PaidClassCategoryDesc', w0,
                    'OciOfficeCd', w0,
                    'AirXferFeeAmt', w4,
                    'CountryCd', w0,
                    'FutureDepositFlag', w0,
                    'PromotionalAmenityCd', w0,
                    'CruiseCommissionAmt', w4,
                    'PostedInvoiceDt', w2,
                    'AgentTk', w1,
                    'Cinvoice1Num', w0,
                    'Cinvoice2Num', w0,
                    'Cinvoice3Num', w0,
                    'Cinvoice4Num', w0,
                    'Cinvoice5Num', w0,
                    'Cinvoice6Num', w0,
                    'PackageCd', w0,
                    'LandPackageParticipantQty', w1,
                    'LandPackageParticipantInd', w0,
                    'DptrFlightQty', w1,
                    'RtrnFlightQty', w1,
                    'DptrFlightClassCd', w0,
                    'RtrnFlightClassCd', w0,
                    'AirCostSourceCd', w0,
                    'ChannelCountryCd', w0,
                    'ChannelCountryName', w0,
                    'Pax1AirportHome1Cd', w0,
                    'Pax1AirportRtrn1Cd', w0,
                    'Pax1FirstFlightClass', w0,
                    'Pax1RtrnFlightClass', w0,
                    'Pax2AirportHome1Cd', w0,
                    'Pax2AirportRtrn1Cd', w0,
                    'Pax2FirstFlightClass', w0,
                    'Pax2RtrnFlightClass', w0,
                    'Pax1LoyaltyLevelNm', w0,
                    'Pax2LoyaltyLevelNm', w0,
                    'InstallmentPlanInd', w0,
                    'InstallmentPlanNum', w1,
                    'CruiseSvcMgmtId', w0,
                    'OutboundReportingRegionCd', w0,
                    'CenturionCd', w0,
                    'CenturionInd', w0,
                    'PlatinumCd', w0,
                    'PlatinumInd', w0,
                    'DwPastGuestInd', w0,
                    'DwPastGuest1Ind', w0,
                    'DwPastGuest2Ind', w0,
                    'Pax1NvsPgInd', w0,
                    'Pax2NvsPgInd', w0,
                    'NvsPgInd', w0,
                    'CurrentPackageCd', w0,
                    'MpcardNumPax1', w0,
                    'CurrentLoyaltyLevelPax1', w0,
                    'MpcardNumPax2', w0,
                    'CurrentLoyaltyLevelPax2', w0,
                    'FccDeferredInd', w0
                ]);
            }
        }
    }
}

