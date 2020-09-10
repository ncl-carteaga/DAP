
namespace DAP.NCLHODSMICROS {
    export interface DataFlowRow {
        Key?: number;
        Source?: string;
        Name?: string;
        ProcessYn?: string;
        Target?: string;
        Description?: string;
        SourceDesc?: string;
        TargetDesc?: string;
        Package?: string;
        Status?: number;
        Lset?: string;
        Cet?: string;
    }

    export namespace DataFlowRow {
        export const idProperty = 'Key';
        export const nameProperty = 'Source';
        export const localTextPrefix = 'NCLHODSMICROS.DataFlow';

        export namespace Fields {
            export declare const Key;
            export declare const Source;
            export declare const Name;
            export declare const ProcessYn;
            export declare const Target;
            export declare const Description;
            export declare const SourceDesc;
            export declare const TargetDesc;
            export declare const Package;
            export declare const Status;
            export declare const Lset;
            export declare const Cet;
        }

        [
            'Key',
            'Source',
            'Name',
            'ProcessYn',
            'Target',
            'Description',
            'SourceDesc',
            'TargetDesc',
            'Package',
            'Status',
            'Lset',
            'Cet'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}