namespace DAP.Default {
    export interface DomainListRow {
        Id?: number;
        Description?: string;
    }

    export namespace DomainListRow {
        export const idProperty = 'Description';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.DomainList';
        export const lookupKey = 'Default.DomainList';

        export function getLookup(): Q.Lookup<DomainListRow> {
            return Q.getLookup<DomainListRow>('Default.DomainList');
        }

        export declare const enum Fields {
            Id = "Id",
            Description = "Description"
        }
    }
}

