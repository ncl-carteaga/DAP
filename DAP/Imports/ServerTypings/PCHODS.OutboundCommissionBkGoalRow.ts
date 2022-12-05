namespace DAP.PCHODS {
    export interface OutboundCommissionBkGoalRow {
        CommissionTk?: number;
        CompanyCd?: number;
        CommissionMonth?: string;
        NumOfBkGoal?: number;
        LoadDt?: string;
        CompanyName?: string;
    }

    export namespace OutboundCommissionBkGoalRow {
        export const idProperty = 'CommissionTk';
        export const localTextPrefix = 'PCHODS.OutboundCommissionBkGoal';
        export const lookupKey = 'PCHODS.OutboundAgentLocation';

        export function getLookup(): Q.Lookup<OutboundCommissionBkGoalRow> {
            return Q.getLookup<OutboundCommissionBkGoalRow>('PCHODS.OutboundAgentLocation');
        }

        export declare const enum Fields {
            CommissionTk = "CommissionTk",
            CompanyCd = "CompanyCd",
            CommissionMonth = "CommissionMonth",
            NumOfBkGoal = "NumOfBkGoal",
            LoadDt = "LoadDt",
            CompanyName = "CompanyName"
        }
    }
}

