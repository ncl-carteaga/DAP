
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DimCruiseFlagsGrid extends Serenity.EntityGrid<DimCruiseFlagsRow, any> {
        protected getColumnsKey() { return 'DWSupport.DimCruiseFlags'; }
        protected getDialogType() { return DimCruiseFlagsDialog; }
        protected getIdProperty() { return DimCruiseFlagsRow.idProperty; }
        protected getLocalTextPrefix() { return DimCruiseFlagsRow.localTextPrefix; }
        protected getService() { return DimCruiseFlagsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}