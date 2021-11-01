namespace DAP.DWSupport {
    export interface VwGetSeaSalesRepIdRow {
        UserId?: number;
        UserLoginName?: string;
        UserFullName?: string;
        Comments?: string;
        OfficeCode?: string;
    }

    export namespace VwGetSeaSalesRepIdRow {
        export const idProperty = 'UserLoginName';
        export const nameProperty = 'UserLoginName';
        export const localTextPrefix = 'DWSupport.VwGetSeaSalesRepId';
        export const lookupKey = 'DWSupport.LoginName';

        export function getLookup(): Q.Lookup<VwGetSeaSalesRepIdRow> {
            return Q.getLookup<VwGetSeaSalesRepIdRow>('DWSupport.LoginName');
        }

        export declare const enum Fields {
            UserId = "UserId",
            UserLoginName = "UserLoginName",
            UserFullName = "UserFullName",
            Comments = "Comments",
            OfficeCode = "OfficeCode"
        }
    }
}

