﻿
namespace DAP.SSISConfig {
    export interface MicrosDataFlowRow {
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
        LseIndex?: number;
        CeIndex?: number;
    }

    export namespace MicrosDataFlowRow {
        export const idProperty = 'Key';
        export const nameProperty = 'Source';
        export const localTextPrefix = 'SSISConfig.MicrosDataFlow';

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
            export declare const LseIndex;
            export declare const CeIndex;
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
            'Cet',
            'LseIndex',
            'CeIndex'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}