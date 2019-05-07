namespace DAP.PCHODS {

    @Serenity.Decorators.registerEditor()
    export class OutboundAgentLocationEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OutboundAgentLocationRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return OutboundAgentLocationRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.AgentLocationId + ']';
        }
    }
}