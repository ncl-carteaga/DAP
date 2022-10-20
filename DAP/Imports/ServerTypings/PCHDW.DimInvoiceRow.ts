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

        export declare const enum Fields {
            InvoiceTk = "InvoiceTk",
            InvoiceNum = "InvoiceNum",
            CompanyCd = "CompanyCd",
            PassengerQty = "PassengerQty",
            NonrevPassengerQty = "NonrevPassengerQty",
            NontaxPassengerQty = "NontaxPassengerQty",
            OfficeCd = "OfficeCd",
            OfficeDesc = "OfficeDesc",
            CurrencyCd = "CurrencyCd",
            CurrencyDesc = "CurrencyDesc",
            StatusCd = "StatusCd",
            StatusDesc = "StatusDesc",
            ZipCd = "ZipCd",
            CityName = "CityName",
            StateCd = "StateCd",
            CountryName = "CountryName",
            CancellationDt = "CancellationDt",
            BonusSavingsCd = "BonusSavingsCd",
            BonusSavingsDesc = "BonusSavingsDesc",
            AirParticipationInd = "AirParticipationInd",
            HotelParticipationInd = "HotelParticipationInd",
            PaxAirClassCd = "PaxAirClassCd",
            DepositDt = "DepositDt",
            DepositAmt = "DepositAmt",
            UserId = "UserId",
            Pax1FirstName = "Pax1FirstName",
            Pax1LastName = "Pax1LastName",
            Pax2FirstName = "Pax2FirstName",
            Pax2LastName = "Pax2LastName",
            CruiseTk = "CruiseTk",
            ChangeDt = "ChangeDt",
            CreateDt = "CreateDt",
            FirstPaymentDt = "FirstPaymentDt",
            FinalPaymentDueDt = "FinalPaymentDueDt",
            InitialWaitlistInd = "InitialWaitlistInd",
            CancelBookingStatusCd = "CancelBookingStatusCd",
            SalesSourceCd = "SalesSourceCd",
            SalesSourceDesc = "SalesSourceDesc",
            OriginalConsortiumCd = "OriginalConsortiumCd",
            OriginalConsortiumDesc = "OriginalConsortiumDesc",
            UserName = "UserName",
            OriginalUserId = "OriginalUserId",
            OriginalUserName = "OriginalUserName",
            OriginalDeptCd = "OriginalDeptCd",
            OriginalDeptName = "OriginalDeptName",
            OriginalUserActiveInd = "OriginalUserActiveInd",
            WaitlistDt = "WaitlistDt",
            FirstConfirmDt = "FirstConfirmDt",
            PastGuestInd = "PastGuestInd",
            DirectBookingInd = "DirectBookingInd",
            AttnName = "AttnName",
            ComboBookingInd = "ComboBookingInd",
            OnboardTypeDesc = "OnboardTypeDesc",
            CruiseSvcMgmtCrNum = "CruiseSvcMgmtCrNum",
            PromoCd = "PromoCd",
            GdsSystemCd = "GdsSystemCd",
            GdsSystemDesc = "GdsSystemDesc",
            PromoDesc = "PromoDesc",
            CancellationType = "CancellationType",
            ChannelTk = "ChannelTk",
            PromoBonusComm = "PromoBonusComm",
            PromoCommAmt = "PromoCommAmt",
            ComboLegQty = "ComboLegQty",
            CancelReason = "CancelReason",
            PaidClassCd = "PaidClassCd",
            PaidClassCategoryDesc = "PaidClassCategoryDesc",
            OciOfficeCd = "OciOfficeCd",
            AirXferFeeAmt = "AirXferFeeAmt",
            CountryCd = "CountryCd",
            FutureDepositFlag = "FutureDepositFlag",
            PromotionalAmenityCd = "PromotionalAmenityCd",
            CruiseCommissionAmt = "CruiseCommissionAmt",
            PostedInvoiceDt = "PostedInvoiceDt",
            AgentTk = "AgentTk",
            Cinvoice1Num = "Cinvoice1Num",
            Cinvoice2Num = "Cinvoice2Num",
            Cinvoice3Num = "Cinvoice3Num",
            Cinvoice4Num = "Cinvoice4Num",
            Cinvoice5Num = "Cinvoice5Num",
            Cinvoice6Num = "Cinvoice6Num",
            PackageCd = "PackageCd",
            LandPackageParticipantQty = "LandPackageParticipantQty",
            LandPackageParticipantInd = "LandPackageParticipantInd",
            DptrFlightQty = "DptrFlightQty",
            RtrnFlightQty = "RtrnFlightQty",
            DptrFlightClassCd = "DptrFlightClassCd",
            RtrnFlightClassCd = "RtrnFlightClassCd",
            AirCostSourceCd = "AirCostSourceCd",
            ChannelCountryCd = "ChannelCountryCd",
            ChannelCountryName = "ChannelCountryName",
            Pax1AirportHome1Cd = "Pax1AirportHome1Cd",
            Pax1AirportRtrn1Cd = "Pax1AirportRtrn1Cd",
            Pax1FirstFlightClass = "Pax1FirstFlightClass",
            Pax1RtrnFlightClass = "Pax1RtrnFlightClass",
            Pax2AirportHome1Cd = "Pax2AirportHome1Cd",
            Pax2AirportRtrn1Cd = "Pax2AirportRtrn1Cd",
            Pax2FirstFlightClass = "Pax2FirstFlightClass",
            Pax2RtrnFlightClass = "Pax2RtrnFlightClass",
            Pax1LoyaltyLevelNm = "Pax1LoyaltyLevelNm",
            Pax2LoyaltyLevelNm = "Pax2LoyaltyLevelNm",
            InstallmentPlanInd = "InstallmentPlanInd",
            InstallmentPlanNum = "InstallmentPlanNum",
            CruiseSvcMgmtId = "CruiseSvcMgmtId",
            OutboundReportingRegionCd = "OutboundReportingRegionCd",
            CenturionCd = "CenturionCd",
            CenturionInd = "CenturionInd",
            PlatinumCd = "PlatinumCd",
            PlatinumInd = "PlatinumInd",
            DwPastGuestInd = "DwPastGuestInd",
            DwPastGuest1Ind = "DwPastGuest1Ind",
            DwPastGuest2Ind = "DwPastGuest2Ind",
            Pax1NvsPgInd = "Pax1NvsPgInd",
            Pax2NvsPgInd = "Pax2NvsPgInd",
            NvsPgInd = "NvsPgInd",
            CurrentPackageCd = "CurrentPackageCd",
            MpcardNumPax1 = "MpcardNumPax1",
            CurrentLoyaltyLevelPax1 = "CurrentLoyaltyLevelPax1",
            MpcardNumPax2 = "MpcardNumPax2",
            CurrentLoyaltyLevelPax2 = "CurrentLoyaltyLevelPax2",
            FccDeferredInd = "FccDeferredInd"
        }
    }
}

