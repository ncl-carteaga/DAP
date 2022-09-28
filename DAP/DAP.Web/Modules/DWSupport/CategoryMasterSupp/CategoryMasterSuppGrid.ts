
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CategoryMasterSuppGrid extends Serenity.EntityGrid<CategoryMasterSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CategoryMasterSupp'; }
        protected getDialogType() { return CategoryMasterSuppDialog; }
        protected getIdProperty() { return CategoryMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryMasterSuppRow.localTextPrefix; }
        protected getService() { return CategoryMasterSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}