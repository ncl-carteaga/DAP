/// <reference path="../SwRequestAttributes/SwRequestAttributesDialog.ts" />

namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class SwAttributeDialog extends SwRequestAttributesDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Id, true);
        }
    }
}