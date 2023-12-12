
namespace DAP.DWSupport {
    export interface SuperPriceProgramsSuppRow {
        SuperPriceProgramSurKey?: number;
        MetaPriceProgramCd?: string;
        SuperPriceProgramCd?: string;
        MetaPricePrgrmPriorityNbr?: number;
        MetaPriceProgramDesc?: string;
        MetaMetaPriceProgramCd?: string;
        MetaMetaPriceProgramDesc?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace SuperPriceProgramsSuppRow {
        export const idProperty = 'SuperPriceProgramSurKey';
        export const nameProperty = 'MetaPriceProgramCd';
        export const localTextPrefix = 'DWSupport.SuperPriceProgramsSupp';

        export namespace Fields {
            export declare const SuperPriceProgramSurKey;
            export declare const MetaPriceProgramCd;
            export declare const SuperPriceProgramCd;
            export declare const MetaPricePrgrmPriorityNbr;
            export declare const MetaPriceProgramDesc;
            export declare const MetaMetaPriceProgramCd;
            export declare const MetaMetaPriceProgramDesc;
            export declare const CreatedTs;
            export declare const CreatedByNam;
            export declare const ModifiedByNam;
            export declare const ModifiedTs;
        }

        [
            'SuperPriceProgramSurKey',
            'MetaPriceProgramCd',
            'SuperPriceProgramCd',
            'MetaPricePrgrmPriorityNbr',
            'MetaPriceProgramDesc',
            'MetaMetaPriceProgramCd',
            'MetaMetaPriceProgramDesc',
            'CreatedTs',
            'CreatedByNam',
            'ModifiedByNam',
            'ModifiedTs'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}