namespace DAP.DWSupport {
    export interface SailingMasterSuppForm {
        SailId: Serenity.IntegerEditor;
        PackageTypeCd: Serenity.LookupEditor;
        ValidVoyageCd: SelectYNEditor;
        ShipCd: Serenity.StringEditor;
        SailDat: Serenity.DateEditor;
        ProductCd: Serenity.LookupEditor;
        SlProductCd: Serenity.LookupEditor;
        LatitudeCruiseCd: Serenity.StringEditor;
        FareFeedIncludeCd: SelectYNEditor;
        InactiveCd: SelectYNEditor;
        ShipNbr: Serenity.StringEditor;
        AmenityPtsQty: Serenity.DecimalEditor;
        RmsForecastCd: Serenity.IntegerEditor;
        RmsSeasonCd: Serenity.StringEditor;
        RmsColorNameDesc: Serenity.StringEditor;
        RmsRefLinkSailId: Serenity.IntegerEditor;
        RmsParentSail1Id: Serenity.IntegerEditor;
        RmsParentSail2Id: Serenity.IntegerEditor;
        RmsParentSail3Id: Serenity.IntegerEditor;
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
        BackToBackCd: SelectYNEditor;
        MainVoyageCd: SelectYNEditor;
        MandateWeeksQty: Serenity.IntegerEditor;
        InterportCd: SelectYNEditor;
        JonesActSailId: Serenity.IntegerEditor;
        FsGrpAmenityAmt: Serenity.DecimalEditor;
        ObrTradeCd: Serenity.StringEditor;
        ObrSubTradeCd: Serenity.StringEditor;
        ObrSeasonCd: Serenity.StringEditor;
        ProxySailId: Serenity.IntegerEditor;
        OnSaleDat: Serenity.DateEditor;
        SeasonYearCd: Serenity.StringEditor;
        IsVoyageExceptionCd: SelectYNEditor;
        VoyageExceptionDesc: Serenity.StringEditor;
        ItineraryChangedDat: Serenity.DateEditor;
        CharterCd: SelectYNEditor;
        IsHolidayCd: SelectYNEditor;
        ProxyBudgetSailId: Serenity.IntegerEditor;
        ProxyMetaWeightSailId: Serenity.IntegerEditor;
        IsFreeOpenBarCd: Serenity.StringEditor;
        CasinoCabinCapacityQty: Serenity.IntegerEditor;
        IsExtraordinaryCd: SelectYNEditor;
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
                var w1 = s.LookupEditor;
                var w2 = SelectYNEditor;
                var w3 = s.StringEditor;
                var w4 = s.DateEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(SailingMasterSuppForm, [
                    'SailId', w0,
                    'PackageTypeCd', w1,
                    'ValidVoyageCd', w2,
                    'ShipCd', w3,
                    'SailDat', w4,
                    'ProductCd', w1,
                    'SlProductCd', w1,
                    'LatitudeCruiseCd', w3,
                    'FareFeedIncludeCd', w2,
                    'InactiveCd', w2,
                    'ShipNbr', w3,
                    'AmenityPtsQty', w5,
                    'RmsForecastCd', w0,
                    'RmsSeasonCd', w3,
                    'RmsColorNameDesc', w3,
                    'RmsRefLinkSailId', w0,
                    'RmsParentSail1Id', w0,
                    'RmsParentSail2Id', w0,
                    'RmsParentSail3Id', w0,
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
                    'BackToBackCd', w2,
                    'MainVoyageCd', w2,
                    'MandateWeeksQty', w0,
                    'InterportCd', w2,
                    'JonesActSailId', w0,
                    'FsGrpAmenityAmt', w5,
                    'ObrTradeCd', w3,
                    'ObrSubTradeCd', w3,
                    'ObrSeasonCd', w3,
                    'ProxySailId', w0,
                    'OnSaleDat', w4,
                    'SeasonYearCd', w3,
                    'IsVoyageExceptionCd', w2,
                    'VoyageExceptionDesc', w3,
                    'ItineraryChangedDat', w4,
                    'CharterCd', w2,
                    'IsHolidayCd', w2,
                    'ProxyBudgetSailId', w0,
                    'ProxyMetaWeightSailId', w0,
                    'IsFreeOpenBarCd', w3,
                    'CasinoCabinCapacityQty', w0,
                    'IsExtraordinaryCd', w2
                ]);
            }
        }
    }
}

