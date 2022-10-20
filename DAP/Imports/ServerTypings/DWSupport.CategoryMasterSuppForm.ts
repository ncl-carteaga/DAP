namespace DAP.DWSupport {
    export interface CategoryMasterSuppForm {
        ShipCd: Serenity.StringEditor;
        SailFromDat: Serenity.DateEditor;
        SailToDat: Serenity.DateEditor;
        CategoryCd: Serenity.StringEditor;
        MetaCategoryCd: Serenity.StringEditor;
        FleetCategoryPriorityNbr: Serenity.IntegerEditor;
        PseudoCategoryCd: Serenity.StringEditor;
        MandatoryAssignmentCd: Serenity.StringEditor;
        NewMetaCategoryCd: Serenity.StringEditor;
        RmsPseudoCategoryCd: Serenity.StringEditor;
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

                Q.initFormType(CategoryMasterSuppForm, [
                    'ShipCd', w0,
                    'SailFromDat', w1,
                    'SailToDat', w1,
                    'CategoryCd', w0,
                    'MetaCategoryCd', w0,
                    'FleetCategoryPriorityNbr', w2,
                    'PseudoCategoryCd', w0,
                    'MandatoryAssignmentCd', w0,
                    'NewMetaCategoryCd', w0,
                    'RmsPseudoCategoryCd', w0,
                    'CreatedTs', w1,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

