namespace DAP.DWSupport {
    export interface CmiSuppForm {
        CmiTypeCd: Serenity.StringEditor;
        SailId: Serenity.IntegerEditor;
        CruiseRevAmt: Serenity.DecimalEditor;
        NcfAmt: Serenity.DecimalEditor;
        CommissionAmt: Serenity.DecimalEditor;
        CmiAmenityCostAmt: Serenity.DecimalEditor;
        AgencyId: Serenity.IntegerEditor;
        ContractDat: Serenity.DateEditor;
        CabinQty: Serenity.IntegerEditor;
        PaxQty: Serenity.IntegerEditor;
        BookingCurrencyCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        CmiSubTypeCd: Serenity.StringEditor;
        CmiSubType2Cd: Serenity.StringEditor;
        VoyageCd: Serenity.StringEditor;
        SmCabinFareAmt: Serenity.DecimalEditor;
        SmCabinFareNonrevAmt: Serenity.DecimalEditor;
        SmExcessTicketingAmt: Serenity.DecimalEditor;
        SmCruiseDiscAmt: Serenity.DecimalEditor;
        SmCostOfSalesAmt: Serenity.DecimalEditor;
        SmGuestFeesGratsExpenseAmt: Serenity.DecimalEditor;
        SmCreditCardCostAmt: Serenity.DecimalEditor;
        ShipCd: Serenity.StringEditor;
        SailDat: Serenity.DateEditor;
        SailDayQty: Serenity.IntegerEditor;
        CharterDesc: Serenity.StringEditor;
        RmContractAdjNtrNoSvcAmt: Serenity.StringEditor;
        OfficeCd: Serenity.StringEditor;
        RmFinalGuestQty: Serenity.IntegerEditor;
        RmFinalAdjNtrAmt: Serenity.IntegerEditor;
        RmFinalAdjNtrNoSvcAmt: Serenity.IntegerEditor;
        DistrictNbr: Serenity.StringEditor;
        ContractPriceAmt: Serenity.IntegerEditor;
        DepositDat: Serenity.DateEditor;
    }

    export class CmiSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CmiSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CmiSuppForm.init)  {
                CmiSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(CmiSuppForm, [
                    'CmiTypeCd', w0,
                    'SailId', w1,
                    'CruiseRevAmt', w2,
                    'NcfAmt', w2,
                    'CommissionAmt', w2,
                    'CmiAmenityCostAmt', w2,
                    'AgencyId', w1,
                    'ContractDat', w3,
                    'CabinQty', w1,
                    'PaxQty', w1,
                    'BookingCurrencyCd', w0,
                    'CreatedTs', w3,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w3,
                    'CmiSubTypeCd', w0,
                    'CmiSubType2Cd', w0,
                    'VoyageCd', w0,
                    'SmCabinFareAmt', w2,
                    'SmCabinFareNonrevAmt', w2,
                    'SmExcessTicketingAmt', w2,
                    'SmCruiseDiscAmt', w2,
                    'SmCostOfSalesAmt', w2,
                    'SmGuestFeesGratsExpenseAmt', w2,
                    'SmCreditCardCostAmt', w2,
                    'ShipCd', w0,
                    'SailDat', w3,
                    'SailDayQty', w1,
                    'CharterDesc', w0,
                    'RmContractAdjNtrNoSvcAmt', w0,
                    'OfficeCd', w0,
                    'RmFinalGuestQty', w1,
                    'RmFinalAdjNtrAmt', w1,
                    'RmFinalAdjNtrNoSvcAmt', w1,
                    'DistrictNbr', w0,
                    'ContractPriceAmt', w1,
                    'DepositDat', w3
                ]);
            }
        }
    }
}

