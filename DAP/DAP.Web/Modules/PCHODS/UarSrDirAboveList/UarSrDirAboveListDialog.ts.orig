
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class UarSrDirAboveListDialog extends Serenity.EntityDialog<UarSrDirAboveListRow, any> {
        protected getFormKey() { return UarSrDirAboveListForm.formKey; }
        protected getIdProperty() { return UarSrDirAboveListRow.idProperty; }
        protected getLocalTextPrefix() { return UarSrDirAboveListRow.localTextPrefix; }
        protected getNameProperty() { return UarSrDirAboveListRow.nameProperty; }
        protected getService() { return UarSrDirAboveListService.baseUrl; }

        protected form = new UarSrDirAboveListForm(this.idPrefix);

        constructor() {
            super();

        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            return b;
        }

    }
}