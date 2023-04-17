
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CruiseSegmentDaysOverrideDialog extends Serenity.EntityDialog<CruiseSegmentDaysOverrideRow, any> {
        protected getFormKey() { return CruiseSegmentDaysOverrideForm.formKey; }
        protected getIdProperty() { return CruiseSegmentDaysOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return CruiseSegmentDaysOverrideRow.localTextPrefix; }
        protected getNameProperty() { return CruiseSegmentDaysOverrideRow.nameProperty; }
        protected getService() { return CruiseSegmentDaysOverrideService.baseUrl; }

        protected form = new CruiseSegmentDaysOverrideForm(this.idPrefix);

    }
}