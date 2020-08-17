namespace DAP.DWSupport {
    export interface FinReportPublishingSuppRow {
        FinReportPublishingSurKey?: number;
        PublishDat?: string;
        PublishCd?: boolean;
        PublishCommentsTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
        ProcessedDateTs?: string;
    }

    export namespace FinReportPublishingSuppRow {
        export const idProperty = 'FinReportPublishingSurKey';
        export const nameProperty = 'PublishCommentsTxt';
        export const localTextPrefix = 'DWSupport.FinReportPublishingSupp';

        export declare const enum Fields {
            FinReportPublishingSurKey = "FinReportPublishingSurKey",
            PublishDat = "PublishDat",
            PublishCd = "PublishCd",
            PublishCommentsTxt = "PublishCommentsTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam",
            ProcessedDateTs = "ProcessedDateTs"
        }
    }
}

