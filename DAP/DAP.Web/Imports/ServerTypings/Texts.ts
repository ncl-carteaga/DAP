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

        namespace NCLHDSAR {

            namespace Request {
                export const Address1: string;
                export const City: string;
                export const Count: string;
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
                export const OldAddr1: string;
                export const OldAddr2: string;
                export const OldCityNm: string;
                export const OldCountryCd: string;
                export const OldEmail: string;
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

            namespace RequestType {
                export const Desc: string;
                export const Type: string;
            }

            namespace SystemMaster {
                export const Id: string;
                export const SystemActiveYn: string;
                export const SystemDesc: string;
                export const SystemName: string;
                export const SystemTable: string;
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

            namespace VwOutboundMonthlyRptArchiveOverride {
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
        }

        namespace PCHODSNVS {

            namespace NtrIntlDatelineCruises {
                export const CompanyCd: string;
                export const CruiseCalendarDaysQty: string;
                export const CruiseDaysQty: string;
                export const CruiseIntlTk: string;
                export const CruiseSegmentCd: string;
                export const LoadDt: string;
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

    DAP['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{DataAuditLog:{FieldName:1,LogDate:1,LogId:1,LogType:1,NewValue:1,OldValue:1,RecordId:1,Tablename:1,UserDisplayName:1,UserId:1,Username:1},Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,ImpersonationToken:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TwoFactorAuth:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{BackgroundTaskLog:{LogId:1,Message:1,RunAt:1,Server:1,Status:1,TaskKey:1},Mail:{Bcc:1,Body:1,Cc:1,ErrorMessage:1,InsertDate:1,InsertUser:1,InsertUserId:1,LockExpiration:1,MailFrom:1,MailId:1,MailTo:1,Priority:1,ReplyTo:1,RetryCount:1,SentDate:1,Status:1,Subject:1,Uid:1},UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},NCLHDSAR:{Request:{Address1:1,City:1,Count:1,Country:1,CreatedDt:1,DaysLeft:1,DaysOld:1,DeadlineDt:1,Email:1,FirstName:1,FullName:1,Id:1,IdentityVerificationOptOuts:1,IdentityVerificationOtherRequests:1,LastName:1,LastUpdatedDt:1,LatitudesNum:1,LoadDt:1,NclYn:1,OceaniaMpCardNum:1,OceaniaYn:1,ProcessDt:1,RegentMpCardNum:1,RegentYn:1,ReqApprover:1,ReqDetails:1,ReqExtended:1,ReqStage:1,ReqStatus:1,RequestType:1,RequestTypeNum:1,RequestTypeNumDesc:1,SixthmanYn:1,SubjectType:1},RequestAttributes:{Addr1:1,Addr2:1,CityNm:1,CountryCd:1,Email1:1,ExtractDt:1,FirstNm:1,Id:1,LastNm:1,MiddleNm:1,OldAddr1:1,OldAddr2:1,OldCityNm:1,OldCountryCd:1,OldEmail:1,OldPostalCd:1,OldStateNm:1,PostalCd:1,RequestAttributeId:1,RequestValue:1,ResolvedDt:1,StateNm:1,SystemMasterId:1,SystemMasterSystemActiveYn:1,SystemMasterSystemDesc:1,SystemMasterSystemName:1,SystemMasterSystemTable:1},RequestType:{Desc:1,Type:1},SystemMaster:{Id:1,SystemActiveYn:1,SystemDesc:1,SystemName:1,SystemTable:1}},PCHODS:{OutboundAgent:{AgentId:1,AgentLocationDescription:1,AgentLocationId:1,CompanyCd:1,CompanyName:1,Nm:1,NvsUserId:1,PrimaryBrand:1,StartInactiveDt:1},OutboundAgentLocation:{AgentLocationId:1,Description:1},OutboundCommissionHist:{ActiveDt:1,CommissionHistId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionHistAu:{ActiveDt:1,CommissionHistAuId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionHistBr:{ActiveDt:1,CommissionHistBrId:1,CommissionId:1,CommissionRate:1,CompanyCd:1,CompanyName:1,HighNumBookings:1,InactiveDt:1,LowNumBookings:1},OutboundCommissionPeriod:{ClosedBy:1,ClosedDate:1,CurrentMonth:1,EndDate:1,IsOpen:1,OutboundCommissionPeriodId:1,PreviousMonth:1,StartDate:1},OutboundCompany:{Cd:1,Nm:1},OutboundMonthlyRptArchiveOverride:{NclId:1,OciAdjustdomestic:1,OciPrevMonthDomestic:1,OciPrevMonthInternational:1,OciPrevMonthRevDomestic:1,OciPrevMonthRevInternational:1,OriginalUserName:1,OutboundMonth:1,OutboundMonthlyRptArchiveId:1,SscAdjustdomestic:1,SscPrevMonthDomestic:1,SscPrevMonthInternational:1,SscPrevMonthRevDomestic:1,SscPrevMonthRevInternational:1},OutboundNvsUsers:{ActiveInd:1,CompanyCd:1,DepartmentCd:1,DepartmentDesc:1,UserFirstName:1,UserId:1,UserLastName:1},VwOutboundMonthlyRptArchiveOverride:{NclId:1,OciAdjustdomestic:1,OciPrevMonthDomestic:1,OciPrevMonthInternational:1,OciPrevMonthRevDomestic:1,OciPrevMonthRevInternational:1,OriginalUserName:1,OutboundMonth:1,OutboundMonthlyRptArchiveId:1,SscAdjustdomestic:1,SscPrevMonthDomestic:1,SscPrevMonthInternational:1,SscPrevMonthRevDomestic:1,SscPrevMonthRevInternational:1}},PCHODSNVS:{NtrIntlDatelineCruises:{CompanyCd:1,CruiseCalendarDaysQty:1,CruiseDaysQty:1,CruiseIntlTk:1,CruiseSegmentCd:1,LoadDt:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},CardViewMixin:{CardView:1,ListView:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},DraggableGroupingMixin:{CollapseAllButton:1,DropPlaceholder:1,ExpandAllButton:1},EmailClient:{BackButton:1,CCLabel:1,CancelButton:1,ComposeButton:1,DeleteButton:1,DeleteMessageConfirmation:1,DeleteMessageSuccess:1,DeleteNoSelectionWarning:1,DeleteSelectedConfirmation:1,DeleteSelectedSuccess:1,FolderNames:{drafts:1,inbox:1,junk:1,sent:1,trash:1},FoldersTitle:1,ForwardButton:1,ImapHost:1,ImapPassword:1,ImapPort:1,ImapUsername:1,LoginButton:1,LoginTitle:1,MoveMessageSuccess:1,MoveNoSelectionWarning:1,MoveSelectedSuccess:1,MoveToFolder:1,NewEmailDialogTitle:1,PageTitle:1,QuickSettings:1,RefreshButton:1,ReplyAllButton:1,ReplyButton:1,ReplyEmailDialogTitle:1,SearchPlaceholder:1,SendButton:1,SignoutButton:1,SmtpHost:1,SmtpPassword:1,SmtpPort:1,SmtpUsername:1,ToLabel:1,ToggleReadButton:1,ToggleSeenNoSelectionWarning:1},FavoriteViewsMixin:{DeleteButtonHint:1,DeleteSuccessMessage:1,EmptyNameError:1,FavoriteViews:1,LoadedViewMessage:1,SaveButton:1,SaveSuccessMessage:1,SaveView:1},HeaderFiltersMixin:{CancelButton:1,ClearButton:1,OkButton:1,Search:1,SelectAll:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1},WizardDialog:{BackButton:1,CancelMessage:1,FinishButton:1,NextButton:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

