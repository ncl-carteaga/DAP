
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class StlyDatesGrid extends Serenity.EntityGrid<StlyDatesRow, any> {
        protected getColumnsKey() { return 'DWSupport.StlyDates'; }
        protected getDialogType() { return StlyDatesDialog; }
        protected getIdProperty() { return StlyDatesRow.idProperty; }
        protected getLocalTextPrefix() { return StlyDatesRow.localTextPrefix; }
        protected getService() { return StlyDatesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}