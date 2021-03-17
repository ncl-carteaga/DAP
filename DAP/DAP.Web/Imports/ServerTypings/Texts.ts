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

            namespace FinReportPublishingSupp {
                export const CreatedByNam: string;
                export const CreatedTs: string;
                export const FinReportPublishingSurKey: string;
                export const ModifiedByNam: string;
                export const ModifiedTs: string;
                export const ProcessedDateTs: string;
                export const PublishCd: string;
                export const PublishCommentsTxt: string;
                export const PublishDat: string;
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
        }

        namespace NCLHDSAR {

            namespace Assignee {
                export const AssigneeId: string;
                export const FullName: string;
                export const IsActive: string;
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

            namespace OutboundAgent {
                export const AgentId: string;
                export const AgentLocationDescription: string;
                export const AgentLocationId: string;
                export const CompanyCd: string;
                export const CompanyName: string;
                export const Nm: string;
                export const NvsUserId: string;
                export const PrimaryBrand: string;
                export const StartInactiveDt: string;
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
        }

        namespace PCHODSNVS {

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

            namespace SuppKeyAcctTarget {
                export const AccountType: string;
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

    DAP['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{DataAuditLog:{FieldName:1,LogDate:1,LogId:1,LogType:1,NewValue:1,OldValue:1,RecordId:1,Tablename:1,UserDisplayName:1,UserId:1,Username:1},Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,ImpersonationToken:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TwoFactorAuth:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{BackgroundTaskLog:{LogId:1,Message:1,RunAt:1,Server:1,Status:1,TaskKey:1},Mail:{Bcc:1,Body:1,Cc:1,ErrorMessage:1,InsertDate:1,InsertUser:1,InsertUserId:1,LockExpiration:1,MailFrom:1,MailId:1,MailTo:1,Priority:1,ReplyTo:1,RetryCount:1,SentDate:1,Status:1,Subject:1,Uid:1},UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},DWSupport:{DistrictMasterSupp:{AreaCd:1,ChannelCd:1,CreatedByNam:1,CreatedTs:1,DistrictNbr:1,DistrictSurKey:1,GroupCd:1,GssChannelCd:1,ModifiedByNam:1,ModifiedTs:1,PrimaryCrmSupportNam:1,RmChannelCd:1,SalesChannelCd:1,SalesrepUserId:1,SecondaryCrmSupportNam:1},FinReportPublishingSupp:{CreatedByNam:1,CreatedTs:1,FinReportPublishingSurKey:1,ModifiedByNam:1,ModifiedTs:1,ProcessedDateTs:1,PublishCd:1,PublishCommentsTxt:1,PublishDat:1},GuestPreventDeparture:{BoardingDenialReasonDesc:1,CasinoIncidentNbrTxt:1,CreatedByNam:1,CreatedTs:1,FromReportNbr:1,GuestFirstNam:1,GuestLastNam:1,GuestPreventDepartureKey:1,IncidentReportedDat:1,InternalExternalCd:1,ModifiedByNam:1,ModifiedTs:1,NameTypeDesc:1,SirsNbrTxt:1,TypeCd:1},SailingMasterSupp:{AmenityPtsQty:1,BackToBackCd:1,CasinoCabinCapacityQty:1,CharterCd:1,CreatedByNam:1,CreatedTs:1,FareFeedIncludeCd:1,FsGrpAmenityAmt:1,InactiveCd:1,InterportCd:1,IsExtraordinaryCd:1,IsFreeOpenBarCd:1,IsHolidayCd:1,IsVoyageExceptionCd:1,ItineraryChangedDat:1,JonesActSailId:1,LatitudeCruiseCd:1,MainVoyageCd:1,MandateWeeksQty:1,ModifiedByNam:1,ModifiedTs:1,ObrSeasonCd:1,ObrSubTradeCd:1,ObrTradeCd:1,OnSaleDat:1,PackageTypeCd:1,ProductCd:1,ProductCdCreatedByName:1,ProductCdCreatedTs:1,ProductCdModifiedByName:1,ProductCdModifiedTs:1,ProductCdProductCodeId:1,ProductCdProductDesc:1,ProductCdProductSurKey:1,ProxyBudgetSailId:1,ProxyMetaWeightSailId:1,ProxySailId:1,RmsColorNameDesc:1,RmsForecastCd:1,RmsParentSail10Id:1,RmsParentSail11Id:1,RmsParentSail12Id:1,RmsParentSail13Id:1,RmsParentSail14Id:1,RmsParentSail15Id:1,RmsParentSail1Id:1,RmsParentSail2Id:1,RmsParentSail3Id:1,RmsParentSail4Id:1,RmsParentSail5Id:1,RmsParentSail6Id:1,RmsParentSail7Id:1,RmsParentSail8Id:1,RmsParentSail9Id:1,RmsRefLinkSailId:1,RmsSeasonCd:1,SailDat:1,SailId:1,SailSurKey:1,SeasonYearCd:1,ShipCd:1,ShipNbr:1,SlProductCd:1,SlProductCdCreatedByName:1,SlProductCdCreatedTs:1,SlProductCdModifiedByName:1,SlProductCdModifiedTs:1,SlProductCdSlProductDesc:1,SlProductCdSlProductSurKey:1,ValidVoyageCd:1,VoyageExceptionDesc:1}},NCLHDSAR:{Assignee:{AssigneeId:1,FullName:1,IsActive:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Request:{Address1:1,AttrCount:1,City:1,Country:1,CreatedDt:1,DaysLeft:1,DaysOld:1,DeadlineDt:1,Email:1,FirstName:1,FullName:1,Id:1,IdentityVerificationOptOuts:1,IdentityVerificationOtherRequests:1,LastName:1,LastUpdatedDt:1,LatitudesNum:1,LoadDt:1,NclYn:1,OceaniaMpCardNum:1,OceaniaYn:1,ProcessDt:1,RegentMpCardNum:1,RegentYn:1,ReqApprover:1,ReqDetails:1,ReqExtended:1,ReqStage:1,ReqStatus:1,RequestType:1,RequestTypeNum:1,RequestTypeNumDesc:1,SixthmanYn:1,SubjectType:1},RequestAttributes:{Addr1:1,Addr2:1,CityNm:1,CountryCd:1,Email1:1,ExtractDt:1,FirstNm:1,Id:1,LastNm:1,MiddleNm:1,ModifiedBy:1,ModifiedDate:1,OldAddr1:1,OldAddr2:1,OldCityNm:1,OldCountryCd:1,OldEmail:1,OldFirstNm:1,OldLastNm:1,OldMiddleNm:1,OldPostalCd:1,OldStateNm:1,PostalCd:1,RequestAttributeId:1,RequestValue:1,ResolvedDt:1,StateNm:1,SystemMasterId:1,SystemMasterSystemActiveYn:1,SystemMasterSystemDesc:1,SystemMasterSystemName:1,SystemMasterSystemTable:1},RequestStatus:{StatusDescription:1,StatusId:1,StatusOrder:1},RequestType:{Desc:1,Type:1},SwRequest:{ApiResponse:1,ApiResponseDepth:1,ApiResponseId:1,AssigneeFullName:1,AssigneeId:1,AssigneeIsActive:1,AttributeCount:1,ClientAddress:1,ClientEmailAddress:1,ClientFirstName:1,ClientGuestCategory:1,ClientIsRelatedtoHousehold:1,ClientLastName:1,ClientLatitudesNumber:1,ClientZipCode:1,DaysLeft:1,DaysOld:1,DeadlineDt:1,LastUpdatedDt:1,NoteList:1,RecordId:1,RecordTimeStamp:1,RequestType:1,StatusId:1,StatusStatusDescription:1,StatusStatusOrder:1,UpdatedBy:1},SwRequestAttributes:{ExtractDt:1,Id:1,LastUpdated:1,RequestAttributeId:1,RequestValue:1,ResolvedDt:1,SystemMasterId:1,SystemMasterSystemDesc:1},SystemMaster:{Id:1,SystemActiveYn:1,SystemDesc:1,SystemName:1,SystemTable:1}},NCLHODSMICROS:{DataFlow:{Cet:1,Description:1,Key:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,SourceDesc:1,Status:1,Target:1,TargetDesc:1}},NCLHODSSPENDVIS:{Amoslevel:{AccountId:1,Descr:1,FlexDim1Name:1,FlexDim2Name:1,FlexDim3Name:1,FlexDim4Name:1,IdNum:1,ModifiedBy:1,ModifiedDate:1},DataFlow:{Cet:1,Description:1,Key:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,Status:1,Target:1}},PCHDW:{DimInvoice:{AgentTk:1,AirCostSourceCd:1,AirParticipationInd:1,AirXferFeeAmt:1,AttnName:1,BonusSavingsCd:1,BonusSavingsDesc:1,CancelBookingStatusCd:1,CancelReason:1,CancellationDt:1,CancellationType:1,CenturionCd:1,CenturionInd:1,ChangeDt:1,ChannelCountryCd:1,ChannelCountryName:1,ChannelTk:1,Cinvoice1Num:1,Cinvoice2Num:1,Cinvoice3Num:1,Cinvoice4Num:1,Cinvoice5Num:1,Cinvoice6Num:1,CityName:1,ComboBookingInd:1,ComboLegQty:1,CompanyCd:1,CountryCd:1,CountryName:1,CreateDt:1,CruiseCommissionAmt:1,CruiseSvcMgmtCrNum:1,CruiseSvcMgmtId:1,CruiseTk:1,CurrencyCd:1,CurrencyDesc:1,CurrentLoyaltyLevelPax1:1,CurrentLoyaltyLevelPax2:1,CurrentPackageCd:1,DepositAmt:1,DepositDt:1,DirectBookingInd:1,DptrFlightClassCd:1,DptrFlightQty:1,DwPastGuest1Ind:1,DwPastGuest2Ind:1,DwPastGuestInd:1,FccDeferredInd:1,FinalPaymentDueDt:1,FirstConfirmDt:1,FirstPaymentDt:1,FutureDepositFlag:1,GdsSystemCd:1,GdsSystemDesc:1,HotelParticipationInd:1,InitialWaitlistInd:1,InstallmentPlanInd:1,InstallmentPlanNum:1,InvoiceNum:1,InvoiceTk:1,LandPackageParticipantInd:1,LandPackageParticipantQty:1,MpcardNumPax1:1,MpcardNumPax2:1,NonrevPassengerQty:1,NontaxPassengerQty:1,NvsPgInd:1,OciOfficeCd:1,OfficeCd:1,OfficeDesc:1,OnboardTypeDesc:1,OriginalConsortiumCd:1,OriginalConsortiumDesc:1,OriginalDeptCd:1,OriginalDeptName:1,OriginalUserActiveInd:1,OriginalUserId:1,OriginalUserName:1,OutboundReportingRegionCd:1,PackageCd:1,PaidClassCategoryDesc:1,PaidClassCd:1,PassengerQty:1,PastGuestInd:1,Pax1AirportHome1Cd:1,Pax1AirportRtrn1Cd:1,Pax1FirstFlightClass:1,Pax1FirstName:1,Pax1LastName:1,Pax1LoyaltyLevelNm:1,Pax1NvsPgInd:1,Pax1RtrnFlightClass:1,Pax2AirportHome1Cd:1,Pax2AirportRtrn1Cd:1,Pax2FirstFlightClass:1,Pax2FirstName:1,Pax2LastName:1,Pax2LoyaltyLevelNm:1,Pax2NvsPgInd:1,Pax2RtrnFlightClass:1,PaxAirClassCd:1,PlatinumCd:1,PlatinumInd:1,PostedInvoiceDt:1,PromoBonusComm:1,PromoCd:1,PromoCommAmt:1,PromoDesc:1,PromotionalAmenityCd:1,RtrnFlightClassCd:1,RtrnFlightQty:1,SalesSourceCd:1,SalesSourceDesc:1,StateCd:1,StatusCd:1,StatusDesc:1,UserId:1,UserName:1,WaitlistDt:1,ZipCd:1},ScheduledJob:{JobDescription:1,JobName:1,ScheduledJobId:1},VwSqlJobList:{DateCreated:1,DateModified:1,Enabled:1,JobDescription:1,Name:1}},PCHODS:{OutboundAgent:{AgentId:1,AgentLocationDescription:1,AgentLocationId:1,CompanyCd:1,CompanyName:1,Nm:1,NvsUserId:1,PrimaryBrand:1,StartInactiveDt:1},OutboundAgentLocation:{AgentLocationId:1,Description:1},OutboundCommissionBkGoal:{CommissionMonth:1,CommissionTk:1,CompanyCd:1,CompanyName:1,LoadDt:1,NumOfBkGoal:1},OutboundCommissionHist:{ActiveDt:1,CommissionHistId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionHistAu:{ActiveDt:1,CommissionHistAuId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionHistBr:{ActiveDt:1,CommissionHistBrId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionPeriod:{ClosedBy:1,ClosedDate:1,CurrentMonth:1,EndDate:1,IsOpen:1,OutboundCommissionPeriodId:1,PreviousMonth:1,StartDate:1},OutboundCompany:{Cd:1,Nm:1},OutboundMonthlyRptArchiveOverride:{NclId:1,OciAdjustdomestic:1,OciPrevMonthDomestic:1,OciPrevMonthInternational:1,OciPrevMonthRevDomestic:1,OciPrevMonthRevInternational:1,OriginalUserName:1,OutboundMonth:1,OutboundMonthlyRptArchiveId:1,SscAdjustdomestic:1,SscPrevMonthDomestic:1,SscPrevMonthInternational:1,SscPrevMonthRevDomestic:1,SscPrevMonthRevInternational:1},OutboundNvsUsers:{ActiveInd:1,CompanyCd:1,DepartmentCd:1,DepartmentDesc:1,UserFirstName:1,UserId:1,UserLastName:1}},PCHODSNVS:{NtrBudget:{AccountPeriodNum:1,ApcdFinal:1,BudgetTk:1,CompanyCd:1,NtrBudget:1,NtrFinancialBudget:1,PdsBudgetTotal:1},NtrBudgetByChannel:{AccountingYear:1,BudgetbychannelTk:1,ChannelDesc:1,ChannelSummDesc:1,CompanyCd:1,NpdBudget:1,NtrBudget:1,PdsBudgetTotal:1},NtrFcst:{AccountPeriodNum:1,ApcdFinal:1,CompanyCd:1,FcstTk:1,NtrFcst:1,NtrFinancialBudget:1,PdsFcstTotal:1},NtrIntlDatelineCruises:{CompanyCd:1,CruiseCalendarDaysQty:1,CruiseDaysQty:1,CruiseIntlTk:1,CruiseSegmentCd:1,LoadDt:1},NtrPastMonthsActual:{ApcdFinal:1,AvailableNumOfCabins:1,BookedNumOfCabins:1,CompanyCd:1,CxRev:1,NtrFinal:1,PastmonthactualTk:1,PdsFinalTotal:1,StlyAvailableNumOfCabins:1,StlyBookedNumOfCabins:1,YearMonth:1},NtrRptComment:{AccountPeriodNum:1,Comment:1,CommentTk:1,CompanyCd:1,ReportDate:1},SuppKeyAcctTarget:{AccountType:1,CcfTargetQ1:1,CcfTargetQ12:1,CcfTargetQ13:1,CcfTargetQ14:1,CcfTargetQ15:1,CcfTargetQ2:1,CcfTargetQ22:1,CcfTargetQ23:1,CcfTargetQ24:1,CcfTargetQ25:1,CcfTargetQ3:1,CcfTargetQ32:1,CcfTargetQ33:1,CcfTargetQ34:1,CcfTargetQ35:1,CcfTargetQ4:1,CcfTargetQ42:1,CcfTargetQ43:1,CcfTargetQ44:1,CcfTargetQ45:1,CompanyCd:1,KeyAcctLink:1,KeyAcctTk:1,LoadDt:1,PrctTargetQ1:1,PrctTargetQ12:1,PrctTargetQ13:1,PrctTargetQ14:1,PrctTargetQ15:1,PrctTargetQ2:1,PrctTargetQ22:1,PrctTargetQ23:1,PrctTargetQ24:1,PrctTargetQ25:1,PrctTargetQ3:1,PrctTargetQ32:1,PrctTargetQ33:1,PrctTargetQ34:1,PrctTargetQ35:1,PrctTargetQ4:1,PrctTargetQ42:1,PrctTargetQ43:1,PrctTargetQ44:1,PrctTargetQ45:1,Year:1}},SSISConfig:{DataFlow:{Cet:1,Description:1,Key:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,SourceDesc:1,Status:1,Target:1,TargetDesc:1},GpInterfaceLog:{CompanyCd:1,CruiseSegmentCd:1,ExpRevType:1,GpInterfaceInd:1,GpInterfacedDt:1,InterfaceLogId:1,JournalNum:1},INTConfigBase:{ConfigId:1,ConfigurationFilter:1,ConfiguredValue:1,ConfiguredValueType:1,EnvironmentDesc:1,EnvironmentEnum:1,ModifiedBy:1,ModifiedOn:1,PackagePath:1},MicrosDataFlow:{CeIndex:1,Cet:1,Description:1,Key:1,LseIndex:1,Lset:1,Name:1,Package:1,ProcessYn:1,Source:1,SourceDesc:1,Status:1,Target:1,TargetDesc:1},PsInterfaceConfig:{ConfigId:1,ConfigSetting:1,ConfigValue:1,ConfigValueDate:1,DataType:1,ModifiedBy:1,ModifiedDate:1,SourceSystem:1},SsisConfigBase:{ConfigId:1,ConfigurationFilter:1,ConfiguredValue:1,ConfiguredValueType:1,EnvironmentDesc:1,EnvironmentEnum:1,ModifiedBy:1,ModifiedOn:1,PackagePath:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},CardViewMixin:{CardView:1,ListView:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},DraggableGroupingMixin:{CollapseAllButton:1,DropPlaceholder:1,ExpandAllButton:1},EmailClient:{BackButton:1,CCLabel:1,CancelButton:1,ComposeButton:1,DeleteButton:1,DeleteMessageConfirmation:1,DeleteMessageSuccess:1,DeleteNoSelectionWarning:1,DeleteSelectedConfirmation:1,DeleteSelectedSuccess:1,FolderNames:{drafts:1,inbox:1,junk:1,sent:1,trash:1},FoldersTitle:1,ForwardButton:1,ImapHost:1,ImapPassword:1,ImapPort:1,ImapUsername:1,LoginButton:1,LoginTitle:1,MoveMessageSuccess:1,MoveNoSelectionWarning:1,MoveSelectedSuccess:1,MoveToFolder:1,NewEmailDialogTitle:1,PageTitle:1,QuickSettings:1,RefreshButton:1,ReplyAllButton:1,ReplyButton:1,ReplyEmailDialogTitle:1,SearchPlaceholder:1,SendButton:1,SignoutButton:1,SmtpHost:1,SmtpPassword:1,SmtpPort:1,SmtpUsername:1,ToLabel:1,ToggleReadButton:1,ToggleSeenNoSelectionWarning:1},FavoriteViewsMixin:{DeleteButtonHint:1,DeleteSuccessMessage:1,EmptyNameError:1,FavoriteViews:1,LoadedViewMessage:1,SaveButton:1,SaveSuccessMessage:1,SaveView:1},HeaderFiltersMixin:{CancelButton:1,ClearButton:1,OkButton:1,Search:1,SelectAll:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1},WizardDialog:{BackButton:1,CancelMessage:1,FinishButton:1,NextButton:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

