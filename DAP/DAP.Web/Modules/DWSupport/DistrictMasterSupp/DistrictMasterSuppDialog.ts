
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DistrictMasterSuppDialog extends Serenity.EntityDialog<DistrictMasterSuppRow, any> {
        protected getFormKey() { return DistrictMasterSuppForm.formKey; }
        protected getIdProperty() { return DistrictMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return DistrictMasterSuppRow.localTextPrefix; }
        protected getNameProperty() { return DistrictMasterSuppRow.nameProperty; }
        protected getService() { return DistrictMasterSuppService.baseUrl; }

        protected form = new DistrictMasterSuppForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

           // b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            return b;
        }

    }
}