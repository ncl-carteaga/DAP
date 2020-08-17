
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class AssigneeDialog extends Serenity.EntityDialog<AssigneeRow, any> {
        protected getFormKey() { return AssigneeForm.formKey; }
        protected getIdProperty() { return AssigneeRow.idProperty; }
        protected getLocalTextPrefix() { return AssigneeRow.localTextPrefix; }
        protected getNameProperty() { return AssigneeRow.nameProperty; }
        protected getService() { return AssigneeService.baseUrl; }

        protected form = new AssigneeForm(this.idPrefix);

    }
}