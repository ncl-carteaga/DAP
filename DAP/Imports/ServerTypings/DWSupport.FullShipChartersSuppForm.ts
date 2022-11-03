namespace DAP.DWSupport {
    export interface FullShipChartersSuppForm {
        ShipCd: Serenity.StringEditor;
        SailDat: Serenity.DateEditor;
        SailId: Serenity.IntegerEditor;
        SailDayQty: Serenity.IntegerEditor;
        VoyageCd: Serenity.StringEditor;
        AgencyId: Serenity.IntegerEditor;
        CharterDesc: Serenity.StringEditor;
        GuestQty: Serenity.IntegerEditor;
        CharterRevAmt: Serenity.IntegerEditor;
        CharterCommAmt: Serenity.IntegerEditor;
        RmContractAdjNtrNoSvcAmt: Serenity.StringEditor;
        OfficeCd: Serenity.StringEditor;
        ContractDat: Serenity.DateEditor;
        RmFinalGuestQty: Serenity.IntegerEditor;
        RmFinalAdjNtrAmt: Serenity.IntegerEditor;
        RmFinalAdjNtrNoSvcAmt: Serenity.IntegerEditor;
        DistrictNbr: Serenity.StringEditor;
        ContractPriceAmt: Serenity.IntegerEditor;
        DepositDat: Serenity.DateEditor;
        RmNcfAmt: Serenity.IntegerEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class FullShipChartersSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.FullShipChartersSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FullShipChartersSuppForm.init)  {
                FullShipChartersSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(FullShipChartersSuppForm, [
                    'ShipCd', w0,
                    'SailDat', w1,
                    'SailId', w2,
                    'SailDayQty', w2,
                    'VoyageCd', w0,
                    'AgencyId', w2,
                    'CharterDesc', w0,
                    'GuestQty', w2,
                    'CharterRevAmt', w2,
                    'CharterCommAmt', w2,
                    'RmContractAdjNtrNoSvcAmt', w0,
                    'OfficeCd', w0,
                    'ContractDat', w1,
                    'RmFinalGuestQty', w2,
                    'RmFinalAdjNtrAmt', w2,
                    'RmFinalAdjNtrNoSvcAmt', w2,
                    'DistrictNbr', w0,
                    'ContractPriceAmt', w2,
                    'DepositDat', w1,
                    'RmNcfAmt', w2,
                    'CreatedByNam', w0,
                    'CreatedTs', w1,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

