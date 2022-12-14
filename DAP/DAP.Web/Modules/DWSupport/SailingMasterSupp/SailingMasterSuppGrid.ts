
namespace DAP.DWSupport {

    import fld = SailingMasterSuppRow.Fields;

    @Serenity.Decorators.registerClass()
    export class SailingMasterSuppGrid extends Serenity.EntityGrid<SailingMasterSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.SailingMasterSupp'; }
        protected getDialogType() { return SailingMasterSuppDialog; }
        protected getIdProperty() { return SailingMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SailingMasterSuppRow.localTextPrefix; }
        protected getService() { return SailingMasterSuppService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }   

        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
           // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker"), 1);

            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button disabled',
                onClick: e => this.saveClick(),
                separator: true
            });

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: SailingMasterSuppService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,
                title: "Export to Excel"
            }));

            // add our import button
            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new SailingMasterSuppExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            buttons.push({
                title: 'Show Error Log',
                cssClass: 'info-button',
                onClick: e => this.showErrorLogClick(),
                separator: true
            });

            return buttons;
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.SailSurKey];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        private numericInputFormatter(ctx, num_dec) {
            var klass = 'edit numeric';
            var item = ctx.item as SailingMasterSuppRow;
            var pending = this.pendingChanges[item.SailSurKey];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            if (num_dec == 2) {
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            }
            else if (num_dec == 4) {
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.####') + "'/>";
            }
            else if (num_dec == 0) {
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0') + "'/>";
            }

        }

        private stringInputFormatter(ctx) {
            var klass = 'edit string';
            var item = ctx.item as SailingMasterSuppRow;
            var pending = this.pendingChanges[item.SailSurKey];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, column.field) as string;

            return "<input type='text' class='" + klass +
                "' data-field='" + column.field +
                "' value='" + Q.attrEncode(value) +
                "' maxlength='" + column.sourceItem.maxLength + "'/>";
        }

        private selectYNFormatter(ctx: Slick.FormatterContext, idField: string) {
            var klass = 'edit';
            var item = ctx.item as SailingMasterSuppRow;
            var pending = this.pendingChanges[item.SailSurKey];
            var column = ctx.column as Slick.Column;

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='" + klass +
                "' data-field='" + idField +
                "' style='width: 60%; max-width: 60%'>";
            
            let id = 'Y'
            markup += "<option value='" + Q.attrEncode(id) + "'"
            if (id == value) {
                    markup += " selected";
            }
            markup += ">Yes</option>";

            id = 'N'
            markup += "<option value='" + Q.attrEncode(id) + "'"
            if (id == value) {
                markup += " selected";
            }
            markup += ">No</option>";

            return markup + "</select>";
        }

        private selectFormatter(ctx: Slick.FormatterContext, idField: string, lookup: Q.Lookup<any>) {
            var klass = 'edit';
            var item = ctx.item as SailingMasterSuppRow;
            var pending = this.pendingChanges[item.SailSurKey];
            var column = ctx.column as Slick.Column;

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='" + klass +
                "' data-field='" + idField +
                "' style='width: 100%; max-width: 100%'>";
            for (var c of lookup.items) {
                let id = c[lookup.idField];
                markup += "<option value='" + Q.attrEncode(id) + "'"
                if (id == value) {
                    markup += " selected";
                }
                markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
            }
            return markup + "</select>";
        }

        protected getColumns() {
            var columns = super.getColumns();
            var str = ctx => this.stringInputFormatter(ctx);
            var num = ctx => this.numericInputFormatter(ctx, 0);
            //var num4 = ctx => this.numericInputFormatter(ctx, 4);

            Q.first(columns, x => x.field === fld.ProxySailId).format = num;
            Q.first(columns, x => x.field === fld.SeasonYearCd).format = str;
            //Q.first(columns, x => x.field === fld.OnSaleDat).format = str;
            Q.first(columns, x => x.field === fld.MandateWeeksQty).format = num;
            Q.first(columns, x => x.field === fld.RmsSeasonCd).format = str;
            //Q.first(columns, x => x.field === fld.CommissionRate).format = num4;

            var packagecd = Q.first(columns, x => x.field === fld.PackageTypeCd);
            packagecd.referencedFields = [fld.PackageTypeCd];
            packagecd.format = ctx => this.selectFormatter(ctx, fld.PackageTypeCd, PackageTypeCodeSuppRow.getLookup());

            var productcd = Q.first(columns, x => x.field === fld.ProductCd);
            productcd.referencedFields = [fld.ProductCd];
            productcd.format = ctx => this.selectFormatter(ctx, fld.ProductCd, ProductCodeSuppRow.getLookup());

            var slproductcd = Q.first(columns, x => x.field === fld.SlProductCd);
            slproductcd.referencedFields = [fld.SlProductCd];
            slproductcd.format = ctx => this.selectFormatter(ctx, fld.SlProductCd, SlProductCodeSuppRow.getLookup());

            var validvoyagecd = Q.first(columns, x => x.field === fld.ValidVoyageCd);
            validvoyagecd.referencedFields = [fld.ValidVoyageCd];
            validvoyagecd.format = ctx => this.selectYNFormatter(ctx, fld.ValidVoyageCd);

            //var latitudecruisecd = Q.first(columns, x => x.field === fld.LatitudeCruiseCd);
            //latitudecruisecd.referencedFields = [fld.LatitudeCruiseCd];
            //latitudecruisecd.format = ctx => this.selectYNFormatter(ctx, fld.LatitudeCruiseCd);

            var farefeedincludecd = Q.first(columns, x => x.field === fld.FareFeedIncludeCd);
            farefeedincludecd.referencedFields = [fld.FareFeedIncludeCd];
            farefeedincludecd.format = ctx => this.selectYNFormatter(ctx, fld.FareFeedIncludeCd);

            var inactivecd = Q.first(columns, x => x.field === fld.InactiveCd);
            inactivecd.referencedFields = [fld.InactiveCd];
            inactivecd.format = ctx => this.selectYNFormatter(ctx, fld.InactiveCd);

            var mainvoyagecd = Q.first(columns, x => x.field === fld.MainVoyageCd);
            mainvoyagecd.referencedFields = [fld.MainVoyageCd];
            mainvoyagecd.format = ctx => this.selectYNFormatter(ctx, fld.MainVoyageCd);

            var interportcd = Q.first(columns, x => x.field === fld.InterportCd);
            interportcd.referencedFields = [fld.InterportCd];
            interportcd.format = ctx => this.selectYNFormatter(ctx, fld.InterportCd);

            var chartercd = Q.first(columns, x => x.field === fld.CharterCd);
            chartercd.referencedFields = [fld.CharterCd];
            chartercd.format = ctx => this.selectYNFormatter(ctx, fld.CharterCd);

            return columns;
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.SailSurKey];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0');
            else
                oldText = effective as string;

            var value;
            if (field === 'CommissionRate' || field == 'LowNumBookings' || field == 'HighNumBookings') {
                value = Q.parseDecimal(text);
                if (value == null || isNaN(value)) {
                    Q.notifyError(Q.text('Validation.Decimal'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
            }
            else if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i > 32767 || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else
                value = text;

            if (!pending) {
                this.pendingChanges[item.SailSurKey] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0');

            input.val(value).addClass('dirty');

            this.setSaveButtonState();
        }

        private saveClick() {
            if (Object.keys(this.pendingChanges).length === 0) {
                return;
            }

            // this calls save service for all modified rows, one by one
            // you could write a batch update service
            var keys = Object.keys(this.pendingChanges);
            var current = -1;
            var self = this;

            (function saveNext() {
                if (++current >= keys.length) {
                    self.refresh();
                    return;
                }

                var key = keys[current];
                var entity = Q.deepClone(self.pendingChanges[key]);
                entity.SailSurKey = key;
                Q.serviceRequest('DWSupport/SailingMasterSupp/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
        }

        private showErrorLogClick() {

           let dialog = new DWSupport.ImportErrorLogGridDialog();
            ////dialog.returnData = (dataList) => {
            ////    this._CompanyID = dataList;
            ////};
            this.initDialog(dialog);
            dialog.dialogOpen();


        }

    }
}