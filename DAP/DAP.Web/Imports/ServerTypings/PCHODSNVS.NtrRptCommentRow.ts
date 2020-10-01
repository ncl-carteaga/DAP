
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

        export namespace Fields {
            export declare const CommentTk;
            export declare const CompanyCd;
            export declare const ReportDate;
            export declare const Comment;
            export declare const AccountPeriodNum;
        }

        [
            'CommentTk',
            'CompanyCd',
            'ReportDate',
            'Comment',
            'AccountPeriodNum'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}