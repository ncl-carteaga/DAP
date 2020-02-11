namespace DAP.PCHODS {
    export interface OutboundNvsUsersRow {
        UserId?: string;
        UserFirstName?: string;
        UserLastName?: string;
        CompanyCd?: string;
        ActiveInd?: string;
    }

    export namespace OutboundNvsUsersRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'UserId';
        export const localTextPrefix = 'PCHODS.OutboundNvsUsers';
        export const lookupKey = 'NCLHDSAR.OutboundNvsUsers';

        export function getLookup(): Q.Lookup<OutboundNvsUsersRow> {
            return Q.getLookup<OutboundNvsUsersRow>('NCLHDSAR.OutboundNvsUsers');
        }

        export declare const enum Fields {
            UserId = "UserId",
            UserFirstName = "UserFirstName",
            UserLastName = "UserLastName",
            CompanyCd = "CompanyCd",
            ActiveInd = "ActiveInd"
        }
    }
}

