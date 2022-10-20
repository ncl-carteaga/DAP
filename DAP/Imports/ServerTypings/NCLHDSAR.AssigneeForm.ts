namespace DAP.NCLHDSAR {
    export interface AssigneeForm {
        FullName: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
    }

    export class AssigneeForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.Assignee';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssigneeForm.init)  {
                AssigneeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(AssigneeForm, [
                    'FullName', w0,
                    'IsActive', w1
                ]);
            }
        }
    }
}

