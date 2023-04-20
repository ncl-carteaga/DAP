namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SailingExclusionSuppDialog extends Serenity.EntityDialog<SailingExclusionSuppRow, any> {
        protected getFormKey() { return SailingExclusionSuppForm.formKey; }
        protected getIdProperty() { return SailingExclusionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SailingExclusionSuppRow.localTextPrefix; }
        protected getNameProperty() { return SailingExclusionSuppRow.nameProperty; }
        protected getService() { return SailingExclusionSuppService.baseUrl; }

        protected form = new SailingExclusionSuppForm(this.idPrefix);


        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);

            return b;
        }
    }
}