namespace DAP.Avaya {
    export interface SupportChannelRow {
        SuppChannelTk?: number;
        SupportChannel?: string;
    }

    export namespace SupportChannelRow {
        export const idProperty = 'SupportChannel';
        export const nameProperty = 'SupportChannel';
        export const localTextPrefix = 'Avaya.SupportChannel';
        export const lookupKey = 'Avaya.Support_Channel';

        export function getLookup(): Q.Lookup<SupportChannelRow> {
            return Q.getLookup<SupportChannelRow>('Avaya.Support_Channel');
        }

        export declare const enum Fields {
            SuppChannelTk = "SuppChannelTk",
            SupportChannel = "SupportChannel"
        }
    }
}

