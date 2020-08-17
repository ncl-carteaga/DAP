
namespace DAP.NCLHDSAR {
    // get a reference to order row field names
    import fld = SwRequestRow.Fields;

    @Serenity.Decorators.registerClass()
    export class SwRequestGrid extends Serenity.EntityGrid<SwRequestRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.SwRequest'; }
        protected getDialogType() { return SwRequestDialog; }
        protected getIdProperty() { return SwRequestRow.idProperty; }
        protected getLocalTextPrefix() { return SwRequestRow.localTextPrefix; }
        protected getService() { return SwRequestService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
           
            // make employee filter a textbox, instead of lookup, and search by starts with
            let filter = Q.first(filters, x => x.field == fld.ClientLastName);
            filter.title = "Last Name Starts With";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.ClientLastName], 'like', h.value + '%']);
                }
            };

            filter = Q.first(filters, x => x.field == fld.ClientFirstName);
            filter.title = "First Name Starts With";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.ClientFirstName], 'like', h.value + '%']);
                }
            };


            return filters;
        }

        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }
    }
}