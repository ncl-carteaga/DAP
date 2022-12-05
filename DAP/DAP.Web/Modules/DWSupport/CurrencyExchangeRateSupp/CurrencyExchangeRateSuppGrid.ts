
namespace DAP.DWSupport {

    // get a reference to order row field names
    import fld = CurrencyExchangeRateSuppRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CurrencyExchangeRateSuppGrid extends Serenity.EntityGrid<CurrencyExchangeRateSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CurrencyExchangeRateSupp'; }
        protected getDialogType() { return CurrencyExchangeRateSuppDialog; }
        protected getIdProperty() { return CurrencyExchangeRateSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyExchangeRateSuppRow.localTextPrefix; }
        protected getService() { return CurrencyExchangeRateSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        /*protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();

            filters.push({
                type: Serenity.DateEditor,
                field: fld.ModifiedTs,
                title: "Modified TS (Read Only)",

                init: (w) => {
                    (w as Serenity.DateEditor).value = '12/31/9999';
                    (w as Serenity.DateEditor).set_readOnly(true);
                }
            });
            
            return filters;
        }*/
    }
}