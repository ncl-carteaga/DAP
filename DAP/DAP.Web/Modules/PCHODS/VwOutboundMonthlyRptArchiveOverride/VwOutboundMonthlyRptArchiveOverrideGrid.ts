
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class VwOutboundMonthlyRptArchiveOverrideGrid extends Serenity.EntityGrid<VwOutboundMonthlyRptArchiveOverrideRow, any> {
        protected getColumnsKey() { return 'PCHODS.VwOutboundMonthlyRptArchiveOverride'; }
        protected getDialogType() { return VwOutboundMonthlyRptArchiveOverrideDialog; }
        protected getIdProperty() { return VwOutboundMonthlyRptArchiveOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return VwOutboundMonthlyRptArchiveOverrideRow.localTextPrefix; }
        protected getService() { return VwOutboundMonthlyRptArchiveOverrideService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}