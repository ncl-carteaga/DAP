
namespace DAP.PCHODS {
    export interface InboundUserOverrideDescriptionRow {
        Id?: number;
        Description?: string;
        OutboundComments?: string;
    }

    export namespace InboundUserOverrideDescriptionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'PCHODS.InboundUserOverrideDescription';

        export namespace Fields {
            export declare const Id;
            export declare const Description;
            export declare const OutboundComments;
        }

        [
            'Id',
            'Description',
            'OutboundComments'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}