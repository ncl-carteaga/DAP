namespace DAP.DWSupport {
    export interface FinReportPublishingSuppRow {
        FinReportPublishingSurKey?: number;
        OnHold?: boolean;
        ReportName?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace FinReportPublishingSuppRow {
        export const idProperty = 'FinReportPublishingSurKey';
        export const nameProperty = 'ReportName';
        export const localTextPrefix = 'DWSupport.FinReportPublishingSupp';

        export declare const enum Fields {
            FinReportPublishingSurKey = "FinReportPublishingSurKey",
            OnHold = "OnHold",
            ReportName = "ReportName",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

