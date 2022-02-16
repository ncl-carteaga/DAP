
namespace DAP.DWSupport {
    export interface InvoiceItemTypeRow {
        ItemTypeCd?: string;
    }

    export namespace InvoiceItemTypeRow {
        export const idProperty = 'ItemTypeCd';
        export const nameProperty = 'ItemTypeCd';
        export const localTextPrefix = 'DWSupport.InvoiceItemType';

        export namespace Fields {
            export declare const ItemTypeCd;
        }

        [
            'ItemTypeCd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}