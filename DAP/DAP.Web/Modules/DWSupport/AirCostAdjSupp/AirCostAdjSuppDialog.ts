
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AirCostAdjSuppDialog extends Serenity.EntityDialog<AirCostAdjSuppRow, any> {
        protected getFormKey() { return AirCostAdjSuppForm.formKey; }
        protected getIdProperty() { return AirCostAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return AirCostAdjSuppRow.localTextPrefix; }
        protected getNameProperty() { return AirCostAdjSuppRow.nameProperty; }
        protected getService() { return AirCostAdjSuppService.baseUrl; }

        protected form = new AirCostAdjSuppForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            //b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            return b;
        }

    }
}