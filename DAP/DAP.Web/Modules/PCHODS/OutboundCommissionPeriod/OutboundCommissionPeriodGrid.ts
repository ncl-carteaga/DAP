
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionPeriodGrid extends Serenity.EntityGrid<OutboundCommissionPeriodRow, any> {
        protected getColumnsKey() { return 'PCHODS.OutboundCommissionPeriod'; }
        protected getDialogType() { return OutboundCommissionPeriodDialog; }
        protected getIdProperty() { return OutboundCommissionPeriodRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionPeriodRow.localTextPrefix; }
        protected getService() { return OutboundCommissionPeriodService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createQuickSearchInput() { }

        protected getColumns() {
            var columns = super.getColumns();

            columns.push({
                field: 'Close Period',
                name: '',
                format: ctx => {
                    var CurItem = <OutboundCommissionPeriodRow>ctx.item;
                    var klass = "";
                    if (CurItem.IsOpen) {
                        klass = '<a class="inline-action close-period" title="Close Period">' +
                            '<i class="fa  fa-unlock text-red"></i></a>';
                    } else {
                        klass = '<a class="inline-action period-closed" title="Period Closed">' +
                            '<i class="fa  fa-lock text-green"></i></a>';
                    }
                    return klass;
                },
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('close-period')) {
                    Q.confirm('Are you sure you want to close this period?', () => {

                        var crow = Q.deepClone(this.itemAt(row));
                        crow.ClosedDate = Q.formatDate(new Date(), "MM/dd/yyyy");
                        crow.IsOpen = false;
                        crow.ClosedBy = Q.Authorization.username;

                        PCHODS.OutboundCommissionPeriodService.Update({
                            EntityId: item.OutboundCommissionPeriodID,
                            Entity: crow
                        }, response => {
                            this.refresh();
                        });

                        crow.IsOpen = true;
                        crow.ClosedDate = null;
                        crow.ClosedBy = null;
                        crow.OutboundCommissionPeriodID = null;

                        let st = new Date(crow.StartDate);
                        st.setMonth(st.getMonth() + 1);

                        crow.StartDate = st;
                        crow.EndDate = new Date(st.getFullYear(), st.getMonth() + 1, 0);
                        crow.PreviousMonth = crow.CurrentMonth;
                        crow.CurrentMonth = st;

                        PCHODS.OutboundCommissionPeriodService.Create({
                            Entity: crow
                        }, response => {
                            this.refresh();
                        });
                        Q.notifySuccess("Commission Period Closed Successfully.");
                    });
                }
            }
        }

        

        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "Column Picker"), 1);

            //Add a Button
            //buttons.push({
            //    title: "Close Commission Period",
            //    hint: "Close Commission Period",
            //    cssClass: "'close-period-button' ",
            //    icon: "'fa-hand-lizard-o'",
            //    onClick: () => this.closePerdiodClick(),
            //    separator: true
            //});       

            return buttons;
        }
    
    }
}