
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class VwSqlJobListGrid extends Serenity.EntityGrid<VwSqlJobListRow, any> {
        protected getColumnsKey() { return 'PCHDW.VwSqlJobList'; }
        protected getDialogType() { return VwSqlJobListDialog; }
        protected getIdProperty() { return VwSqlJobListRow.idProperty; }
        protected getLocalTextPrefix() { return VwSqlJobListRow.localTextPrefix; }
        protected getService() { return VwSqlJobListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createQuickSearchInput() { }

        protected getColumns() {
            var columns = super.getColumns();

            columns.push({
                field: 'Action',
                name: '',
                format: ctx => {
                    var CurItem = <VwSqlJobListRow>ctx.item;
                    var klass = "";
                    if (CurItem.Enabled) {
                        klass = '<a class="inline-action disable-job" title="Disable">' +
                            '<i class="fa  fa-times text-red"></i></a>';
                    } else {
                        klass = '<a class="inline-action enable-job" title="Enable">' +
                            '<i class="fa  fa-check text-green"></i></a>';
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

                if (target.hasClass('disable-job')) {
                    Q.confirm('Are you sure you want to disable this job?', () => {
                        var crow = Q.deepClone(this.itemAt(row));
                        VwSqlJobListService.UpdateWithSP({
                            Entity: crow
                        }, response => {
                            this.refresh();
                        });                      
                        Q.notifySuccess("Job Disabled Successfully.");
                    });
                }
                if (target.hasClass('enable-job')) {
                    Q.confirm('Are you sure you want to enable this job?', () => {
                        var crow = Q.deepClone(this.itemAt(row));
                        VwSqlJobListService.UpdateWithSP({
                            Entity: crow
                        }, response => {
                            this.refresh();
                        });
                        Q.notifySuccess("Job Enabled Successfully.");
                    });
                }
            }
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}