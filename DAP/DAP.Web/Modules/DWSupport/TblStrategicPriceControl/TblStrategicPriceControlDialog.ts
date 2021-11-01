
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class TblStrategicPriceControlDialog extends Serenity.EntityDialog<TblStrategicPriceControlRow, any> {
        protected getFormKey() { return TblStrategicPriceControlForm.formKey; }
        protected getIdProperty() { return TblStrategicPriceControlRow.idProperty; }
        protected getLocalTextPrefix() { return TblStrategicPriceControlRow.localTextPrefix; }
        protected getNameProperty() { return TblStrategicPriceControlRow.nameProperty; }
        protected getService() { return TblStrategicPriceControlService.baseUrl; }

        protected form = new TblStrategicPriceControlForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }

    }
}