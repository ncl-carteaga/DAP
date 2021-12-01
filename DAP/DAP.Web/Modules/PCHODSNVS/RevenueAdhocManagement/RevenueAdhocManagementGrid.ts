
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class RevenueAdhocManagementGrid extends Serenity.EntityGrid<RevenueAdhocManagementRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.RevenueAdhocManagement'; }
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

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            if (!Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            }

            return buttons;
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
                    Q.confirm('Are you sure you want to refresh this Cube?', () => {
                        var crow = Q.deepClone(this.itemAt(row));
                        if ((!Authorization.hasPermission("PCHODSNVS:Finance100") && crow.CompanyCd == "100") || (!Authorization.hasPermission("PCHODSNVS:Finance110") && crow.CompanyCd == "110")) {
                            Q.notifyError("User not Authorize to run this cube");
                            return;
                        }
                      
                       RevenueAdhocManagementService.ExecuteSP({
                            Entity: crow
                       }, response => {
                            crow.LastUpdatedBy = Q.Authorization.username;

                               PCHODSNVS.RevenueAdhocManagementService.Update({
                                   Entity: crow
                            }, response => {
                                   this.refresh();
                            });
                            this.refresh();                          
                        });
                       
                        Q.notifySuccess("Job Started Successfully.  This Job will take about 15 miunutes to complete.  Wait for email confirmation.");
                       

                    });
                }

            }

        }
    }
}