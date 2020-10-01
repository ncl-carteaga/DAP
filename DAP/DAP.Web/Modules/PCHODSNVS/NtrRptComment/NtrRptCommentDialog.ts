
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrRptCommentDialog extends Serenity.EntityDialog<NtrRptCommentRow, any> {
        protected getFormKey() { return NtrRptCommentForm.formKey; }
        protected getIdProperty() { return NtrRptCommentRow.idProperty; }
        protected getLocalTextPrefix() { return NtrRptCommentRow.localTextPrefix; }
        protected getNameProperty() { return NtrRptCommentRow.nameProperty; }
        protected getService() { return NtrRptCommentService.baseUrl; }

        protected form = new NtrRptCommentForm(this.idPrefix);

    }
}