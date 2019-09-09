namespace DAP.PCHODS {
    export interface VwOutboundMonthlyRptArchiveOverrideForm {
        NclId: Serenity.StringEditor;
        OutboundMonth: Serenity.StringEditor;
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

    export class VwOutboundMonthlyRptArchiveOverrideForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.VwOutboundMonthlyRptArchiveOverride';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VwOutboundMonthlyRptArchiveOverrideForm.init)  {
                VwOutboundMonthlyRptArchiveOverrideForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(VwOutboundMonthlyRptArchiveOverrideForm, [
                    'NclId', w0,
                    'OutboundMonth', w0,
                    'OriginalUserName', w0,
                    'OciPrevMonthDomestic', w1,
                    'SscPrevMonthDomestic', w1,
                    'OciPrevMonthInternational', w1,
                    'SscPrevMonthInternational', w1,
                    'OciPrevMonthRevDomestic', w1,
                    'SscPrevMonthRevDomestic', w1,
                    'OciPrevMonthRevInternational', w1,
                    'SscPrevMonthRevInternational', w1,
                    'OciAdjustdomestic', w1,
                    'SscAdjustdomestic', w1
                ]);
            }
        }
    }
}

