
namespace DAP.FINANCE {
    export interface NtrComponentsRow {
        CategoryDesc?: string;
        SubcategoryDesc?: string;
        GiftCd?: string;
    }

    export namespace NtrComponentsRow {
        export const idProperty = 'CategoryDesc';
        export const nameProperty = 'CategoryDesc';
        export const localTextPrefix = 'FINANCE.NtrComponents';

        export namespace Fields {
            export declare const CategoryDesc;
            export declare const SubcategoryDesc;
            export declare const GiftCd;
        }

        [
            'CategoryDesc',
            'SubcategoryDesc',
            'GiftCd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}