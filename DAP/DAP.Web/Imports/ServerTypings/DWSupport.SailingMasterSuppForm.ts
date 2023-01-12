namespace DAP.DWSupport {
    export interface SailingMasterSuppForm {
        SailId: Serenity.IntegerEditor;
        PackageTypeCd: Serenity.LookupEditor;
        SailDat: Serenity.DateEditor;
        ShipCd: Serenity.LookupEditor;
        ShipNbr: Serenity.MaskedEditor;
        MandateWeeksQty: Serenity.IntegerEditor;
        ValidVoyageCd: SelectYNEditor;
        ProductCd: Serenity.LookupEditor;
        SlProductCd: Serenity.LookupEditor;
        FareFeedIncludeCd: SelectYNEditor;
        InactiveCd: SelectYNEditor;
        RmsSeasonCd: Serenity.StringEditor;
        MainVoyageCd: SelectYNEditor;
        InterportCd: SelectYNEditor;
        CharterCd: SelectYNEditor;
        ProxySailId: Serenity.IntegerEditor;
        OnSaleDat: Serenity.DateEditor;
        SeasonYearCd: Serenity.StringEditor;
        RmsForecastCd: Serenity.IntegerEditor;
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
        LatitudeCruiseCd: SelectYNEditor;
        BackToBackCd: SelectYNEditor;
        AmenityPtsQty: Serenity.DecimalEditor;
        JonesActSailId: Serenity.IntegerEditor;
        FsGrpAmenityAmt: Serenity.DecimalEditor;
        ObrTradeCd: Serenity.StringEditor;
        ObrSubTradeCd: Serenity.StringEditor;
        ObrSeasonCd: Serenity.StringEditor;
        IsVoyageExceptionCd: SelectYNEditor;
        VoyageExceptionDesc: Serenity.StringEditor;
        ItineraryChangedDat: Serenity.DateEditor;
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
                var w2 = s.DateEditor;
                var w3 = s.MaskedEditor;
                var w4 = SelectYNEditor;
                var w5 = s.StringEditor;
                var w6 = s.DecimalEditor;

                Q.initFormType(SailingMasterSuppForm, [
                    'SailId', w0,
                    'PackageTypeCd', w1,
                    'SailDat', w2,
                    'ShipCd', w1,
                    'ShipNbr', w3,
                    'MandateWeeksQty', w0,
                    'ValidVoyageCd', w4,
                    'ProductCd', w1,
                    'SlProductCd', w1,
                    'FareFeedIncludeCd', w4,
                    'InactiveCd', w4,
                    'RmsSeasonCd', w5,
                    'MainVoyageCd', w4,
                    'InterportCd', w4,
                    'CharterCd', w4,
                    'ProxySailId', w0,
                    'OnSaleDat', w2,
                    'SeasonYearCd', w5,
                    'RmsForecastCd', w0,
                    'RmsColorNameDesc', w5,
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
                    'LatitudeCruiseCd', w4,
                    'BackToBackCd', w4,
                    'AmenityPtsQty', w6,
                    'JonesActSailId', w0,
                    'FsGrpAmenityAmt', w6,
                    'ObrTradeCd', w5,
                    'ObrSubTradeCd', w5,
                    'ObrSeasonCd', w5,
                    'IsVoyageExceptionCd', w4,
                    'VoyageExceptionDesc', w5,
                    'ItineraryChangedDat', w2,
                    'IsHolidayCd', w4,
                    'ProxyBudgetSailId', w0,
                    'ProxyMetaWeightSailId', w0,
                    'IsFreeOpenBarCd', w5,
                    'CasinoCabinCapacityQty', w0,
                    'IsExtraordinaryCd', w4
                ]);
            }
        }
    }
}

