namespace DAP.DWSupport {
    export interface CmiSuppForm {
        ShipCd: Serenity.LookupEditor;
        SailId: Serenity.IntegerEditor;
        AgencyId: Serenity.IntegerEditor;
        VoyageCd: Serenity.StringEditor;
        CmiTypeCd: Serenity.StringEditor;
        CruiseRevAmt: Serenity.DecimalEditor;
        NcfAmt: Serenity.DecimalEditor;
        CommissionAmt: Serenity.DecimalEditor;
        CmiAmenityCostAmt: Serenity.DecimalEditor;
        CabinQty: Serenity.IntegerEditor;
        PaxQty: Serenity.IntegerEditor;
        VoyageStartDate: Serenity.DateEditor;
        VoyageEndDate: Serenity.DateEditor;
        ContractDat: Serenity.DateEditor;
        BookingCurrencyCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        CmiSubTypeCd: Serenity.StringEditor;
        CmiSubType2Cd: Serenity.StringEditor;
        SmCabinFareAmt: Serenity.DecimalEditor;
        SmCabinFareNonrevAmt: Serenity.DecimalEditor;
        SmExcessTicketingAmt: Serenity.DecimalEditor;
        SmCruiseDiscAmt: Serenity.DecimalEditor;
        SmCostOfSalesAmt: Serenity.DecimalEditor;
        SmGuestFeesGratsExpenseAmt: Serenity.DecimalEditor;
        SmCreditCardCostAmt: Serenity.DecimalEditor;
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
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;

                Q.initFormType(CmiSuppForm, [
                    'ShipCd', w0,
                    'SailId', w1,
                    'AgencyId', w1,
                    'VoyageCd', w2,
                    'CmiTypeCd', w2,
                    'CruiseRevAmt', w3,
                    'NcfAmt', w3,
                    'CommissionAmt', w3,
                    'CmiAmenityCostAmt', w3,
                    'CabinQty', w1,
                    'PaxQty', w1,
                    'VoyageStartDate', w4,
                    'VoyageEndDate', w4,
                    'ContractDat', w4,
                    'BookingCurrencyCd', w2,
                    'CreatedTs', w4,
                    'CreatedByNam', w2,
                    'ModifiedByNam', w2,
                    'ModifiedTs', w4,
                    'CmiSubTypeCd', w2,
                    'CmiSubType2Cd', w2,
                    'SmCabinFareAmt', w3,
                    'SmCabinFareNonrevAmt', w3,
                    'SmExcessTicketingAmt', w3,
                    'SmCruiseDiscAmt', w3,
                    'SmCostOfSalesAmt', w3,
                    'SmGuestFeesGratsExpenseAmt', w3,
                    'SmCreditCardCostAmt', w3,
                    'SailDat', w4,
                    'SailDayQty', w1,
                    'CharterDesc', w2,
                    'RmContractAdjNtrNoSvcAmt', w2,
                    'OfficeCd', w2,
                    'RmFinalGuestQty', w1,
                    'RmFinalAdjNtrAmt', w1,
                    'RmFinalAdjNtrNoSvcAmt', w1,
                    'DistrictNbr', w2,
                    'ContractPriceAmt', w1,
                    'DepositDat', w4
                ]);
            }
        }
    }
}

