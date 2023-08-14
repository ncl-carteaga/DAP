
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CappingAdjustmentsSuppDialog extends Serenity.EntityDialog<CappingAdjustmentsSuppRow, any> {
        protected getFormKey() { return CappingAdjustmentsSuppForm.formKey; }
        protected getIdProperty() { return CappingAdjustmentsSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CappingAdjustmentsSuppRow.localTextPrefix; }
        protected getNameProperty() { return CappingAdjustmentsSuppRow.nameProperty; }
        protected getService() { return CappingAdjustmentsSuppService.baseUrl; }

        protected form = new CappingAdjustmentsSuppForm(this.idPrefix);

    }
}