namespace DAP.DWSupport {
    export interface InvoiceItemSourceRow {
        ItemSourceCd?: string;
    }

    export namespace InvoiceItemSourceRow {
        export const idProperty = 'ItemSourceCd';
        export const nameProperty = 'ItemSourceCd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSource';
        export const lookupKey = 'DWSupport.GetInvoiceItemSource';

        export function getLookup(): Q.Lookup<InvoiceItemSourceRow> {
            return Q.getLookup<InvoiceItemSourceRow>('DWSupport.GetInvoiceItemSource');
        }

        export declare const enum Fields {
            ItemSourceCd = "ItemSourceCd"
        }
    }
}

