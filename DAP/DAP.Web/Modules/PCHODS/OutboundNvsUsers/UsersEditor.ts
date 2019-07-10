namespace DAP.PCHODS {

    @Serenity.Decorators.registerEditor()
    export class UsersEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OutboundNvsUsersRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return OutboundNvsUsersRow.lookupKey;
        }

        protected getItemText(item: PCHODS.OutboundNvsUsersRow, lookup: Q.Lookup<PCHODS.OutboundNvsUsersRow> ) {
            return super.getItemText(item, lookup) +
                ' (' +
                item.UserFirstName + ' ' + item.UserLastName +
                ', ' + item.CompanyCd +
                ', ' + item.DepartmentDesc +
                ')';
        }
    }
}