namespace DAP.PCHODS {
    export interface OutboundCommissionPeriodRow {
        OutboundCommissionPeriodId?: number;
        IsOpen?: boolean;
        StartDate?: string;
        EndDate?: string;
        CurrentMonth?: string;
        PreviousMonth?: string;
        ClosedDate?: string;
        ClosedBy?: string;
    }

    export namespace OutboundCommissionPeriodRow {
        export const idProperty = 'OutboundCommissionPeriodId';
        export const nameProperty = 'ClosedBy';
        export const localTextPrefix = 'PCHODS.OutboundCommissionPeriod';

        export declare const enum Fields {
            OutboundCommissionPeriodId = "OutboundCommissionPeriodId",
            IsOpen = "IsOpen",
            StartDate = "StartDate",
            EndDate = "EndDate",
            CurrentMonth = "CurrentMonth",
            PreviousMonth = "PreviousMonth",
            ClosedDate = "ClosedDate",
            ClosedBy = "ClosedBy"
        }
    }
}

