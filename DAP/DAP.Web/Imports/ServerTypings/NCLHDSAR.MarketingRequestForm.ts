namespace DAP.NCLHDSAR {
    export interface MarketingRequestForm {
        RequestTypeId: Serenity.LookupEditor;
        SourceId: Serenity.LookupEditor;
        BrandId: Serenity.LookupEditor;
        ContactId: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        EmailAddress: Serenity.StringEditor;
        OptOutStatusID: Serenity.LookupEditor;
        ChannelId: Serenity.LookupEditor;
        Title: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Zip: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        IsReturnedMailCd: Serenity.BooleanEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedDate: Serenity.DateEditor;
    }

    export class MarketingRequestForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.MarketingRequest';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MarketingRequestForm.init)  {
                MarketingRequestForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(MarketingRequestForm, [
                    'RequestTypeId', w0,
                    'SourceId', w0,
                    'BrandId', w0,
                    'ContactId', w1,
                    'FirstName', w1,
                    'LastName', w1,
                    'Phone', w1,
                    'EmailAddress', w1,
                    'OptOutStatusID', w0,
                    'ChannelId', w0,
                    'Title', w1,
                    'Address1', w1,
                    'Address2', w1,
                    'City', w1,
                    'State', w1,
                    'Zip', w1,
                    'Country', w1,
                    'IsReturnedMailCd', w2,
                    'CreatedBy', w1,
                    'CreatedDate', w3,
                    'ModifiedBy', w1,
                    'ModifiedDate', w3
                ]);
            }
        }
    }
}

