
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class ConsortiumExceptionListDialog extends Serenity.EntityDialog<ConsortiumExceptionListRow, any> {
        protected getFormKey() { return ConsortiumExceptionListForm.formKey; }
        protected getIdProperty() { return ConsortiumExceptionListRow.idProperty; }
        protected getLocalTextPrefix() { return ConsortiumExceptionListRow.localTextPrefix; }
        protected getNameProperty() { return ConsortiumExceptionListRow.nameProperty; }
        protected getService() { return ConsortiumExceptionListService.baseUrl; }

        protected form = new ConsortiumExceptionListForm(this.idPrefix);

    }
}