﻿
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class DataFlowGrid extends Serenity.EntityGrid<DataFlowRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.DataFlow'; }
        protected getDialogType() { return DataFlowDialog; }
        protected getIdProperty() { return DataFlowRow.idProperty; }
        protected getLocalTextPrefix() { return DataFlowRow.localTextPrefix; }
        protected getService() { return DataFlowService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}