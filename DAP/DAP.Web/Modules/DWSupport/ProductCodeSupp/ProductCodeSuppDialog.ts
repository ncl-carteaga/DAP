
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ProductCodeSuppDialog extends Serenity.EntityDialog<ProductCodeSuppRow, any> {
        protected getFormKey() { return ProductCodeSuppForm.formKey; }
        protected getIdProperty() { return ProductCodeSuppRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCodeSuppRow.localTextPrefix; }
        protected getNameProperty() { return ProductCodeSuppRow.nameProperty; }
        protected getService() { return ProductCodeSuppService.baseUrl; }

        protected form = new ProductCodeSuppForm(this.idPrefix);

    }
}