namespace DAP.NCLHDSAR {
    export interface AssigneeRow {
        AssigneeId?: number;
        FullName?: string;
        IsActive?: boolean;
    }

    export namespace AssigneeRow {
        export const idProperty = 'AssigneeId';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'NCLHDSAR.Assignee';
        export const lookupKey = 'NCLHDSAR.Assignee';

        export function getLookup(): Q.Lookup<AssigneeRow> {
            return Q.getLookup<AssigneeRow>('NCLHDSAR.Assignee');
        }

        export declare const enum Fields {
            AssigneeId = "AssigneeId",
            FullName = "FullName",
            IsActive = "IsActive"
        }
    }
}

