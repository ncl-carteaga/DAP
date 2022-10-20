namespace DAP.PCHODS {
    export interface OutboundCompanyRow {
        Cd?: string;
        Nm?: string;
    }

    export namespace OutboundCompanyRow {
        export const idProperty = 'Cd';
        export const nameProperty = 'Cd';
        export const localTextPrefix = 'PCHODS.OutboundCompany';
        export const lookupKey = 'PCHODS.Outbound_Company';

        export function getLookup(): Q.Lookup<OutboundCompanyRow> {
            return Q.getLookup<OutboundCompanyRow>('PCHODS.Outbound_Company');
        }

        export declare const enum Fields {
            Cd = "Cd",
            Nm = "Nm"
        }
    }
}

