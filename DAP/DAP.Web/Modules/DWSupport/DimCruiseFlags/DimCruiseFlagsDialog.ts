
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DimCruiseFlagsDialog extends Serenity.EntityDialog<DimCruiseFlagsRow, any> {
        protected getFormKey() { return DimCruiseFlagsForm.formKey; }
        protected getIdProperty() { return DimCruiseFlagsRow.idProperty; }
        protected getLocalTextPrefix() { return DimCruiseFlagsRow.localTextPrefix; }
        protected getNameProperty() { return DimCruiseFlagsRow.nameProperty; }
        protected getService() { return DimCruiseFlagsService.baseUrl; }

        protected form = new DimCruiseFlagsForm(this.idPrefix);

    }
}