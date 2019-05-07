/// <reference path="../RequestAttributes/RequestAttributesDialog.ts" />

namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class AttributeDialog extends RequestAttributesDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.Id, true);
        }
    }
}