/// <reference path="../AmenityDetailsSupp/AmenityDetailsSuppGrid.ts" />

namespace DAP.DWSupport {

    import fld = AmenityDetailsSuppRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AmenityDetailGrid extends AmenityDetailsSuppGrid {
        protected getDialogType() { return AmenityDetailDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.AmenityId);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ AmenityId: this.amenityID });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.amenityID;
        }

        private _amenityID: number;

        get amenityID() {
            return this._amenityID;
        }

        set amenityID(value: number) {
            if (this._amenityID !== value) {
                this._amenityID = value;
                this.setEquality('AmenityId', value);
                this.refresh();
            }
        }
    }
}