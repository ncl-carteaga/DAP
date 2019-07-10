
namespace DAP.PCHODS {
    export interface OutboundNvsUsersRow {
        UserId?: string;
        UserFirstName?: string;
        UserLastName?: string;
        CompanyCd?: string;
        ActiveInd?: string;
        DepartmentCd?: string;
        DepartmentDesc?: string;
    }

    export namespace OutboundNvsUsersRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'UserId';
        export const localTextPrefix = 'PCHODS.OutboundNvsUsers';
        export const lookupKey = 'NCLHDSAR.OutboundNvsUsers';

        export namespace Fields {
            export declare const UserId;
            export declare const UserFirstName;
            export declare const UserLastName;
            export declare const CompanyCd;
            export declare const ActiveInd;
            export declare const DepartmentCd;
            export declare const DepartmentDesc;
        }

        [
            'UserId',
            'UserFirstName',
            'UserLastName',
            'CompanyCd',
            'ActiveInd',
            'DepartmentCd',
            'DepartmentDesc'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}