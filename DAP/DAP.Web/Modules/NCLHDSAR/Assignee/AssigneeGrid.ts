
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class AssigneeGrid extends Serenity.EntityGrid<AssigneeRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.Assignee'; }
        protected getDialogType() { return AssigneeDialog; }
        protected getIdProperty() { return AssigneeRow.idProperty; }
        protected getLocalTextPrefix() { return AssigneeRow.localTextPrefix; }
        protected getService() { return AssigneeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}