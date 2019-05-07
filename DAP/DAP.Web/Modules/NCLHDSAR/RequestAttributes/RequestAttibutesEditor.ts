/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestAttributesEditor extends Common.GridEditorBase<RequestAttributesRow> {
        protected getColumnsKey() { return 'NCLHDSAR.RequestAttributes'; }
        protected getDialogType() { return RequestAttributesDialog; }      
        protected getLocalTextPrefix() { return RequestAttributesRow.localTextPrefix; }
        
        constructor(container: JQuery) {
            super(container);
        }
        
    }

}