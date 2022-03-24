
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class UarUnknownReviewerGrid extends Serenity.EntityGrid<UarUnknownReviewerRow, any> {
        protected getColumnsKey() { return 'PCHODS.UarUnknownReviewer'; }
        protected getDialogType() { return UarUnknownReviewerDialog; }
        protected getIdProperty() { return UarUnknownReviewerRow.idProperty; }
        protected getLocalTextPrefix() { return UarUnknownReviewerRow.localTextPrefix; }
        protected getService() { return UarUnknownReviewerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}