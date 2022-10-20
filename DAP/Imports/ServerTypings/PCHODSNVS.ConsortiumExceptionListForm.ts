namespace DAP.PCHODSNVS {
    export interface ConsortiumExceptionListForm {
        CompanyCd: SelectPCHCompanyEditor;
        NewItemType: Serenity.LookupEditor;
        NewItemName: Serenity.StringEditor;
        ItemType: Serenity.LookupEditor;
        ItemCd: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        ExcludeInd: Serenity.BooleanEditor;
        CombineInd: Serenity.BooleanEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class ConsortiumExceptionListForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.ConsortiumExceptionList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ConsortiumExceptionListForm.init)  {
                ConsortiumExceptionListForm.init = true;

                var s = Serenity;
                var w0 = SelectPCHCompanyEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ConsortiumExceptionListForm, [
                    'CompanyCd', w0,
                    'NewItemType', w1,
                    'NewItemName', w2,
                    'ItemType', w1,
                    'ItemCd', w2,
                    'ItemName', w2,
                    'ExcludeInd', w3,
                    'CombineInd', w3,
                    'LoadDt', w4
                ]);
            }
        }
    }
}

