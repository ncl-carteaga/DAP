namespace DAP.DWSupport {
    export interface DistrictMasterSuppForm {
        DistrictNbr: Serenity.StringEditor;
        SalesrepUserId: Serenity.LookupEditor;
        GroupCd: Serenity.LookupEditor;
        SalesChannelCd: Serenity.LookupEditor;
        RmChannelCd: Serenity.LookupEditor;
        AreaCd: Serenity.LookupEditor;
        PrimaryCrmSupportNam: Serenity.StringEditor;
        SecondaryCrmSupportNam: Serenity.StringEditor;
        GssChannelCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ChannelCd: Serenity.LookupEditor;
    }

    export class DistrictMasterSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.DistrictMasterSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DistrictMasterSuppForm.init)  {
                DistrictMasterSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(DistrictMasterSuppForm, [
                    'DistrictNbr', w0,
                    'SalesrepUserId', w1,
                    'GroupCd', w1,
                    'SalesChannelCd', w1,
                    'RmChannelCd', w1,
                    'AreaCd', w1,
                    'PrimaryCrmSupportNam', w0,
                    'SecondaryCrmSupportNam', w0,
                    'GssChannelCd', w0,
                    'CreatedTs', w2,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w2,
                    'ChannelCd', w1
                ]);
            }
        }
    }
}

