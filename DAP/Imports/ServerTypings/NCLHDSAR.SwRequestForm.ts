namespace DAP.NCLHDSAR {
    export interface SwRequestForm {
        ClientFirstName: Serenity.StringEditor;
        ClientLastName: Serenity.StringEditor;
        ClientEmailAddress: Serenity.StringEditor;
        ClientAddress: Serenity.StringEditor;
        ClientZipCode: Serenity.StringEditor;
        ClientLatitudesNumber: Serenity.StringEditor;
        ClientIsRelatedtoHousehold: Serenity.StringEditor;
        RequestType: Serenity.StringEditor;
        ClientGuestCategory: Serenity.StringEditor;
        RecordTimeStamp: Serenity.DateEditor;
        LastUpdatedDt: Serenity.DateEditor;
        UpdatedBy: Serenity.StringEditor;
        AssigneeId: Serenity.LookupEditor;
        StatusId: Serenity.LookupEditor;
        ApiResponseId: Serenity.StringEditor;
        ApiResponse: Serenity.StringEditor;
        ApiResponseDepth: Serenity.StringEditor;
        NoteList: NotesEditor;
    }

    export class SwRequestForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.SwRequest';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SwRequestForm.init)  {
                SwRequestForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = NotesEditor;

                Q.initFormType(SwRequestForm, [
                    'ClientFirstName', w0,
                    'ClientLastName', w0,
                    'ClientEmailAddress', w0,
                    'ClientAddress', w0,
                    'ClientZipCode', w0,
                    'ClientLatitudesNumber', w0,
                    'ClientIsRelatedtoHousehold', w0,
                    'RequestType', w0,
                    'ClientGuestCategory', w0,
                    'RecordTimeStamp', w1,
                    'LastUpdatedDt', w1,
                    'UpdatedBy', w0,
                    'AssigneeId', w2,
                    'StatusId', w2,
                    'ApiResponseId', w0,
                    'ApiResponse', w0,
                    'ApiResponseDepth', w0,
                    'NoteList', w3
                ]);
            }
        }
    }
}

