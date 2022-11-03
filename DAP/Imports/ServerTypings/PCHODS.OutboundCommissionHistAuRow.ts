namespace DAP.PCHODS {
    export interface OutboundCommissionHistAuRow {
        CommissionId?: string;
        CompanyCd?: string;
        LowNumBookings?: number;
        HighNumBookings?: number;
        CommissionRate?: number;
        ActiveDt?: string;
        InactiveDt?: string;
        CommissionHistAuId?: number;
        CompanyName?: string;
    }

    export namespace OutboundCommissionHistAuRow {
        export const idProperty = 'CommissionHistAuId';
        export const nameProperty = 'CommissionId';
        export const localTextPrefix = 'PCHODS.OutboundCommissionHistAu';

        export declare const enum Fields {
            CommissionId = "CommissionId",
            CompanyCd = "CompanyCd",
            LowNumBookings = "LowNumBookings",
            HighNumBookings = "HighNumBookings",
            CommissionRate = "CommissionRate",
            ActiveDt = "ActiveDt",
            InactiveDt = "InactiveDt",
            CommissionHistAuId = "CommissionHistAuId",
            CompanyName = "CompanyName"
        }
    }
}

