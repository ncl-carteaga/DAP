﻿
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CategoryMasterSuppDialog extends Serenity.EntityDialog<CategoryMasterSuppRow, any> {
        protected getFormKey() { return CategoryMasterSuppForm.formKey; }
        protected getIdProperty() { return CategoryMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryMasterSuppRow.localTextPrefix; }
        protected getNameProperty() { return CategoryMasterSuppRow.nameProperty; }
        protected getService() { return CategoryMasterSuppService.baseUrl; }

        protected form = new CategoryMasterSuppForm(this.idPrefix);

    }
}