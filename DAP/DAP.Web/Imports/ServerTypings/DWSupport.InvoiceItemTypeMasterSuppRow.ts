namespace DAP.DWSupport {
    export interface InvoiceItemTypeMasterSuppRow {
        InvoiceItemTypeCd?: string;
        InvoiceItemSubTypeCd?: string;
        InvoiceItemSubType2Cd?: string;
        InvoiceItemSubType3Cd?: string;
        InvoiceItemSourceCd?: string;
        MasterComponentCd?: string;
        CommentsTxt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        InvoiceItemTypeMasterId?: number;
    }

    export namespace InvoiceItemTypeMasterSuppRow {
        export const idProperty = 'InvoiceItemTypeMasterId';
        export const nameProperty = 'InvoiceItemTypeCd';
        export const localTextPrefix = 'DWSupport.InvoiceItemTypeMasterSupp';

        export declare const enum Fields {
            InvoiceItemTypeCd = "InvoiceItemTypeCd",
            InvoiceItemSubTypeCd = "InvoiceItemSubTypeCd",
            InvoiceItemSubType2Cd = "InvoiceItemSubType2Cd",
            InvoiceItemSubType3Cd = "InvoiceItemSubType3Cd",
            InvoiceItemSourceCd = "InvoiceItemSourceCd",
            MasterComponentCd = "MasterComponentCd",
            CommentsTxt = "CommentsTxt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            InvoiceItemTypeMasterId = "InvoiceItemTypeMasterId"
        }
    }
}

