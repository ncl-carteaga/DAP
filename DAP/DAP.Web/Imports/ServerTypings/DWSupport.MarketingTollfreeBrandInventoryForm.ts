
namespace DAP.DWSupport {
    export class MarketingTollfreeBrandInventoryForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.MarketingTollfreeBrandInventory';
    }

    export interface MarketingTollfreeBrandInventoryForm {
        BrandId: Serenity.IntegerEditor;
        Location: Serenity.StringEditor;
        TollFreeNumber: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Vdn: Serenity.StringEditor;
        ModifiedBy: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
    }

    [,
        ['BrandId', () => Serenity.IntegerEditor],
        ['Location', () => Serenity.StringEditor],
        ['TollFreeNumber', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['Vdn', () => Serenity.StringEditor],
        ['ModifiedBy', () => Serenity.StringEditor],
        ['CreatedBy', () => Serenity.StringEditor],
        ['ModifiedTs', () => Serenity.DateEditor],
        ['CreatedTs', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(MarketingTollfreeBrandInventoryForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}