namespace DAP.PCHODSNVS {
    export interface ConsortiumExceptionListRow {
        ConsortiumExceptionListTk?: number;
        CompanyCd?: string;
        NewItemType?: string;
        NewItemName?: string;
        ItemType?: string;
        ItemCd?: string;
        ItemName?: string;
        ExcludeInd?: boolean;
        CombineInd?: boolean;
        LoadDt?: string;
        NewItemTypeTypeTk?: number;
        ItemTypeTypeTk?: number;
    }

    export namespace ConsortiumExceptionListRow {
        export const idProperty = 'ConsortiumExceptionListTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.ConsortiumExceptionList';

        export declare const enum Fields {
            ConsortiumExceptionListTk = "ConsortiumExceptionListTk",
            CompanyCd = "CompanyCd",
            NewItemType = "NewItemType",
            NewItemName = "NewItemName",
            ItemType = "ItemType",
            ItemCd = "ItemCd",
            ItemName = "ItemName",
            ExcludeInd = "ExcludeInd",
            CombineInd = "CombineInd",
            LoadDt = "LoadDt",
            NewItemTypeTypeTk = "NewItemTypeTypeTk",
            ItemTypeTypeTk = "ItemTypeTypeTk"
        }
    }
}

