
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ImportErrorLogGrid extends Serenity.EntityGrid<ImportErrorLogRow, any> {
        protected getColumnsKey() { return 'DWSupport.ImportErrorLog'; }
        protected getDialogType() { return ImportErrorLogDialog; }
        protected getIdProperty() { return ImportErrorLogRow.idProperty; }
        protected getLocalTextPrefix() { return ImportErrorLogRow.localTextPrefix; }
        protected getService() { return ImportErrorLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


    }
}