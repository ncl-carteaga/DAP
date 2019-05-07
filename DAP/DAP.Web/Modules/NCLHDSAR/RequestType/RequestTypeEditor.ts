namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerEditor()
    export class RequestTypeEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, RequestTypeRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return RequestTypeRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup);
        }
    }
}