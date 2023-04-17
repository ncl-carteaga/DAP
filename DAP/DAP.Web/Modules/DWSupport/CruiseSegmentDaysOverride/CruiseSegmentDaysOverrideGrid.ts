
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CruiseSegmentDaysOverrideGrid extends Serenity.EntityGrid<CruiseSegmentDaysOverrideRow, any> {
        protected getColumnsKey() { return 'DWSupport.CruiseSegmentDaysOverride'; }
        protected getDialogType() { return CruiseSegmentDaysOverrideDialog; }
        protected getIdProperty() { return CruiseSegmentDaysOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return CruiseSegmentDaysOverrideRow.localTextPrefix; }
        protected getService() { return CruiseSegmentDaysOverrideService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}