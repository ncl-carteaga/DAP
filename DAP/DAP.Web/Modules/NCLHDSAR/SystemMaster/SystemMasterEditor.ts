namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerEditor()
    export class SystemMasterEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, SystemMasterRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return SystemMasterRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' (' + item.Id + ')';
        }
    }
}