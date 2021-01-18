
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class ScheduledJobDialog extends Serenity.EntityDialog<ScheduledJobRow, any> {
        protected getFormKey() { return ScheduledJobForm.formKey; }
        protected getIdProperty() { return ScheduledJobRow.idProperty; }
        protected getLocalTextPrefix() { return ScheduledJobRow.localTextPrefix; }
        protected getNameProperty() { return ScheduledJobRow.nameProperty; }
        protected getService() { return ScheduledJobService.baseUrl; }

        protected form = new ScheduledJobForm(this.idPrefix);

    }
}