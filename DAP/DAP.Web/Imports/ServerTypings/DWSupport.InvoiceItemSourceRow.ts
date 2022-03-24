
namespace DAP.DWSupport {
    export interface InvoiceItemSourceRow {
        ItemSourceCd?: string;
    }

    export namespace InvoiceItemSourceRow {
        export const idProperty = 'ItemSourceCd';
        export const nameProperty = 'ItemSourceCd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSource';

        export namespace Fields {
            export declare const ItemSourceCd;
        }

        [
            'ItemSourceCd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}