namespace DAP.DWSupport {
    export interface MasterRow {
        MasterId?: number;
        Key1?: number;
        Key2?: number;
        Comment?: string;
    }

    export namespace MasterRow {
        export const idProperty = 'MasterId';
        export const nameProperty = 'Comment';
        export const localTextPrefix = 'DWSupport.Master';

        export declare const enum Fields {
            MasterId = "MasterId",
            Key1 = "Key1",
            Key2 = "Key2",
            Comment = "Comment"
        }
    }
}

