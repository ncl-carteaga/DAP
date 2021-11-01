
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class ConsortiumExceptionListGrid extends Serenity.EntityGrid<ConsortiumExceptionListRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.ConsortiumExceptionList'; }
        protected getDialogType() { return ConsortiumExceptionListDialog; }
        protected getIdProperty() { return ConsortiumExceptionListRow.idProperty; }
        protected getLocalTextPrefix() { return ConsortiumExceptionListRow.localTextPrefix; }
        protected getService() { return ConsortiumExceptionListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}