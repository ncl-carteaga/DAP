
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ImportErrorLogDialog extends Serenity.EntityDialog<ImportErrorLogRow, any> {
        protected getFormKey() { return ImportErrorLogForm.formKey; }
        protected getIdProperty() { return ImportErrorLogRow.idProperty; }
        protected getLocalTextPrefix() { return ImportErrorLogRow.localTextPrefix; }
        protected getNameProperty() { return ImportErrorLogRow.nameProperty; }
        protected getService() { return ImportErrorLogService.baseUrl; }

        protected form = new ImportErrorLogForm(this.idPrefix);

        constructor() {
            super();
        }


        //protected getToolbarButtons(): Serenity.ToolButton[] {
        //    var b = super.getToolbarButtons();

        //    b.splice(Q.indexOf(b, x => x.cssClass == "save-and-close-button"), 1);
        //    b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
        //    b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);


        //    return b;
        //}

        protected updateInterface(): void {

            super.updateInterface();

            // finding all editor elements and setting their readonly attribute
            // note that this helper method only works with basic inputs, 
            // some editors require widget based set readonly overload (setReadOnly)
            Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);

            // this.form.NclYn.element.closest('.category').toggleClass('category collapsible collapsed', true);
            //this.form.Address1.element.closest('.category').toggleClass('category collapsible collapsed', true);

            // img.toggleClass('fa-plus').toggleClass('fa-minus');

            // remove required asterisk (*)
            this.element.find('sup').hide();

            this.applyChangesButton.hide();
            this.saveAndCloseButton.hide();
            this.deleteButton.hide();

        }

    }
}