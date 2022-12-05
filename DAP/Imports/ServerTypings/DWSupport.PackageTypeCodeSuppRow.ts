namespace DAP.DWSupport {
    export interface PackageTypeCodeSuppRow {
        TypeId?: number;
        TypeCode?: string;
    }

    export namespace PackageTypeCodeSuppRow {
        export const idProperty = 'TypeCode';
        export const nameProperty = 'TypeCode';
        export const localTextPrefix = 'DWSupport.PackageTypeCodeSupp';
        export const lookupKey = 'DWSupport.PackageTypeCodeSupp';

        export function getLookup(): Q.Lookup<PackageTypeCodeSuppRow> {
            return Q.getLookup<PackageTypeCodeSuppRow>('DWSupport.PackageTypeCodeSupp');
        }

        export declare const enum Fields {
            TypeId = "TypeId",
            TypeCode = "TypeCode"
        }
    }
}

