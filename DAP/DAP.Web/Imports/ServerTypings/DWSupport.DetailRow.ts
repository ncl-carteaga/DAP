namespace DAP.DWSupport {
    export interface DetailRow {
        DetailId?: number;
        Key1?: number;
        Key2?: number;
        Value1?: string;
        Value2?: string;
    }

    export namespace DetailRow {
        export const idProperty = 'DetailId';
        export const nameProperty = 'Value1';
        export const localTextPrefix = 'DWSupport.Detail';

        export declare const enum Fields {
            DetailId = "DetailId",
            Key1 = "Key1",
            Key2 = "Key2",
            Value1 = "Value1",
            Value2 = "Value2"
        }
    }
}

