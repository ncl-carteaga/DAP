
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class RevenueAdhocManagementGrid extends Serenity.EntityGrid<RevenueAdhocManagementRow, any> {
        protected getColumnsKey() { return 'PCHDW.RevenueAdhocManagement'; }
        protected getDialogType() { return RevenueAdhocManagementDialog; }
        protected getIdProperty() { return RevenueAdhocManagementRow.idProperty; }
        protected getLocalTextPrefix() { return RevenueAdhocManagementRow.localTextPrefix; }
        protected getService() { return RevenueAdhocManagementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.push({
                field: 'Close Period',
                name: '',
                format: ctx => {
                    var CurItem = <RevenueAdhocManagementRow>ctx.item;
                    var klass = "";
                    
                        klass = '<a class="inline-action start-job" title="Star Job">' +
                            '<i class="fa fa-play-circle text-red"></i></a>';
                    
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

                if (target.hasClass('start-job')) {
                    Q.confirm('Are you sure you want to run this Cube?', () => {
                       var crow = Q.deepClone(this.itemAt(row));
                       RevenueAdhocManagementService.ExecuteSP({
                            Entity: crow
                        }, response => {
                            this.refresh();                          
                        });
                       
                        Q.notifySuccess("Job Started Successfully.  This Job will take about 15 miunutes to complete.  Wait for email confirmation.");
                        

                    });
                }

            }

        }
    }
}