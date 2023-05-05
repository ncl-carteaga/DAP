namespace DAP.DWSupport {
    export interface Skill2SkillgroupRow {
        Skill2SkillgroupSk?: number;
        SplitGroupId?: number;
        SplitGroupName?: string;
        Skill?: number;
        AcdSource?: string;
        AcdLevel1?: string;
        AcdLevel2?: string;
        Active?: string;
        EffectiveStart?: string;
        EffectiveEnd?: string;
    }

    export namespace Skill2SkillgroupRow {
        export const idProperty = 'Skill2SkillgroupSk';
        export const nameProperty = 'SplitGroupName';
        export const localTextPrefix = 'DWSupport.Skill2Skillgroup';

        export declare const enum Fields {
            Skill2SkillgroupSk = "Skill2SkillgroupSk",
            SplitGroupId = "SplitGroupId",
            SplitGroupName = "SplitGroupName",
            Skill = "Skill",
            AcdSource = "AcdSource",
            AcdLevel1 = "AcdLevel1",
            AcdLevel2 = "AcdLevel2",
            Active = "Active",
            EffectiveStart = "EffectiveStart",
            EffectiveEnd = "EffectiveEnd"
        }
    }
}

