namespace DAP.DWSupport {
    export interface InvoiceItemSubTypeRow {
        ItemSubTypeCd?: string;
    }

    export namespace InvoiceItemSubTypeRow {
        export const idProperty = 'ItemSubTypeCd';
        export const nameProperty = 'ItemSubTypeCd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSubType';
        export const lookupKey = 'DWSupport.GetInvoiceItemSubType';

        export function getLookup(): Q.Lookup<InvoiceItemSubTypeRow> {
            return Q.getLookup<InvoiceItemSubTypeRow>('DWSupport.GetInvoiceItemSubType');
        }

        export declare const enum Fields {
            ItemSubTypeCd = "ItemSubTypeCd"
        }
    }
}

