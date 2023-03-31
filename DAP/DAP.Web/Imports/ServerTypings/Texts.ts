namespace DAP.Texts {

    declare namespace Db {

        namespace Administration {

            namespace DataAuditLog {
                export const FieldName: string;
                export const LogDate: string;
                export const LogId: string;
                export const LogType: string;
                export const NewValue: string;
                export const OldValue: string;
                export const RecordId: string;
                export const Tablename: string;
                export const UserDisplayName: string;
                export const UserId: string;
                export const Username: string;
            }

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleKey: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const ImpersonationToken: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const MobilePhoneNumber: string;
                export const MobilePhoneVerified: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TwoFactorAuth: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Avaya {

            namespace Brand {
                export const Brand: string;
                export const BrandTk: string;
            }

            namespace CallType {
                export const Type: string;
                export const TypeTk: string;
            }

            namespace Department {
                export const Department: string;
                export const DepartmentTk: string;
            }

            namespace Group {
                export const Cd: string;
                export const Tk: string;
            }

            namespace Region {
                export const Region: string;
                export const RegionTk: string;
            }

            namespace SkillSplitMapping {
                export const AcdNo: string;
                export const Brand: string;
                export const BrandBrandTk: string;
                export const CallType: string;
                export const CallTypeTypeTk: string;
                export const CmsNo: string;
                export const Department: string;
                export const DepartmentDepartmentTk: string;
                export const GroupCd: string;
                export const GroupCdTk: string;
                export const Region: string;
                export const RegionRegionTk: string;
                export const SkillName: string;
                export const SkillSplitTk: string;
                export const SplitNo: string;
                export const Status: string;
                export const StatusStatusTk: string;
                export const SupportChannel: string;
                export const SupportChannelSuppChannelTk: string;
            }

            namespace Status {
                export const StatusDesc: string;
                export const StatusTk: string;
            }

            namespace SupportChannel {
                export const SuppChannelTk: string;
                export const SupportChannel: string;
            }
        }

        namespace Common {

            namespace BackgroundTaskLog {
                export const LogId: string;
                export const Message: string;
                export const RunAt: string;
                export const Server: string;
                export const Status: string;
                export const TaskKey: string;
            }

            namespace Mail {
                export const Bcc: string;
                export const Body: string;
                export const Cc: string;
                export const ErrorMessage: string;
                export const InsertDate: string;
                export const InsertUser: string;
                export const InsertUserId: string;
                export const LockExpiration: string;
                export const MailFrom: string;
                export const MailId: string;
                export const MailTo: string;
                export const Priority: string;
                export const ReplyTo: string;
                export const RetryCount: string;
                export const SentDate: string;
                export const Status: string;
                export const Subject: string;
                export const Uid: string;
            }

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace DWSupport {

            namespace AgencySnapshotRequest {
                export const AgencySnapshotReqId: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const ModifiedBy: string;
                export const ModifiedDate: string;
                export const RequestedBy: string;
                export const RequestedByDate: string;
                export const RequestedReason: string;
            }

            namespace AmenitiesSupp {
                export const AmenityAddonAmt: string;
                export const AmenityCategoryCd: string;
                export const AmenityCd: string;
                export const AmenityCostAmt: string;
                export const AmenityDesc: string;
                export const AmenityId: string;
                export const AmenityTypeAmenityTypeCd: string;
                export const AmenityTypeAmenityTypeDesc: string;
                export const AmenityTypeCommentTxt: string;
                export const AmenityTypeConditionDesc: string;
                export const AmenityTypeCreatedByNam: string;
                export const AmenityTypeCreatedDat: string;
                export const AmenityTypeDisplayOrderCd: string;
                export const AmenityTypeId: string;
                export const AmenityTypeModifiedByNam: string;
                export const AmenityTypeModifiedDat: string;
                export const CommentTxt: string;
                export const ConditionDesc: string;
                export const CreatedByNam: string;
                export const CreatedDat: string;
                export const CurrencyCd: string;
                export const DisplayOrderCd: string;
                export const IsPerDiemCd: string;
                export const ModifiedByNam: string;
                export const ModifiedDat: string;
            }

            namespace AmenityCategory {
                export const CategoryCd: string;
            }

            namespace AmenityDetailsSupp {
                export const AmenityAmenityAddonAmt: string;
                export const AmenityAmenityCategoryCd: string;
                export const AmenityAmenityCd: string;
                export const AmenityAmenityCostAmt: string;
                export const AmenityAmenityDesc: string;
                export const AmenityAmenityTypeId: string;
                export const AmenityCommentTxt: string;
                export const AmenityConditionDesc: string;
                export const AmenityCreatedByNam: string;
                export const AmenityCreatedDat: string;
                export const AmenityCurrencyCd: string;
                export const AmenityDetailCd: string;
                export const AmenityDetailId: string;
                export const AmenityDisplayOrderCd: string;
                export const AmenityId: string;
                export const AmenityIsPerDiemCd: string;
                export const AmenityModifiedByNam: string;
                export const AmenityModifiedDat: string;
                export const AmenityPtsQty: string;
                export const CommentTxt: string;
                export const ConditionDesc: string;
                export const CreatedByNam: string;
                export const CreatedDat: string;
                export const MinCabinQty: string;
                export const ModifiedByNam: string;
                export const ModifiedDat: string;
                export const OfficeCd: string;
                export const SailDayFromQty: string;
                export const SailDayToQty: string;
            }

            namespace AmenityOffice {
                export const Cd: string;
            }

            namespace AmenityTypesSupp {
                export const AmenityTypeCd: string;
                export const AmenityTypeDesc: string;
                export const AmenityTypeId: string;
                export const CommentTxt: string;
                export const ConditionDesc: string;
                export const CreatedByNam: string;
                export const CreatedDat: string;
                export const DisplayOrderCd: string;
                export const ModifiedByNam: string;
                export const ModifiedDat: string;
            }

            namespace CasinoSlotMasterDescSupp {
                export const CommentTxt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const ManufacturerNam: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const SlotMasterDesc: string;
                export const SlotMasterDescSurKey: string;
            }

            namespace CategoryMasterSupp {
                export const CategoryCd: string;
                export const CategoryMasterSurKey: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const FleetCategoryPriorityNbr: string;
                export const MandatoryAssignmentCd: string;
                export const MetaCategoryCd: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const NewMetaCategoryCd: string;
                export const PseudoCategoryCd: string;
                export const RmsPseudoCategoryCd: string;
                export const SailFromDat: string;
                export const SailToDat: string;
                export const ShipCd: string;
            }

            namespace CcOfficeLoations {
                export const Cd: string;
            }

            namespace CmiSupp {
                export const AgencyId: string;
                export const BookingCurrencyCd: string;
                export const CabinQty: string;
                export const CharterDesc: string;
                export const CmiAmenityCostAmt: string;
                export const CmiSubType2Cd: string;
                export const CmiSubTypeCd: string;
                export const CmiSurKey: string;
                export const CmiTypeCd: string;
                export const CommissionAmt: string;
                export const ContractDat: string;
                export const ContractPriceAmt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const CruiseRevAmt: string;
                export const DepositDat: string;
                export const DistrictNbr: string;
                export const EffectiveFromDt: string;
                export const EffectiveToDt: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const NcfAmt: string;
                export const OfficeCd: string;
                export const PaxQty: string;
                export const RmContractAdjNtrNoSvcAmt: string;
                export const RmFinalAdjNtrAmt: string;
                export const RmFinalAdjNtrNoSvcAmt: string;
                export const RmFinalGuestQty: string;
                export const SailDat: string;
                export const SailDayQty: string;
                export const SailId: string;
                export const ShipCd: string;
                export const SmCabinFareAmt: string;
                export const SmCabinFareNonrevAmt: string;
                export const SmCostOfSalesAmt: string;
                export const SmCreditCardCostAmt: string;
                export const SmCruiseDiscAmt: string;
                export const SmExcessTicketingAmt: string;
                export const SmGuestFeesGratsExpenseAmt: string;
                export const VoyageCd: string;
            }

            namespace CreditCardAdjSupp {
                export const BaseRate: string;
                export const BlendedRate: string;
                export const CreatedByName: string;
                export const CreatedTs: string;
                export const CreditcardAdjId: string;
                export const CxBuffer: string;
                export const EffectiveFromDt: string;
                export const EffectiveToDt: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const Office: string;
                export const ParticipationRate: string;
                export const ProposedRate: string;
            }

            namespace CurrencyExchangeRateSupp {
                export const AuditRecordId: string;
                export const CommentTxt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const CurrencyCd: string;
                export const CurrencySurKey: string;
                export const ExchangeRateNbr: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const SailFromDat: string;
                export const SailToDat: string;
            }

            namespace DistrictMasterSupp {
                export const AreaCd: string;
                export const ChannelCd: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const DistrictNbr: string;
                export const DistrictSurKey: string;
                export const GroupCd: string;
                export const GssChannelCd: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const PrimaryCrmSupportNam: string;
                export const RmChannelCd: string;
                export const SalesChannelCd: string;
                export const SalesrepUserId: string;
                export const SecondaryCrmSupportNam: string;
            }

            namespace ExchangeFixedRate {
                export const CurrencyCd: string;
                export const EffectiveFrom: string;
                export const EffectiveTo: string;
                export const ExchangeFixedRateId: string;
                export const ExchangeRate: string;
                export const LoadDt: string;
            }

            namespace FinPlannedCapacitySupp {
                export const CapacityDesc: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const FinPlannedCapacitySurKey: string;
                export const FinancialCabinCapacityQty: string;
                export const FinancialGuestCapacityQty: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const SailFromDat: string;
                export const SailToDat: string;
                export const ShipCd: string;
                export const UnadjustedFinancialCabinCapacityQty: string;
                export const UnadjustedFinancialGuestCapacityQty: string;
            }

            namespace FinReportPublishingSupp {
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const FinReportPublishingSurKey: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const OnHold: string;
                export const ReportName: string;
            }

            namespace FullShipChartersSupp {
                export const AgencyId: string;
                export const CharterCommAmt: string;
                export const CharterDesc: string;
                export const CharterRevAmt: string;
                export const ContractDat: string;
                export const ContractPriceAmt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const DepositDat: string;
                export const DistrictNbr: string;
                export const GuestQty: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const OfficeCd: string;
                export const RmContractAdjNtrNoSvcAmt: string;
                export const RmFinalAdjNtrAmt: string;
                export const RmFinalAdjNtrNoSvcAmt: string;
                export const RmFinalGuestQty: string;
                export const RmNcfAmt: string;
                export const SailDat: string;
                export const SailDayQty: string;
                export const SailId: string;
                export const ShipCd: string;
                export const ShipCharterSurKey: string;
                export const VoyageCd: string;
            }

            namespace GtfSupp {
                export const CategoryCd: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const EffectiveFromDt: string;
                export const EffectiveToDt: string;
                export const EmbarkDebarkCd: string;
                export const GtfsuppId: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const Rate: string;
                export const ShipCd: string;
            }

            namespace GuestPreventDeparture {
                export const BoardingDenialReasonDesc: string;
                export const CasinoIncidentNbrTxt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const FromReportNbr: string;
                export const GuestFirstNam: string;
                export const GuestLastNam: string;
                export const GuestPreventDepartureKey: string;
                export const IncidentReportedDat: string;
                export const InternalExternalCd: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const NameTypeDesc: string;
                export const SirsNbrTxt: string;
                export const TypeCd: string;
            }

            namespace ImportErrorLog {
                export const Calledby: string;
                export const ErrorMessage: string;
                export const FileName: string;
                export const ImportDate: string;
                export const ImportLogId: string;
                export const RunNumber: string;
            }

            namespace InvoiceItemSource {
                export const ItemSourceCd: string;
            }

            namespace InvoiceItemSubType {
                export const ItemSubTypeCd: string;
            }

            namespace InvoiceItemSubType2 {
                export const ItemSubType2Cd: string;
            }

            namespace InvoiceItemSubType3 {
                export const ItemSubType3Cd: string;
            }

            namespace InvoiceItemType {
                export const ItemTypeCd: string;
            }

            namespace InvoiceItemTypeMasterSupp {
                export const CommentsTxt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const InvoiceItemSourceCd: string;
                export const InvoiceItemSubType2Cd: string;
                export const InvoiceItemSubType3Cd: string;
                export const InvoiceItemSubTypeCd: string;
                export const InvoiceItemTypeCd: string;
                export const InvoiceItemTypeMasterId: string;
                export const MasterComponentCd: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
            }

            namespace InvoiceItemTypeSupp {
                export const AmenityCostAmt: string;
                export const CasinoComponentCd: string;
                export const CasinoComponentDesc: string;
                export const ChartOfAccountNbr: string;
                export const CommentsTxt: string;
                export const ComponentCd: string;
                export const ComponentDesc: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const DeptShortDesc: string;
                export const InvoiceClassType1Cd: string;
                export const InvoiceClassType2Cd: string;
                export const InvoiceClassType3Cd: string;
                export const InvoiceClassType4Cd: string;
                export const InvoiceItemSourceCd: string;
                export const InvoiceItemSubType2Cd: string;
                export const InvoiceItemSubType3Cd: string;
                export const InvoiceItemSubTypeCd: string;
                export const InvoiceItemTypeCd: string;
                export const InvoiceItemTypeGenNatKey: string;
                export const IsAcctgActualCd: string;
                export const IsAcctgAdjCd: string;
                export const IsCcCostCd: string;
                export const IsCostCd: string;
                export const IsDilutionCd: string;
                export const IsGroupAmenityCd: string;
                export const IsGtrCd: string;
                export const IsNtrCd: string;
                export const IsPerDiemCd: string;
                export const IsPioCd: string;
                export const IsSuppressBuiltCd: string;
                export const IsTaxCd: string;
                export const M1: string;
                export const M2: string;
                export const M3: string;
                export const M4: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
            }

            namespace MarketingRequest {
                export const Address1: string;
                export const Address2: string;
                export const BrandDescription: string;
                export const BrandId: string;
                export const ChannelDescription: string;
                export const ChannelId: string;
                export const City: string;
                export const ContactId: string;
                export const Country: string;
                export const CreatedBy: string;
                export const CreatedDate: string;
                export const EmailAddress: string;
                export const FirstName: string;
                export const Id: string;
                export const IsReturnedMailCd: string;
                export const LastName: string;
                export const ModifiedBy: string;
                export const ModifiedDate: string;
                export const OptOutStatusID: string;
                export const Phone: string;
                export const RequestTypeDescription: string;
                export const RequestTypeId: string;
                export const SourceDescription: string;
                export const SourceId: string;
                export const State: string;
                export const Title: string;
                export const Zip: string;
            }

            namespace MarketingRequestBrands {
                export const Description: string;
                export const Id: string;
            }

            namespace MarketingRequestChannels {
                export const Description: string;
                export const Id: string;
            }

            namespace MarketingRequestOptOutStatus {
                export const Description: string;
                export const Id: string;
            }

            namespace MarketingRequestSources {
                export const Description: string;
                export const Id: string;
            }

            namespace MarketingRequestTypes {
                export const Description: string;
                export const Id: string;
            }

            namespace MasterComponent {
                export const MasterComponentCd: string;
            }

            namespace MinibarSetupSupp {
                export const CommentTxt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const EffectiveDat: string;
                export const MinibarSetupCostAmt: string;
                export const MinibarSetupSurKey: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const ShipCd: string;
            }

            namespace PackageTypeCodeSupp {
                export const TypeCode: string;
                export const TypeId: string;
            }

            namespace PortSubstitutionSupp {
                export const CommentTxt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const PortCd: string;
                export const PortNam: string;
                export const PortSubstitutonNam: string;
                export const PortSubstitutonSurKey: string;
            }

            namespace ProductCodeSupp {
                export const CreatedByName: string;
                export const CreatedTs: string;
                export const ModifiedByName: string;
                export const ModifiedTs: string;
                export const ProductCd: string;
                export const ProductCodeId: string;
                export const ProductDesc: string;
                export const ProductSurKey: string;
            }

            namespace PsGlAccountSupp {
                export const AccountClassType1Cd: string;
                export const AccountClassType2Cd: string;
                export const AccountClassType3Cd: string;
                export const AccountClassType4Cd: string;
                export const AccountId: string;
                export const AccountSurKey: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const GrossCostCd: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const OlapAccountDesc: string;
                export const SetId: string;
            }

            namespace Region {
                export const CompanyCd: string;
                export const EffectiveFrom: string;
                export const EffectiveTo: string;
                export const LoadDt: string;
                export const RegionCd: string;
                export const RegionId: string;
                export const RegionType: string;
            }

            namespace RevDetailField {
                export const CubeInsInd: string;
                export const LoadDt: string;
                export const OdsFieldNm: string;
                export const RevDetailFieldId: string;
                export const RevdetailFieldCheck: string;
                export const RevdetailFieldNm: string;
                export const RevdetailSegmentFieldNm: string;
            }

            namespace RollupProductCodesSupp {
                export const BrochureRollupProductCd: string;
                export const BrochureRollupProductDesc: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const ProductCd: string;
                export const RmRollupProductCd: string;
                export const RmRollupProductDesc: string;
                export const RollupProductSurKey: string;
            }

            namespace SailingMasterSupp {
                export const AmenityPtsQty: string;
                export const BackToBackCd: string;
                export const CasinoCabinCapacityQty: string;
                export const CharterCd: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const FareFeedIncludeCd: string;
                export const FsGrpAmenityAmt: string;
                export const InactiveCd: string;
                export const InterportCd: string;
                export const IsExtraordinaryCd: string;
                export const IsFreeOpenBarCd: string;
                export const IsHolidayCd: string;
                export const IsVoyageExceptionCd: string;
                export const ItineraryChangedDat: string;
                export const JonesActSailId: string;
                export const LatitudeCruiseCd: string;
                export const MainVoyageCd: string;
                export const MandateWeeksQty: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const ObrSeasonCd: string;
                export const ObrSubTradeCd: string;
                export const ObrTradeCd: string;
                export const OnSaleDat: string;
                export const PackageTypeCd: string;
                export const ProductCd: string;
                export const ProductCdCreatedByName: string;
                export const ProductCdCreatedTs: string;
                export const ProductCdModifiedByName: string;
                export const ProductCdModifiedTs: string;
                export const ProductCdProductCodeId: string;
                export const ProductCdProductDesc: string;
                export const ProductCdProductSurKey: string;
                export const ProxyBudgetSailId: string;
                export const ProxyMetaWeightSailId: string;
                export const ProxySailId: string;
                export const RmsColorNameDesc: string;
                export const RmsForecastCd: string;
                export const RmsParentSail10Id: string;
                export const RmsParentSail11Id: string;
                export const RmsParentSail12Id: string;
                export const RmsParentSail13Id: string;
                export const RmsParentSail14Id: string;
                export const RmsParentSail15Id: string;
                export const RmsParentSail1Id: string;
                export const RmsParentSail2Id: string;
                export const RmsParentSail3Id: string;
                export const RmsParentSail4Id: string;
                export const RmsParentSail5Id: string;
                export const RmsParentSail6Id: string;
                export const RmsParentSail7Id: string;
                export const RmsParentSail8Id: string;
                export const RmsParentSail9Id: string;
                export const RmsRefLinkSailId: string;
                export const RmsSeasonCd: string;
                export const SailDat: string;
                export const SailId: string;
                export const SailSurKey: string;
                export const SeasonYearCd: string;
                export const ShipCd: string;
                export const ShipNbr: string;
                export const SlProductCd: string;
                export const SlProductCdCreatedByName: string;
                export const SlProductCdCreatedTs: string;
                export const SlProductCdModifiedByName: string;
                export const SlProductCdModifiedTs: string;
                export const SlProductCdSlProductDesc: string;
                export const SlProductCdSlProductSurKey: string;
                export const ValidVoyageCd: string;
                export const VoyageExceptionDesc: string;
            }

            namespace Ship {
                export const Brand: string;
                export const IsActive: string;
                export const ShipCode: string;
                export const ShipName: string;
            }

            namespace SlProductCodeSupp {
                export const CreatedByName: string;
                export const CreatedTs: string;
                export const ModifiedByName: string;
                export const ModifiedTs: string;
                export const SlProductCd: string;
                export const SlProductDesc: string;
                export const SlProductSurKey: string;
            }

            namespace SurveyFilterExclusionSupp {
                export const CommentsTxt: string;
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const GuestId: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const ReasonDesc: string;
                export const SailId: string;
                export const SurveyExclusionId: string;
                export const SurveyExclusionSurKey: string;
            }

            namespace TblStrategicPriceControl {
                export const CategoryCd: string;
                export const CreatedByNam: string;
                export const CreatedDat: string;
                export const DiscPct: string;
                export const EffectiveFromDat: string;
                export const EffectiveToDat: string;
                export const ModifiedByNam: string;
                export const ModifiedDat: string;
                export const SailId: string;
                export const StrategicPriceControlId: string;
            }

            namespace UpgradeAdvAdjSupp {
                export const CommissionPercent: string;
                export const CreatedByName: string;
                export const CreatedTs: string;
                export const EffectiveFromDt: string;
                export const EffectiveToDt: string;
                export const ModifiedByName: string;
                export const ModifiedTs: string;
                export const UpgradeAdvAdjId: string;
                export const UpgradeAmountMax: string;
                export const UpgradeAmountMin: string;
            }

            namespace VwGetSeaPortCode {
                export const CountryCode: string;
                export const PortCode: string;
                export const PortName: string;
            }

            namespace VwGetSeaSalesRepId {
                export const Comments: string;
                export const OfficeCode: string;
                export const UserFullName: string;
                export const UserId: string;
                export const UserLoginName: string;
            }
        }

        namespace NCLHDSAR {

            namespace Assignee {
                export const AssigneeId: string;
                export const FullName: string;
                export const IsActive: string;
            }

            namespace DataFlow {
                export const CeIndex: string;
                export const Cet: string;
                export const Description: string;
                export const Key: string;
                export const LseIndex: string;
                export const Lset: string;
                export const Name: string;
                export const Package: string;
                export const ProcessYn: string;
                export const Source: string;
                export const SourceDesc: string;
                export const Status: string;
                export const Target: string;
                export const TargetDesc: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Request {
                export const Address1: string;
                export const AttrCount: string;
                export const City: string;
                export const Country: string;
                export const CreatedDt: string;
                export const DaysLeft: string;
                export const DaysOld: string;
                export const DeadlineDt: string;
                export const Email: string;
                export const FirstName: string;
                export const FullName: string;
                export const Id: string;
                export const IdentityVerificationOptOuts: string;
                export const IdentityVerificationOtherRequests: string;
                export const LastName: string;
                export const LastUpdatedDt: string;
                export const LatitudesNum: string;
                export const LoadDt: string;
                export const NclYn: string;
                export const OceaniaMpCardNum: string;
                export const OceaniaYn: string;
                export const ProcessDt: string;
                export const RegentMpCardNum: string;
                export const RegentYn: string;
                export const ReqApprover: string;
                export const ReqDetails: string;
                export const ReqExtended: string;
                export const ReqStage: string;
                export const ReqStatus: string;
                export const RequestType: string;
                export const RequestTypeNum: string;
                export const RequestTypeNumDesc: string;
                export const SixthmanYn: string;
                export const SubjectType: string;
            }

            namespace RequestAttributes {
                export const Addr1: string;
                export const Addr2: string;
                export const CityNm: string;
                export const CountryCd: string;
                export const Email1: string;
                export const ExtractDt: string;
                export const FirstNm: string;
                export const Id: string;
                export const LastNm: string;
                export const MiddleNm: string;
                export const ModifiedBy: string;
                export const ModifiedDate: string;
                export const OldAddr1: string;
                export const OldAddr2: string;
                export const OldCityNm: string;
                export const OldCountryCd: string;
                export const OldEmail: string;
                export const OldFirstNm: string;
                export const OldLastNm: string;
                export const OldMiddleNm: string;
                export const OldPostalCd: string;
                export const OldStateNm: string;
                export const PostalCd: string;
                export const RequestAttributeId: string;
                export const RequestValue: string;
                export const ResolvedDt: string;
                export const StateNm: string;
                export const SystemMasterId: string;
                export const SystemMasterSystemActiveYn: string;
                export const SystemMasterSystemDesc: string;
                export const SystemMasterSystemName: string;
                export const SystemMasterSystemTable: string;
            }

            namespace RequestStatus {
                export const StatusDescription: string;
                export const StatusId: string;
                export const StatusOrder: string;
            }

            namespace RequestType {
                export const Desc: string;
                export const Type: string;
            }

            namespace SwRequest {
                export const ApiResponse: string;
                export const ApiResponseDepth: string;
                export const ApiResponseId: string;
                export const AssigneeFullName: string;
                export const AssigneeId: string;
                export const AssigneeIsActive: string;
                export const AttributeCount: string;
                export const ClientAddress: string;
                export const ClientEmailAddress: string;
                export const ClientFirstName: string;
                export const ClientGuestCategory: string;
                export const ClientIsRelatedtoHousehold: string;
                export const ClientLastName: string;
                export const ClientLatitudesNumber: string;
                export const ClientZipCode: string;
                export const DaysLeft: string;
                export const DaysOld: string;
                export const DeadlineDt: string;
                export const LastUpdatedDt: string;
                export const NoteList: string;
                export const RecordId: string;
                export const RecordTimeStamp: string;
                export const RequestType: string;
                export const StatusId: string;
                export const StatusStatusDescription: string;
                export const StatusStatusOrder: string;
                export const UpdatedBy: string;
            }

            namespace SwRequestAttributes {
                export const ExtractDt: string;
                export const Id: string;
                export const LastUpdated: string;
                export const RequestAttributeId: string;
                export const RequestValue: string;
                export const ResolvedDt: string;
                export const SystemMasterId: string;
                export const SystemMasterSystemDesc: string;
            }

            namespace SystemMaster {
                export const Id: string;
                export const SystemActiveYn: string;
                export const SystemDesc: string;
                export const SystemName: string;
                export const SystemTable: string;
            }
        }

        namespace NCLHODSMICROS {

            namespace DataFlow {
                export const Cet: string;
                export const Description: string;
                export const Key: string;
                export const Lset: string;
                export const Name: string;
                export const Package: string;
                export const ProcessYn: string;
                export const Source: string;
                export const SourceDesc: string;
                export const Status: string;
                export const Target: string;
                export const TargetDesc: string;
            }
        }

        namespace NCLHODSSPENDVIS {

            namespace Amoslevel {
                export const AccountId: string;
                export const Descr: string;
                export const FlexDim1Name: string;
                export const FlexDim2Name: string;
                export const FlexDim3Name: string;
                export const FlexDim4Name: string;
                export const IdNum: string;
                export const ModifiedBy: string;
                export const ModifiedDate: string;
            }

            namespace DataFlow {
                export const Cet: string;
                export const Description: string;
                export const Key: string;
                export const Lset: string;
                export const Name: string;
                export const Package: string;
                export const ProcessYn: string;
                export const Source: string;
                export const Status: string;
                export const Target: string;
            }
        }

        namespace PCHDW {

            namespace DimCruise {
                export const AmenityPointsAllowedQty: string;
                export const CappedCapacity: string;
                export const CharterInd: string;
                export const ColorInd: string;
                export const CompanyCd: string;
                export const CpvTaxAmt: string;
                export const CpvTaxInd: string;
                export const CruiseCd: string;
                export const CruiseDaysQty: string;
                export const CruiseFromDt: string;
                export const CruiseFromDtMmddyyyy: string;
                export const CruiseName: string;
                export const CruiseSailingStatusDesc: string;
                export const CruiseSegmentCd: string;
                export const CruiseSegmentDaysQty: string;
                export const CruiseSegmentFromDt: string;
                export const CruiseSegmentName: string;
                export const CruiseSegmentToDt: string;
                export const CruiseStatusCd: string;
                export const CruiseTk: string;
                export const CruiseToDt: string;
                export const CruiseToDtMmddyyyy: string;
                export const DrydockInd: string;
                export const FinancialSuppressInd: string;
                export const FromPortCd: string;
                export const FromPortName: string;
                export const HighlightInd: string;
                export const HmfFeeInd: string;
                export const HmfPct: string;
                export const IrsTaxAmt: string;
                export const IrsTaxInd: string;
                export const IufExemptFeeAmt: string;
                export const IufExemptFeeInd: string;
                export const IufExemptQty: string;
                export const IufNonexemptFeeAmt: string;
                export const IufNonexemptFeeInd: string;
                export const IufNonexemptQty: string;
                export const LocationName: string;
                export const MarketName: string;
                export const MinisegInd: string;
                export const OnboardAcctTrandate: string;
                export const OnbrdAvgPaxQty: string;
                export const PpfExemptFeeAmt: string;
                export const PpfExemptInd: string;
                export const PpfNonexemptFeeAmt: string;
                export const PpfNonexemptInd: string;
                export const RevenueMgmtMarketSegment: string;
                export const RouteName: string;
                export const SeasonName: string;
                export const SegmentFromDtMmddyyyy: string;
                export const SegmentFromPortCd: string;
                export const SegmentFromPortName: string;
                export const SegmentLocationName: string;
                export const SegmentMarketName: string;
                export const SegmentOnboardAcctTrandate: string;
                export const SegmentRouteName: string;
                export const SegmentSeasonName: string;
                export const SegmentSuperMarketCd: string;
                export const SegmentSuperMarketDesc: string;
                export const SegmentToDtMmddyyyy: string;
                export const SegmentToPortCd: string;
                export const SegmentToPortName: string;
                export const ShipCd: string;
                export const ShowInReport: string;
                export const StatedCapacity: string;
                export const SuperMarketCd: string;
                export const SuperMarketDesc: string;
                export const ToPortCd: string;
                export const ToPortName: string;
                export const VarToCurve: string;
            }

            namespace DimCurrency {
                export const Cd: string;
                export const Desc: string;
                export const Tk: string;
            }

            namespace DimInvoice {
                export const AgentTk: string;
                export const AirCostSourceCd: string;
                export const AirParticipationInd: string;
                export const AirXferFeeAmt: string;
                export const AttnName: string;
                export const BonusSavingsCd: string;
                export const BonusSavingsDesc: string;
                export const CancelBookingStatusCd: string;
                export const CancelReason: string;
                export const CancellationDt: string;
                export const CancellationType: string;
                export const CenturionCd: string;
                export const CenturionInd: string;
                export const ChangeDt: string;
                export const ChannelCountryCd: string;
                export const ChannelCountryName: string;
                export const ChannelTk: string;
                export const Cinvoice1Num: string;
                export const Cinvoice2Num: string;
                export const Cinvoice3Num: string;
                export const Cinvoice4Num: string;
                export const Cinvoice5Num: string;
                export const Cinvoice6Num: string;
                export const CityName: string;
                export const ComboBookingInd: string;
                export const ComboLegQty: string;
                export const CompanyCd: string;
                export const CountryCd: string;
                export const CountryName: string;
                export const CreateDt: string;
                export const CruiseCommissionAmt: string;
                export const CruiseSvcMgmtCrNum: string;
                export const CruiseSvcMgmtId: string;
                export const CruiseTk: string;
                export const CurrencyCd: string;
                export const CurrencyDesc: string;
                export const CurrentLoyaltyLevelPax1: string;
                export const CurrentLoyaltyLevelPax2: string;
                export const CurrentPackageCd: string;
                export const DepositAmt: string;
                export const DepositDt: string;
                export const DirectBookingInd: string;
                export const DptrFlightClassCd: string;
                export const DptrFlightQty: string;
                export const DwPastGuest1Ind: string;
                export const DwPastGuest2Ind: string;
                export const DwPastGuestInd: string;
                export const FccDeferredInd: string;
                export const FinalPaymentDueDt: string;
                export const FirstConfirmDt: string;
                export const FirstPaymentDt: string;
                export const FutureDepositFlag: string;
                export const GdsSystemCd: string;
                export const GdsSystemDesc: string;
                export const HotelParticipationInd: string;
                export const InitialWaitlistInd: string;
                export const InstallmentPlanInd: string;
                export const InstallmentPlanNum: string;
                export const InvoiceNum: string;
                export const InvoiceTk: string;
                export const LandPackageParticipantInd: string;
                export const LandPackageParticipantQty: string;
                export const MpcardNumPax1: string;
                export const MpcardNumPax2: string;
                export const NonrevPassengerQty: string;
                export const NontaxPassengerQty: string;
                export const NvsPgInd: string;
                export const OciOfficeCd: string;
                export const OfficeCd: string;
                export const OfficeDesc: string;
                export const OnboardTypeDesc: string;
                export const OriginalConsortiumCd: string;
                export const OriginalConsortiumDesc: string;
                export const OriginalDeptCd: string;
                export const OriginalDeptName: string;
                export const OriginalUserActiveInd: string;
                export const OriginalUserId: string;
                export const OriginalUserName: string;
                export const OutboundReportingRegionCd: string;
                export const PackageCd: string;
                export const PaidClassCategoryDesc: string;
                export const PaidClassCd: string;
                export const PassengerQty: string;
                export const PastGuestInd: string;
                export const Pax1AirportHome1Cd: string;
                export const Pax1AirportRtrn1Cd: string;
                export const Pax1FirstFlightClass: string;
                export const Pax1FirstName: string;
                export const Pax1LastName: string;
                export const Pax1LoyaltyLevelNm: string;
                export const Pax1NvsPgInd: string;
                export const Pax1RtrnFlightClass: string;
                export const Pax2AirportHome1Cd: string;
                export const Pax2AirportRtrn1Cd: string;
                export const Pax2FirstFlightClass: string;
                export const Pax2FirstName: string;
                export const Pax2LastName: string;
                export const Pax2LoyaltyLevelNm: string;
                export const Pax2NvsPgInd: string;
                export const Pax2RtrnFlightClass: string;
                export const PaxAirClassCd: string;
                export const PlatinumCd: string;
                export const PlatinumInd: string;
                export const PostedInvoiceDt: string;
                export const PromoBonusComm: string;
                export const PromoCd: string;
                export const PromoCommAmt: string;
                export const PromoDesc: string;
                export const PromotionalAmenityCd: string;
                export const RtrnFlightClassCd: string;
                export const RtrnFlightQty: string;
                export const SalesSourceCd: string;
                export const SalesSourceDesc: string;
                export const StateCd: string;
                export const StatusCd: string;
                export const StatusDesc: string;
                export const UserId: string;
                export const UserName: string;
                export const WaitlistDt: string;
                export const ZipCd: string;
            }

            namespace DimOffice {
                export const Cd: string;
                export const Desc: string;
                export const Tk: string;
            }

            namespace ScheduledJob {
                export const JobDescription: string;
                export const JobName: string;
                export const ScheduledJobId: string;
            }

            namespace VwSqlJobList {
                export const DateCreated: string;
                export const DateModified: string;
                export const Enabled: string;
                export const JobDescription: string;
                export const Name: string;
            }
        }

        namespace PCHODS {

            namespace InboundUserOverride {
                export const Comments: string;
                export const Company: string;
                export const Id: string;
                export const Inbound: string;
                export const Invoice: string;
                export const ItDescription: string;
                export const ItDescriptionDescription: string;
                export const ItDescriptionOutboundComments: string;
                export const UserAssign: string;
            }

            namespace InboundUserOverrideDescription {
                export const Description: string;
                export const Id: string;
                export const OutboundComments: string;
            }

            namespace OutboundAgent {
                export const AgentId: string;
                export const AgentLocationDescription: string;
                export const AgentLocationId: string;
                export const CobrandInd: string;
                export const CompanyCd: string;
                export const CompanyName: string;
                export const Nm: string;
                export const NvsUserId: string;
                export const PrimaryBrand: string;
                export const StartInactiveDt: string;
                export const TeamCompanyCd: string;
                export const TeamCompanyName: string;
            }

            namespace OutboundAgentLocation {
                export const AgentLocationId: string;
                export const Description: string;
            }

            namespace OutboundCommissionBkGoal {
                export const CommissionMonth: string;
                export const CommissionTk: string;
                export const CompanyCd: string;
                export const CompanyName: string;
                export const LoadDt: string;
                export const NumOfBkGoal: string;
            }

            namespace OutboundCommissionHist {
                export const ActiveDt: string;
                export const CommissionHistId: string;
                export const CommissionId: string;
                export const CommissionRate: string;
                export const CompanyCd: string;
                export const CompanyName: string;
                export const HighNumBookings: string;
                export const InactiveDt: string;
                export const LowNumBookings: string;
            }

            namespace OutboundCommissionHistAu {
                export const ActiveDt: string;
                export const CommissionHistAuId: string;
                export const CommissionId: string;
                export const CommissionRate: string;
                export const CompanyCd: string;
                export const CompanyName: string;
                export const HighNumBookings: string;
                export const InactiveDt: string;
                export const LowNumBookings: string;
            }

            namespace OutboundCommissionHistBr {
                export const ActiveDt: string;
                export const CommissionHistBrId: string;
                export const CommissionId: string;
                export const CommissionRate: string;
                export const CompanyCd: string;
                export const CompanyName: string;
                export const HighNumBookings: string;
                export const InactiveDt: string;
                export const LowNumBookings: string;
            }

            namespace OutboundCommissionPeriod {
                export const ClosedBy: string;
                export const ClosedDate: string;
                export const CurrentMonth: string;
                export const EndDate: string;
                export const IsOpen: string;
                export const OutboundCommissionPeriodId: string;
                export const PreviousMonth: string;
                export const StartDate: string;
            }

            namespace OutboundCompany {
                export const Cd: string;
                export const Nm: string;
            }

            namespace OutboundMonthlyRptArchiveOverride {
                export const NclId: string;
                export const OciAdjustdomestic: string;
                export const OciPrevMonthDomestic: string;
                export const OciPrevMonthInternational: string;
                export const OciPrevMonthRevDomestic: string;
                export const OciPrevMonthRevInternational: string;
                export const OriginalUserName: string;
                export const OutboundMonth: string;
                export const OutboundMonthlyRptArchiveId: string;
                export const SscAdjustdomestic: string;
                export const SscPrevMonthDomestic: string;
                export const SscPrevMonthInternational: string;
                export const SscPrevMonthRevDomestic: string;
                export const SscPrevMonthRevInternational: string;
            }

            namespace OutboundNvsUsers {
                export const ActiveInd: string;
                export const CompanyCd: string;
                export const DepartmentCd: string;
                export const DepartmentDesc: string;
                export const UserFirstName: string;
                export const UserId: string;
                export const UserLastName: string;
            }

            namespace UarEmployeeDirectreports {
                export const EmpCompanyCd: string;
                export const EmpCompanyDesc: string;
                export const EmpEmail: string;
                export const EmpJobcode: string;
                export const EmpJobtitle: string;
                export const EmpStatus: string;
                export const EmployeeFirstName: string;
                export const EmployeeId: string;
                export const EmployeeLastName: string;
                export const IsSrDir: string;
                export const SupEmployeeId: string;
                export const SupFirstName: string;
                export const SupJobcode: string;
                export const SupJobtitle: string;
                export const SupLastName: string;
                export const SupLevel: string;
            }

            namespace UarSrDirAboveList {
                export const DateEffective: string;
                export const DateExpires: string;
                export const Id: string;
                export const IsSrDirAbove: string;
                export const Jobtitle: string;
                export const RowChangeReason: string;
            }

            namespace UarUnknownReviewer {
                export const Accesstype: string;
                export const AdActiveStatus: string;
                export const AdDescription: string;
                export const AdManager: string;
                export const Comments: string;
                export const CriticalFuction: string;
                export const Department: string;
                export const EmployeeId: string;
                export const Firstname: string;
                export const GroupDescription: string;
                export const HowFound: string;
                export const HrEmpStatus: string;
                export const Id: string;
                export const Lastname: string;
                export const Middlename: string;
                export const OfficeCode: string;
                export const ReviewerFirstname: string;
                export const ReviewerItCompliance: string;
                export const ReviewerLastname: string;
                export const SupEmployeeid: string;
                export const TaskId: string;
                export const TaskName: string;
                export const UserFullName: string;
                export const UserGroupId: string;
                export const UserGroupName: string;
                export const UserGroupRights: string;
                export const UserLoginName: string;
            }
        }

        namespace PCHODSNVS {

            namespace Agency {
                export const ActiveInd: string;
                export const Addr1: string;
                export const Addr2: string;
                export const Addr3: string;
                export const AgencyCd: string;
                export const AgencyCdName: string;
                export const AgencyCreateDt: string;
                export const AgencyDefaultStatusInd: string;
                export const AgencyEmail: string;
                export const AgencyNameDesc: string;
                export const AgencyStatusCd: string;
                export const AgencyWebAddress: string;
                export const AgentLinkDesc: string;
                export const AgentNum: string;
                export const AllowBankInd: string;
                export const AllowGpInd: string;
                export const AllowPlatInd: string;
                export const AllowSdbdInd: string;
                export const ApolloInd: string;
                export const AttnDesc: string;
                export const AutoCxlInd: string;
                export const AutoEnvoInd: string;
                export const BankAccountBalAmt: string;
                export const BankAcct2Amt: string;
                export const BdmCd: string;
                export const BdmRepCd: string;
                export const CityName: string;
                export const CliaNum: string;
                export const Comment1Desc: string;
                export const Comment2Desc: string;
                export const CommissionPct: string;
                export const CompanyCd: string;
                export const ConsortRgnNum: string;
                export const ConsortiumAddedDt: string;
                export const ConsortiumCd: string;
                export const ConsortiumRegionAddedDt: string;
                export const ConsortiumRegionCd: string;
                export const CorpComDesc: string;
                export const CorporationInd: string;
                export const Country: string;
                export const CreditAgtInd: string;
                export const CurrencyCd: string;
                export const CurrentYearSalesAmt: string;
                export const EMemberDesc: string;
                export const FaxNum: string;
                export const FinHoldInd: string;
                export const FinalDaysQty: string;
                export const FirstBookingDt: string;
                export const GdsSysCd: string;
                export const GsaInd: string;
                export const GsaPriceLevelAmt: string;
                export const IataNum: string;
                export const InsDefaultCd: string;
                export const Key1: string;
                export const KeyAcctInd: string;
                export const L7daysNum: string;
                export const LastUpdated: string;
                export const LastYearKeyAcctCd: string;
                export const LastYearSalesAmt: string;
                export const MahanaClubInd: string;
                export const MasterAgencyInd: string;
                export const McActiveInd: string;
                export const NactaNum: string;
                export const NationalAcctInd: string;
                export const NvsKeyAcctInd: string;
                export const OfficeCd: string;
                export const Option1DueDaysQty: string;
                export const Option2DueDaysQty: string;
                export const OverVacSummInd: string;
                export const OverrideFinalDaysInd: string;
                export const OverrideOption1DaysInd: string;
                export const OverrideOption2DaysInd: string;
                export const OwnerCd: string;
                export const PaymentViaWireInd: string;
                export const Phone1Num: string;
                export const Phone2Num: string;
                export const PinClubInd: string;
                export const PreferredCommunicationCd: string;
                export const PreferredLanguageDesc: string;
                export const PreviousYrPaxQty: string;
                export const PreviousYrRevAmt: string;
                export const PromoAdInd: string;
                export const Prt1099Ind: string;
                export const PrtD1099Dt: string;
                export const PseudoCityCd: string;
                export const RequiredSecondaryAgentInd: string;
                export const RevLabelCd: string;
                export const SalesRegionCd: string;
                export const SecondaryCurrencyCd: string;
                export const SelfBillInd: string;
                export const SendCustInvInd: string;
                export const SiblingId: string;
                export const SsrRepCd: string;
                export const StateNm: string;
                export const TaxIdNum: string;
                export const TaxInfoReceivedDt: string;
                export const TaxPayer1099Name: string;
                export const UserInUseById: string;
                export const VacSummEmailDesc: string;
                export const VatId: string;
                export const Zip2Cd: string;
                export const ZipCd: string;
            }

            namespace ConsortiumExceptionList {
                export const CombineInd: string;
                export const CompanyCd: string;
                export const ConsortiumExceptionListTk: string;
                export const ExcludeInd: string;
                export const ItemCd: string;
                export const ItemName: string;
                export const ItemType: string;
                export const ItemTypeTypeTk: string;
                export const LoadDt: string;
                export const NewItemName: string;
                export const NewItemType: string;
                export const NewItemTypeTypeTk: string;
            }

            namespace GetCruiseSegment {
                export const CruiseSegmentCd: string;
                export const SegmentMarketName: string;
                export const ShipCd: string;
            }

            namespace GsaDistributionList {
                export const AccountName: string;
                export const AgencyCd: string;
                export const CompanyCd: string;
                export const ContactName: string;
                export const Email: string;
                export const GsaDistributionListTk: string;
                export const LoadDt: string;
            }

            namespace ItemType {
                export const Type: string;
                export const TypeTk: string;
            }

            namespace NtrBudget {
                export const AccountPeriodNum: string;
                export const ApcdFinal: string;
                export const BudgetTk: string;
                export const CompanyCd: string;
                export const NtrBudget: string;
                export const NtrFinancialBudget: string;
                export const PdsBudgetTotal: string;
            }

            namespace NtrBudgetByChannel {
                export const AccountingYear: string;
                export const BudgetbychannelTk: string;
                export const ChannelDesc: string;
                export const ChannelSummDesc: string;
                export const CompanyCd: string;
                export const NpdBudget: string;
                export const NtrBudget: string;
                export const PdsBudgetTotal: string;
            }

            namespace NtrFcst {
                export const AccountPeriodNum: string;
                export const ApcdFinal: string;
                export const CompanyCd: string;
                export const FcstTk: string;
                export const NtrFcst: string;
                export const NtrFinancialBudget: string;
                export const PdsFcstTotal: string;
            }

            namespace NtrIntlDatelineCruises {
                export const CompanyCd: string;
                export const CruiseCalendarDaysQty: string;
                export const CruiseDaysQty: string;
                export const CruiseIntlTk: string;
                export const CruiseSegmentCd: string;
                export const LoadDt: string;
            }

            namespace NtrPastMonthsActual {
                export const ApcdFinal: string;
                export const AvailableNumOfCabins: string;
                export const BookedNumOfCabins: string;
                export const CompanyCd: string;
                export const CxRev: string;
                export const NtrFinal: string;
                export const PastmonthactualTk: string;
                export const PdsFinalTotal: string;
                export const StlyAvailableNumOfCabins: string;
                export const StlyBookedNumOfCabins: string;
                export const YearMonth: string;
            }

            namespace NtrRptComment {
                export const AccountPeriodNum: string;
                export const Comment: string;
                export const CommentTk: string;
                export const CompanyCd: string;
                export const ReportDate: string;
            }

            namespace RevenueAdhocManagement {
                export const AdhocDate: string;
                export const AdhocDateTk: string;
                export const CompanyCd: string;
                export const CubeId: string;
                export const DatabaseId: string;
                export const Key: string;
                export const LastProcessedDateTime: string;
                export const LastUpdatedBy: string;
                export const SqlJobName: string;
            }

            namespace SuppKeyAcctTarget {
                export const AccountType: string;
                export const AgencyCd: string;
                export const CcfTargetFy1: string;
                export const CcfTargetFy2: string;
                export const CcfTargetFy3: string;
                export const CcfTargetFy4: string;
                export const CcfTargetFy5: string;
                export const CcfTargetQ1: string;
                export const CcfTargetQ12: string;
                export const CcfTargetQ13: string;
                export const CcfTargetQ14: string;
                export const CcfTargetQ15: string;
                export const CcfTargetQ2: string;
                export const CcfTargetQ22: string;
                export const CcfTargetQ23: string;
                export const CcfTargetQ24: string;
                export const CcfTargetQ25: string;
                export const CcfTargetQ3: string;
                export const CcfTargetQ32: string;
                export const CcfTargetQ33: string;
                export const CcfTargetQ34: string;
                export const CcfTargetQ35: string;
                export const CcfTargetQ4: string;
                export const CcfTargetQ42: string;
                export const CcfTargetQ43: string;
                export const CcfTargetQ44: string;
                export const CcfTargetQ45: string;
                export const CompanyCd: string;
                export const KeyAcctLink: string;
                export const KeyAcctTk: string;
                export const LoadDt: string;
                export const PrctTargetQ1: string;
                export const PrctTargetQ12: string;
                export const PrctTargetQ13: string;
                export const PrctTargetQ14: string;
                export const PrctTargetQ15: string;
                export const PrctTargetQ2: string;
                export const PrctTargetQ22: string;
                export const PrctTargetQ23: string;
                export const PrctTargetQ24: string;
                export const PrctTargetQ25: string;
                export const PrctTargetQ3: string;
                export const PrctTargetQ32: string;
                export const PrctTargetQ33: string;
                export const PrctTargetQ34: string;
                export const PrctTargetQ35: string;
                export const PrctTargetQ4: string;
                export const PrctTargetQ42: string;
                export const PrctTargetQ43: string;
                export const PrctTargetQ44: string;
                export const PrctTargetQ45: string;
                export const Year: string;
            }

            namespace TransferEstimateOciAmt {
                export const CruiseSegmentCd: string;
                export const LoadDt: string;
                export const SegmentMarketName: string;
                export const ShipCd: string;
                export const TransferCostPerPax: string;
                export const TransferId: string;
            }
        }

        namespace SSISConfig {

            namespace DataFlow {
                export const Cet: string;
                export const Description: string;
                export const Key: string;
                export const Lset: string;
                export const Name: string;
                export const Package: string;
                export const ProcessYn: string;
                export const Source: string;
                export const SourceDesc: string;
                export const Status: string;
                export const Target: string;
                export const TargetDesc: string;
            }

            namespace GpInterfaceLog {
                export const CompanyCd: string;
                export const CruiseSegmentCd: string;
                export const ExpRevType: string;
                export const GpInterfaceInd: string;
                export const GpInterfacedDt: string;
                export const InterfaceLogId: string;
                export const JournalNum: string;
            }

            namespace INTConfigBase {
                export const ConfigId: string;
                export const ConfigurationFilter: string;
                export const ConfiguredValue: string;
                export const ConfiguredValueType: string;
                export const EnvironmentDesc: string;
                export const EnvironmentEnum: string;
                export const ModifiedBy: string;
                export const ModifiedOn: string;
                export const PackagePath: string;
            }

            namespace MicrosDataFlow {
                export const CeIndex: string;
                export const Cet: string;
                export const Description: string;
                export const Key: string;
                export const LseIndex: string;
                export const Lset: string;
                export const Name: string;
                export const Package: string;
                export const ProcessYn: string;
                export const Source: string;
                export const SourceDesc: string;
                export const Status: string;
                export const Target: string;
                export const TargetDesc: string;
            }

            namespace NclhShip {
                export const CompanyCd: string;
                export const DepartmentCd: string;
                export const HasMerged: string;
                export const IsActive: string;
                export const LocationCd: string;
                export const ShipAbbreviation: string;
                export const ShipFullName: string;
                export const ShipId: string;
                export const ShipTk: string;
            }

            namespace PsInterfaceConfig {
                export const ConfigId: string;
                export const ConfigSetting: string;
                export const ConfigValue: string;
                export const ConfigValueDate: string;
                export const DataType: string;
                export const ModifiedBy: string;
                export const ModifiedDate: string;
                export const SourceSystem: string;
            }

            namespace SsisConfigBase {
                export const ConfigId: string;
                export const ConfigurationFilter: string;
                export const ConfiguredValue: string;
                export const ConfiguredValueType: string;
                export const EnvironmentDesc: string;
                export const EnvironmentEnum: string;
                export const ModifiedBy: string;
                export const ModifiedOn: string;
                export const PackagePath: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace CardViewMixin {
            export const CardView: string;
            export const ListView: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Dialogs {
            export const PendingChangesConfirmation: string;
        }

        namespace DraggableGroupingMixin {
            export const CollapseAllButton: string;
            export const DropPlaceholder: string;
            export const ExpandAllButton: string;
        }

        namespace EmailClient {
            export const BackButton: string;
            export const CCLabel: string;
            export const CancelButton: string;
            export const ComposeButton: string;
            export const DeleteButton: string;
            export const DeleteMessageConfirmation: string;
            export const DeleteMessageSuccess: string;
            export const DeleteNoSelectionWarning: string;
            export const DeleteSelectedConfirmation: string;
            export const DeleteSelectedSuccess: string;

            namespace FolderNames {
                export const drafts: string;
                export const inbox: string;
                export const junk: string;
                export const sent: string;
                export const trash: string;
            }
            export const FoldersTitle: string;
            export const ForwardButton: string;
            export const ImapHost: string;
            export const ImapPassword: string;
            export const ImapPort: string;
            export const ImapUsername: string;
            export const LoginButton: string;
            export const LoginTitle: string;
            export const MoveMessageSuccess: string;
            export const MoveNoSelectionWarning: string;
            export const MoveSelectedSuccess: string;
            export const MoveToFolder: string;
            export const NewEmailDialogTitle: string;
            export const PageTitle: string;
            export const QuickSettings: string;
            export const RefreshButton: string;
            export const ReplyAllButton: string;
            export const ReplyButton: string;
            export const ReplyEmailDialogTitle: string;
            export const SearchPlaceholder: string;
            export const SendButton: string;
            export const SignoutButton: string;
            export const SmtpHost: string;
            export const SmtpPassword: string;
            export const SmtpPort: string;
            export const SmtpUsername: string;
            export const ToLabel: string;
            export const ToggleReadButton: string;
            export const ToggleSeenNoSelectionWarning: string;
        }

        namespace FavoriteViewsMixin {
            export const DeleteButtonHint: string;
            export const DeleteSuccessMessage: string;
            export const EmptyNameError: string;
            export const FavoriteViews: string;
            export const LoadedViewMessage: string;
            export const SaveButton: string;
            export const SaveSuccessMessage: string;
            export const SaveView: string;
        }

        namespace HeaderFiltersMixin {
            export const CancelButton: string;
            export const ClearButton: string;
            export const OkButton: string;
            export const Search: string;
            export const SelectAll: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeAzure: string;
            export const ThemeAzureLight: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeCosmos: string;
            export const ThemeCosmosLight: string;
            export const ThemeGlassy: string;
            export const ThemeGlassyLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }

        namespace WizardDialog {
            export const BackButton: string;
            export const CancelMessage: string;
            export const FinishButton: string;
            export const NextButton: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    DAP['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{DataAuditLog:{FieldName:1,LogDate:1,LogId:1,LogType:1,NewValue:1,OldValue:1,RecordId:1,Tablename:1,UserDisplayName:1,UserId:1,Username:1},Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,ImpersonationToken:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TwoFactorAuth:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Avaya:{Brand:{Brand:1,BrandTk:1},CallType:{Type:1,TypeTk:1},Department:{Department:1,DepartmentTk:1},Group:{Cd:1,Tk:1},Region:{Region:1,RegionTk:1},SkillSplitMapping:{AcdNo:1,Brand:1,BrandBrandTk:1,CallType:1,CallTypeTypeTk:1,CmsNo:1,Department:1,DepartmentDepartmentTk:1,GroupCd:1,GroupCdTk:1,Region:1,RegionRegionTk:1,SkillName:1,SkillSplitTk:1,SplitNo:1,Status:1,StatusStatusTk:1,SupportChannel:1,SupportChannelSuppChannelTk:1},Status:{StatusDesc:1,StatusTk:1},SupportChannel:{SuppChannelTk:1,SupportChannel:1}},Common:{BackgroundTaskLog:{LogId:1,Message:1,RunAt:1,Server:1,Status:1,TaskKey:1},Mail:{Bcc:1,Body:1,Cc:1,ErrorMessage:1,InsertDate:1,InsertUser:1,InsertUserId:1,LockExpiration:1,MailFrom:1,MailId:1,MailTo:1,Priority:1,ReplyTo:1,RetryCount:1,SentDate:1,Status:1,Subject:1,Uid:1},UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},DWSupport:{AgencySnapshotRequest:{AgencySnapshotReqId:1,CreatedBy:1,CreatedDate:1,ModifiedBy:1,ModifiedDate:1,RequestedBy:1,RequestedByDate:1,RequestedReason:1},AmenitiesSupp:{AmenityAddonAmt:1,AmenityCategoryCd:1,AmenityCd:1,AmenityCostAmt:1,AmenityDesc:1,AmenityId:1,AmenityTypeAmenityTypeCd:1,AmenityTypeAmenityTypeDesc:1,AmenityTypeCommentTxt:1,AmenityTypeConditionDesc:1,AmenityTypeCreatedByNam:1,AmenityTypeCreatedDat:1,AmenityTypeDisplayOrderCd:1,AmenityTypeId:1,AmenityTypeModifiedByNam:1,AmenityTypeModifiedDat:1,CommentTxt:1,ConditionDesc:1,CreatedByNam:1,CreatedDat:1,CurrencyCd:1,DisplayOrderCd:1,IsPerDiemCd:1,ModifiedByNam:1,ModifiedDat:1},AmenityCategory:{CategoryCd:1},AmenityDetailsSupp:{AmenityAmenityAddonAmt:1,AmenityAmenityCategoryCd:1,AmenityAmenityCd:1,AmenityAmenityCostAmt:1,AmenityAmenityDesc:1,AmenityAmenityTypeId:1,AmenityCommentTxt:1,AmenityConditionDesc:1,AmenityCreatedByNam:1,AmenityCreatedDat:1,AmenityCurrencyCd:1,AmenityDetailCd:1,AmenityDetailId:1,AmenityDisplayOrderCd:1,AmenityId:1,AmenityIsPerDiemCd:1,AmenityModifiedByNam:1,AmenityModifiedDat:1,AmenityPtsQty:1,CommentTxt:1,ConditionDesc:1,CreatedByNam:1,CreatedDat:1,MinCabinQty:1,ModifiedByNam:1,ModifiedDat:1,OfficeCd:1,SailDayFromQty:1,SailDayToQty:1},AmenityOffice:{Cd:1},AmenityTypesSupp:{AmenityTypeCd:1,AmenityTypeDesc:1,AmenityTypeId:1,CommentTxt:1,ConditionDesc:1,CreatedByNam:1,CreatedDat:1,DisplayOrderCd:1,ModifiedByNam:1,ModifiedDat:1},CasinoSlotMasterDescSupp:{CommentTxt:1,CreatedByNam:1,CreatedTs:1,ManufacturerNam:1,ModifiedByNam:1,ModifiedTs:1,SlotMasterDesc:1,SlotMasterDescSurKey:1},CategoryMasterSupp:{CategoryCd:1,CategoryMasterSurKey:1,CreatedByNam:1,CreatedTs:1,FleetCategoryPriorityNbr:1,MandatoryAssignmentCd:1,MetaCategoryCd:1,ModifiedByNam:1,ModifiedTs:1,NewMetaCategoryCd:1,PseudoCategoryCd:1,RmsPseudoCategoryCd:1,SailFromDat:1,SailToDat:1,ShipCd:1},CcOfficeLoations:{Cd:1},CmiSupp:{AgencyId:1,BookingCurrencyCd:1,CabinQty:1,CharterDesc:1,CmiAmenityCostAmt:1,CmiSubType2Cd:1,CmiSubTypeCd:1,CmiSurKey:1,CmiTypeCd:1,CommissionAmt:1,ContractDat:1,ContractPriceAmt:1,CreatedByNam:1,CreatedTs:1,CruiseRevAmt:1,DepositDat:1,DistrictNbr:1,EffectiveFromDt:1,EffectiveToDt:1,ModifiedByNam:1,ModifiedTs:1,NcfAmt:1,OfficeCd:1,PaxQty:1,RmContractAdjNtrNoSvcAmt:1,RmFinalAdjNtrAmt:1,RmFinalAdjNtrNoSvcAmt:1,RmFinalGuestQty:1,SailDat:1,SailDayQty:1,SailId:1,ShipCd:1,SmCabinFareAmt:1,SmCabinFareNonrevAmt:1,SmCostOfSalesAmt:1,SmCreditCardCostAmt:1,SmCruiseDiscAmt:1,SmExcessTicketingAmt:1,SmGuestFeesGratsExpenseAmt:1,VoyageCd:1},CreditCardAdjSupp:{BaseRate:1,BlendedRate:1,CreatedByName:1,CreatedTs:1,CreditcardAdjId:1,CxBuffer:1,EffectiveFromDt:1,EffectiveToDt:1,ModifiedByNam:1,ModifiedTs:1,Office:1,ParticipationRate:1,ProposedRate:1},CurrencyExchangeRateSupp:{AuditRecordId:1,CommentTxt:1,CreatedByNam:1,CreatedTs:1,CurrencyCd:1,CurrencySurKey:1,ExchangeRateNbr:1,ModifiedByNam:1,ModifiedTs:1,SailFromDat:1,SailToDat:1},DistrictMasterSupp:{AreaCd:1,ChannelCd:1,CreatedByNam:1,CreatedTs:1,DistrictNbr:1,DistrictSurKey:1,GroupCd:1,GssChannelCd:1,ModifiedByNam:1,ModifiedTs:1,PrimaryCrmSupportNam:1,RmChannelCd:1,SalesChannelCd:1,SalesrepUserId:1,SecondaryCrmSupportNam:1},FinPlannedCapacitySupp:{CapacityDesc:1,CreatedByNam:1,CreatedTs:1,FinPlannedCapacitySurKey:1,FinancialCabinCapacityQty:1,FinancialGuestCapacityQty:1,ModifiedByNam:1,ModifiedTs:1,SailFromDat:1,SailToDat:1,ShipCd:1,UnadjustedFinancialCabinCapacityQty:1,UnadjustedFinancialGuestCapacityQty:1},FinReportPublishingSupp:{CreatedByNam:1,CreatedTs:1,FinReportPublishingSurKey:1,ModifiedByNam:1,ModifiedTs:1,OnHold:1,ReportName:1},FullShipChartersSupp:{AgencyId:1,CharterCommAmt:1,CharterDesc:1,CharterRevAmt:1,ContractDat:1,ContractPriceAmt:1,CreatedByNam:1,CreatedTs:1,DepositDat:1,DistrictNbr:1,GuestQty:1,ModifiedByNam:1,ModifiedTs:1,OfficeCd:1,RmContractAdjNtrNoSvcAmt:1,RmFinalAdjNtrAmt:1,RmFinalAdjNtrNoSvcAmt:1,RmFinalGuestQty:1,RmNcfAmt:1,SailDat:1,SailDayQty:1,SailId:1,ShipCd:1,ShipCharterSurKey:1,VoyageCd:1},GtfSupp:{CategoryCd:1,CreatedByNam:1,CreatedTs:1,EffectiveFromDt:1,EffectiveToDt:1,EmbarkDebarkCd:1,GtfsuppId:1,ModifiedByNam:1,ModifiedTs:1,Rate:1,ShipCd:1},GuestPreventDeparture:{BoardingDenialReasonDesc:1,CasinoIncidentNbrTxt:1,CreatedByNam:1,CreatedTs:1,FromReportNbr:1,GuestFirstNam:1,GuestLastNam:1,GuestPreventDepartureKey:1,IncidentReportedDat:1,InternalExternalCd:1,ModifiedByNam:1,ModifiedTs:1,NameTypeDesc:1,SirsNbrTxt:1,TypeCd:1},ImportErrorLog:{Calledby:1,ErrorMessage:1,FileName:1,ImportDate:1,ImportLogId:1,RunNumber:1},InvoiceItemSource:{ItemSourceCd:1},InvoiceItemSubType:{ItemSubTypeCd:1},InvoiceItemSubType2:{ItemSubType2Cd:1},InvoiceItemSubType3:{ItemSubType3Cd:1},InvoiceItemType:{ItemTypeCd:1},InvoiceItemTypeMasterSupp:{CommentsTxt:1,CreatedByNam:1,CreatedTs:1,InvoiceItemSourceCd:1,InvoiceItemSubType2Cd:1,InvoiceItemSubType3Cd:1,InvoiceItemSubTypeCd:1,InvoiceItemTypeCd:1,InvoiceItemTypeMasterId:1,MasterComponentCd:1,ModifiedByNam:1,ModifiedTs:1},InvoiceItemTypeSupp:{AmenityCostAmt:1,CasinoComponentCd:1,CasinoComponentDesc:1,ChartOfAccountNbr:1,CommentsTxt:1,ComponentCd:1,ComponentDesc:1,CreatedByNam:1,CreatedTs:1,DeptShortDesc:1,InvoiceClassType1Cd:1,InvoiceClassType2Cd:1,InvoiceClassType3Cd:1,InvoiceClassType4Cd:1,InvoiceItemSourceCd:1,InvoiceItemSubType2Cd:1,InvoiceItemSubType3Cd:1,InvoiceItemSubTypeCd:1,InvoiceItemTypeCd:1,InvoiceItemTypeGenNatKey:1,IsAcctgActualCd:1,IsAcctgAdjCd:1,IsCcCostCd:1,IsCostCd:1,IsDilutionCd:1,IsGroupAmenityCd:1,IsGtrCd:1,IsNtrCd:1,IsPerDiemCd:1,IsPioCd:1,IsSuppressBuiltCd:1,IsTaxCd:1,M1:1,M2:1,M3:1,M4:1,ModifiedByNam:1,ModifiedTs:1},MarketingRequest:{Address1:1,Address2:1,BrandDescription:1,BrandId:1,ChannelDescription:1,ChannelId:1,City:1,ContactId:1,Country:1,CreatedBy:1,CreatedDate:1,EmailAddress:1,FirstName:1,Id:1,IsReturnedMailCd:1,LastName:1,ModifiedBy:1,ModifiedDate:1,OptOutStatusID:1,Phone:1,RequestTypeDescription:1,RequestTypeId:1,SourceDescription:1,SourceId:1,State:1,Title:1,Zip:1},MarketingRequestBrands:{Description:1,Id:1},MarketingRequestChannels:{Description:1,Id:1},MarketingRequestOptOutStatus:{Description:1,Id:1},MarketingRequestSources:{Description:1,Id:1},MarketingRequestTypes:{Description:1,Id:1},MasterComponent:{MasterComponentCd:1},MinibarSetupSupp:{CommentTxt:1,CreatedByNam:1,CreatedTs:1,EffectiveDat:1,MinibarSetupCostAmt:1,MinibarSetupSurKey:1,ModifiedByNam:1,ModifiedTs:1,ShipCd:1},PackageTypeCodeSupp:{TypeCode:1,TypeId:1},PortSubstitutionSupp:{CommentTxt:1,CreatedByNam:1,CreatedTs:1,ModifiedByNam:1,ModifiedTs:1,PortCd:1,PortNam:1,PortSubstitutonNam:1,PortSubstitutonSurKey:1},ProductCodeSupp:{CreatedByName:1,CreatedTs:1,ModifiedByName:1,ModifiedTs:1,ProductCd:1,ProductCodeId:1,ProductDesc:1,ProductSurKey:1},PsGlAccountSupp:{AccountClassType1Cd:1,AccountClassType2Cd:1,AccountClassType3Cd:1,AccountClassType4Cd:1,AccountId:1,AccountSurKey:1,CreatedByNam:1,CreatedTs:1,GrossCostCd:1,ModifiedByNam:1,ModifiedTs:1,OlapAccountDesc:1,SetId:1},Region:{CompanyCd:1,EffectiveFrom:1,EffectiveTo:1,LoadDt:1,RegionCd:1,RegionId:1,RegionType:1},RollupProductCodesSupp:{BrochureRollupProductCd:1,BrochureRollupProductDesc:1,CreatedByNam:1,CreatedTs:1,ModifiedByNam:1,ModifiedTs:1,ProductCd:1,RmRollupProductCd:1,RmRollupProductDesc:1,RollupProductSurKey:1},SailingMasterSupp:{AmenityPtsQty:1,BackToBackCd:1,CasinoCabinCapacityQty:1,CharterCd:1,CreatedByNam:1,CreatedTs:1,FareFeedIncludeCd:1,FsGrpAmenityAmt:1,InactiveCd:1,InterportCd:1,IsExtraordinaryCd:1,IsFreeOpenBarCd:1,IsHolidayCd:1,IsVoyageExceptionCd:1,ItineraryChangedDat:1,JonesActSailId:1,LatitudeCruiseCd:1,MainVoyageCd:1,MandateWeeksQty:1,ModifiedByNam:1,ModifiedTs:1,ObrSeasonCd:1,ObrSubTradeCd:1,ObrTradeCd:1,OnSaleDat:1,PackageTypeCd:1,ProductCd:1,ProductCdCreatedByName:1,ProductCdCreatedTs:1,ProductCdModifiedByName:1,ProductCdModifiedTs:1,ProductCdProductCodeId:1,ProductCdProductDesc:1,ProductCdProductSurKey:1,ProxyBudgetSailId:1,ProxyMetaWeightSailId:1,ProxySailId:1,RmsColorNameDesc:1,RmsForecastCd:1,RmsParentSail10Id:1,RmsParentSail11Id:1,RmsParentSail12Id:1,RmsParentSail13Id:1,RmsParentSail14Id:1,RmsParentSail15Id:1,RmsParentSail1Id:1,RmsParentSail2Id:1,RmsParentSail3Id:1,RmsParentSail4Id:1,RmsParentSail5Id:1,RmsParentSail6Id:1,RmsParentSail7Id:1,RmsParentSail8Id:1,RmsParentSail9Id:1,RmsRefLinkSailId:1,RmsSeasonCd:1,SailDat:1,SailId:1,SailSurKey:1,SeasonYearCd:1,ShipCd:1,ShipNbr:1,SlProductCd:1,SlProductCdCreatedByName:1,SlProductCdCreatedTs:1,SlProductCdModifiedByName:1,SlProductCdModifiedTs:1,SlProductCdSlProductDesc:1,SlProductCdSlProductSurKey:1,ValidVoyageCd:1,VoyageExceptionDesc:1},Ship:{Brand:1,IsActive:1,ShipCode:1,ShipName:1},SlProductCodeSupp:{CreatedByName:1,CreatedTs:1,ModifiedByName:1,ModifiedTs:1,SlProductCd:1,SlProductDesc:1,SlProductSurKey:1},SurveyFilterExclusionSupp:{CommentsTxt:1,CreatedByNam:1,CreatedTs:1,GuestId:1,ModifiedByNam:1,ModifiedTs:1,ReasonDesc:1,SailId:1,SurveyExclusionId:1,SurveyExclusionSurKey:1},TblStrategicPriceControl:{CategoryCd:1,CreatedByNam:1,CreatedDat:1,DiscPct:1,EffectiveFromDat:1,EffectiveToDat:1,ModifiedByNam:1,ModifiedDat:1,SailId:1,StrategicPriceControlId:1},UpgradeAdvAdjSupp:{CommissionPercent:1,CreatedByName:1,CreatedTs:1,EffectiveFromDt:1,EffectiveToDt:1,ModifiedByName:1,ModifiedTs:1,UpgradeAdvAdjId:1,UpgradeAmountMax:1,UpgradeAmountMin:1},VwGetSeaPortCode:{CountryCode:1,PortCode:1,PortName:1},VwGetSeaSalesRepId:{Comments:1,OfficeCode:1,UserFullName:1,UserId:1,UserLoginName:1}},NCLHDSAR:{Assignee:{AssigneeId:1,FullName:1,IsActive:1},DataFlow:{CeIndex:1,Cet:1,Description:1,Key:1,LseIndex:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,SourceDesc:1,Status:1,Target:1,TargetDesc:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Request:{Address1:1,AttrCount:1,City:1,Country:1,CreatedDt:1,DaysLeft:1,DaysOld:1,DeadlineDt:1,Email:1,FirstName:1,FullName:1,Id:1,IdentityVerificationOptOuts:1,IdentityVerificationOtherRequests:1,LastName:1,LastUpdatedDt:1,LatitudesNum:1,LoadDt:1,NclYn:1,OceaniaMpCardNum:1,OceaniaYn:1,ProcessDt:1,RegentMpCardNum:1,RegentYn:1,ReqApprover:1,ReqDetails:1,ReqExtended:1,ReqStage:1,ReqStatus:1,RequestType:1,RequestTypeNum:1,RequestTypeNumDesc:1,SixthmanYn:1,SubjectType:1},RequestAttributes:{Addr1:1,Addr2:1,CityNm:1,CountryCd:1,Email1:1,ExtractDt:1,FirstNm:1,Id:1,LastNm:1,MiddleNm:1,ModifiedBy:1,ModifiedDate:1,OldAddr1:1,OldAddr2:1,OldCityNm:1,OldCountryCd:1,OldEmail:1,OldFirstNm:1,OldLastNm:1,OldMiddleNm:1,OldPostalCd:1,OldStateNm:1,PostalCd:1,RequestAttributeId:1,RequestValue:1,ResolvedDt:1,StateNm:1,SystemMasterId:1,SystemMasterSystemActiveYn:1,SystemMasterSystemDesc:1,SystemMasterSystemName:1,SystemMasterSystemTable:1},RequestStatus:{StatusDescription:1,StatusId:1,StatusOrder:1},RequestType:{Desc:1,Type:1},SwRequest:{ApiResponse:1,ApiResponseDepth:1,ApiResponseId:1,AssigneeFullName:1,AssigneeId:1,AssigneeIsActive:1,AttributeCount:1,ClientAddress:1,ClientEmailAddress:1,ClientFirstName:1,ClientGuestCategory:1,ClientIsRelatedtoHousehold:1,ClientLastName:1,ClientLatitudesNumber:1,ClientZipCode:1,DaysLeft:1,DaysOld:1,DeadlineDt:1,LastUpdatedDt:1,NoteList:1,RecordId:1,RecordTimeStamp:1,RequestType:1,StatusId:1,StatusStatusDescription:1,StatusStatusOrder:1,UpdatedBy:1},SwRequestAttributes:{ExtractDt:1,Id:1,LastUpdated:1,RequestAttributeId:1,RequestValue:1,ResolvedDt:1,SystemMasterId:1,SystemMasterSystemDesc:1},SystemMaster:{Id:1,SystemActiveYn:1,SystemDesc:1,SystemName:1,SystemTable:1}},NCLHODSMICROS:{DataFlow:{Cet:1,Description:1,Key:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,SourceDesc:1,Status:1,Target:1,TargetDesc:1}},NCLHODSSPENDVIS:{Amoslevel:{AccountId:1,Descr:1,FlexDim1Name:1,FlexDim2Name:1,FlexDim3Name:1,FlexDim4Name:1,IdNum:1,ModifiedBy:1,ModifiedDate:1},DataFlow:{Cet:1,Description:1,Key:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,Status:1,Target:1}},PCHDW:{DimCruise:{AmenityPointsAllowedQty:1,CappedCapacity:1,CharterInd:1,ColorInd:1,CompanyCd:1,CpvTaxAmt:1,CpvTaxInd:1,CruiseCd:1,CruiseDaysQty:1,CruiseFromDt:1,CruiseFromDtMmddyyyy:1,CruiseName:1,CruiseSailingStatusDesc:1,CruiseSegmentCd:1,CruiseSegmentDaysQty:1,CruiseSegmentFromDt:1,CruiseSegmentName:1,CruiseSegmentToDt:1,CruiseStatusCd:1,CruiseTk:1,CruiseToDt:1,CruiseToDtMmddyyyy:1,DrydockInd:1,FinancialSuppressInd:1,FromPortCd:1,FromPortName:1,HighlightInd:1,HmfFeeInd:1,HmfPct:1,IrsTaxAmt:1,IrsTaxInd:1,IufExemptFeeAmt:1,IufExemptFeeInd:1,IufExemptQty:1,IufNonexemptFeeAmt:1,IufNonexemptFeeInd:1,IufNonexemptQty:1,LocationName:1,MarketName:1,MinisegInd:1,OnboardAcctTrandate:1,OnbrdAvgPaxQty:1,PpfExemptFeeAmt:1,PpfExemptInd:1,PpfNonexemptFeeAmt:1,PpfNonexemptInd:1,RevenueMgmtMarketSegment:1,RouteName:1,SeasonName:1,SegmentFromDtMmddyyyy:1,SegmentFromPortCd:1,SegmentFromPortName:1,SegmentLocationName:1,SegmentMarketName:1,SegmentOnboardAcctTrandate:1,SegmentRouteName:1,SegmentSeasonName:1,SegmentSuperMarketCd:1,SegmentSuperMarketDesc:1,SegmentToDtMmddyyyy:1,SegmentToPortCd:1,SegmentToPortName:1,ShipCd:1,ShowInReport:1,StatedCapacity:1,SuperMarketCd:1,SuperMarketDesc:1,ToPortCd:1,ToPortName:1,VarToCurve:1},DimCurrency:{Cd:1,Desc:1,Tk:1},DimInvoice:{AgentTk:1,AirCostSourceCd:1,AirParticipationInd:1,AirXferFeeAmt:1,AttnName:1,BonusSavingsCd:1,BonusSavingsDesc:1,CancelBookingStatusCd:1,CancelReason:1,CancellationDt:1,CancellationType:1,CenturionCd:1,CenturionInd:1,ChangeDt:1,ChannelCountryCd:1,ChannelCountryName:1,ChannelTk:1,Cinvoice1Num:1,Cinvoice2Num:1,Cinvoice3Num:1,Cinvoice4Num:1,Cinvoice5Num:1,Cinvoice6Num:1,CityName:1,ComboBookingInd:1,ComboLegQty:1,CompanyCd:1,CountryCd:1,CountryName:1,CreateDt:1,CruiseCommissionAmt:1,CruiseSvcMgmtCrNum:1,CruiseSvcMgmtId:1,CruiseTk:1,CurrencyCd:1,CurrencyDesc:1,CurrentLoyaltyLevelPax1:1,CurrentLoyaltyLevelPax2:1,CurrentPackageCd:1,DepositAmt:1,DepositDt:1,DirectBookingInd:1,DptrFlightClassCd:1,DptrFlightQty:1,DwPastGuest1Ind:1,DwPastGuest2Ind:1,DwPastGuestInd:1,FccDeferredInd:1,FinalPaymentDueDt:1,FirstConfirmDt:1,FirstPaymentDt:1,FutureDepositFlag:1,GdsSystemCd:1,GdsSystemDesc:1,HotelParticipationInd:1,InitialWaitlistInd:1,InstallmentPlanInd:1,InstallmentPlanNum:1,InvoiceNum:1,InvoiceTk:1,LandPackageParticipantInd:1,LandPackageParticipantQty:1,MpcardNumPax1:1,MpcardNumPax2:1,NonrevPassengerQty:1,NontaxPassengerQty:1,NvsPgInd:1,OciOfficeCd:1,OfficeCd:1,OfficeDesc:1,OnboardTypeDesc:1,OriginalConsortiumCd:1,OriginalConsortiumDesc:1,OriginalDeptCd:1,OriginalDeptName:1,OriginalUserActiveInd:1,OriginalUserId:1,OriginalUserName:1,OutboundReportingRegionCd:1,PackageCd:1,PaidClassCategoryDesc:1,PaidClassCd:1,PassengerQty:1,PastGuestInd:1,Pax1AirportHome1Cd:1,Pax1AirportRtrn1Cd:1,Pax1FirstFlightClass:1,Pax1FirstName:1,Pax1LastName:1,Pax1LoyaltyLevelNm:1,Pax1NvsPgInd:1,Pax1RtrnFlightClass:1,Pax2AirportHome1Cd:1,Pax2AirportRtrn1Cd:1,Pax2FirstFlightClass:1,Pax2FirstName:1,Pax2LastName:1,Pax2LoyaltyLevelNm:1,Pax2NvsPgInd:1,Pax2RtrnFlightClass:1,PaxAirClassCd:1,PlatinumCd:1,PlatinumInd:1,PostedInvoiceDt:1,PromoBonusComm:1,PromoCd:1,PromoCommAmt:1,PromoDesc:1,PromotionalAmenityCd:1,RtrnFlightClassCd:1,RtrnFlightQty:1,SalesSourceCd:1,SalesSourceDesc:1,StateCd:1,StatusCd:1,StatusDesc:1,UserId:1,UserName:1,WaitlistDt:1,ZipCd:1},DimOffice:{Cd:1,Desc:1,Tk:1},ScheduledJob:{JobDescription:1,JobName:1,ScheduledJobId:1},VwSqlJobList:{DateCreated:1,DateModified:1,Enabled:1,JobDescription:1,Name:1}},PCHODS:{InboundUserOverride:{Comments:1,Company:1,Id:1,Inbound:1,Invoice:1,ItDescription:1,ItDescriptionDescription:1,ItDescriptionOutboundComments:1,UserAssign:1},InboundUserOverrideDescription:{Description:1,Id:1,OutboundComments:1},OutboundAgent:{AgentId:1,AgentLocationDescription:1,AgentLocationId:1,CobrandInd:1,CompanyCd:1,CompanyName:1,Nm:1,NvsUserId:1,PrimaryBrand:1,StartInactiveDt:1,TeamCompanyCd:1,TeamCompanyName:1},OutboundAgentLocation:{AgentLocationId:1,Description:1},OutboundCommissionBkGoal:{CommissionMonth:1,CommissionTk:1,CompanyCd:1,CompanyName:1,LoadDt:1,NumOfBkGoal:1},OutboundCommissionHist:{ActiveDt:1,CommissionHistId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionHistAu:{ActiveDt:1,CommissionHistAuId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionHistBr:{ActiveDt:1,CommissionHistBrId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionPeriod:{ClosedBy:1,ClosedDate:1,CurrentMonth:1,EndDate:1,IsOpen:1,OutboundCommissionPeriodId:1,PreviousMonth:1,StartDate:1},OutboundCompany:{Cd:1,Nm:1},OutboundMonthlyRptArchiveOverride:{NclId:1,OciAdjustdomestic:1,OciPrevMonthDomestic:1,OciPrevMonthInternational:1,OciPrevMonthRevDomestic:1,OciPrevMonthRevInternational:1,OriginalUserName:1,OutboundMonth:1,OutboundMonthlyRptArchiveId:1,SscAdjustdomestic:1,SscPrevMonthDomestic:1,SscPrevMonthInternational:1,SscPrevMonthRevDomestic:1,SscPrevMonthRevInternational:1},OutboundNvsUsers:{ActiveInd:1,CompanyCd:1,DepartmentCd:1,DepartmentDesc:1,UserFirstName:1,UserId:1,UserLastName:1},UarEmployeeDirectreports:{EmpCompanyCd:1,EmpCompanyDesc:1,EmpEmail:1,EmpJobcode:1,EmpJobtitle:1,EmpStatus:1,EmployeeFirstName:1,EmployeeId:1,EmployeeLastName:1,IsSrDir:1,SupEmployeeId:1,SupFirstName:1,SupJobcode:1,SupJobtitle:1,SupLastName:1,SupLevel:1},UarSrDirAboveList:{DateEffective:1,DateExpires:1,Id:1,IsSrDirAbove:1,Jobtitle:1,RowChangeReason:1},UarUnknownReviewer:{Accesstype:1,AdActiveStatus:1,AdDescription:1,AdManager:1,Comments:1,CriticalFuction:1,Department:1,EmployeeId:1,Firstname:1,GroupDescription:1,HowFound:1,HrEmpStatus:1,Id:1,Lastname:1,Middlename:1,OfficeCode:1,ReviewerFirstname:1,ReviewerItCompliance:1,ReviewerLastname:1,SupEmployeeid:1,TaskId:1,TaskName:1,UserFullName:1,UserGroupId:1,UserGroupName:1,UserGroupRights:1,UserLoginName:1}},PCHODSNVS:{Agency:{ActiveInd:1,Addr1:1,Addr2:1,Addr3:1,AgencyCd:1,AgencyCdName:1,AgencyCreateDt:1,AgencyDefaultStatusInd:1,AgencyEmail:1,AgencyNameDesc:1,AgencyStatusCd:1,AgencyWebAddress:1,AgentLinkDesc:1,AgentNum:1,AllowBankInd:1,AllowGpInd:1,AllowPlatInd:1,AllowSdbdInd:1,ApolloInd:1,AttnDesc:1,AutoCxlInd:1,AutoEnvoInd:1,BankAccountBalAmt:1,BankAcct2Amt:1,BdmCd:1,BdmRepCd:1,CityName:1,CliaNum:1,Comment1Desc:1,Comment2Desc:1,CommissionPct:1,CompanyCd:1,ConsortRgnNum:1,ConsortiumAddedDt:1,ConsortiumCd:1,ConsortiumRegionAddedDt:1,ConsortiumRegionCd:1,CorpComDesc:1,CorporationInd:1,Country:1,CreditAgtInd:1,CurrencyCd:1,CurrentYearSalesAmt:1,EMemberDesc:1,FaxNum:1,FinHoldInd:1,FinalDaysQty:1,FirstBookingDt:1,GdsSysCd:1,GsaInd:1,GsaPriceLevelAmt:1,IataNum:1,InsDefaultCd:1,Key1:1,KeyAcctInd:1,L7daysNum:1,LastUpdated:1,LastYearKeyAcctCd:1,LastYearSalesAmt:1,MahanaClubInd:1,MasterAgencyInd:1,McActiveInd:1,NactaNum:1,NationalAcctInd:1,NvsKeyAcctInd:1,OfficeCd:1,Option1DueDaysQty:1,Option2DueDaysQty:1,OverVacSummInd:1,OverrideFinalDaysInd:1,OverrideOption1DaysInd:1,OverrideOption2DaysInd:1,OwnerCd:1,PaymentViaWireInd:1,Phone1Num:1,Phone2Num:1,PinClubInd:1,PreferredCommunicationCd:1,PreferredLanguageDesc:1,PreviousYrPaxQty:1,PreviousYrRevAmt:1,PromoAdInd:1,Prt1099Ind:1,PrtD1099Dt:1,PseudoCityCd:1,RequiredSecondaryAgentInd:1,RevLabelCd:1,SalesRegionCd:1,SecondaryCurrencyCd:1,SelfBillInd:1,SendCustInvInd:1,SiblingId:1,SsrRepCd:1,StateNm:1,TaxIdNum:1,TaxInfoReceivedDt:1,TaxPayer1099Name:1,UserInUseById:1,VacSummEmailDesc:1,VatId:1,Zip2Cd:1,ZipCd:1},ConsortiumExceptionList:{CombineInd:1,CompanyCd:1,ConsortiumExceptionListTk:1,ExcludeInd:1,ItemCd:1,ItemName:1,ItemType:1,ItemTypeTypeTk:1,LoadDt:1,NewItemName:1,NewItemType:1,NewItemTypeTypeTk:1},GetCruiseSegment:{CruiseSegmentCd:1,SegmentMarketName:1,ShipCd:1},GsaDistributionList:{AccountName:1,AgencyCd:1,CompanyCd:1,ContactName:1,Email:1,GsaDistributionListTk:1,LoadDt:1},ItemType:{Type:1,TypeTk:1},NtrBudget:{AccountPeriodNum:1,ApcdFinal:1,BudgetTk:1,CompanyCd:1,NtrBudget:1,NtrFinancialBudget:1,PdsBudgetTotal:1},NtrBudgetByChannel:{AccountingYear:1,BudgetbychannelTk:1,ChannelDesc:1,ChannelSummDesc:1,CompanyCd:1,NpdBudget:1,NtrBudget:1,PdsBudgetTotal:1},NtrFcst:{AccountPeriodNum:1,ApcdFinal:1,CompanyCd:1,FcstTk:1,NtrFcst:1,NtrFinancialBudget:1,PdsFcstTotal:1},NtrIntlDatelineCruises:{CompanyCd:1,CruiseCalendarDaysQty:1,CruiseDaysQty:1,CruiseIntlTk:1,CruiseSegmentCd:1,LoadDt:1},NtrPastMonthsActual:{ApcdFinal:1,AvailableNumOfCabins:1,BookedNumOfCabins:1,CompanyCd:1,CxRev:1,NtrFinal:1,PastmonthactualTk:1,PdsFinalTotal:1,StlyAvailableNumOfCabins:1,StlyBookedNumOfCabins:1,YearMonth:1},NtrRptComment:{AccountPeriodNum:1,Comment:1,CommentTk:1,CompanyCd:1,ReportDate:1},RevenueAdhocManagement:{AdhocDate:1,AdhocDateTk:1,CompanyCd:1,CubeId:1,DatabaseId:1,Key:1,LastProcessedDateTime:1,LastUpdatedBy:1,SqlJobName:1},SuppKeyAcctTarget:{AccountType:1,AgencyCd:1,CcfTargetFy1:1,CcfTargetFy2:1,CcfTargetFy3:1,CcfTargetFy4:1,CcfTargetFy5:1,CcfTargetQ1:1,CcfTargetQ12:1,CcfTargetQ13:1,CcfTargetQ14:1,CcfTargetQ15:1,CcfTargetQ2:1,CcfTargetQ22:1,CcfTargetQ23:1,CcfTargetQ24:1,CcfTargetQ25:1,CcfTargetQ3:1,CcfTargetQ32:1,CcfTargetQ33:1,CcfTargetQ34:1,CcfTargetQ35:1,CcfTargetQ4:1,CcfTargetQ42:1,CcfTargetQ43:1,CcfTargetQ44:1,CcfTargetQ45:1,CompanyCd:1,KeyAcctLink:1,KeyAcctTk:1,LoadDt:1,PrctTargetQ1:1,PrctTargetQ12:1,PrctTargetQ13:1,PrctTargetQ14:1,PrctTargetQ15:1,PrctTargetQ2:1,PrctTargetQ22:1,PrctTargetQ23:1,PrctTargetQ24:1,PrctTargetQ25:1,PrctTargetQ3:1,PrctTargetQ32:1,PrctTargetQ33:1,PrctTargetQ34:1,PrctTargetQ35:1,PrctTargetQ4:1,PrctTargetQ42:1,PrctTargetQ43:1,PrctTargetQ44:1,PrctTargetQ45:1,Year:1},TransferEstimateOciAmt:{CruiseSegmentCd:1,LoadDt:1,SegmentMarketName:1,ShipCd:1,TransferCostPerPax:1,TransferId:1}},SSISConfig:{DataFlow:{Cet:1,Description:1,Key:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,SourceDesc:1,Status:1,Target:1,TargetDesc:1},GpInterfaceLog:{CompanyCd:1,CruiseSegmentCd:1,ExpRevType:1,GpInterfaceInd:1,GpInterfacedDt:1,InterfaceLogId:1,JournalNum:1},INTConfigBase:{ConfigId:1,ConfigurationFilter:1,ConfiguredValue:1,ConfiguredValueType:1,EnvironmentDesc:1,EnvironmentEnum:1,ModifiedBy:1,ModifiedOn:1,PackagePath:1},MicrosDataFlow:{CeIndex:1,Cet:1,Description:1,Key:1,LseIndex:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,SourceDesc:1,Status:1,Target:1,TargetDesc:1},NclhShip:{CompanyCd:1,DepartmentCd:1,HasMerged:1,IsActive:1,LocationCd:1,ShipAbbreviation:1,ShipFullName:1,ShipId:1,ShipTk:1},PsInterfaceConfig:{ConfigId:1,ConfigSetting:1,ConfigValue:1,ConfigValueDate:1,DataType:1,ModifiedBy:1,ModifiedDate:1,SourceSystem:1},SsisConfigBase:{ConfigId:1,ConfigurationFilter:1,ConfiguredValue:1,ConfiguredValueType:1,EnvironmentDesc:1,EnvironmentEnum:1,ModifiedBy:1,ModifiedOn:1,PackagePath:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},CardViewMixin:{CardView:1,ListView:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},DraggableGroupingMixin:{CollapseAllButton:1,DropPlaceholder:1,ExpandAllButton:1},EmailClient:{BackButton:1,CCLabel:1,CancelButton:1,ComposeButton:1,DeleteButton:1,DeleteMessageConfirmation:1,DeleteMessageSuccess:1,DeleteNoSelectionWarning:1,DeleteSelectedConfirmation:1,DeleteSelectedSuccess:1,FolderNames:{drafts:1,inbox:1,junk:1,sent:1,trash:1},FoldersTitle:1,ForwardButton:1,ImapHost:1,ImapPassword:1,ImapPort:1,ImapUsername:1,LoginButton:1,LoginTitle:1,MoveMessageSuccess:1,MoveNoSelectionWarning:1,MoveSelectedSuccess:1,MoveToFolder:1,NewEmailDialogTitle:1,PageTitle:1,QuickSettings:1,RefreshButton:1,ReplyAllButton:1,ReplyButton:1,ReplyEmailDialogTitle:1,SearchPlaceholder:1,SendButton:1,SignoutButton:1,SmtpHost:1,SmtpPassword:1,SmtpPort:1,SmtpUsername:1,ToLabel:1,ToggleReadButton:1,ToggleSeenNoSelectionWarning:1},FavoriteViewsMixin:{DeleteButtonHint:1,DeleteSuccessMessage:1,EmptyNameError:1,FavoriteViews:1,LoadedViewMessage:1,SaveButton:1,SaveSuccessMessage:1,SaveView:1},HeaderFiltersMixin:{CancelButton:1,ClearButton:1,OkButton:1,Search:1,SelectAll:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1},WizardDialog:{BackButton:1,CancelMessage:1,FinishButton:1,NextButton:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

