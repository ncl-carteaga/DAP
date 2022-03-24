
namespace DAP.DWSupport {
    export interface InvoiceItemSubType2Row {
        ItemSubType2Cd?: string;
    }

    export namespace InvoiceItemSubType2Row {
        export const idProperty = 'ItemSubType2Cd';
        export const nameProperty = 'ItemSubType2Cd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSubType2';

        export namespace Fields {
            export declare const ItemSubType2Cd;
        }

        [
            'ItemSubType2Cd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}