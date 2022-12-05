namespace DAP.Avaya {
    export interface SkillSplitMappingForm {
        CmsNo: Serenity.IntegerEditor;
        AcdNo: Serenity.IntegerEditor;
        SplitNo: Serenity.IntegerEditor;
        SkillName: Serenity.StringEditor;
        Brand: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        GroupCd: Serenity.LookupEditor;
        Region: Serenity.LookupEditor;
        SupportChannel: Serenity.LookupEditor;
        Department: Serenity.LookupEditor;
        CallType: Serenity.LookupEditor;
    }

    export class SkillSplitMappingForm extends Serenity.PrefixedContext {
        static formKey = 'Avaya.SkillSplitMapping';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SkillSplitMappingForm.init)  {
                SkillSplitMappingForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(SkillSplitMappingForm, [
                    'CmsNo', w0,
                    'AcdNo', w0,
                    'SplitNo', w0,
                    'SkillName', w1,
                    'Brand', w2,
                    'Status', w2,
                    'GroupCd', w2,
                    'Region', w2,
                    'SupportChannel', w2,
                    'Department', w2,
                    'CallType', w2
                ]);
            }
        }
    }
}

