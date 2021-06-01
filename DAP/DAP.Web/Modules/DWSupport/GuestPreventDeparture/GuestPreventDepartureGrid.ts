
namespace DAP.DWSupport {

    // get a reference to order row field names
    import fld = GuestPreventDepartureRow.Fields;

    @Serenity.Decorators.registerClass()
    export class GuestPreventDepartureGrid extends Serenity.EntityGrid<GuestPreventDepartureRow, any> {
        protected getColumnsKey() { return 'DWSupport.GuestPreventDeparture'; }
        protected getDialogType() { return GuestPreventDepartureDialog; }
        protected getIdProperty() { return GuestPreventDepartureRow.idProperty; }
        protected getLocalTextPrefix() { return GuestPreventDepartureRow.localTextPrefix; }
        protected getService() { return GuestPreventDepartureService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();

            // quick filter init method is a good place to set initial
            // value for a quick filter editor, just after it is created

            // make employee filter a textbox, instead of lookup, and search by starts with
            let filter = Q.first(filters, x => x.field == fld.BoardingDenialReasonDesc);
            filter.title = "Boarding Denial Reason Contains";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.BoardingDenialReasonDesc], 'like', '%' + h.value + '%']);
                }
            };

            return filters;
        }

    }
}