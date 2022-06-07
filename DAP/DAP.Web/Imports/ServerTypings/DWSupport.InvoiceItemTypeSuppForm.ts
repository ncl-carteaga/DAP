
namespace DAP.DWSupport {
    export class InvoiceItemTypeSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.InvoiceItemTypeSupp';
    }

    export interface InvoiceItemTypeSuppForm {
        InvoiceClassType1Cd: Serenity.StringEditor;
        InvoiceClassType2Cd: Serenity.StringEditor;
        InvoiceClassType3Cd: Serenity.StringEditor;
        InvoiceClassType4Cd: Serenity.StringEditor;
        InvoiceItemSourceCd: Serenity.StringEditor;
        InvoiceItemTypeCd: Serenity.StringEditor;
        InvoiceItemSubTypeCd: Serenity.StringEditor;
        InvoiceItemSubType2Cd: Serenity.StringEditor;
        InvoiceItemSubType3Cd: Serenity.StringEditor;
        ComponentCd: Serenity.StringEditor;
        ComponentDesc: Serenity.StringEditor;
        ChartOfAccountNbr: Serenity.StringEditor;
        CommentsTxt: Serenity.StringEditor;
        IsNtrCd: Serenity.StringEditor;
        IsGtrCd: Serenity.StringEditor;
        IsDilutionCd: Serenity.StringEditor;
        IsCostCd: Serenity.StringEditor;
        IsTaxCd: Serenity.StringEditor;
        IsCcCostCd: Serenity.StringEditor;
        IsAcctgAdjCd: Serenity.StringEditor;
        IsPioCd: Serenity.StringEditor;
        IsGroupAmenityCd: Serenity.StringEditor;
        AmenityCostAmt: Serenity.DecimalEditor;
        IsPerDiemCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        IsAcctgActualCd: Serenity.StringEditor;
        CasinoComponentCd: Serenity.StringEditor;
        CasinoComponentDesc: Serenity.StringEditor;
        DeptShortDesc: Serenity.StringEditor;
        IsSuppressBuiltCd: Serenity.StringEditor;
    }

    [,
        ['InvoiceClassType1Cd', () => Serenity.StringEditor],
        ['InvoiceClassType2Cd', () => Serenity.StringEditor],
        ['InvoiceClassType3Cd', () => Serenity.StringEditor],
        ['InvoiceClassType4Cd', () => Serenity.StringEditor],
        ['InvoiceItemSourceCd', () => Serenity.StringEditor],
        ['InvoiceItemTypeCd', () => Serenity.StringEditor],
        ['InvoiceItemSubTypeCd', () => Serenity.StringEditor],
        ['InvoiceItemSubType2Cd', () => Serenity.StringEditor],
        ['InvoiceItemSubType3Cd', () => Serenity.StringEditor],
        ['ComponentCd', () => Serenity.StringEditor],
        ['ComponentDesc', () => Serenity.StringEditor],
        ['ChartOfAccountNbr', () => Serenity.StringEditor],
        ['CommentsTxt', () => Serenity.StringEditor],
        ['IsNtrCd', () => Serenity.StringEditor],
        ['IsGtrCd', () => Serenity.StringEditor],
        ['IsDilutionCd', () => Serenity.StringEditor],
        ['IsCostCd', () => Serenity.StringEditor],
        ['IsTaxCd', () => Serenity.StringEditor],
        ['IsCcCostCd', () => Serenity.StringEditor],
        ['IsAcctgAdjCd', () => Serenity.StringEditor],
        ['IsPioCd', () => Serenity.StringEditor],
        ['IsGroupAmenityCd', () => Serenity.StringEditor],
        ['AmenityCostAmt', () => Serenity.DecimalEditor],
        ['IsPerDiemCd', () => Serenity.StringEditor],
        ['CreatedTs', () => Serenity.DateEditor],
        ['CreatedByNam', () => Serenity.StringEditor],
        ['ModifiedByNam', () => Serenity.StringEditor],
        ['ModifiedTs', () => Serenity.DateEditor],
        ['IsAcctgActualCd', () => Serenity.StringEditor],
        ['CasinoComponentCd', () => Serenity.StringEditor],
        ['CasinoComponentDesc', () => Serenity.StringEditor],
        ['DeptShortDesc', () => Serenity.StringEditor],
        ['IsSuppressBuiltCd', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(InvoiceItemTypeSuppForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}