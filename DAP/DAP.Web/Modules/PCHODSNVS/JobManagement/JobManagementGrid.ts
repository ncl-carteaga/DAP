/// <reference path="../../PCHDW/VwSqlJobList/VwSqlJobListGrid.ts" />

namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class JobManagemetGrid extends Serenity.EntityGrid<DAP.PCHDW.VwSqlJobListRow, any>
    {
        protected getColumnsKey() { return "DAP.PCHDW.VwSqlJobList"; }
        protected getIdProperty() { return DAP.PCHDW.VwSqlJobListRow.idProperty; }
        protected getDialogType() { return DAP.PCHDW.VwSqlJobListDialog; }
        protected getLocalTextPrefix() { return DAP.PCHDW.VwSqlJobListRow.localTextPrefix; }
        protected getService() { return DAP.PCHDW.VwSqlJobListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //getColumns() {
        //    return super.getColumns().filter(x => x.field != "SomeField")
        //}

        //protected createToolbar(): void {
        //}

        //protected createQuickSearchInput(): void {
        //}

    }
}