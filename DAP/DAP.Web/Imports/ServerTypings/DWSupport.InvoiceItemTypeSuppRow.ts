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
        M1?: number;
        M2?: number;
        M3?: number;
        M4?: number;
    }

    export namespace InvoiceItemTypeSuppRow {
        export const idProperty = 'InvoiceItemTypeGenNatKey';
        export const nameProperty = 'InvoiceClassType1Cd';
        export const localTextPrefix = 'DWSupport.InvoiceItemTypeSupp';

        export declare const enum Fields {
            InvoiceItemTypeGenNatKey = "InvoiceItemTypeGenNatKey",
            InvoiceClassType1Cd = "InvoiceClassType1Cd",
            InvoiceClassType2Cd = "InvoiceClassType2Cd",
            InvoiceClassType3Cd = "InvoiceClassType3Cd",
            InvoiceClassType4Cd = "InvoiceClassType4Cd",
            InvoiceItemSourceCd = "InvoiceItemSourceCd",
            InvoiceItemTypeCd = "InvoiceItemTypeCd",
            InvoiceItemSubTypeCd = "InvoiceItemSubTypeCd",
            InvoiceItemSubType2Cd = "InvoiceItemSubType2Cd",
            InvoiceItemSubType3Cd = "InvoiceItemSubType3Cd",
            ComponentCd = "ComponentCd",
            ComponentDesc = "ComponentDesc",
            ChartOfAccountNbr = "ChartOfAccountNbr",
            CommentsTxt = "CommentsTxt",
            IsNtrCd = "IsNtrCd",
            IsGtrCd = "IsGtrCd",
            IsDilutionCd = "IsDilutionCd",
            IsCostCd = "IsCostCd",
            IsTaxCd = "IsTaxCd",
            IsCcCostCd = "IsCcCostCd",
            IsAcctgAdjCd = "IsAcctgAdjCd",
            IsPioCd = "IsPioCd",
            IsGroupAmenityCd = "IsGroupAmenityCd",
            AmenityCostAmt = "AmenityCostAmt",
            IsPerDiemCd = "IsPerDiemCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            IsAcctgActualCd = "IsAcctgActualCd",
            CasinoComponentCd = "CasinoComponentCd",
            CasinoComponentDesc = "CasinoComponentDesc",
            DeptShortDesc = "DeptShortDesc",
            IsSuppressBuiltCd = "IsSuppressBuiltCd",
            M1 = "M1",
            M2 = "M2",
            M3 = "M3",
            M4 = "M4"
        }
    }
}

