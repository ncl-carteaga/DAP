
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class UarUnknownReviewerDialog extends Serenity.EntityDialog<UarUnknownReviewerRow, any> {
        protected getFormKey() { return UarUnknownReviewerForm.formKey; }
        protected getIdProperty() { return UarUnknownReviewerRow.idProperty; }
        protected getLocalTextPrefix() { return UarUnknownReviewerRow.localTextPrefix; }
        protected getNameProperty() { return UarUnknownReviewerRow.nameProperty; }
        protected getService() { return UarUnknownReviewerService.baseUrl; }

        protected form = new UarUnknownReviewerForm(this.idPrefix);

    }
}