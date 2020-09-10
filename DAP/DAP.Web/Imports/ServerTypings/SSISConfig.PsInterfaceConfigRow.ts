namespace DAP.SSISConfig {
    export interface PsInterfaceConfigRow {
        SourceSystem?: string;
        ConfigSetting?: string;
        DataType?: string;
        ConfigValue?: string;
        ConfigValueDate?: string;
        ConfigId?: number;
        ModifiedDate?: string;
        ModifiedBy?: string;
    }

    export namespace PsInterfaceConfigRow {
        export const idProperty = 'ConfigId';
        export const nameProperty = 'SourceSystem';
        export const localTextPrefix = 'SSISConfig.PsInterfaceConfig';

        export declare const enum Fields {
            SourceSystem = "SourceSystem",
            ConfigSetting = "ConfigSetting",
            DataType = "DataType",
            ConfigValue = "ConfigValue",
            ConfigValueDate = "ConfigValueDate",
            ConfigId = "ConfigId",
            ModifiedDate = "ModifiedDate",
            ModifiedBy = "ModifiedBy"
        }
    }
}

