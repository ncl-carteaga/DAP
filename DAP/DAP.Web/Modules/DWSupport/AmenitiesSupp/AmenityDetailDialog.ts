/// <reference path="../AmenityDetailsSupp/AmenityDetailsSuppDialog.ts" />

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AmenityDetailDialog extends AmenityDetailsSuppDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.AmenityId, true);
        }
    }
}