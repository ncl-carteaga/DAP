namespace DAP.PCHODSNVS {
    export interface AgencyRow {
        CompanyCd?: string;
        AgencyCd?: string;
        AttnDesc?: string;
        AgencyNameDesc?: string;
        Addr1?: string;
        Addr2?: string;
        Addr3?: string;
        CityName?: string;
        StateNm?: string;
        ZipCd?: string;
        Zip2Cd?: string;
        Phone1Num?: string;
        Phone2Num?: string;
        FaxNum?: string;
        CommissionPct?: number;
        GsaInd?: string;
        NationalAcctInd?: string;
        GsaPriceLevelAmt?: number;
        Comment1Desc?: string;
        Comment2Desc?: string;
        ConsortiumCd?: string;
        IataNum?: string;
        CliaNum?: string;
        PreviousYrPaxQty?: number;
        PreviousYrRevAmt?: number;
        LastYearSalesAmt?: number;
        CurrentYearSalesAmt?: number;
        UserInUseById?: string;
        KeyAcctInd?: string;
        AgencyDefaultStatusInd?: string;
        LastYearKeyAcctCd?: string;
        SalesRegionCd?: string;
        RevLabelCd?: string;
        PseudoCityCd?: string;
        ApolloInd?: string;
        Country?: string;
        CorporationInd?: string;
        TaxIdNum?: string;
        CorpComDesc?: string;
        Prt1099Ind?: string;
        PrtD1099Dt?: string;
        TaxInfoReceivedDt?: string;
        InsDefaultCd?: string;
        GdsSysCd?: string;
        AllowPlatInd?: string;
        AllowSdbdInd?: string;
        AllowGpInd?: string;
        MahanaClubInd?: string;
        McActiveInd?: string;
        EMemberDesc?: string;
        AgencyStatusCd?: string;
        CurrencyCd?: string;
        SecondaryCurrencyCd?: string;
        OfficeCd?: string;
        AgencyEmail?: string;
        AgencyWebAddress?: string;
        PromoAdInd?: string;
        VatId?: string;
        SelfBillInd?: string;
        PreferredCommunicationCd?: string;
        PreferredLanguageDesc?: string;
        NactaNum?: string;
        ActiveInd?: string;
        BdmCd?: string;
        SendCustInvInd?: string;
        CreditAgtInd?: string;
        AgentNum?: string;
        PinClubInd?: string;
        FinHoldInd?: string;
        L7daysNum?: number;
        Option1DueDaysQty?: number;
        Option2DueDaysQty?: number;
        AutoCxlInd?: string;
        ConsortiumAddedDt?: string;
        MasterAgencyInd?: string;
        OwnerCd?: string;
        AutoEnvoInd?: string;
        OverVacSummInd?: string;
        VacSummEmailDesc?: string;
        TaxPayer1099Name?: string;
        AgentLinkDesc?: string;
        AllowBankInd?: string;
        BankAccountBalAmt?: number;
        BankAcct2Amt?: number;
        PaymentViaWireInd?: string;
        ConsortiumRegionCd?: string;
        ConsortRgnNum?: string;
        ConsortiumRegionAddedDt?: string;
        RequiredSecondaryAgentInd?: string;
        OverrideFinalDaysInd?: string;
        FinalDaysQty?: number;
        OverrideOption1DaysInd?: string;
        OverrideOption2DaysInd?: string;
        FirstBookingDt?: string;
        AgencyCreateDt?: string;
        BdmRepCd?: string;
        SsrRepCd?: string;
        NvsKeyAcctInd?: string;
        LastUpdated?: string;
        Key1?: string;
        SiblingId?: number;
        AgencyCdName?: string;
    }

    export namespace AgencyRow {
        export const idProperty = 'AgencyCd';
        export const nameProperty = 'AgencyCdName';
        export const localTextPrefix = 'PCHODSNVS.Agency';
        export const lookupKey = 'PCHODSNVS.Agency';

        export function getLookup(): Q.Lookup<AgencyRow> {
            return Q.getLookup<AgencyRow>('PCHODSNVS.Agency');
        }

        export declare const enum Fields {
            CompanyCd = "CompanyCd",
            AgencyCd = "AgencyCd",
            AttnDesc = "AttnDesc",
            AgencyNameDesc = "AgencyNameDesc",
            Addr1 = "Addr1",
            Addr2 = "Addr2",
            Addr3 = "Addr3",
            CityName = "CityName",
            StateNm = "StateNm",
            ZipCd = "ZipCd",
            Zip2Cd = "Zip2Cd",
            Phone1Num = "Phone1Num",
            Phone2Num = "Phone2Num",
            FaxNum = "FaxNum",
            CommissionPct = "CommissionPct",
            GsaInd = "GsaInd",
            NationalAcctInd = "NationalAcctInd",
            GsaPriceLevelAmt = "GsaPriceLevelAmt",
            Comment1Desc = "Comment1Desc",
            Comment2Desc = "Comment2Desc",
            ConsortiumCd = "ConsortiumCd",
            IataNum = "IataNum",
            CliaNum = "CliaNum",
            PreviousYrPaxQty = "PreviousYrPaxQty",
            PreviousYrRevAmt = "PreviousYrRevAmt",
            LastYearSalesAmt = "LastYearSalesAmt",
            CurrentYearSalesAmt = "CurrentYearSalesAmt",
            UserInUseById = "UserInUseById",
            KeyAcctInd = "KeyAcctInd",
            AgencyDefaultStatusInd = "AgencyDefaultStatusInd",
            LastYearKeyAcctCd = "LastYearKeyAcctCd",
            SalesRegionCd = "SalesRegionCd",
            RevLabelCd = "RevLabelCd",
            PseudoCityCd = "PseudoCityCd",
            ApolloInd = "ApolloInd",
            Country = "Country",
            CorporationInd = "CorporationInd",
            TaxIdNum = "TaxIdNum",
            CorpComDesc = "CorpComDesc",
            Prt1099Ind = "Prt1099Ind",
            PrtD1099Dt = "PrtD1099Dt",
            TaxInfoReceivedDt = "TaxInfoReceivedDt",
            InsDefaultCd = "InsDefaultCd",
            GdsSysCd = "GdsSysCd",
            AllowPlatInd = "AllowPlatInd",
            AllowSdbdInd = "AllowSdbdInd",
            AllowGpInd = "AllowGpInd",
            MahanaClubInd = "MahanaClubInd",
            McActiveInd = "McActiveInd",
            EMemberDesc = "EMemberDesc",
            AgencyStatusCd = "AgencyStatusCd",
            CurrencyCd = "CurrencyCd",
            SecondaryCurrencyCd = "SecondaryCurrencyCd",
            OfficeCd = "OfficeCd",
            AgencyEmail = "AgencyEmail",
            AgencyWebAddress = "AgencyWebAddress",
            PromoAdInd = "PromoAdInd",
            VatId = "VatId",
            SelfBillInd = "SelfBillInd",
            PreferredCommunicationCd = "PreferredCommunicationCd",
            PreferredLanguageDesc = "PreferredLanguageDesc",
            NactaNum = "NactaNum",
            ActiveInd = "ActiveInd",
            BdmCd = "BdmCd",
            SendCustInvInd = "SendCustInvInd",
            CreditAgtInd = "CreditAgtInd",
            AgentNum = "AgentNum",
            PinClubInd = "PinClubInd",
            FinHoldInd = "FinHoldInd",
            L7daysNum = "L7daysNum",
            Option1DueDaysQty = "Option1DueDaysQty",
            Option2DueDaysQty = "Option2DueDaysQty",
            AutoCxlInd = "AutoCxlInd",
            ConsortiumAddedDt = "ConsortiumAddedDt",
            MasterAgencyInd = "MasterAgencyInd",
            OwnerCd = "OwnerCd",
            AutoEnvoInd = "AutoEnvoInd",
            OverVacSummInd = "OverVacSummInd",
            VacSummEmailDesc = "VacSummEmailDesc",
            TaxPayer1099Name = "TaxPayer1099Name",
            AgentLinkDesc = "AgentLinkDesc",
            AllowBankInd = "AllowBankInd",
            BankAccountBalAmt = "BankAccountBalAmt",
            BankAcct2Amt = "BankAcct2Amt",
            PaymentViaWireInd = "PaymentViaWireInd",
            ConsortiumRegionCd = "ConsortiumRegionCd",
            ConsortRgnNum = "ConsortRgnNum",
            ConsortiumRegionAddedDt = "ConsortiumRegionAddedDt",
            RequiredSecondaryAgentInd = "RequiredSecondaryAgentInd",
            OverrideFinalDaysInd = "OverrideFinalDaysInd",
            FinalDaysQty = "FinalDaysQty",
            OverrideOption1DaysInd = "OverrideOption1DaysInd",
            OverrideOption2DaysInd = "OverrideOption2DaysInd",
            FirstBookingDt = "FirstBookingDt",
            AgencyCreateDt = "AgencyCreateDt",
            BdmRepCd = "BdmRepCd",
            SsrRepCd = "SsrRepCd",
            NvsKeyAcctInd = "NvsKeyAcctInd",
            LastUpdated = "LastUpdated",
            Key1 = "Key1",
            SiblingId = "SiblingId",
            AgencyCdName = "AgencyCdName"
        }
    }
}

