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

        export declare const enum Fields {
            Id = "Id",
            Company = "Company",
            Invoice = "Invoice",
            UserAssign = "UserAssign",
            ItDescription = "ItDescription",
            Inbound = "Inbound",
            Comments = "Comments",
            ItDescriptionDescription = "ItDescriptionDescription",
            ItDescriptionOutboundComments = "ItDescriptionOutboundComments"
        }
    }
}

