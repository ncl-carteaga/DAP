
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class RegionMasterSuppDialog extends Serenity.EntityDialog<RegionMasterSuppRow, any> {
        protected getFormKey() { return RegionMasterSuppForm.formKey; }
        protected getIdProperty() { return RegionMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return RegionMasterSuppRow.localTextPrefix; }
        protected getNameProperty() { return RegionMasterSuppRow.nameProperty; }
        protected getService() { return RegionMasterSuppService.baseUrl; }

        protected form = new RegionMasterSuppForm(this.idPrefix);

    }
}