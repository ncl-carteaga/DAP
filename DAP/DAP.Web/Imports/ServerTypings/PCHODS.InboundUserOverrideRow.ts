
namespace DAP.PCHODS {
    export interface InboundUserOverrideRow {
        Id?: number;
        Company?: string;
        Invoice?: string;
        UserAssign?: string;
        ItDescription?: number;
        Inbound?: string;
        Comments?: string;
        ItDescriptionDescription?: string;
        ItDescriptionOutboundComments?: string;
    }

    export namespace InboundUserOverrideRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Company';
        export const localTextPrefix = 'PCHODS.InboundUserOverride';

        export namespace Fields {
            export declare const Id;
            export declare const Company;
            export declare const Invoice;
            export declare const UserAssign;
            export declare const ItDescription;
            export declare const Inbound;
            export declare const Comments;
            export declare const ItDescriptionDescription;
            export declare const ItDescriptionOutboundComments;
        }

        [
            'Id',
            'Company',
            'Invoice',
            'UserAssign',
            'ItDescription',
            'Inbound',
            'Comments',
            'ItDescriptionDescription',
            'ItDescriptionOutboundComments'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}