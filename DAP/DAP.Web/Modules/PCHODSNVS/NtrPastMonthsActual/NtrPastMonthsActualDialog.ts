
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrPastMonthsActualDialog extends Serenity.EntityDialog<NtrPastMonthsActualRow, any> {
        protected getFormKey() { return NtrPastMonthsActualForm.formKey; }
        protected getIdProperty() { return NtrPastMonthsActualRow.idProperty; }
        protected getLocalTextPrefix() { return NtrPastMonthsActualRow.localTextPrefix; }
        protected getNameProperty() { return NtrPastMonthsActualRow.nameProperty; }
        protected getService() { return NtrPastMonthsActualService.baseUrl; }

        protected form = new NtrPastMonthsActualForm(this.idPrefix);

    }
}