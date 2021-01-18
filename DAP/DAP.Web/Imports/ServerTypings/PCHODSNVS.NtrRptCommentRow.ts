namespace DAP.PCHODSNVS {
    export interface NtrRptCommentRow {
        CommentTk?: number;
        CompanyCd?: string;
        ReportDate?: string;
        Comment?: string;
        AccountPeriodNum?: string;
    }

    export namespace NtrRptCommentRow {
        export const idProperty = 'CommentTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.NtrRptComment';

        export declare const enum Fields {
            CommentTk = "CommentTk",
            CompanyCd = "CompanyCd",
            ReportDate = "ReportDate",
            Comment = "Comment",
            AccountPeriodNum = "AccountPeriodNum"
        }
    }
}

