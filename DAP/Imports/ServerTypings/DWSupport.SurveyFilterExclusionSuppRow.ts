namespace DAP.DWSupport {
    export interface SurveyFilterExclusionSuppRow {
        SurveyExclusionSurKey?: number;
        SurveyExclusionId?: number;
        ReasonDesc?: string;
        CommentsTxt?: string;
        SailId?: number;
        GuestId?: number;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace SurveyFilterExclusionSuppRow {
        export const idProperty = 'SurveyExclusionSurKey';
        export const nameProperty = 'ReasonDesc';
        export const localTextPrefix = 'DWSupport.SurveyFilterExclusionSupp';

        export declare const enum Fields {
            SurveyExclusionSurKey = "SurveyExclusionSurKey",
            SurveyExclusionId = "SurveyExclusionId",
            ReasonDesc = "ReasonDesc",
            CommentsTxt = "CommentsTxt",
            SailId = "SailId",
            GuestId = "GuestId",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}

