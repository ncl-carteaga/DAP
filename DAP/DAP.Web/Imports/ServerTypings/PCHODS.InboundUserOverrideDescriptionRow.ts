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

        export declare const enum Fields {
            Id = "Id",
            Description = "Description",
            OutboundComments = "OutboundComments"
        }
    }
}

