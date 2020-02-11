namespace DAP.PCHODS {
    export interface OutboundCommissionHistRow {
        CommissionId?: string;
        CompanyCd?: string;
        LowNumBookings?: number;
        HighNumBookings?: number;
        CommissionRate?: number;
        ActiveDt?: string;
        InactiveDt?: string;
        CommissionHistId?: number;
        CompanyName?: string;
    }

    export namespace OutboundCommissionHistRow {
        export const idProperty = 'CommissionHistId';
        export const nameProperty = 'CommissionId';
        export const localTextPrefix = 'PCHODS.OutboundCommissionHist';

        export declare const enum Fields {
            CommissionId = "CommissionId",
            CompanyCd = "CompanyCd",
            LowNumBookings = "LowNumBookings",
            HighNumBookings = "HighNumBookings",
            CommissionRate = "CommissionRate",
            ActiveDt = "ActiveDt",
            InactiveDt = "InactiveDt",
            CommissionHistId = "CommissionHistId",
            CompanyName = "CompanyName"
        }
    }
}

