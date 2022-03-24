namespace DAP.PCHODSNVS {
    export interface TransferEstimateOciAmtForm {
        CruiseSegmentCd: Serenity.LookupEditor;
        SegmentMarketName: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        TransferCostPerPax: Serenity.StringEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class TransferEstimateOciAmtForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.TransferEstimateOciAmt';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransferEstimateOciAmtForm.init)  {
                TransferEstimateOciAmtForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TransferEstimateOciAmtForm, [
                    'CruiseSegmentCd', w0,
                    'SegmentMarketName', w1,
                    'ShipCd', w1,
                    'TransferCostPerPax', w1,
                    'LoadDt', w2
                ]);
            }
        }
    }
}

