
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

        export namespace Fields {
            export declare const BudgetFinalId;
            export declare const ShipCd;
            export declare const VoyageCd;
            export declare const SalesChannelDesc;
            export declare const YearNbr;
            export declare const MonthNbr;
            export declare const OperationalNtrAmt;
            export declare const PassengerCountQty;
            export declare const PassengerDaysQty;
            export declare const CapacityDaysQty;
            export declare const CabinDaysQty;
            export declare const BudgetTypeCd;
            export declare const CharterFlagCd;
            export declare const BkCabinDaysQty;
            export declare const BkCabinQty;
            export declare const CreatedTs;
            export declare const CreatedByNam;
            export declare const ModifiedTs;
            export declare const ModifiedByNam;
        }

        [
            'BudgetFinalId',
            'ShipCd',
            'VoyageCd',
            'SalesChannelDesc',
            'YearNbr',
            'MonthNbr',
            'OperationalNtrAmt',
            'PassengerCountQty',
            'PassengerDaysQty',
            'CapacityDaysQty',
            'CabinDaysQty',
            'BudgetTypeCd',
            'CharterFlagCd',
            'BkCabinDaysQty',
            'BkCabinQty',
            'CreatedTs',
            'CreatedByNam',
            'ModifiedTs',
            'ModifiedByNam'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}