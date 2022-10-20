namespace DAP.DWSupport {
    export interface InvoiceItemTypeRow {
        ItemTypeCd?: string;
    }

    export namespace InvoiceItemTypeRow {
        export const idProperty = 'ItemTypeCd';
        export const nameProperty = 'ItemTypeCd';
        export const localTextPrefix = 'DWSupport.InvoiceItemType';
        export const lookupKey = 'DWSupport.GetInvoiceItemType';

        export function getLookup(): Q.Lookup<InvoiceItemTypeRow> {
            return Q.getLookup<InvoiceItemTypeRow>('DWSupport.GetInvoiceItemType');
        }

        export declare const enum Fields {
            ItemTypeCd = "ItemTypeCd"
        }
    }
}

