namespace DAP.DWSupport {
    export interface VoyageBudgetFinalSuppRow {
        BudgetFinalId?: number;
        ShipCd?: string;
        VoyageCd?: string;
        SalesChannelDesc?: string;
        YearNbr?: number;
        MonthNbr?: number;
        OperationalNtrAmt?: number;
        PassengerCountQty?: number;
        PassengerDaysQty?: number;
        CapacityDaysQty?: number;
        CabinDaysQty?: number;
        BudgetTypeCd?: string;
        CharterFlagCd?: string;
        BkCabinDaysQty?: number;
        BkCabinQty?: number;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace VoyageBudgetFinalSuppRow {
        export const idProperty = 'BudgetFinalId';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.VoyageBudgetFinalSupp';

        export declare const enum Fields {
            BudgetFinalId = "BudgetFinalId",
            ShipCd = "ShipCd",
            VoyageCd = "VoyageCd",
            SalesChannelDesc = "SalesChannelDesc",
            YearNbr = "YearNbr",
            MonthNbr = "MonthNbr",
            OperationalNtrAmt = "OperationalNtrAmt",
            PassengerCountQty = "PassengerCountQty",
            PassengerDaysQty = "PassengerDaysQty",
            CapacityDaysQty = "CapacityDaysQty",
            CabinDaysQty = "CabinDaysQty",
            BudgetTypeCd = "BudgetTypeCd",
            CharterFlagCd = "CharterFlagCd",
            BkCabinDaysQty = "BkCabinDaysQty",
            BkCabinQty = "BkCabinQty",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

