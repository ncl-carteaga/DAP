
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AgencySnapshotRequestGrid extends Serenity.EntityGrid<AgencySnapshotRequestRow, any> {
        protected getColumnsKey() { return 'DWSupport.AgencySnapshotRequest'; }
        protected getDialogType() { return AgencySnapshotRequestDialog; }
        protected getIdProperty() { return AgencySnapshotRequestRow.idProperty; }
        protected getLocalTextPrefix() { return AgencySnapshotRequestRow.localTextPrefix; }
        protected getService() { return AgencySnapshotRequestService.baseUrl; }

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
    }
}