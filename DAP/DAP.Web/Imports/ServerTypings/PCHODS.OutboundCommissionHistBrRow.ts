namespace DAP.PCHODS {
    export interface OutboundCommissionHistBrRow {
        CommissionId?: string;
        CompanyCd?: string;
        LowNumBookings?: number;
        HighNumBookings?: number;
        CommissionRate?: number;
        ActiveDt?: string;
        InactiveDt?: string;
        CommissionHistBrId?: number;
        CompanyName?: string;
    }

    export namespace OutboundCommissionHistBrRow {
        export const idProperty = 'CommissionHistBrId';
        export const nameProperty = 'CommissionId';
        export const localTextPrefix = 'PCHODS.OutboundCommissionHistBr';

        export declare const enum Fields {
            CommissionId = "CommissionId",
            CompanyCd = "CompanyCd",
            LowNumBookings = "LowNumBookings",
            HighNumBookings = "HighNumBookings",
            CommissionRate = "CommissionRate",
            ActiveDt = "ActiveDt",
            InactiveDt = "InactiveDt",
            CommissionHistBrId = "CommissionHistBrId",
            CompanyName = "CompanyName"
        }
    }
}

