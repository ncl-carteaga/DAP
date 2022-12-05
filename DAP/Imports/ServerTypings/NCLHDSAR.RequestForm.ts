namespace DAP.NCLHDSAR {
    export interface RequestForm {
        FirstName: Serenity.StringEditor;
        ReqStatus: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        ReqApprover: Serenity.StringEditor;
        RequestTypeNum: RequestTypeEditor;
        CreatedDt: Serenity.DateEditor;
        SubjectType: Serenity.StringEditor;
        RequestType: Serenity.StringEditor;
        ReqDetails: Serenity.TextAreaEditor;
        Email: Serenity.StringEditor;
        DeadlineDt: Serenity.DateEditor;
        ReqExtended: Serenity.BooleanEditor;
        LastUpdatedDt: Serenity.DateEditor;
        ReqStage: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        NclYn: Serenity.StringEditor;
        OceaniaYn: Serenity.StringEditor;
        RegentYn: Serenity.StringEditor;
        LatitudesNum: Serenity.StringEditor;
        OceaniaMpCardNum: Serenity.StringEditor;
        RegentMpCardNum: Serenity.StringEditor;
        SixthmanYn: Serenity.StringEditor;
        IdentityVerificationOptOuts: Serenity.StringEditor;
        IdentityVerificationOtherRequests: Serenity.StringEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class RequestForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.Request';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RequestForm.init)  {
                RequestForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = RequestTypeEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(RequestForm, [
                    'FirstName', w0,
                    'ReqStatus', w0,
                    'LastName', w0,
                    'ReqApprover', w0,
                    'RequestTypeNum', w1,
                    'CreatedDt', w2,
                    'SubjectType', w0,
                    'RequestType', w0,
                    'ReqDetails', w3,
                    'Email', w0,
                    'DeadlineDt', w2,
                    'ReqExtended', w4,
                    'LastUpdatedDt', w2,
                    'ReqStage', w0,
                    'Address1', w0,
                    'City', w0,
                    'Country', w0,
                    'NclYn', w0,
                    'OceaniaYn', w0,
                    'RegentYn', w0,
                    'LatitudesNum', w0,
                    'OceaniaMpCardNum', w0,
                    'RegentMpCardNum', w0,
                    'SixthmanYn', w0,
                    'IdentityVerificationOptOuts', w0,
                    'IdentityVerificationOtherRequests', w0,
                    'LoadDt', w2
                ]);
            }
        }
    }
}

