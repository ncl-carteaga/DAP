namespace DAP.DWSupport {
    export interface SailingMasterSuppRow {
        SailSurKey?: number;
        SailId?: number;
        PackageTypeCd?: string;
        ValidVoyageCd?: string;
        ShipCd?: string;
        SailDat?: string;
        ProductCd?: string;
        LatitudeCruiseCd?: string;
        FareFeedIncludeCd?: string;
        InactiveCd?: string;
        ShipNbr?: string;
        AmenityPtsQty?: number;
        RmsForecastCd?: number;
        RmsParentSail1Id?: number;
        RmsParentSail2Id?: number;
        RmsParentSail3Id?: number;
        RmsSeasonCd?: string;
        RmsColorNameDesc?: string;
        RmsRefLinkSailId?: number;
        BackToBackCd?: string;
        MainVoyageCd?: string;
        SlProductCd?: string;
        MandateWeeksQty?: number;
        InterportCd?: string;
        JonesActSailId?: number;
        RmsParentSail4Id?: number;
        RmsParentSail5Id?: number;
        RmsParentSail6Id?: number;
        RmsParentSail7Id?: number;
        RmsParentSail8Id?: number;
        RmsParentSail9Id?: number;
        RmsParentSail10Id?: number;
        RmsParentSail11Id?: number;
        RmsParentSail12Id?: number;
        RmsParentSail13Id?: number;
        RmsParentSail14Id?: number;
        RmsParentSail15Id?: number;
        FsGrpAmenityAmt?: number;
        ObrTradeCd?: string;
        ObrSubTradeCd?: string;
        ObrSeasonCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        ProxySailId?: number;
        OnSaleDat?: string;
        SeasonYearCd?: string;
        IsVoyageExceptionCd?: string;
        VoyageExceptionDesc?: string;
        ItineraryChangedDat?: string;
        CharterCd?: string;
        IsHolidayCd?: string;
        ProxyBudgetSailId?: number;
        ProxyMetaWeightSailId?: number;
        IsFreeOpenBarCd?: string;
        CasinoCabinCapacityQty?: number;
        IsExtraordinaryCd?: string;
        ProductCdProductSurKey?: number;
        ProductCdProductDesc?: string;
        ProductCdProductCodeId?: number;
        ProductCdCreatedByName?: string;
        ProductCdCreatedTs?: string;
        ProductCdModifiedByName?: string;
        ProductCdModifiedTs?: string;
        SlProductCdSlProductSurKey?: number;
        SlProductCdSlProductDesc?: string;
        SlProductCdCreatedByName?: string;
        SlProductCdCreatedTs?: string;
        SlProductCdModifiedByName?: string;
        SlProductCdModifiedTs?: string;
    }

    export namespace SailingMasterSuppRow {
        export const idProperty = 'SailSurKey';
        export const nameProperty = 'PackageTypeCd';
        export const localTextPrefix = 'DWSupport.SailingMasterSupp';

        export declare const enum Fields {
            SailSurKey = "SailSurKey",
            SailId = "SailId",
            PackageTypeCd = "PackageTypeCd",
            ValidVoyageCd = "ValidVoyageCd",
            ShipCd = "ShipCd",
            SailDat = "SailDat",
            ProductCd = "ProductCd",
            LatitudeCruiseCd = "LatitudeCruiseCd",
            FareFeedIncludeCd = "FareFeedIncludeCd",
            InactiveCd = "InactiveCd",
            ShipNbr = "ShipNbr",
            AmenityPtsQty = "AmenityPtsQty",
            RmsForecastCd = "RmsForecastCd",
            RmsParentSail1Id = "RmsParentSail1Id",
            RmsParentSail2Id = "RmsParentSail2Id",
            RmsParentSail3Id = "RmsParentSail3Id",
            RmsSeasonCd = "RmsSeasonCd",
            RmsColorNameDesc = "RmsColorNameDesc",
            RmsRefLinkSailId = "RmsRefLinkSailId",
            BackToBackCd = "BackToBackCd",
            MainVoyageCd = "MainVoyageCd",
            SlProductCd = "SlProductCd",
            MandateWeeksQty = "MandateWeeksQty",
            InterportCd = "InterportCd",
            JonesActSailId = "JonesActSailId",
            RmsParentSail4Id = "RmsParentSail4Id",
            RmsParentSail5Id = "RmsParentSail5Id",
            RmsParentSail6Id = "RmsParentSail6Id",
            RmsParentSail7Id = "RmsParentSail7Id",
            RmsParentSail8Id = "RmsParentSail8Id",
            RmsParentSail9Id = "RmsParentSail9Id",
            RmsParentSail10Id = "RmsParentSail10Id",
            RmsParentSail11Id = "RmsParentSail11Id",
            RmsParentSail12Id = "RmsParentSail12Id",
            RmsParentSail13Id = "RmsParentSail13Id",
            RmsParentSail14Id = "RmsParentSail14Id",
            RmsParentSail15Id = "RmsParentSail15Id",
            FsGrpAmenityAmt = "FsGrpAmenityAmt",
            ObrTradeCd = "ObrTradeCd",
            ObrSubTradeCd = "ObrSubTradeCd",
            ObrSeasonCd = "ObrSeasonCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            ProxySailId = "ProxySailId",
            OnSaleDat = "OnSaleDat",
            SeasonYearCd = "SeasonYearCd",
            IsVoyageExceptionCd = "IsVoyageExceptionCd",
            VoyageExceptionDesc = "VoyageExceptionDesc",
            ItineraryChangedDat = "ItineraryChangedDat",
            CharterCd = "CharterCd",
            IsHolidayCd = "IsHolidayCd",
            ProxyBudgetSailId = "ProxyBudgetSailId",
            ProxyMetaWeightSailId = "ProxyMetaWeightSailId",
            IsFreeOpenBarCd = "IsFreeOpenBarCd",
            CasinoCabinCapacityQty = "CasinoCabinCapacityQty",
            IsExtraordinaryCd = "IsExtraordinaryCd",
            ProductCdProductSurKey = "ProductCdProductSurKey",
            ProductCdProductDesc = "ProductCdProductDesc",
            ProductCdProductCodeId = "ProductCdProductCodeId",
            ProductCdCreatedByName = "ProductCdCreatedByName",
            ProductCdCreatedTs = "ProductCdCreatedTs",
            ProductCdModifiedByName = "ProductCdModifiedByName",
            ProductCdModifiedTs = "ProductCdModifiedTs",
            SlProductCdSlProductSurKey = "SlProductCdSlProductSurKey",
            SlProductCdSlProductDesc = "SlProductCdSlProductDesc",
            SlProductCdCreatedByName = "SlProductCdCreatedByName",
            SlProductCdCreatedTs = "SlProductCdCreatedTs",
            SlProductCdModifiedByName = "SlProductCdModifiedByName",
            SlProductCdModifiedTs = "SlProductCdModifiedTs"
        }
    }
}

