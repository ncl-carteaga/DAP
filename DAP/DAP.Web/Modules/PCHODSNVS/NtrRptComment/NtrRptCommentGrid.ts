
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrRptCommentGrid extends Serenity.EntityGrid<NtrRptCommentRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrRptComment'; }
        protected getDialogType() { return NtrRptCommentDialog; }
        protected getIdProperty() { return NtrRptCommentRow.idProperty; }
        protected getLocalTextPrefix() { return NtrRptCommentRow.localTextPrefix; }
        protected getService() { return NtrRptCommentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}