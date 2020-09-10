
namespace DAP.PCHDW {
    export interface DimInvoiceRow {
        InvoiceTk?: number;
        InvoiceNum?: string;
        CompanyCd?: string;
        PassengerQty?: number;
        NonrevPassengerQty?: number;
        NontaxPassengerQty?: number;
        OfficeCd?: string;
        OfficeDesc?: string;
        CurrencyCd?: string;
        CurrencyDesc?: string;
        StatusCd?: string;
        StatusDesc?: string;
        ZipCd?: string;
        CityName?: string;
        StateCd?: string;
        CountryName?: string;
        CancellationDt?: string;
        BonusSavingsCd?: string;
        BonusSavingsDesc?: string;
        AirParticipationInd?: boolean;
        HotelParticipationInd?: boolean;
        PaxAirClassCd?: string;
        DepositDt?: string;
        DepositAmt?: string;
        UserId?: string;
        Pax1FirstName?: string;
        Pax1LastName?: string;
        Pax2FirstName?: string;
        Pax2LastName?: string;
        CruiseTk?: number;
        ChangeDt?: string;
        CreateDt?: string;
        FirstPaymentDt?: string;
        FinalPaymentDueDt?: string;
        InitialWaitlistInd?: boolean;
        CancelBookingStatusCd?: string;
        SalesSourceCd?: string;
        SalesSourceDesc?: string;
        OriginalConsortiumCd?: string;
        OriginalConsortiumDesc?: string;
        UserName?: string;
        OriginalUserId?: string;
        OriginalUserName?: string;
        OriginalDeptCd?: string;
        OriginalDeptName?: string;
        OriginalUserActiveInd?: string;
        WaitlistDt?: string;
        FirstConfirmDt?: string;
        PastGuestInd?: number;
        DirectBookingInd?: string;
        AttnName?: string;
        ComboBookingInd?: string;
        OnboardTypeDesc?: string;
        CruiseSvcMgmtCrNum?: string;
        PromoCd?: string;
        GdsSystemCd?: string;
        GdsSystemDesc?: string;
        PromoDesc?: string;
        CancellationType?: string;
        ChannelTk?: number;
        PromoBonusComm?: string;
        PromoCommAmt?: number;
        ComboLegQty?: number;
        CancelReason?: string;
        PaidClassCd?: string;
        PaidClassCategoryDesc?: string;
        OciOfficeCd?: string;
        AirXferFeeAmt?: number;
        CountryCd?: string;
        FutureDepositFlag?: string;
        PromotionalAmenityCd?: string;
        CruiseCommissionAmt?: number;
        PostedInvoiceDt?: string;
        AgentTk?: number;
        Cinvoice1Num?: string;
        Cinvoice2Num?: string;
        Cinvoice3Num?: string;
        Cinvoice4Num?: string;
        Cinvoice5Num?: string;
        Cinvoice6Num?: string;
        PackageCd?: string;
        LandPackageParticipantQty?: number;
        LandPackageParticipantInd?: string;
        DptrFlightQty?: number;
        RtrnFlightQty?: number;
        DptrFlightClassCd?: string;
        RtrnFlightClassCd?: string;
        AirCostSourceCd?: string;
        ChannelCountryCd?: string;
        ChannelCountryName?: string;
        Pax1AirportHome1Cd?: string;
        Pax1AirportRtrn1Cd?: string;
        Pax1FirstFlightClass?: string;
        Pax1RtrnFlightClass?: string;
        Pax2AirportHome1Cd?: string;
        Pax2AirportRtrn1Cd?: string;
        Pax2FirstFlightClass?: string;
        Pax2RtrnFlightClass?: string;
        Pax1LoyaltyLevelNm?: string;
        Pax2LoyaltyLevelNm?: string;
        InstallmentPlanInd?: string;
        InstallmentPlanNum?: number;
        CruiseSvcMgmtId?: string;
        OutboundReportingRegionCd?: string;
        CenturionCd?: string;
        CenturionInd?: string;
        PlatinumCd?: string;
        PlatinumInd?: string;
        DwPastGuestInd?: string;
        DwPastGuest1Ind?: string;
        DwPastGuest2Ind?: string;
        Pax1NvsPgInd?: string;
        Pax2NvsPgInd?: string;
        NvsPgInd?: string;
        CurrentPackageCd?: string;
        MpcardNumPax1?: string;
        CurrentLoyaltyLevelPax1?: string;
        MpcardNumPax2?: string;
        CurrentLoyaltyLevelPax2?: string;
        FccDeferredInd?: string;
    }

    export namespace DimInvoiceRow {
        export const idProperty = 'InvoiceTk';
        export const nameProperty = 'InvoiceNum';
        export const localTextPrefix = 'PCHDW.DimInvoice';

        export namespace Fields {
            export declare const InvoiceTk;
            export declare const InvoiceNum;
            export declare const CompanyCd;
            export declare const PassengerQty;
            export declare const NonrevPassengerQty;
            export declare const NontaxPassengerQty;
            export declare const OfficeCd;
            export declare const OfficeDesc;
            export declare const CurrencyCd;
            export declare const CurrencyDesc;
            export declare const StatusCd;
            export declare const StatusDesc;
            export declare const ZipCd;
            export declare const CityName;
            export declare const StateCd;
            export declare const CountryName;
            export declare const CancellationDt;
            export declare const BonusSavingsCd;
            export declare const BonusSavingsDesc;
            export declare const AirParticipationInd;
            export declare const HotelParticipationInd;
            export declare const PaxAirClassCd;
            export declare const DepositDt;
            export declare const DepositAmt;
            export declare const UserId;
            export declare const Pax1FirstName;
            export declare const Pax1LastName;
            export declare const Pax2FirstName;
            export declare const Pax2LastName;
            export declare const CruiseTk;
            export declare const ChangeDt;
            export declare const CreateDt;
            export declare const FirstPaymentDt;
            export declare const FinalPaymentDueDt;
            export declare const InitialWaitlistInd;
            export declare const CancelBookingStatusCd;
            export declare const SalesSourceCd;
            export declare const SalesSourceDesc;
            export declare const OriginalConsortiumCd;
            export declare const OriginalConsortiumDesc;
            export declare const UserName;
            export declare const OriginalUserId;
            export declare const OriginalUserName;
            export declare const OriginalDeptCd;
            export declare const OriginalDeptName;
            export declare const OriginalUserActiveInd;
            export declare const WaitlistDt;
            export declare const FirstConfirmDt;
            export declare const PastGuestInd;
            export declare const DirectBookingInd;
            export declare const AttnName;
            export declare const ComboBookingInd;
            export declare const OnboardTypeDesc;
            export declare const CruiseSvcMgmtCrNum;
            export declare const PromoCd;
            export declare const GdsSystemCd;
            export declare const GdsSystemDesc;
            export declare const PromoDesc;
            export declare const CancellationType;
            export declare const ChannelTk;
            export declare const PromoBonusComm;
            export declare const PromoCommAmt;
            export declare const ComboLegQty;
            export declare const CancelReason;
            export declare const PaidClassCd;
            export declare const PaidClassCategoryDesc;
            export declare const OciOfficeCd;
            export declare const AirXferFeeAmt;
            export declare const CountryCd;
            export declare const FutureDepositFlag;
            export declare const PromotionalAmenityCd;
            export declare const CruiseCommissionAmt;
            export declare const PostedInvoiceDt;
            export declare const AgentTk;
            export declare const Cinvoice1Num;
            export declare const Cinvoice2Num;
            export declare const Cinvoice3Num;
            export declare const Cinvoice4Num;
            export declare const Cinvoice5Num;
            export declare const Cinvoice6Num;
            export declare const PackageCd;
            export declare const LandPackageParticipantQty;
            export declare const LandPackageParticipantInd;
            export declare const DptrFlightQty;
            export declare const RtrnFlightQty;
            export declare const DptrFlightClassCd;
            export declare const RtrnFlightClassCd;
            export declare const AirCostSourceCd;
            export declare const ChannelCountryCd;
            export declare const ChannelCountryName;
            export declare const Pax1AirportHome1Cd;
            export declare const Pax1AirportRtrn1Cd;
            export declare const Pax1FirstFlightClass;
            export declare const Pax1RtrnFlightClass;
            export declare const Pax2AirportHome1Cd;
            export declare const Pax2AirportRtrn1Cd;
            export declare const Pax2FirstFlightClass;
            export declare const Pax2RtrnFlightClass;
            export declare const Pax1LoyaltyLevelNm;
            export declare const Pax2LoyaltyLevelNm;
            export declare const InstallmentPlanInd;
            export declare const InstallmentPlanNum;
            export declare const CruiseSvcMgmtId;
            export declare const OutboundReportingRegionCd;
            export declare const CenturionCd;
            export declare const CenturionInd;
            export declare const PlatinumCd;
            export declare const PlatinumInd;
            export declare const DwPastGuestInd;
            export declare const DwPastGuest1Ind;
            export declare const DwPastGuest2Ind;
            export declare const Pax1NvsPgInd;
            export declare const Pax2NvsPgInd;
            export declare const NvsPgInd;
            export declare const CurrentPackageCd;
            export declare const MpcardNumPax1;
            export declare const CurrentLoyaltyLevelPax1;
            export declare const MpcardNumPax2;
            export declare const CurrentLoyaltyLevelPax2;
            export declare const FccDeferredInd;
        }

        [
            'InvoiceTk',
            'InvoiceNum',
            'CompanyCd',
            'PassengerQty',
            'NonrevPassengerQty',
            'NontaxPassengerQty',
            'OfficeCd',
            'OfficeDesc',
            'CurrencyCd',
            'CurrencyDesc',
            'StatusCd',
            'StatusDesc',
            'ZipCd',
            'CityName',
            'StateCd',
            'CountryName',
            'CancellationDt',
            'BonusSavingsCd',
            'BonusSavingsDesc',
            'AirParticipationInd',
            'HotelParticipationInd',
            'PaxAirClassCd',
            'DepositDt',
            'DepositAmt',
            'UserId',
            'Pax1FirstName',
            'Pax1LastName',
            'Pax2FirstName',
            'Pax2LastName',
            'CruiseTk',
            'ChangeDt',
            'CreateDt',
            'FirstPaymentDt',
            'FinalPaymentDueDt',
            'InitialWaitlistInd',
            'CancelBookingStatusCd',
            'SalesSourceCd',
            'SalesSourceDesc',
            'OriginalConsortiumCd',
            'OriginalConsortiumDesc',
            'UserName',
            'OriginalUserId',
            'OriginalUserName',
            'OriginalDeptCd',
            'OriginalDeptName',
            'OriginalUserActiveInd',
            'WaitlistDt',
            'FirstConfirmDt',
            'PastGuestInd',
            'DirectBookingInd',
            'AttnName',
            'ComboBookingInd',
            'OnboardTypeDesc',
            'CruiseSvcMgmtCrNum',
            'PromoCd',
            'GdsSystemCd',
            'GdsSystemDesc',
            'PromoDesc',
            'CancellationType',
            'ChannelTk',
            'PromoBonusComm',
            'PromoCommAmt',
            'ComboLegQty',
            'CancelReason',
            'PaidClassCd',
            'PaidClassCategoryDesc',
            'OciOfficeCd',
            'AirXferFeeAmt',
            'CountryCd',
            'FutureDepositFlag',
            'PromotionalAmenityCd',
            'CruiseCommissionAmt',
            'PostedInvoiceDt',
            'AgentTk',
            'Cinvoice1Num',
            'Cinvoice2Num',
            'Cinvoice3Num',
            'Cinvoice4Num',
            'Cinvoice5Num',
            'Cinvoice6Num',
            'PackageCd',
            'LandPackageParticipantQty',
            'LandPackageParticipantInd',
            'DptrFlightQty',
            'RtrnFlightQty',
            'DptrFlightClassCd',
            'RtrnFlightClassCd',
            'AirCostSourceCd',
            'ChannelCountryCd',
            'ChannelCountryName',
            'Pax1AirportHome1Cd',
            'Pax1AirportRtrn1Cd',
            'Pax1FirstFlightClass',
            'Pax1RtrnFlightClass',
            'Pax2AirportHome1Cd',
            'Pax2AirportRtrn1Cd',
            'Pax2FirstFlightClass',
            'Pax2RtrnFlightClass',
            'Pax1LoyaltyLevelNm',
            'Pax2LoyaltyLevelNm',
            'InstallmentPlanInd',
            'InstallmentPlanNum',
            'CruiseSvcMgmtId',
            'OutboundReportingRegionCd',
            'CenturionCd',
            'CenturionInd',
            'PlatinumCd',
            'PlatinumInd',
            'DwPastGuestInd',
            'DwPastGuest1Ind',
            'DwPastGuest2Ind',
            'Pax1NvsPgInd',
            'Pax2NvsPgInd',
            'NvsPgInd',
            'CurrentPackageCd',
            'MpcardNumPax1',
            'CurrentLoyaltyLevelPax1',
            'MpcardNumPax2',
            'CurrentLoyaltyLevelPax2',
            'FccDeferredInd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}