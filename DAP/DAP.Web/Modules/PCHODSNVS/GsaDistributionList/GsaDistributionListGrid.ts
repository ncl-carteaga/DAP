
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class GsaDistributionListGrid extends Serenity.EntityGrid<GsaDistributionListRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.GsaDistributionList'; }
        protected getDialogType() { return GsaDistributionListDialog; }
        protected getIdProperty() { return GsaDistributionListRow.idProperty; }
        protected getLocalTextPrefix() { return GsaDistributionListRow.localTextPrefix; }
        protected getService() { return GsaDistributionListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}