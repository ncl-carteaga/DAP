namespace DAP.PCHODS {
    export interface OutboundAgentForm {
        NvsUserId: UsersEditor;
        CompanyCd: CompanyEditor;
        PrimaryBrand: CompanyEditor;
        CobrandInd: Serenity.StringEditor;
        TeamCompanyCd: CompanyEditor;
        AgentLocationId: OutboundAgentLocationEditor;
        StartInactiveDt: Serenity.DateEditor;
    }

    export class OutboundAgentForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundAgent';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundAgentForm.init)  {
                OutboundAgentForm.init = true;

                var s = Serenity;
                var w0 = UsersEditor;
                var w1 = CompanyEditor;
                var w2 = s.StringEditor;
                var w3 = OutboundAgentLocationEditor;
                var w4 = s.DateEditor;

                Q.initFormType(OutboundAgentForm, [
                    'NvsUserId', w0,
                    'CompanyCd', w1,
                    'PrimaryBrand', w1,
                    'CobrandInd', w2,
                    'TeamCompanyCd', w1,
                    'AgentLocationId', w3,
                    'StartInactiveDt', w4
                ]);
            }
        }
    }
}

