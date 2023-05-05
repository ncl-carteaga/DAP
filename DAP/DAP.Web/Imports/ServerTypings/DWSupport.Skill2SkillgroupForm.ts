namespace DAP.DWSupport {
    export interface Skill2SkillgroupForm {
        SplitGroupId: Serenity.IntegerEditor;
        SplitGroupName: Serenity.StringEditor;
        Skill: Serenity.IntegerEditor;
        AcdSource: Serenity.StringEditor;
        AcdLevel1: Serenity.StringEditor;
        AcdLevel2: Serenity.StringEditor;
        Active: Serenity.StringEditor;
        EffectiveStart: Serenity.DateEditor;
        EffectiveEnd: Serenity.DateEditor;
    }

    export class Skill2SkillgroupForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.Skill2Skillgroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!Skill2SkillgroupForm.init)  {
                Skill2SkillgroupForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(Skill2SkillgroupForm, [
                    'SplitGroupId', w0,
                    'SplitGroupName', w1,
                    'Skill', w0,
                    'AcdSource', w1,
                    'AcdLevel1', w1,
                    'AcdLevel2', w1,
                    'Active', w1,
                    'EffectiveStart', w2,
                    'EffectiveEnd', w2
                ]);
            }
        }
    }
}

