
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundMonthlyRptArchiveOverrideGrid extends Serenity.EntityGrid<OutboundMonthlyRptArchiveOverrideRow, any> {
        protected getColumnsKey() { return 'PCHODS.OutboundMonthlyRptArchiveOverride'; }
        protected getDialogType() { return OutboundMonthlyRptArchiveOverrideDialog; }
        protected getIdProperty() { return OutboundMonthlyRptArchiveOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundMonthlyRptArchiveOverrideRow.localTextPrefix; }
        protected getService() { return OutboundMonthlyRptArchiveOverrideService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}