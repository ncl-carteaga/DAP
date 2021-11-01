
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class SuppKeyAcctTargetDialog extends Serenity.EntityDialog<SuppKeyAcctTargetRow, any> {
        protected getFormKey() { return SuppKeyAcctTargetForm.formKey; }
        protected getIdProperty() { return SuppKeyAcctTargetRow.idProperty; }
        protected getLocalTextPrefix() { return SuppKeyAcctTargetRow.localTextPrefix; }
        protected getNameProperty() { return SuppKeyAcctTargetRow.nameProperty; }
        protected getService() { return SuppKeyAcctTargetService.baseUrl; }

        protected form = new SuppKeyAcctTargetForm(this.idPrefix);

    }
}