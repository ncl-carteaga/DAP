namespace DAP.PCHODS {
    export interface OutboundAgentRow {
        AgentId?: number;
        CompanyCd?: string;
        NvsUserId?: string;
        PrimaryBrand?: string;
        StartInactiveDt?: string;
        AgentLocationId?: number;
        CobrandInd?: string;
        TeamCompanyCd?: string;
        AgentLocationDescription?: string;
        Nm?: string;
        CompanyName?: string;
        TeamCompanyName?: string;
    }

    export namespace OutboundAgentRow {
        export const idProperty = 'AgentId';
        export const nameProperty = 'NvsUserId';
        export const localTextPrefix = 'PCHODS.OutboundAgent';
        export const lookupKey = 'PCHODS.OutboundAgentLocation';

        export function getLookup(): Q.Lookup<OutboundAgentRow> {
            return Q.getLookup<OutboundAgentRow>('PCHODS.OutboundAgentLocation');
        }

        export declare const enum Fields {
            AgentId = "AgentId",
            CompanyCd = "CompanyCd",
            NvsUserId = "NvsUserId",
            PrimaryBrand = "PrimaryBrand",
            StartInactiveDt = "StartInactiveDt",
            AgentLocationId = "AgentLocationId",
            CobrandInd = "CobrandInd",
            TeamCompanyCd = "TeamCompanyCd",
            AgentLocationDescription = "AgentLocationDescription",
            Nm = "Nm",
            CompanyName = "CompanyName",
            TeamCompanyName = "TeamCompanyName"
        }
    }
}

