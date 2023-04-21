namespace DAP.DWSupport {
    export interface ResExclusionSuppRow {
        ResExclusionId?: number;
        ResId?: number;
        FromDataAsOfDt?: string;
        ToDataAsOfDt?: string;
        CommentTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace ResExclusionSuppRow {
        export const idProperty = 'ResExclusionId';
        export const nameProperty = 'CommentTxt';
        export const localTextPrefix = 'DWSupport.ResExclusionSupp';

        export declare const enum Fields {
            ResExclusionId = "ResExclusionId",
            ResId = "ResId",
            FromDataAsOfDt = "FromDataAsOfDt",
            ToDataAsOfDt = "ToDataAsOfDt",
            CommentTxt = "CommentTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

