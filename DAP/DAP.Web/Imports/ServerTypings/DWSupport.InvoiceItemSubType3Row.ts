
namespace DAP.DWSupport {
    export interface InvoiceItemSubType3Row {
        ItemSubType3Cd?: string;
    }

    export namespace InvoiceItemSubType3Row {
        export const idProperty = 'ItemSubType3Cd';
        export const nameProperty = 'ItemSubType3Cd';
        export const localTextPrefix = 'DWSupport.InvoiceItemSubType3';

        export namespace Fields {
            export declare const ItemSubType3Cd;
        }

        [
            'ItemSubType3Cd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}