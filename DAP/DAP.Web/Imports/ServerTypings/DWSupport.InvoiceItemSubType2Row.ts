namespace DAP.DWSupport {
    export interface InvoiceItemSubType2Row {
        ItemSubType2Cd?: string;
    }

    export namespace InvoiceItemSubType2Row {
        export const idProperty = 'ItemSubType2Cd';
        export const nameProperty = 'ItemSubType2Cd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSubType2';
        export const lookupKey = 'DWSupport.GetInvoiceItemSubType2';

        export function getLookup(): Q.Lookup<InvoiceItemSubType2Row> {
            return Q.getLookup<InvoiceItemSubType2Row>('DWSupport.GetInvoiceItemSubType2');
        }

        export declare const enum Fields {
            ItemSubType2Cd = "ItemSubType2Cd"
        }
    }
}

