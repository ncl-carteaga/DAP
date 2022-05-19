namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ImportErrorLogListGrid extends Serenity.EntityGrid<ImportErrorLogRow, any>
    {
        protected getColumnsKey() { return "DWSupport.ImportErrorLog"; }
        protected getIdProperty() { return ImportErrorLogRow.idProperty; }
        protected getDialogType() { return ImportErrorLogDialog; }
        protected getLocalTextPrefix() { return ImportErrorLogRow.localTextPrefix; }
        protected getService() { return ImportErrorLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbar(): void {
        }

        protected createQuickSearchInput(): void {
        }

    }
}