
namespace DAP.DWSupport {
    export class VoyageBudgetFinalSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.VoyageBudgetFinalSupp';
    }

    export interface VoyageBudgetFinalSuppForm {
        ShipCd: Serenity.StringEditor;
        VoyageCd: Serenity.StringEditor;
        SalesChannelDesc: Serenity.StringEditor;
        YearNbr: Serenity.IntegerEditor;
        MonthNbr: Serenity.IntegerEditor;
        OperationalNtrAmt: Serenity.DecimalEditor;
        PassengerCountQty: Serenity.DecimalEditor;
        PassengerDaysQty: Serenity.DecimalEditor;
        CapacityDaysQty: Serenity.DecimalEditor;
        CabinDaysQty: Serenity.DecimalEditor;
        BudgetTypeCd: Serenity.StringEditor;
        CharterFlagCd: Serenity.StringEditor;
        BkCabinDaysQty: Serenity.DecimalEditor;
        BkCabinQty: Serenity.DecimalEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    [,
        ['ShipCd', () => Serenity.StringEditor],
        ['VoyageCd', () => Serenity.StringEditor],
        ['SalesChannelDesc', () => Serenity.StringEditor],
        ['YearNbr', () => Serenity.IntegerEditor],
        ['MonthNbr', () => Serenity.IntegerEditor],
        ['OperationalNtrAmt', () => Serenity.DecimalEditor],
        ['PassengerCountQty', () => Serenity.DecimalEditor],
        ['PassengerDaysQty', () => Serenity.DecimalEditor],
        ['CapacityDaysQty', () => Serenity.DecimalEditor],
        ['CabinDaysQty', () => Serenity.DecimalEditor],
        ['BudgetTypeCd', () => Serenity.StringEditor],
        ['CharterFlagCd', () => Serenity.StringEditor],
        ['BkCabinDaysQty', () => Serenity.DecimalEditor],
        ['BkCabinQty', () => Serenity.DecimalEditor],
        ['CreatedTs', () => Serenity.DateEditor],
        ['CreatedByNam', () => Serenity.StringEditor],
        ['ModifiedTs', () => Serenity.DateEditor],
        ['ModifiedByNam', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(VoyageBudgetFinalSuppForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}