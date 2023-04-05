namespace DAP.DWSupport {
    export interface RevDetailFieldForm {
        RevdetailFieldNm: Serenity.StringEditor;
        RevdetailSegmentFieldNm: Serenity.StringEditor;
        RevdetailFieldCheck: Serenity.StringEditor;
        OdsFieldNm: Serenity.StringEditor;
        CubeInsInd: Serenity.IntegerEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class RevDetailFieldForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.RevDetailField';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RevDetailFieldForm.init)  {
                RevDetailFieldForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(RevDetailFieldForm, [
                    'RevdetailFieldNm', w0,
                    'RevdetailSegmentFieldNm', w0,
                    'RevdetailFieldCheck', w0,
                    'OdsFieldNm', w0,
                    'CubeInsInd', w1,
                    'LoadDt', w2
                ]);
            }
        }
    }
}

