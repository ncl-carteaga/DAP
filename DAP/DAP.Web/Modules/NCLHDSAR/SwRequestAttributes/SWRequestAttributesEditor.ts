/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class SwRequestAttributesEditor extends Common.GridEditorBase<SwRequestAttributesRow> {
        protected getColumnsKey() { return 'NCLHDSAR.SwRequestAttributes'; }
        protected getDialogType() { return SwRequestAttributesDialog; }
        protected getLocalTextPrefix() { return SwRequestAttributesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

    }

}