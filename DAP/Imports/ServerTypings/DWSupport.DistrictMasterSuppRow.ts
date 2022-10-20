namespace DAP.DWSupport {
    export interface DistrictMasterSuppRow {
        DistrictSurKey?: number;
        DistrictNbr?: string;
        SalesrepUserId?: string;
        GroupCd?: string;
        SalesChannelCd?: string;
        RmChannelCd?: string;
        AreaCd?: string;
        PrimaryCrmSupportNam?: string;
        SecondaryCrmSupportNam?: string;
        GssChannelCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        ChannelCd?: string;
    }

    export namespace DistrictMasterSuppRow {
        export const idProperty = 'DistrictSurKey';
        export const nameProperty = 'DistrictNbr';
        export const localTextPrefix = 'DWSupport.DistrictMasterSupp';

        export declare const enum Fields {
            DistrictSurKey = "DistrictSurKey",
            DistrictNbr = "DistrictNbr",
            SalesrepUserId = "SalesrepUserId",
            GroupCd = "GroupCd",
            SalesChannelCd = "SalesChannelCd",
            RmChannelCd = "RmChannelCd",
            AreaCd = "AreaCd",
            PrimaryCrmSupportNam = "PrimaryCrmSupportNam",
            SecondaryCrmSupportNam = "SecondaryCrmSupportNam",
            GssChannelCd = "GssChannelCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            ChannelCd = "ChannelCd"
        }
    }
}

