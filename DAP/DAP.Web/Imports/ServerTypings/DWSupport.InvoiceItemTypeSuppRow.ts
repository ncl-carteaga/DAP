
namespace DAP.DWSupport {
    export interface InvoiceItemTypeSuppRow {
        InvoiceItemTypeGenNatKey?: number;
        InvoiceClassType1Cd?: string;
        InvoiceClassType2Cd?: string;
        InvoiceClassType3Cd?: string;
        InvoiceClassType4Cd?: string;
        InvoiceItemSourceCd?: string;
        InvoiceItemTypeCd?: string;
        InvoiceItemSubTypeCd?: string;
        InvoiceItemSubType2Cd?: string;
        InvoiceItemSubType3Cd?: string;
        ComponentCd?: string;
        ComponentDesc?: string;
        ChartOfAccountNbr?: string;
        CommentsTxt?: string;
        IsNtrCd?: string;
        IsGtrCd?: string;
        IsDilutionCd?: string;
        IsCostCd?: string;
        IsTaxCd?: string;
        IsCcCostCd?: string;
        IsAcctgAdjCd?: string;
        IsPioCd?: string;
        IsGroupAmenityCd?: string;
        AmenityCostAmt?: number;
        IsPerDiemCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        IsAcctgActualCd?: string;
        CasinoComponentCd?: string;
        CasinoComponentDesc?: string;
        DeptShortDesc?: string;
        IsSuppressBuiltCd?: string;
    }

    export namespace InvoiceItemTypeSuppRow {
        export const idProperty = 'InvoiceItemTypeGenNatKey';
        export const nameProperty = 'InvoiceClassType1Cd';
        export const localTextPrefix = 'DWSupport.InvoiceItemTypeSupp';

        export namespace Fields {
            export declare const InvoiceItemTypeGenNatKey;
            export declare const InvoiceClassType1Cd;
            export declare const InvoiceClassType2Cd;
            export declare const InvoiceClassType3Cd;
            export declare const InvoiceClassType4Cd;
            export declare const InvoiceItemSourceCd;
            export declare const InvoiceItemTypeCd;
            export declare const InvoiceItemSubTypeCd;
            export declare const InvoiceItemSubType2Cd;
            export declare const InvoiceItemSubType3Cd;
            export declare const ComponentCd;
            export declare const ComponentDesc;
            export declare const ChartOfAccountNbr;
            export declare const CommentsTxt;
            export declare const IsNtrCd;
            export declare const IsGtrCd;
            export declare const IsDilutionCd;
            export declare const IsCostCd;
            export declare const IsTaxCd;
            export declare const IsCcCostCd;
            export declare const IsAcctgAdjCd;
            export declare const IsPioCd;
            export declare const IsGroupAmenityCd;
            export declare const AmenityCostAmt;
            export declare const IsPerDiemCd;
            export declare const CreatedTs;
            export declare const CreatedByNam;
            export declare const ModifiedByNam;
            export declare const ModifiedTs;
            export declare const IsAcctgActualCd;
            export declare const CasinoComponentCd;
            export declare const CasinoComponentDesc;
            export declare const DeptShortDesc;
            export declare const IsSuppressBuiltCd;
        }

        [
            'InvoiceItemTypeGenNatKey',
            'InvoiceClassType1Cd',
            'InvoiceClassType2Cd',
            'InvoiceClassType3Cd',
            'InvoiceClassType4Cd',
            'InvoiceItemSourceCd',
            'InvoiceItemTypeCd',
            'InvoiceItemSubTypeCd',
            'InvoiceItemSubType2Cd',
            'InvoiceItemSubType3Cd',
            'ComponentCd',
            'ComponentDesc',
            'ChartOfAccountNbr',
            'CommentsTxt',
            'IsNtrCd',
            'IsGtrCd',
            'IsDilutionCd',
            'IsCostCd',
            'IsTaxCd',
            'IsCcCostCd',
            'IsAcctgAdjCd',
            'IsPioCd',
            'IsGroupAmenityCd',
            'AmenityCostAmt',
            'IsPerDiemCd',
            'CreatedTs',
            'CreatedByNam',
            'ModifiedByNam',
            'ModifiedTs',
            'IsAcctgActualCd',
            'CasinoComponentCd',
            'CasinoComponentDesc',
            'DeptShortDesc',
            'IsSuppressBuiltCd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}