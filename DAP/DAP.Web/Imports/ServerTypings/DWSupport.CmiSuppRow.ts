namespace DAP.DWSupport {
    export interface CmiSuppRow {
        CmiSurKey?: number;
        CmiTypeCd?: string;
        SailId?: number;
        CruiseRevAmt?: number;
        NcfAmt?: number;
        CommissionAmt?: number;
        CmiAmenityCostAmt?: number;
        AgencyId?: number;
        ContractDat?: string;
        CabinQty?: number;
        PaxQty?: number;
        BookingCurrencyCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        CmiSubTypeCd?: string;
        CmiSubType2Cd?: string;
        VoyageCd?: string;
        SmCabinFareAmt?: number;
        SmCabinFareNonrevAmt?: number;
        SmExcessTicketingAmt?: number;
        SmCruiseDiscAmt?: number;
        SmCostOfSalesAmt?: number;
        SmGuestFeesGratsExpenseAmt?: number;
        SmCreditCardCostAmt?: number;
        ShipCd?: string;
        SailDat?: string;
        SailDayQty?: number;
        CharterDesc?: string;
        RmContractAdjNtrNoSvcAmt?: string;
        OfficeCd?: string;
        RmFinalGuestQty?: number;
        RmFinalAdjNtrAmt?: number;
        RmFinalAdjNtrNoSvcAmt?: number;
        DistrictNbr?: string;
        ContractPriceAmt?: number;
        DepositDat?: string;
    }

    export namespace CmiSuppRow {
        export const idProperty = 'CmiSurKey';
        export const nameProperty = 'CmiTypeCd';
        export const localTextPrefix = 'DWSupport.CmiSupp';

        export declare const enum Fields {
            CmiSurKey = "CmiSurKey",
            CmiTypeCd = "CmiTypeCd",
            SailId = "SailId",
            CruiseRevAmt = "CruiseRevAmt",
            NcfAmt = "NcfAmt",
            CommissionAmt = "CommissionAmt",
            CmiAmenityCostAmt = "CmiAmenityCostAmt",
            AgencyId = "AgencyId",
            ContractDat = "ContractDat",
            CabinQty = "CabinQty",
            PaxQty = "PaxQty",
            BookingCurrencyCd = "BookingCurrencyCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            CmiSubTypeCd = "CmiSubTypeCd",
            CmiSubType2Cd = "CmiSubType2Cd",
            VoyageCd = "VoyageCd",
            SmCabinFareAmt = "SmCabinFareAmt",
            SmCabinFareNonrevAmt = "SmCabinFareNonrevAmt",
            SmExcessTicketingAmt = "SmExcessTicketingAmt",
            SmCruiseDiscAmt = "SmCruiseDiscAmt",
            SmCostOfSalesAmt = "SmCostOfSalesAmt",
            SmGuestFeesGratsExpenseAmt = "SmGuestFeesGratsExpenseAmt",
            SmCreditCardCostAmt = "SmCreditCardCostAmt",
            ShipCd = "ShipCd",
            SailDat = "SailDat",
            SailDayQty = "SailDayQty",
            CharterDesc = "CharterDesc",
            RmContractAdjNtrNoSvcAmt = "RmContractAdjNtrNoSvcAmt",
            OfficeCd = "OfficeCd",
            RmFinalGuestQty = "RmFinalGuestQty",
            RmFinalAdjNtrAmt = "RmFinalAdjNtrAmt",
            RmFinalAdjNtrNoSvcAmt = "RmFinalAdjNtrNoSvcAmt",
            DistrictNbr = "DistrictNbr",
            ContractPriceAmt = "ContractPriceAmt",
            DepositDat = "DepositDat"
        }
    }
}

