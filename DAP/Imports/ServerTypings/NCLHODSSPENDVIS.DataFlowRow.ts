﻿namespace DAP.NCLHODSSPENDVIS {
    export interface DataFlowRow {
        Key?: number;
        Source?: string;
        Name?: string;
        ProcessYn?: string;
        Target?: string;
        Description?: string;
        Package?: string;
        Status?: number;
        Lset?: string;
        Cet?: string;
    }

    export namespace DataFlowRow {
        export const idProperty = 'Key';
        export const nameProperty = 'Source';
        export const localTextPrefix = 'NCLHODSSPENDVIS.DataFlow';

        export declare const enum Fields {
            Key = "Key",
            Source = "Source",
            Name = "Name",
            ProcessYn = "ProcessYn",
            Target = "Target",
            Description = "Description",
            Package = "Package",
            Status = "Status",
            Lset = "Lset",
            Cet = "Cet"
        }
    }
}
