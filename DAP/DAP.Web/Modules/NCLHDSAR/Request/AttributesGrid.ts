/// <reference path="../RequestAttributes/RequestAttributesGrid.ts" />

namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class AttributeGrid extends RequestAttributesGrid {
        protected getDialogType() { return AttributeDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete row">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(5,0, {
                field: 'Copy Value',
                name: '',
                format: ctx => '<a class="inline-action copy-value" title="Copy value">' +
                    '<i class="fa fa-clipboard text-green"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(7,0, {
                field: 'Resolve Date',
                name: '',
                format: ctx => {
                    var CurItem = <RequestAttributesRow>ctx.item;
                    var klass = "";
                    if (CurItem.ResolvedDt == null) {
                        klass = '<a class="inline-action resolve-date" title="Mark as Resolve">' +
                            '<i class="fa fa-calendar-plus-o text-green"></i></a>'
                    } else {
                        klass = '<a class="inline-action date-resolved" title="Resolved">' +
                            '<i class="fa  fa-calendar-check-o text-green"></i></a>';
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

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        NCLHDSAR.RequestAttributesService.Delete({
                            EntityId: item.RequestAttributeId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
                else if (target.hasClass('resolve-date')) {
                    Q.confirm('Mark as resolve?', () => {

                        var crow = Q.deepClone(this.itemAt(row));
                        crow.ResolvedDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                        
                        NCLHDSAR.RequestAttributesService.Update({
                            EntityId: item.RequestAttributeId,
                            Entity: crow
                        }, response => {
                            this.refresh();
                        });
                    });
                }
                else if (target.hasClass('copy-value')) {
                    
                    var crow = Q.deepClone(this.itemAt(row));
                    var dummy = $('<input>').val(crow.RequestValue).appendTo('body').select()
                    document.execCommand('copy')
                        
                }
            }
        }
                
        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ Id: this.requestID });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.requestID;
        }

        private _RequestID: string;

        get requestID() {
            return this._RequestID;
        }

        set requestID(value: string) {
            if (this._RequestID !== value) {
                this._RequestID = value;
                this.setEquality('ID', value);
                this.refresh();
            }
        }
    }
}