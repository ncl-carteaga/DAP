namespace DAP.PCHODS {

    @Serenity.Decorators.registerEditor()
    export class CompanyEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OutboundCompanyRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return OutboundCompanyRow.lookupKey;
        }

        protected getItemText(item: PCHODS.OutboundCompanyRow, lookup: Q.Lookup<PCHODS.OutboundCompanyRow>) {
            return super.getItemText(item, lookup) +
                ' (' +
                item.Nm +                
                ')';
        }
    }
}