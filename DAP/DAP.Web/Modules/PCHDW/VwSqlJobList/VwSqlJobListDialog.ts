
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class VwSqlJobListDialog extends Serenity.EntityDialog<VwSqlJobListRow, any> {
        protected getFormKey() { return VwSqlJobListForm.formKey; }
        protected getIdProperty() { return VwSqlJobListRow.idProperty; }
        protected getLocalTextPrefix() { return VwSqlJobListRow.localTextPrefix; }
        protected getNameProperty() { return VwSqlJobListRow.nameProperty; }
        protected getService() { return VwSqlJobListService.baseUrl; }

        protected form = new VwSqlJobListForm(this.idPrefix);

    }
}