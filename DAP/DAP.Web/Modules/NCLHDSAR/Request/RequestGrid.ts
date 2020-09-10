
namespace DAP.NCLHDSAR {

    // get a reference to order row field names
    import fld = RequestRow.Fields;

    @Serenity.Decorators.registerClass()    
    export class RequestGrid extends Serenity.EntityGrid<RequestRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.Request'; }
        protected getDialogType() { return RequestDialog; }
        protected getIdProperty() { return RequestRow.idProperty; }
        protected getLocalTextPrefix() { return RequestRow.localTextPrefix; }
        protected getService() { return RequestService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();

            // quick filter init method is a good place to set initial
            // value for a quick filter editor, just after it is created

            //filters.push({
            //    field: fld.ReqStatus,
            //    type: Serenity.LookupEditor,
            //    title: "Status",
            //    cssClass: "quick-filter-width-250",
            //    options: {
            //        lookupKey: RequestRow.lookupKey
            //    }
            //});

            //Q.first(filters, x => x.field == fld.ReqStatus).init = w => {
            //    (w as Serenity.TextAreaEditor).value = "IN PROGRESS";
            //};

            // make employee filter a textbox, instead of lookup, and search by starts with
            let filter = Q.first(filters, x => x.field == fld.LastName);
            filter.title = "Last Name Starts With";
            filter.type = Serenity.StringEditor;            
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.LastName], 'like', h.value + '%']);
                }
            };

            filter = Q.first(filters, x => x.field == fld.FirstName);
            filter.title = "First Name Starts With";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.FirstName], 'like', h.value + '%']);
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