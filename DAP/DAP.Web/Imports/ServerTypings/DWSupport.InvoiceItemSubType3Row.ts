namespace DAP.DWSupport {
    export interface InvoiceItemSubType3Row {
        ItemSubType3Cd?: string;
    }

    export namespace InvoiceItemSubType3Row {
        export const idProperty = 'ItemSubType3Cd';
        export const nameProperty = 'ItemSubType3Cd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSubType3';
        export const lookupKey = 'DWSupport.GetInvoiceItemSubType3';

        export function getLookup(): Q.Lookup<InvoiceItemSubType3Row> {
            return Q.getLookup<InvoiceItemSubType3Row>('DWSupport.GetInvoiceItemSubType3');
        }

        export declare const enum Fields {
            ItemSubType3Cd = "ItemSubType3Cd"
        }
    }
}

