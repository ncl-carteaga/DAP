using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class DataAuditLog
            {
                public const string DataAuditLogIndex = "~/Modules/Administration/DataAuditLog/DataAuditLogIndex.cshtml";
            }

            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class EmailClient
            {
                public const string EmailIndex = "~/Modules/Common/EmailClient/EmailIndex.cshtml";
            }

            public static class Mail
            {
                public const string MailIndex = "~/Modules/Common/Mail/MailIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class DWSupport
        {
            public static class FinReportPublishingSupp
            {
                public const string FinReportPublishingSuppIndex = "~/Modules/DWSupport/FinReportPublishingSupp/FinReportPublishingSuppIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class NCLHDSAR
        {
            public static class Assignee
            {
                public const string AssigneeIndex = "~/Modules/NCLHDSAR/Assignee/AssigneeIndex.cshtml";
            }

            public static class Request
            {
                public const string RequestIndex = "~/Modules/NCLHDSAR/Request/RequestIndex.cshtml";
            }

            public static class RequestAttributes
            {
                public const string RequestAttributesIndex = "~/Modules/NCLHDSAR/RequestAttributes/RequestAttributesIndex.cshtml";
            }

            public static class RequestStatus
            {
                public const string RequestStatusIndex = "~/Modules/NCLHDSAR/RequestStatus/RequestStatusIndex.cshtml";
            }

            public static class RequestType
            {
                public const string RequestTypeIndex = "~/Modules/NCLHDSAR/RequestType/RequestTypeIndex.cshtml";
            }

            public static class SwRequest
            {
                public const string SwRequestIndex = "~/Modules/NCLHDSAR/SwRequest/SwRequestIndex.cshtml";
            }

            public static class SwRequestAttributes
            {
                public const string SwRequestAttributesIndex = "~/Modules/NCLHDSAR/SwRequestAttributes/SwRequestAttributesIndex.cshtml";
            }

            public static class SystemMaster
            {
                public const string SystemMasterIndex = "~/Modules/NCLHDSAR/SystemMaster/SystemMasterIndex.cshtml";
            }

        }

        public static class NCLHODSSPENDVIS
        {
            public static class Amoslevel
            {
                public const string AmoslevelIndex = "~/Modules/NCLHODSSPENDVIS/Amoslevel/AmoslevelIndex.cshtml";
            }

        }

        public static class PCHODS
        {
            public static class OutboundAgent
            {
                public const string OutboundAgentIndex = "~/Modules/PCHODS/OutboundAgent/OutboundAgentIndex.cshtml";
            }

            public static class OutboundAgentLocation
            {
                public const string OutboundAgentLocationIndex = "~/Modules/PCHODS/OutboundAgentLocation/OutboundAgentLocationIndex.cshtml";
            }

            public static class OutboundCommissionHist
            {
                public const string OutboundCommissionHistIndex = "~/Modules/PCHODS/OutboundCommissionHist/OutboundCommissionHistIndex.cshtml";
            }

            public static class OutboundCommissionHistAu
            {
                public const string OutboundCommissionHistAuIndex = "~/Modules/PCHODS/OutboundCommissionHistAu/OutboundCommissionHistAuIndex.cshtml";
            }

            public static class OutboundCommissionHistBr
            {
                public const string OutboundCommissionHistBrIndex = "~/Modules/PCHODS/OutboundCommissionHistBr/OutboundCommissionHistBrIndex.cshtml";
            }

            public static class OutboundCommissionPeriod
            {
                public const string OutboundCommissionPeriodIndex = "~/Modules/PCHODS/OutboundCommissionPeriod/OutboundCommissionPeriodIndex.cshtml";
            }

            public static class OutboundMonthlyRptArchiveOverride
            {
                public const string OutboundMonthlyRptArchiveOverrideIndex = "~/Modules/PCHODS/OutboundMonthlyRptArchiveOverride/OutboundMonthlyRptArchiveOverrideIndex.cshtml";
            }

        }

        public static class PCHODSNVS
        {
            public static class NtrIntlDatelineCruises
            {
                public const string NtrIntlDatelineCruisesIndex = "~/Modules/PCHODSNVS/NtrIntlDatelineCruises/NtrIntlDatelineCruisesIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class SSISConfig
        {
            public static class DataFlow
            {
                public const string DataFlowIndex = "~/Modules/SSISConfig/DataFlow/DataFlowIndex.cshtml";
            }

            public static class GpInterfaceLog
            {
                public const string GpInterfaceLogIndex = "~/Modules/SSISConfig/GpInterfaceLog/GpInterfaceLogIndex.cshtml";
            }

            public static class INTConfigBase
            {
                public const string INTConfigBaseIndex = "~/Modules/SSISConfig/INTConfigBase/INTConfigBaseIndex.cshtml";
            }

            public static class PsInterfaceConfig
            {
                public const string PsInterfaceConfigIndex = "~/Modules/SSISConfig/PsInterfaceConfig/PsInterfaceConfigIndex.cshtml";
            }

            public static class SsisConfigBase
            {
                public const string SsisConfigBaseIndex = "~/Modules/SSISConfig/SsisConfigBase/SsisConfigBaseIndex.cshtml";
            }
        }
    }
}

