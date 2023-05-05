namespace DAP.DWSupport {
    export interface CategoryMasterSuppForm {
        ShipCd: Serenity.StringEditor;
        SailFromDat: Serenity.DateEditor;
        SailToDat: Serenity.DateEditor;
        CategoryCd: Serenity.StringEditor;
        MetaCategoryCd: Serenity.StringEditor;
        FleetCategoryPriorityNbr: Serenity.IntegerEditor;
        PseudoCategoryCd: SelectYNEditor;
        MandatoryAssignmentCd: SelectYNEditor;
        NewMetaCategoryCd: Serenity.StringEditor;
        RmsPseudoCategoryCd: SelectYNEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class CategoryMasterSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CategoryMasterSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryMasterSuppForm.init)  {
                CategoryMasterSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = SelectYNEditor;

                Q.initFormType(CategoryMasterSuppForm, [
                    'ShipCd', w0,
                    'SailFromDat', w1,
                    'SailToDat', w1,
                    'CategoryCd', w0,
                    'MetaCategoryCd', w0,
                    'FleetCategoryPriorityNbr', w2,
                    'PseudoCategoryCd', w3,
                    'MandatoryAssignmentCd', w3,
                    'NewMetaCategoryCd', w0,
                    'RmsPseudoCategoryCd', w3,
                    'CreatedTs', w1,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

