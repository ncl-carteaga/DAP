namespace DAP.DWSupport {
    export interface SailingMasterSuppForm {
        SailId: Serenity.IntegerEditor;
        PackageTypeCd: Serenity.StringEditor;
        ValidVoyageCd: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        SailDat: Serenity.DateEditor;
        ProductCd: Serenity.StringEditor;
        LatitudeCruiseCd: Serenity.StringEditor;
        FareFeedIncludeCd: Serenity.StringEditor;
        InactiveCd: Serenity.StringEditor;
        ShipNbr: Serenity.StringEditor;
        AmenityPtsQty: Serenity.DecimalEditor;
        RmsForecastCd: Serenity.IntegerEditor;
        RmsParentSail1Id: Serenity.IntegerEditor;
        RmsParentSail2Id: Serenity.IntegerEditor;
        RmsParentSail3Id: Serenity.IntegerEditor;
        RmsSeasonCd: Serenity.StringEditor;
        RmsColorNameDesc: Serenity.StringEditor;
        RmsRefLinkSailId: Serenity.IntegerEditor;
        BackToBackCd: Serenity.StringEditor;
        MainVoyageCd: Serenity.StringEditor;
        SlProductCd: Serenity.StringEditor;
        MandateWeeksQty: Serenity.IntegerEditor;
        InterportCd: Serenity.StringEditor;
        JonesActSailId: Serenity.IntegerEditor;
        RmsParentSail4Id: Serenity.IntegerEditor;
        RmsParentSail5Id: Serenity.IntegerEditor;
        RmsParentSail6Id: Serenity.IntegerEditor;
        RmsParentSail7Id: Serenity.IntegerEditor;
        RmsParentSail8Id: Serenity.IntegerEditor;
        RmsParentSail9Id: Serenity.IntegerEditor;
        RmsParentSail10Id: Serenity.IntegerEditor;
        RmsParentSail11Id: Serenity.IntegerEditor;
        RmsParentSail12Id: Serenity.IntegerEditor;
        RmsParentSail13Id: Serenity.IntegerEditor;
        RmsParentSail14Id: Serenity.IntegerEditor;
        RmsParentSail15Id: Serenity.IntegerEditor;
        FsGrpAmenityAmt: Serenity.DecimalEditor;
        ObrTradeCd: Serenity.StringEditor;
        ObrSubTradeCd: Serenity.StringEditor;
        ObrSeasonCd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ProxySailId: Serenity.IntegerEditor;
        OnSaleDat: Serenity.DateEditor;
        SeasonYearCd: Serenity.StringEditor;
        IsVoyageExceptionCd: Serenity.StringEditor;
        VoyageExceptionDesc: Serenity.StringEditor;
        ItineraryChangedDat: Serenity.DateEditor;
        CharterCd: Serenity.StringEditor;
        IsHolidayCd: Serenity.StringEditor;
        ProxyBudgetSailId: Serenity.IntegerEditor;
        ProxyMetaWeightSailId: Serenity.IntegerEditor;
        IsFreeOpenBarCd: Serenity.StringEditor;
        CasinoCabinCapacityQty: Serenity.IntegerEditor;
        IsExtraordinaryCd: Serenity.StringEditor;
    }

    export class SailingMasterSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.SailingMasterSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SailingMasterSuppForm.init)  {
                SailingMasterSuppForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(SailingMasterSuppForm, [
                    'SailId', w0,
                    'PackageTypeCd', w1,
                    'ValidVoyageCd', w1,
                    'ShipCd', w1,
                    'SailDat', w2,
                    'ProductCd', w1,
                    'LatitudeCruiseCd', w1,
                    'FareFeedIncludeCd', w1,
                    'InactiveCd', w1,
                    'ShipNbr', w1,
                    'AmenityPtsQty', w3,
                    'RmsForecastCd', w0,
                    'RmsParentSail1Id', w0,
                    'RmsParentSail2Id', w0,
                    'RmsParentSail3Id', w0,
                    'RmsSeasonCd', w1,
                    'RmsColorNameDesc', w1,
                    'RmsRefLinkSailId', w0,
                    'BackToBackCd', w1,
                    'MainVoyageCd', w1,
                    'SlProductCd', w1,
                    'MandateWeeksQty', w0,
                    'InterportCd', w1,
                    'JonesActSailId', w0,
                    'RmsParentSail4Id', w0,
                    'RmsParentSail5Id', w0,
                    'RmsParentSail6Id', w0,
                    'RmsParentSail7Id', w0,
                    'RmsParentSail8Id', w0,
                    'RmsParentSail9Id', w0,
                    'RmsParentSail10Id', w0,
                    'RmsParentSail11Id', w0,
                    'RmsParentSail12Id', w0,
                    'RmsParentSail13Id', w0,
                    'RmsParentSail14Id', w0,
                    'RmsParentSail15Id', w0,
                    'FsGrpAmenityAmt', w3,
                    'ObrTradeCd', w1,
                    'ObrSubTradeCd', w1,
                    'ObrSeasonCd', w1,
                    'CreatedTs', w2,
                    'CreatedByNam', w1,
                    'ModifiedByNam', w1,
                    'ModifiedTs', w2,
                    'ProxySailId', w0,
                    'OnSaleDat', w2,
                    'SeasonYearCd', w1,
                    'IsVoyageExceptionCd', w1,
                    'VoyageExceptionDesc', w1,
                    'ItineraryChangedDat', w2,
                    'CharterCd', w1,
                    'IsHolidayCd', w1,
                    'ProxyBudgetSailId', w0,
                    'ProxyMetaWeightSailId', w0,
                    'IsFreeOpenBarCd', w1,
                    'CasinoCabinCapacityQty', w0,
                    'IsExtraordinaryCd', w1
                ]);
            }
        }
    }
}

