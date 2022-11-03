namespace DAP.SSISConfig {
    export interface SsisConfigBaseRow {
        ConfigurationFilter?: string;
        PackagePath?: string;
        ConfiguredValueType?: string;
        ConfiguredValue?: string;
        EnvironmentEnum?: number;
        EnvironmentDesc?: string;
        ConfigId?: number;
        ModifiedBy?: string;
        ModifiedOn?: string;
    }

    export namespace SsisConfigBaseRow {
        export const idProperty = 'ConfigId';
        export const nameProperty = 'ConfigurationFilter';
        export const localTextPrefix = 'SSISConfig.SsisConfigBase';

        export declare const enum Fields {
            ConfigurationFilter = "ConfigurationFilter",
            PackagePath = "PackagePath",
            ConfiguredValueType = "ConfiguredValueType",
            ConfiguredValue = "ConfiguredValue",
            EnvironmentEnum = "EnvironmentEnum",
            EnvironmentDesc = "EnvironmentDesc",
            ConfigId = "ConfigId",
            ModifiedBy = "ModifiedBy",
            ModifiedOn = "ModifiedOn"
        }
    }
}

