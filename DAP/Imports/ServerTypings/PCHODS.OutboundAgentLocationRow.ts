namespace DAP.PCHODS {
    export interface OutboundAgentLocationRow {
        AgentLocationId?: number;
        Description?: string;
    }

    export namespace OutboundAgentLocationRow {
        export const idProperty = 'AgentLocationId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'PCHODS.OutboundAgentLocation';
        export const lookupKey = 'PCHODS.OutboundAgentLocation';

        export function getLookup(): Q.Lookup<OutboundAgentLocationRow> {
            return Q.getLookup<OutboundAgentLocationRow>('PCHODS.OutboundAgentLocation');
        }

        export declare const enum Fields {
            AgentLocationId = "AgentLocationId",
            Description = "Description"
        }
    }
}

