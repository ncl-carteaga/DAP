﻿
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    
    export class SwRequestDialog extends Serenity.EntityDialog<SwRequestRow, any> {
        protected getFormKey() { return SwRequestForm.formKey; }
        protected getIdProperty() { return SwRequestRow.idProperty; }
        protected getLocalTextPrefix() { return SwRequestRow.localTextPrefix; }
        protected getNameProperty() { return SwRequestRow.nameProperty; }
        protected getService() { return SwRequestService.baseUrl; }

        protected form = new SwRequestForm(this.idPrefix);

        private aGrid: SwAttributeGrid;
        private loadedState: string;

        constructor() {
            super();

            this.aGrid = new SwAttributeGrid(this.byId('SwAttributeGrid'));
            // force order dialog to open in Dialog mode instead of Panel mode
            // which is set as default on OrderDialog with @panelAttribute
            //this.aGrid.openDialogsAsPanel = true;

            //this.byId('General').closest('.field').hide().end().appendTo(this.byId('TabDetails'));

            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
            
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: SwRequestRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Attributes', this.isNewOrDeleted());

            this.aGrid.requestID = entity.RecordId;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            //Q.reloadLookup('Default.Request');
        }

        protected updateInterface(): void {

            super.updateInterface();

            // finding all editor elements and setting their readonly attribute
            // note that this helper method only works with basic inputs, 
            // some editors require widget based set readonly overload (setReadOnly)
            //Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);

            // this.form.NclYn.element.closest('.category').toggleClass('category collapsible collapsed', true);
            //this.form.Address1.element.closest('.category').toggleClass('category collapsible collapsed', true);

            // img.toggleClass('fa-plus').toggleClass('fa-minus');

            // remove required asterisk (*)
            //this.element.find('sup').hide();

            //this.applyChangesButton.hide();
            //this.saveAndCloseButton.hide();

        }

        protected updateTitle(): void {
            //super.updateTitle();

            // remove super.updateTitle() call above and uncomment 
            // below line if you'd like to use this version
            // 
            this.dialogTitle = 'View Request (' + this.getEntityNameFieldValue() + ')';
        }

        protected createToolbar(): void {
        }

        protected createQuickSearchInput(): void {
        }
    }
}