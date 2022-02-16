
namespace DAP.DWSupport {
    export interface InvoiceItemSubTypeRow {
        ItemSubTypeCd?: string;
    }

    export namespace InvoiceItemSubTypeRow {
        export const idProperty = 'ItemSubTypeCd';
        export const nameProperty = 'ItemSubTypeCd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSubType';

        export namespace Fields {
            export declare const ItemSubTypeCd;
        }

        [
            'ItemSubTypeCd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}