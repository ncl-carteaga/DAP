namespace DAP.PCHODS {
    export interface OutboundMonthlyRptArchiveOverrideForm {
        OutboundMonth: Serenity.LookupEditor;
        NclId: Serenity.StringEditor;
        OriginalUserName: Serenity.StringEditor;
        OciPrevMonthDomestic: Serenity.DecimalEditor;
        SscPrevMonthDomestic: Serenity.DecimalEditor;
        OciPrevMonthInternational: Serenity.DecimalEditor;
        SscPrevMonthInternational: Serenity.DecimalEditor;
        OciPrevMonthRevDomestic: Serenity.DecimalEditor;
        SscPrevMonthRevDomestic: Serenity.DecimalEditor;
        OciPrevMonthRevInternational: Serenity.DecimalEditor;
        SscPrevMonthRevInternational: Serenity.DecimalEditor;
        OciAdjustdomestic: Serenity.DecimalEditor;
        SscAdjustdomestic: Serenity.DecimalEditor;
    }

    export class OutboundMonthlyRptArchiveOverrideForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundMonthlyRptArchiveOverride';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundMonthlyRptArchiveOverrideForm.init)  {
                OutboundMonthlyRptArchiveOverrideForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(OutboundMonthlyRptArchiveOverrideForm, [
                    'OutboundMonth', w0,
                    'NclId', w1,
                    'OriginalUserName', w1,
                    'OciPrevMonthDomestic', w2,
                    'SscPrevMonthDomestic', w2,
                    'OciPrevMonthInternational', w2,
                    'SscPrevMonthInternational', w2,
                    'OciPrevMonthRevDomestic', w2,
                    'SscPrevMonthRevDomestic', w2,
                    'OciPrevMonthRevInternational', w2,
                    'SscPrevMonthRevInternational', w2,
                    'OciAdjustdomestic', w2,
                    'SscAdjustdomestic', w2
                ]);
            }
        }
    }
}

