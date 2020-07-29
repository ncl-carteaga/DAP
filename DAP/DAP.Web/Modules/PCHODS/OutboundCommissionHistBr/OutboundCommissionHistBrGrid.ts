
namespace DAP.PCHODS {

    import fld = OutboundCommissionHistBrRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionHistBrGrid extends Serenity.EntityGrid<OutboundCommissionHistBrRow, any> {
        protected getColumnsKey() { return 'PCHODS.OutboundCommissionHistBr'; }
        protected getDialogType() { return OutboundCommissionHistBrDialog; }
        protected getIdProperty() { return OutboundCommissionHistBrRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionHistBrRow.localTextPrefix; }
        protected getService() { return OutboundCommissionHistBrService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};
        private AllowEdits: boolean = false;

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
            
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker"), 1);

            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button disabled',
                onClick: e => this.saveClick(),
                separator: true
            });

            buttons.push({
                title: 'Create New Bracket',
                cssClass: 'add-button',
                onClick: e => this.createNewBracketClick(),
                separator: true
            });

            return buttons;
        }

        private createNewBracketClick() {

            Q.confirm('Are you sure you want to create a new tear breakets?', () => {

                var HistRow: OutboundCommissionHistBrRow[];
                var equalFilter = { "CompanyCd": 111 };

                PCHODS.OutboundCommissionHistBrService.List({
                    EqualityFilter: equalFilter
                }, response => {
                    HistRow = response.Entities;
                    for (let item of HistRow) {
                        item.InactiveDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                        //Q.alert(item.InactiveDt);
                        PCHODS.OutboundCommissionHistBrService.Update({
                            EntityId: item.CommissionHistBrId,
                            Entity: item
                        }, response => {
                            item.CommissionHistBrId = null;
                            item.ActiveDt = item.InactiveDt;
                            item.InactiveDt = null;
                            PCHODS.OutboundCommissionHistBrService.Create({
                                Entity: item
                            }, response => {
                                this.AllowEdits = true;
                                this.refresh();
                            });
                        });
                    }
                    Q.notifySuccess("Bracket Created Successfully!", '');
                    
                });

            });

        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.CommissionHistBrId];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        private numericInputFormatter(ctx, num_dec) {
            var klass = 'edit numeric';
            var item = ctx.item as OutboundCommissionHistBrRow;
            var pending = this.pendingChanges[item.CommissionHistBrId];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            if (num_dec == 2) {
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            }
            else if (num_dec == 4) {
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.####') + "'/>";
            }

        }


        protected getColumns() {
            var columns = super.getColumns();
            var num = ctx => this.numericInputFormatter(ctx, 2);
            var num4 = ctx => this.numericInputFormatter(ctx, 4);
           
            Q.first(columns, x => x.field === fld.LowNumBookings).format = num;
            Q.first(columns, x => x.field === fld.HighNumBookings).format = num;
            Q.first(columns, x => x.field === fld.CommissionRate).format = num4;
           
            return columns;
        }


        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.CommissionHistBrId];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.##');
            else
                oldText = effective as string;

            var value;
            if (field === 'CommissionRate' || field == 'LowNumBookings' || field == 'HighNumBookings') {
                value = Q.parseDecimal(text);
                if (value == null || isNaN(value)) {
                    Q.notifyError(Q.text('Validation.Decimal'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
            }
            else if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i > 32767 || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else
                value = text;

            if (!pending) {
                this.pendingChanges[item.CommissionHistBrId] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.##');

            input.val(value).addClass('dirty');

            this.setSaveButtonState();
        }

        private saveClick() {
            if (Object.keys(this.pendingChanges).length === 0) {
                return;
            }

            //if (!this.AllowEdits) {
            //    Q.notifyError(Q.text('Only new brackets could be editied!'), '', null);
            //    this.refresh();
            //    return;
            //}

            // this calls save service for all modified rows, one by one
            // you could write a batch update service
            var keys = Object.keys(this.pendingChanges);
            var current = -1;
            var self = this;

            (function saveNext() {
                if (++current >= keys.length) {
                    self.refresh();
                    return;
                }

                var key = keys[current];
                var entity = Q.deepClone(self.pendingChanges[key]);
                entity.CommissionHistBrId = key;
                Q.serviceRequest('PCHODS/OutboundCommissionHistBr/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setGrouping([{
                getter: 'CompanyName'
            }]);

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = false;
            return opt;
        }

        protected usePager() {
            return false;
        }
    }
}