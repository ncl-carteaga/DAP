namespace DAP.DWSupport {
    export interface PortSubstitutionSuppRow {
        PortSubstitutonSurKey?: number;
        PortCd?: string;
        PortNam?: string;
        PortSubstitutonNam?: string;
        CommentTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace PortSubstitutionSuppRow {
        export const idProperty = 'PortSubstitutonSurKey';
        export const nameProperty = 'PortCd';
        export const localTextPrefix = 'DWSupport.PortSubstitutionSupp';

        export declare const enum Fields {
            PortSubstitutonSurKey = "PortSubstitutonSurKey",
            PortCd = "PortCd",
            PortNam = "PortNam",
            PortSubstitutonNam = "PortSubstitutonNam",
            CommentTxt = "CommentTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}

