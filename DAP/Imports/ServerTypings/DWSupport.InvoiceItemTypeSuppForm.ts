namespace DAP.DWSupport {
    export interface InvoiceItemTypeSuppForm {
        InvoiceClassType1Cd: Serenity.StringEditor;
        InvoiceClassType2Cd: Serenity.StringEditor;
        InvoiceClassType3Cd: Serenity.StringEditor;
        InvoiceClassType4Cd: Serenity.StringEditor;
        InvoiceItemSourceCd: Serenity.StringEditor;
        InvoiceItemTypeCd: Serenity.LookupEditor;
        InvoiceItemSubTypeCd: Serenity.LookupEditor;
        InvoiceItemSubType2Cd: Serenity.LookupEditor;
        InvoiceItemSubType3Cd: Serenity.LookupEditor;
        ComponentCd: Serenity.LookupEditor;
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

    export class InvoiceItemTypeSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.InvoiceItemTypeSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceItemTypeSuppForm.init)  {
                InvoiceItemTypeSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(InvoiceItemTypeSuppForm, [
                    'InvoiceClassType1Cd', w0,
                    'InvoiceClassType2Cd', w0,
                    'InvoiceClassType3Cd', w0,
                    'InvoiceClassType4Cd', w0,
                    'InvoiceItemSourceCd', w0,
                    'InvoiceItemTypeCd', w1,
                    'InvoiceItemSubTypeCd', w1,
                    'InvoiceItemSubType2Cd', w1,
                    'InvoiceItemSubType3Cd', w1,
                    'ComponentCd', w1,
                    'ComponentDesc', w0,
                    'ChartOfAccountNbr', w0,
                    'CommentsTxt', w0,
                    'IsNtrCd', w0,
                    'IsGtrCd', w0,
                    'IsDilutionCd', w0,
                    'IsCostCd', w0,
                    'IsTaxCd', w0,
                    'IsCcCostCd', w0,
                    'IsAcctgAdjCd', w0,
                    'IsPioCd', w0,
                    'IsGroupAmenityCd', w0,
                    'AmenityCostAmt', w2,
                    'IsPerDiemCd', w0,
                    'CreatedTs', w3,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w3,
                    'IsAcctgActualCd', w0,
                    'CasinoComponentCd', w0,
                    'CasinoComponentDesc', w0,
                    'DeptShortDesc', w0,
                    'IsSuppressBuiltCd', w0
                ]);
            }
        }
    }
}

