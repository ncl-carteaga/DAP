
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class RollupProductCodesSuppGrid extends Serenity.EntityGrid<RollupProductCodesSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.RollupProductCodesSupp'; }
        protected getDialogType() { return RollupProductCodesSuppDialog; }
        protected getIdProperty() { return RollupProductCodesSuppRow.idProperty; }
        protected getLocalTextPrefix() { return RollupProductCodesSuppRow.localTextPrefix; }
        protected getService() { return RollupProductCodesSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}