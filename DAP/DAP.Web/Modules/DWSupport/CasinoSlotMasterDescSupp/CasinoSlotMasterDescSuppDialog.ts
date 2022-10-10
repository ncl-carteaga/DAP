
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CasinoSlotMasterDescSuppDialog extends Serenity.EntityDialog<CasinoSlotMasterDescSuppRow, any> {
        protected getFormKey() { return CasinoSlotMasterDescSuppForm.formKey; }
        protected getIdProperty() { return CasinoSlotMasterDescSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CasinoSlotMasterDescSuppRow.localTextPrefix; }
        protected getNameProperty() { return CasinoSlotMasterDescSuppRow.nameProperty; }
        protected getService() { return CasinoSlotMasterDescSuppService.baseUrl; }

        protected form = new CasinoSlotMasterDescSuppForm(this.idPrefix);

    }
}