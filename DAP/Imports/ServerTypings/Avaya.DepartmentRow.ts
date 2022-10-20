namespace DAP.Avaya {
    export interface DepartmentRow {
        DepartmentTk?: number;
        Department?: string;
    }

    export namespace DepartmentRow {
        export const idProperty = 'Department';
        export const nameProperty = 'Department';
        export const localTextPrefix = 'Avaya.Department';
        export const lookupKey = 'Avaya.Department';

        export function getLookup(): Q.Lookup<DepartmentRow> {
            return Q.getLookup<DepartmentRow>('Avaya.Department');
        }

        export declare const enum Fields {
            DepartmentTk = "DepartmentTk",
            Department = "Department"
        }
    }
}

