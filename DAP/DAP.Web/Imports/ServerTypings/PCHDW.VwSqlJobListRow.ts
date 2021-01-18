namespace DAP.PCHDW {
    export interface VwSqlJobListRow {
        Name?: string;
        JobDescription?: string;
        Enabled?: boolean;
        DateCreated?: string;
        DateModified?: string;
    }

    export namespace VwSqlJobListRow {
        export const idProperty = 'Name';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PCHDW.VwSqlJobList';

        export declare const enum Fields {
            Name = "Name",
            JobDescription = "JobDescription",
            Enabled = "Enabled",
            DateCreated = "DateCreated",
            DateModified = "DateModified"
        }
    }
}

