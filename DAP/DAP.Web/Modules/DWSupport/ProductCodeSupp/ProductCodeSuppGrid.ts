
namespace DAP.DWSupport {

    import fld = ProductCodeSuppRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProductCodeSuppGrid extends Serenity.EntityGrid<ProductCodeSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.ProductCodeSupp'; }
        protected getDialogType() { return ProductCodeSuppDialog; }
        protected getIdProperty() { return ProductCodeSuppRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCodeSuppRow.localTextPrefix; }
        protected getService() { return ProductCodeSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        } 

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            Q.first(columns, x => x.field == fld.ProductCd).format =
                ctx => `<a href="javascript:;" class="product-link">${Q.htmlEncode(ctx.value)}</a>`;

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            if (target.hasClass("product-link")) {
                e.preventDefault();

                var productCode = Q.first(DWSupport.ProductCodeSuppRow.getLookup().items,
                    x => x.ProductCd == item.ProductCd);

                new DWSupport.ProductCodeSuppDialog().loadByIdAndOpenDialog(productCode.ProductCd);

            }
           
        }
    }
}