namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ImportErrorLogGridDialog extends Serenity.EntityDialog<ImportErrorLogRow, any> {
        protected getFormKey() { return ImportErrorLogForm.formKey; }
        protected getIdProperty() { return ImportErrorLogRow.idProperty; }
        protected getLocalTextPrefix() { return ImportErrorLogRow.localTextPrefix; }
        protected getNameProperty() { return ImportErrorLogRow.nameProperty; }
        protected getService() { return ImportErrorLogService.baseUrl; }


        protected form = new ImportErrorLogForm(this.idPrefix);   
        private aGrid: ImportErrorLogListGrid;

        constructor() {
            super();

            this.dialogTitle = "Import Error Log";
            this.aGrid = new ImportErrorLogListGrid(this.byId("ErrorGrid"));

           // this.aGrid = new ImportErrorLogGrid(this.byId('Grid'));
        }

        //protected getDialogTitle(): string {
        //    return "Import Error Log";
        //}

        //protected onDialogOpen() {
        //    super.onDialogOpen();

        //    this.element.html("~/Modules/DWSupport/ImportErrorLog/ImportErrorLogIndex.cshtml");

        //}

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "save-and-close-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "undo-delete-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "localization-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "clone-button"), 1);

            return b;
        }


    }
    
}