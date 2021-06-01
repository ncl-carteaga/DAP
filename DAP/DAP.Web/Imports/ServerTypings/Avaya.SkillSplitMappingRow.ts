namespace DAP.Avaya {
    export interface SkillSplitMappingRow {
        SkillSplitTk?: number;
        CmsNo?: number;
        AcdNo?: number;
        SplitNo?: number;
        SkillName?: string;
        Brand?: string;
        Status?: string;
        GroupCd?: string;
        Region?: string;
        SupportChannel?: string;
        Department?: string;
        CallType?: string;
        BrandBrandTk?: number;
        StatusStatusTk?: number;
        GroupCdTk?: number;
        RegionRegionTk?: number;
        SupportChannelSuppChannelTk?: number;
        DepartmentDepartmentTk?: number;
        CallTypeTypeTk?: number;
    }

    export namespace SkillSplitMappingRow {
        export const idProperty = 'SkillSplitTk';
        export const nameProperty = 'SkillName';
        export const localTextPrefix = 'Avaya.SkillSplitMapping';

        export declare const enum Fields {
            SkillSplitTk = "SkillSplitTk",
            CmsNo = "CmsNo",
            AcdNo = "AcdNo",
            SplitNo = "SplitNo",
            SkillName = "SkillName",
            Brand = "Brand",
            Status = "Status",
            GroupCd = "GroupCd",
            Region = "Region",
            SupportChannel = "SupportChannel",
            Department = "Department",
            CallType = "CallType",
            BrandBrandTk = "BrandBrandTk",
            StatusStatusTk = "StatusStatusTk",
            GroupCdTk = "GroupCdTk",
            RegionRegionTk = "RegionRegionTk",
            SupportChannelSuppChannelTk = "SupportChannelSuppChannelTk",
            DepartmentDepartmentTk = "DepartmentDepartmentTk",
            CallTypeTypeTk = "CallTypeTypeTk"
        }
    }
}

