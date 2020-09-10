var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var DataAuditLogForm = /** @class */ (function (_super) {
            __extends(DataAuditLogForm, _super);
            function DataAuditLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DataAuditLogForm.init) {
                    DataAuditLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DateTimeEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.StringEditor;
                    Q.initFormType(DataAuditLogForm, [
                        'LogType', w0,
                        'LogDate', w1,
                        'UserId', w2,
                        'Tablename', w3,
                        'RecordId', w4,
                        'FieldName', w3,
                        'OldValue', w4,
                        'NewValue', w4
                    ]);
                }
                return _this;
            }
            DataAuditLogForm.formKey = 'Administration.DataAuditLog';
            return DataAuditLogForm;
        }(Serenity.PrefixedContext));
        Administration.DataAuditLogForm = DataAuditLogForm;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var DataAuditLogRow;
        (function (DataAuditLogRow) {
            DataAuditLogRow.idProperty = 'LogId';
            DataAuditLogRow.localTextPrefix = 'Administration.DataAuditLog';
        })(DataAuditLogRow = Administration.DataAuditLogRow || (Administration.DataAuditLogRow = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var DataAuditLogService;
        (function (DataAuditLogService) {
            DataAuditLogService.baseUrl = 'Administration/DataAuditLog';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DataAuditLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(DataAuditLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DataAuditLogService = Administration.DataAuditLogService || (Administration.DataAuditLogService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var DataAuditLogType;
        (function (DataAuditLogType) {
            DataAuditLogType[DataAuditLogType["Insert"] = 1] = "Insert";
            DataAuditLogType[DataAuditLogType["Update"] = 2] = "Update";
            DataAuditLogType[DataAuditLogType["Delete"] = 3] = "Delete";
        })(DataAuditLogType = Administration.DataAuditLogType || (Administration.DataAuditLogType = {}));
        Serenity.Decorators.registerEnumType(DataAuditLogType, 'DAP.Administration.DataAuditLogType');
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0,
                        'RoleKey', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var TwoFactorAuthType;
        (function (TwoFactorAuthType) {
            TwoFactorAuthType[TwoFactorAuthType["Email"] = 1] = "Email";
            TwoFactorAuthType[TwoFactorAuthType["SMS"] = 2] = "SMS";
        })(TwoFactorAuthType = Administration.TwoFactorAuthType || (Administration.TwoFactorAuthType = {}));
        Serenity.Decorators.registerEnumType(TwoFactorAuthType, 'DAP.Administration.TwoFactorAuthType');
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'MobilePhoneNumber', w0,
                        'MobilePhoneVerified', w2,
                        'TwoFactorAuth', w3,
                        'UserImage', w4,
                        'Password', w5,
                        'PasswordConfirm', w5,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var BackgroundTaskLogRow;
        (function (BackgroundTaskLogRow) {
            BackgroundTaskLogRow.idProperty = 'LogId';
            BackgroundTaskLogRow.nameProperty = 'TaskKey';
            BackgroundTaskLogRow.localTextPrefix = 'Common.BackgroundTaskLog';
        })(BackgroundTaskLogRow = Common.BackgroundTaskLogRow || (Common.BackgroundTaskLogRow = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var MailForm = /** @class */ (function (_super) {
            __extends(MailForm, _super);
            function MailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MailForm.init) {
                    MailForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlNoteContentEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DateTimeEditor;
                    Q.initFormType(MailForm, [
                        'Uid', w0,
                        'Subject', w0,
                        'Body', w1,
                        'MailFrom', w0,
                        'MailTo', w0,
                        'ReplyTo', w0,
                        'Cc', w0,
                        'Bcc', w0,
                        'Priority', w2,
                        'Status', w2,
                        'RetryCount', w3,
                        'LockExpiration', w4,
                        'ErrorMessage', w0,
                        'SentDate', w4,
                        'InsertUser', w3,
                        'InsertDate', w4
                    ]);
                }
                return _this;
            }
            MailForm.formKey = 'Common.Mail';
            return MailForm;
        }(Serenity.PrefixedContext));
        Common.MailForm = MailForm;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var MailQueuePriority;
        (function (MailQueuePriority) {
            MailQueuePriority[MailQueuePriority["High"] = 1] = "High";
            MailQueuePriority[MailQueuePriority["Medium"] = 2] = "Medium";
            MailQueuePriority[MailQueuePriority["Low"] = 3] = "Low";
        })(MailQueuePriority = Common.MailQueuePriority || (Common.MailQueuePriority = {}));
        Serenity.Decorators.registerEnumType(MailQueuePriority, 'DAP.Common.MailQueuePriority');
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var MailRow;
        (function (MailRow) {
            MailRow.idProperty = 'MailId';
            MailRow.nameProperty = 'Subject';
            MailRow.localTextPrefix = 'Common.Mail';
        })(MailRow = Common.MailRow || (Common.MailRow = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var MailService;
        (function (MailService) {
            MailService.baseUrl = 'Common/Mail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MailService[x] = function (r, s, o) {
                    return Q.serviceRequest(MailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MailService = Common.MailService || (Common.MailService = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var MailStatus;
        (function (MailStatus) {
            MailStatus[MailStatus["Failed"] = -1] = "Failed";
            MailStatus[MailStatus["InQueue"] = 0] = "InQueue";
            MailStatus[MailStatus["Sent"] = 1] = "Sent";
        })(MailStatus = Common.MailStatus || (Common.MailStatus = {}));
        Serenity.Decorators.registerEnumType(MailStatus, 'DAP.Common.MailStatus');
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinReportPublishingSuppForm = /** @class */ (function (_super) {
            __extends(FinReportPublishingSuppForm, _super);
            function FinReportPublishingSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FinReportPublishingSuppForm.init) {
                    FinReportPublishingSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(FinReportPublishingSuppForm, [
                        'PublishDat', w0,
                        'PublishCommentsTxt', w1,
                        'PublishCd', w2,
                        'CreatedTs', w0,
                        'CreatedByNam', w3,
                        'ModifiedTs', w0,
                        'ModifiedByNam', w3,
                        'ProcessedDateTs', w0
                    ]);
                }
                return _this;
            }
            FinReportPublishingSuppForm.formKey = 'DWSupport.FinReportPublishingSupp';
            return FinReportPublishingSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.FinReportPublishingSuppForm = FinReportPublishingSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinReportPublishingSuppRow;
        (function (FinReportPublishingSuppRow) {
            FinReportPublishingSuppRow.idProperty = 'FinReportPublishingSurKey';
            FinReportPublishingSuppRow.nameProperty = 'PublishCommentsTxt';
            FinReportPublishingSuppRow.localTextPrefix = 'DWSupport.FinReportPublishingSupp';
        })(FinReportPublishingSuppRow = DWSupport.FinReportPublishingSuppRow || (DWSupport.FinReportPublishingSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinReportPublishingSuppService;
        (function (FinReportPublishingSuppService) {
            FinReportPublishingSuppService.baseUrl = 'DWSupport/FinReportPublishingSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FinReportPublishingSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(FinReportPublishingSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FinReportPublishingSuppService = DWSupport.FinReportPublishingSuppService || (DWSupport.FinReportPublishingSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailComposeForm = /** @class */ (function (_super) {
            __extends(EmailComposeForm, _super);
            function EmailComposeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmailComposeForm.init) {
                    EmailComposeForm.init = true;
                    var s = Serenity;
                    var w0 = EmailClient.EmailSuggestEditor;
                    var w1 = Serenity.StringEditor;
                    var w2 = EmailClient.EmailContentEditor;
                    var w3 = Serenity.MultipleImageUploadEditor;
                    Q.initFormType(EmailComposeForm, [
                        'To', w0,
                        'Cc', w0,
                        'Bcc', w0,
                        'Subject', w1,
                        'BodyHtml', w2,
                        'Attachments', w3,
                        'ReplyToFolder', w1,
                        'ReplyToUniqueId', w1
                    ]);
                }
                return _this;
            }
            EmailComposeForm.formKey = 'Serenity.EmailClient.EmailCompose';
            return EmailComposeForm;
        }(Serenity.PrefixedContext));
        EmailClient.EmailComposeForm = EmailComposeForm;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailService;
        (function (EmailService) {
            EmailService.baseUrl = 'Common/Email';
            [
                'Login',
                'Signout',
                'UnreadCount',
                'Suggest',
                'Reply',
                'Compose',
                'DeleteMessages',
                'ToggleSeen',
                'Move',
                'ListMessages',
                'ListFolders',
                'RetrieveMessage'
            ].forEach(function (x) {
                EmailService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmailService = EmailClient.EmailService || (EmailClient.EmailService = {}));
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var AssigneeForm = /** @class */ (function (_super) {
            __extends(AssigneeForm, _super);
            function AssigneeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AssigneeForm.init) {
                    AssigneeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(AssigneeForm, [
                        'FullName', w0,
                        'IsActive', w1
                    ]);
                }
                return _this;
            }
            AssigneeForm.formKey = 'NCLHDSAR.Assignee';
            return AssigneeForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.AssigneeForm = AssigneeForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var AssigneeRow;
        (function (AssigneeRow) {
            AssigneeRow.idProperty = 'AssigneeId';
            AssigneeRow.nameProperty = 'FullName';
            AssigneeRow.localTextPrefix = 'NCLHDSAR.Assignee';
            AssigneeRow.lookupKey = 'NCLHDSAR.Assignee';
            function getLookup() {
                return Q.getLookup('NCLHDSAR.Assignee');
            }
            AssigneeRow.getLookup = getLookup;
        })(AssigneeRow = NCLHDSAR.AssigneeRow || (NCLHDSAR.AssigneeRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var AssigneeService;
        (function (AssigneeService) {
            AssigneeService.baseUrl = 'NCLHDSAR/Assignee';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssigneeService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssigneeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AssigneeService = NCLHDSAR.AssigneeService || (NCLHDSAR.AssigneeService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'NCLHDSAR.Note';
        })(NoteRow = NCLHDSAR.NoteRow || (NCLHDSAR.NoteRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestAttributesForm = /** @class */ (function (_super) {
            __extends(RequestAttributesForm, _super);
            function RequestAttributesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RequestAttributesForm.init) {
                    RequestAttributesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = NCLHDSAR.SystemMasterEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(RequestAttributesForm, [
                        'Id', w0,
                        'SystemMasterId', w1,
                        'RequestValue', w0,
                        'ResolvedDt', w2,
                        'ExtractDt', w2,
                        'FirstNm', w0,
                        'MiddleNm', w0,
                        'LastNm', w0,
                        'Addr1', w0,
                        'Addr2', w0,
                        'CityNm', w0,
                        'StateNm', w0,
                        'PostalCd', w0,
                        'CountryCd', w0,
                        'Email1', w0,
                        'OldFirstNm', w0,
                        'OldMiddleNm', w0,
                        'OldLastNm', w0,
                        'OldAddr1', w0,
                        'OldAddr2', w0,
                        'OldCityNm', w0,
                        'OldStateNm', w0,
                        'OldPostalCd', w0,
                        'OldCountryCd', w0,
                        'OldEmail', w0
                    ]);
                }
                return _this;
            }
            RequestAttributesForm.formKey = 'NCLHDSAR.RequestAttributes';
            return RequestAttributesForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.RequestAttributesForm = RequestAttributesForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestAttributesRow;
        (function (RequestAttributesRow) {
            RequestAttributesRow.idProperty = 'RequestAttributeId';
            RequestAttributesRow.nameProperty = 'Id';
            RequestAttributesRow.localTextPrefix = 'NCLHDSAR.RequestAttributes';
            RequestAttributesRow.lookupKey = 'NCLHDSAR.SystemMaster';
            function getLookup() {
                return Q.getLookup('NCLHDSAR.SystemMaster');
            }
            RequestAttributesRow.getLookup = getLookup;
        })(RequestAttributesRow = NCLHDSAR.RequestAttributesRow || (NCLHDSAR.RequestAttributesRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestAttributesService;
        (function (RequestAttributesService) {
            RequestAttributesService.baseUrl = 'NCLHDSAR/RequestAttributes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequestAttributesService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequestAttributesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RequestAttributesService = NCLHDSAR.RequestAttributesService || (NCLHDSAR.RequestAttributesService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestForm = /** @class */ (function (_super) {
            __extends(RequestForm, _super);
            function RequestForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RequestForm.init) {
                    RequestForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = NCLHDSAR.RequestTypeEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(RequestForm, [
                        'FirstName', w0,
                        'ReqStatus', w0,
                        'LastName', w0,
                        'ReqApprover', w0,
                        'RequestTypeNum', w1,
                        'CreatedDt', w2,
                        'SubjectType', w0,
                        'RequestType', w0,
                        'ReqDetails', w3,
                        'Email', w0,
                        'DeadlineDt', w2,
                        'ReqExtended', w4,
                        'LastUpdatedDt', w2,
                        'ReqStage', w0,
                        'Address1', w0,
                        'City', w0,
                        'Country', w0,
                        'NclYn', w0,
                        'OceaniaYn', w0,
                        'RegentYn', w0,
                        'LatitudesNum', w0,
                        'OceaniaMpCardNum', w0,
                        'RegentMpCardNum', w0,
                        'SixthmanYn', w0,
                        'IdentityVerificationOptOuts', w0,
                        'IdentityVerificationOtherRequests', w0,
                        'LoadDt', w2
                    ]);
                }
                return _this;
            }
            RequestForm.formKey = 'NCLHDSAR.Request';
            return RequestForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.RequestForm = RequestForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestRow;
        (function (RequestRow) {
            RequestRow.idProperty = 'Id';
            RequestRow.nameProperty = 'Id';
            RequestRow.localTextPrefix = 'NCLHDSAR.Request';
            RequestRow.lookupKey = 'NCLHDSAR.RequestType';
            function getLookup() {
                return Q.getLookup('NCLHDSAR.RequestType');
            }
            RequestRow.getLookup = getLookup;
        })(RequestRow = NCLHDSAR.RequestRow || (NCLHDSAR.RequestRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestService;
        (function (RequestService) {
            RequestService.baseUrl = 'NCLHDSAR/Request';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequestService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequestService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RequestService = NCLHDSAR.RequestService || (NCLHDSAR.RequestService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestStatusForm = /** @class */ (function (_super) {
            __extends(RequestStatusForm, _super);
            function RequestStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RequestStatusForm.init) {
                    RequestStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(RequestStatusForm, [
                        'StatusDescription', w0,
                        'StatusOrder', w1
                    ]);
                }
                return _this;
            }
            RequestStatusForm.formKey = 'NCLHDSAR.RequestStatus';
            return RequestStatusForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.RequestStatusForm = RequestStatusForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestStatusRow;
        (function (RequestStatusRow) {
            RequestStatusRow.idProperty = 'StatusId';
            RequestStatusRow.nameProperty = 'StatusDescription';
            RequestStatusRow.localTextPrefix = 'NCLHDSAR.RequestStatus';
            RequestStatusRow.lookupKey = 'NCLHDSAR.RequestStatus';
            function getLookup() {
                return Q.getLookup('NCLHDSAR.RequestStatus');
            }
            RequestStatusRow.getLookup = getLookup;
        })(RequestStatusRow = NCLHDSAR.RequestStatusRow || (NCLHDSAR.RequestStatusRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestStatusService;
        (function (RequestStatusService) {
            RequestStatusService.baseUrl = 'NCLHDSAR/RequestStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequestStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequestStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RequestStatusService = NCLHDSAR.RequestStatusService || (NCLHDSAR.RequestStatusService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestTypeForm = /** @class */ (function (_super) {
            __extends(RequestTypeForm, _super);
            function RequestTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RequestTypeForm.init) {
                    RequestTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RequestTypeForm, [
                        'Desc', w0
                    ]);
                }
                return _this;
            }
            RequestTypeForm.formKey = 'NCLHDSAR.RequestType';
            return RequestTypeForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.RequestTypeForm = RequestTypeForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestTypeRow;
        (function (RequestTypeRow) {
            RequestTypeRow.idProperty = 'Type';
            RequestTypeRow.nameProperty = 'Desc';
            RequestTypeRow.localTextPrefix = 'NCLHDSAR.RequestType';
            RequestTypeRow.lookupKey = 'NCLHDSAR.RequestType';
            function getLookup() {
                return Q.getLookup('NCLHDSAR.RequestType');
            }
            RequestTypeRow.getLookup = getLookup;
        })(RequestTypeRow = NCLHDSAR.RequestTypeRow || (NCLHDSAR.RequestTypeRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestTypeService;
        (function (RequestTypeService) {
            RequestTypeService.baseUrl = 'NCLHDSAR/RequestType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequestTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequestTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RequestTypeService = NCLHDSAR.RequestTypeService || (NCLHDSAR.RequestTypeService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestAttributesForm = /** @class */ (function (_super) {
            __extends(SwRequestAttributesForm, _super);
            function SwRequestAttributesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SwRequestAttributesForm.init) {
                    SwRequestAttributesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = NCLHDSAR.SystemMasterEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(SwRequestAttributesForm, [
                        'Id', w0,
                        'SystemMasterId', w1,
                        'RequestValue', w0,
                        'ResolvedDt', w2,
                        'ExtractDt', w2
                    ]);
                }
                return _this;
            }
            SwRequestAttributesForm.formKey = 'NCLHDSAR.SwRequestAttributes';
            return SwRequestAttributesForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.SwRequestAttributesForm = SwRequestAttributesForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestAttributesRow;
        (function (SwRequestAttributesRow) {
            SwRequestAttributesRow.idProperty = 'RequestAttributeId';
            SwRequestAttributesRow.nameProperty = 'RequestValue';
            SwRequestAttributesRow.localTextPrefix = 'NCLHDSAR.SwRequestAttributes';
        })(SwRequestAttributesRow = NCLHDSAR.SwRequestAttributesRow || (NCLHDSAR.SwRequestAttributesRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestAttributesService;
        (function (SwRequestAttributesService) {
            SwRequestAttributesService.baseUrl = 'NCLHDSAR/SwRequestAttributes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SwRequestAttributesService[x] = function (r, s, o) {
                    return Q.serviceRequest(SwRequestAttributesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SwRequestAttributesService = NCLHDSAR.SwRequestAttributesService || (NCLHDSAR.SwRequestAttributesService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestForm = /** @class */ (function (_super) {
            __extends(SwRequestForm, _super);
            function SwRequestForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SwRequestForm.init) {
                    SwRequestForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = NCLHDSAR.NotesEditor;
                    Q.initFormType(SwRequestForm, [
                        'ClientFirstName', w0,
                        'ClientLastName', w0,
                        'ClientEmailAddress', w0,
                        'ClientAddress', w0,
                        'ClientZipCode', w0,
                        'ClientLatitudesNumber', w0,
                        'ClientIsRelatedtoHousehold', w0,
                        'RequestType', w0,
                        'ClientGuestCategory', w0,
                        'RecordTimeStamp', w1,
                        'LastUpdatedDt', w1,
                        'UpdatedBy', w0,
                        'AssigneeId', w2,
                        'StatusId', w2,
                        'ApiResponseId', w0,
                        'ApiResponse', w0,
                        'ApiResponseDepth', w0,
                        'NoteList', w3
                    ]);
                }
                return _this;
            }
            SwRequestForm.formKey = 'NCLHDSAR.SwRequest';
            return SwRequestForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.SwRequestForm = SwRequestForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestRow;
        (function (SwRequestRow) {
            SwRequestRow.idProperty = 'RecordId';
            SwRequestRow.nameProperty = 'ClientLastName';
            SwRequestRow.localTextPrefix = 'NCLHDSAR.SwRequest';
        })(SwRequestRow = NCLHDSAR.SwRequestRow || (NCLHDSAR.SwRequestRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestService;
        (function (SwRequestService) {
            SwRequestService.baseUrl = 'NCLHDSAR/SwRequest';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SwRequestService[x] = function (r, s, o) {
                    return Q.serviceRequest(SwRequestService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SwRequestService = NCLHDSAR.SwRequestService || (NCLHDSAR.SwRequestService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SystemMasterForm = /** @class */ (function (_super) {
            __extends(SystemMasterForm, _super);
            function SystemMasterForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SystemMasterForm.init) {
                    SystemMasterForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SystemMasterForm, [
                        'SystemName', w0,
                        'SystemTable', w0,
                        'SystemDesc', w0,
                        'SystemActiveYn', w0
                    ]);
                }
                return _this;
            }
            SystemMasterForm.formKey = 'NCLHDSAR.SystemMaster';
            return SystemMasterForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.SystemMasterForm = SystemMasterForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SystemMasterRow;
        (function (SystemMasterRow) {
            SystemMasterRow.idProperty = 'Id';
            SystemMasterRow.nameProperty = 'SystemName';
            SystemMasterRow.localTextPrefix = 'NCLHDSAR.SystemMaster';
            SystemMasterRow.lookupKey = 'NCLHDSAR.SystemMaster';
            function getLookup() {
                return Q.getLookup('NCLHDSAR.SystemMaster');
            }
            SystemMasterRow.getLookup = getLookup;
        })(SystemMasterRow = NCLHDSAR.SystemMasterRow || (NCLHDSAR.SystemMasterRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SystemMasterService;
        (function (SystemMasterService) {
            SystemMasterService.baseUrl = 'NCLHDSAR/SystemMaster';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SystemMasterService[x] = function (r, s, o) {
                    return Q.serviceRequest(SystemMasterService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SystemMasterService = NCLHDSAR.SystemMasterService || (NCLHDSAR.SystemMasterService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSMICROS;
    (function (NCLHODSMICROS) {
        var DataFlowForm = /** @class */ (function (_super) {
            __extends(DataFlowForm, _super);
            function DataFlowForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DataFlowForm.formKey = 'NCLHODSMICROS.DataFlow';
            return DataFlowForm;
        }(Serenity.PrefixedContext));
        NCLHODSMICROS.DataFlowForm = DataFlowForm;
        [,
            ['Source', function () { return Serenity.StringEditor; }],
            ['Name', function () { return Serenity.StringEditor; }],
            ['ProcessYn', function () { return Serenity.StringEditor; }],
            ['Target', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['SourceDesc', function () { return Serenity.StringEditor; }],
            ['TargetDesc', function () { return Serenity.StringEditor; }],
            ['Package', function () { return Serenity.StringEditor; }],
            ['Status', function () { return Serenity.IntegerEditor; }],
            ['Lset', function () { return Serenity.DateEditor; }],
            ['Cet', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DataFlowForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(NCLHODSMICROS = DAP.NCLHODSMICROS || (DAP.NCLHODSMICROS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSMICROS;
    (function (NCLHODSMICROS) {
        var DataFlowRow;
        (function (DataFlowRow) {
            DataFlowRow.idProperty = 'Key';
            DataFlowRow.nameProperty = 'Source';
            DataFlowRow.localTextPrefix = 'NCLHODSMICROS.DataFlow';
            var Fields;
            (function (Fields) {
            })(Fields = DataFlowRow.Fields || (DataFlowRow.Fields = {}));
            [
                'Key',
                'Source',
                'Name',
                'ProcessYn',
                'Target',
                'Description',
                'SourceDesc',
                'TargetDesc',
                'Package',
                'Status',
                'Lset',
                'Cet'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DataFlowRow = NCLHODSMICROS.DataFlowRow || (NCLHODSMICROS.DataFlowRow = {}));
    })(NCLHODSMICROS = DAP.NCLHODSMICROS || (DAP.NCLHODSMICROS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSMICROS;
    (function (NCLHODSMICROS) {
        var DataFlowService;
        (function (DataFlowService) {
            DataFlowService.baseUrl = 'NCLHODSMICROS/DataFlow';
            var Methods;
            (function (Methods) {
            })(Methods = DataFlowService.Methods || (DataFlowService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DataFlowService[x] = function (r, s, o) {
                    return Q.serviceRequest(DataFlowService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DataFlowService.baseUrl + '/' + x;
            });
        })(DataFlowService = NCLHODSMICROS.DataFlowService || (NCLHODSMICROS.DataFlowService = {}));
    })(NCLHODSMICROS = DAP.NCLHODSMICROS || (DAP.NCLHODSMICROS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var AmoslevelForm = /** @class */ (function (_super) {
            __extends(AmoslevelForm, _super);
            function AmoslevelForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AmoslevelForm.init) {
                    AmoslevelForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AmoslevelForm, [
                        'AccountId', w0,
                        'Descr', w0,
                        'FlexDim1Name', w0,
                        'FlexDim2Name', w0,
                        'FlexDim3Name', w0,
                        'FlexDim4Name', w0
                    ]);
                }
                return _this;
            }
            AmoslevelForm.formKey = 'NCLHODSSPENDVIS.Amoslevel';
            return AmoslevelForm;
        }(Serenity.PrefixedContext));
        NCLHODSSPENDVIS.AmoslevelForm = AmoslevelForm;
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var AmoslevelRow;
        (function (AmoslevelRow) {
            AmoslevelRow.idProperty = 'IdNum';
            AmoslevelRow.nameProperty = 'AccountId';
            AmoslevelRow.localTextPrefix = 'NCLHODSSPENDVIS.Amoslevel';
        })(AmoslevelRow = NCLHODSSPENDVIS.AmoslevelRow || (NCLHODSSPENDVIS.AmoslevelRow = {}));
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var AmoslevelService;
        (function (AmoslevelService) {
            AmoslevelService.baseUrl = 'NCLHODSSPENDVIS/Amoslevel';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AmoslevelService[x] = function (r, s, o) {
                    return Q.serviceRequest(AmoslevelService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AmoslevelService = NCLHODSSPENDVIS.AmoslevelService || (NCLHODSSPENDVIS.AmoslevelService = {}));
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var DataFlowForm = /** @class */ (function (_super) {
            __extends(DataFlowForm, _super);
            function DataFlowForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DataFlowForm.formKey = 'NCLHODSSPENDVIS.DataFlow';
            return DataFlowForm;
        }(Serenity.PrefixedContext));
        NCLHODSSPENDVIS.DataFlowForm = DataFlowForm;
        [,
            ['Source', function () { return Serenity.StringEditor; }],
            ['Name', function () { return Serenity.StringEditor; }],
            ['ProcessYn', function () { return Serenity.StringEditor; }],
            ['Target', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['Package', function () { return Serenity.StringEditor; }],
            ['Status', function () { return Serenity.IntegerEditor; }],
            ['Lset', function () { return Serenity.DateEditor; }],
            ['Cet', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DataFlowForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var DataFlowRow;
        (function (DataFlowRow) {
            DataFlowRow.idProperty = 'Key';
            DataFlowRow.nameProperty = 'Source';
            DataFlowRow.localTextPrefix = 'NCLHODSSPENDVIS.DataFlow';
            var Fields;
            (function (Fields) {
            })(Fields = DataFlowRow.Fields || (DataFlowRow.Fields = {}));
            [
                'Key',
                'Source',
                'Name',
                'ProcessYn',
                'Target',
                'Description',
                'Package',
                'Status',
                'Lset',
                'Cet'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DataFlowRow = NCLHODSSPENDVIS.DataFlowRow || (NCLHODSSPENDVIS.DataFlowRow = {}));
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var DataFlowService;
        (function (DataFlowService) {
            DataFlowService.baseUrl = 'NCLHODSSPENDVIS/DataFlow';
            var Methods;
            (function (Methods) {
            })(Methods = DataFlowService.Methods || (DataFlowService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DataFlowService[x] = function (r, s, o) {
                    return Q.serviceRequest(DataFlowService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DataFlowService.baseUrl + '/' + x;
            });
        })(DataFlowService = NCLHODSSPENDVIS.DataFlowService || (NCLHODSSPENDVIS.DataFlowService = {}));
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimInvoiceForm = /** @class */ (function (_super) {
            __extends(DimInvoiceForm, _super);
            function DimInvoiceForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DimInvoiceForm.formKey = 'PCHDW.DimInvoice';
            return DimInvoiceForm;
        }(Serenity.PrefixedContext));
        PCHDW.DimInvoiceForm = DimInvoiceForm;
        [,
            ['InvoiceNum', function () { return Serenity.StringEditor; }],
            ['CompanyCd', function () { return Serenity.StringEditor; }],
            ['PassengerQty', function () { return Serenity.IntegerEditor; }],
            ['NonrevPassengerQty', function () { return Serenity.IntegerEditor; }],
            ['NontaxPassengerQty', function () { return Serenity.IntegerEditor; }],
            ['OfficeCd', function () { return Serenity.StringEditor; }],
            ['OfficeDesc', function () { return Serenity.StringEditor; }],
            ['CurrencyCd', function () { return Serenity.StringEditor; }],
            ['CurrencyDesc', function () { return Serenity.StringEditor; }],
            ['StatusCd', function () { return Serenity.StringEditor; }],
            ['StatusDesc', function () { return Serenity.StringEditor; }],
            ['ZipCd', function () { return Serenity.StringEditor; }],
            ['CityName', function () { return Serenity.StringEditor; }],
            ['StateCd', function () { return Serenity.StringEditor; }],
            ['CountryName', function () { return Serenity.StringEditor; }],
            ['CancellationDt', function () { return Serenity.DateEditor; }],
            ['BonusSavingsCd', function () { return Serenity.StringEditor; }],
            ['BonusSavingsDesc', function () { return Serenity.StringEditor; }],
            ['AirParticipationInd', function () { return Serenity.BooleanEditor; }],
            ['HotelParticipationInd', function () { return Serenity.BooleanEditor; }],
            ['PaxAirClassCd', function () { return Serenity.StringEditor; }],
            ['DepositDt', function () { return Serenity.DateEditor; }],
            ['DepositAmt', function () { return Serenity.StringEditor; }],
            ['UserId', function () { return Serenity.StringEditor; }],
            ['Pax1FirstName', function () { return Serenity.StringEditor; }],
            ['Pax1LastName', function () { return Serenity.StringEditor; }],
            ['Pax2FirstName', function () { return Serenity.StringEditor; }],
            ['Pax2LastName', function () { return Serenity.StringEditor; }],
            ['CruiseTk', function () { return Serenity.IntegerEditor; }],
            ['ChangeDt', function () { return Serenity.DateEditor; }],
            ['CreateDt', function () { return Serenity.DateEditor; }],
            ['FirstPaymentDt', function () { return Serenity.DateEditor; }],
            ['FinalPaymentDueDt', function () { return Serenity.DateEditor; }],
            ['InitialWaitlistInd', function () { return Serenity.BooleanEditor; }],
            ['CancelBookingStatusCd', function () { return Serenity.StringEditor; }],
            ['SalesSourceCd', function () { return Serenity.StringEditor; }],
            ['SalesSourceDesc', function () { return Serenity.StringEditor; }],
            ['OriginalConsortiumCd', function () { return Serenity.StringEditor; }],
            ['OriginalConsortiumDesc', function () { return Serenity.StringEditor; }],
            ['UserName', function () { return Serenity.StringEditor; }],
            ['OriginalUserId', function () { return Serenity.StringEditor; }],
            ['OriginalUserName', function () { return Serenity.StringEditor; }],
            ['OriginalDeptCd', function () { return Serenity.StringEditor; }],
            ['OriginalDeptName', function () { return Serenity.StringEditor; }],
            ['OriginalUserActiveInd', function () { return Serenity.StringEditor; }],
            ['WaitlistDt', function () { return Serenity.DateEditor; }],
            ['FirstConfirmDt', function () { return Serenity.DateEditor; }],
            ['PastGuestInd', function () { return Serenity.IntegerEditor; }],
            ['DirectBookingInd', function () { return Serenity.StringEditor; }],
            ['AttnName', function () { return Serenity.StringEditor; }],
            ['ComboBookingInd', function () { return Serenity.StringEditor; }],
            ['OnboardTypeDesc', function () { return Serenity.StringEditor; }],
            ['CruiseSvcMgmtCrNum', function () { return Serenity.StringEditor; }],
            ['PromoCd', function () { return Serenity.StringEditor; }],
            ['GdsSystemCd', function () { return Serenity.StringEditor; }],
            ['GdsSystemDesc', function () { return Serenity.StringEditor; }],
            ['PromoDesc', function () { return Serenity.StringEditor; }],
            ['CancellationType', function () { return Serenity.StringEditor; }],
            ['ChannelTk', function () { return Serenity.IntegerEditor; }],
            ['PromoBonusComm', function () { return Serenity.StringEditor; }],
            ['PromoCommAmt', function () { return Serenity.DecimalEditor; }],
            ['ComboLegQty', function () { return Serenity.DecimalEditor; }],
            ['CancelReason', function () { return Serenity.StringEditor; }],
            ['PaidClassCd', function () { return Serenity.StringEditor; }],
            ['PaidClassCategoryDesc', function () { return Serenity.StringEditor; }],
            ['OciOfficeCd', function () { return Serenity.StringEditor; }],
            ['AirXferFeeAmt', function () { return Serenity.DecimalEditor; }],
            ['CountryCd', function () { return Serenity.StringEditor; }],
            ['FutureDepositFlag', function () { return Serenity.StringEditor; }],
            ['PromotionalAmenityCd', function () { return Serenity.StringEditor; }],
            ['CruiseCommissionAmt', function () { return Serenity.DecimalEditor; }],
            ['PostedInvoiceDt', function () { return Serenity.DateEditor; }],
            ['AgentTk', function () { return Serenity.IntegerEditor; }],
            ['Cinvoice1Num', function () { return Serenity.StringEditor; }],
            ['Cinvoice2Num', function () { return Serenity.StringEditor; }],
            ['Cinvoice3Num', function () { return Serenity.StringEditor; }],
            ['Cinvoice4Num', function () { return Serenity.StringEditor; }],
            ['Cinvoice5Num', function () { return Serenity.StringEditor; }],
            ['Cinvoice6Num', function () { return Serenity.StringEditor; }],
            ['PackageCd', function () { return Serenity.StringEditor; }],
            ['LandPackageParticipantQty', function () { return Serenity.IntegerEditor; }],
            ['LandPackageParticipantInd', function () { return Serenity.StringEditor; }],
            ['DptrFlightQty', function () { return Serenity.IntegerEditor; }],
            ['RtrnFlightQty', function () { return Serenity.IntegerEditor; }],
            ['DptrFlightClassCd', function () { return Serenity.StringEditor; }],
            ['RtrnFlightClassCd', function () { return Serenity.StringEditor; }],
            ['AirCostSourceCd', function () { return Serenity.StringEditor; }],
            ['ChannelCountryCd', function () { return Serenity.StringEditor; }],
            ['ChannelCountryName', function () { return Serenity.StringEditor; }],
            ['Pax1AirportHome1Cd', function () { return Serenity.StringEditor; }],
            ['Pax1AirportRtrn1Cd', function () { return Serenity.StringEditor; }],
            ['Pax1FirstFlightClass', function () { return Serenity.StringEditor; }],
            ['Pax1RtrnFlightClass', function () { return Serenity.StringEditor; }],
            ['Pax2AirportHome1Cd', function () { return Serenity.StringEditor; }],
            ['Pax2AirportRtrn1Cd', function () { return Serenity.StringEditor; }],
            ['Pax2FirstFlightClass', function () { return Serenity.StringEditor; }],
            ['Pax2RtrnFlightClass', function () { return Serenity.StringEditor; }],
            ['Pax1LoyaltyLevelNm', function () { return Serenity.StringEditor; }],
            ['Pax2LoyaltyLevelNm', function () { return Serenity.StringEditor; }],
            ['InstallmentPlanInd', function () { return Serenity.StringEditor; }],
            ['InstallmentPlanNum', function () { return Serenity.IntegerEditor; }],
            ['CruiseSvcMgmtId', function () { return Serenity.StringEditor; }],
            ['OutboundReportingRegionCd', function () { return Serenity.StringEditor; }],
            ['CenturionCd', function () { return Serenity.StringEditor; }],
            ['CenturionInd', function () { return Serenity.StringEditor; }],
            ['PlatinumCd', function () { return Serenity.StringEditor; }],
            ['PlatinumInd', function () { return Serenity.StringEditor; }],
            ['DwPastGuestInd', function () { return Serenity.StringEditor; }],
            ['DwPastGuest1Ind', function () { return Serenity.StringEditor; }],
            ['DwPastGuest2Ind', function () { return Serenity.StringEditor; }],
            ['Pax1NvsPgInd', function () { return Serenity.StringEditor; }],
            ['Pax2NvsPgInd', function () { return Serenity.StringEditor; }],
            ['NvsPgInd', function () { return Serenity.StringEditor; }],
            ['CurrentPackageCd', function () { return Serenity.StringEditor; }],
            ['MpcardNumPax1', function () { return Serenity.StringEditor; }],
            ['CurrentLoyaltyLevelPax1', function () { return Serenity.StringEditor; }],
            ['MpcardNumPax2', function () { return Serenity.StringEditor; }],
            ['CurrentLoyaltyLevelPax2', function () { return Serenity.StringEditor; }],
            ['FccDeferredInd', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DimInvoiceForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimInvoiceRow;
        (function (DimInvoiceRow) {
            DimInvoiceRow.idProperty = 'InvoiceTk';
            DimInvoiceRow.nameProperty = 'InvoiceNum';
            DimInvoiceRow.localTextPrefix = 'PCHDW.DimInvoice';
            var Fields;
            (function (Fields) {
            })(Fields = DimInvoiceRow.Fields || (DimInvoiceRow.Fields = {}));
            [
                'InvoiceTk',
                'InvoiceNum',
                'CompanyCd',
                'PassengerQty',
                'NonrevPassengerQty',
                'NontaxPassengerQty',
                'OfficeCd',
                'OfficeDesc',
                'CurrencyCd',
                'CurrencyDesc',
                'StatusCd',
                'StatusDesc',
                'ZipCd',
                'CityName',
                'StateCd',
                'CountryName',
                'CancellationDt',
                'BonusSavingsCd',
                'BonusSavingsDesc',
                'AirParticipationInd',
                'HotelParticipationInd',
                'PaxAirClassCd',
                'DepositDt',
                'DepositAmt',
                'UserId',
                'Pax1FirstName',
                'Pax1LastName',
                'Pax2FirstName',
                'Pax2LastName',
                'CruiseTk',
                'ChangeDt',
                'CreateDt',
                'FirstPaymentDt',
                'FinalPaymentDueDt',
                'InitialWaitlistInd',
                'CancelBookingStatusCd',
                'SalesSourceCd',
                'SalesSourceDesc',
                'OriginalConsortiumCd',
                'OriginalConsortiumDesc',
                'UserName',
                'OriginalUserId',
                'OriginalUserName',
                'OriginalDeptCd',
                'OriginalDeptName',
                'OriginalUserActiveInd',
                'WaitlistDt',
                'FirstConfirmDt',
                'PastGuestInd',
                'DirectBookingInd',
                'AttnName',
                'ComboBookingInd',
                'OnboardTypeDesc',
                'CruiseSvcMgmtCrNum',
                'PromoCd',
                'GdsSystemCd',
                'GdsSystemDesc',
                'PromoDesc',
                'CancellationType',
                'ChannelTk',
                'PromoBonusComm',
                'PromoCommAmt',
                'ComboLegQty',
                'CancelReason',
                'PaidClassCd',
                'PaidClassCategoryDesc',
                'OciOfficeCd',
                'AirXferFeeAmt',
                'CountryCd',
                'FutureDepositFlag',
                'PromotionalAmenityCd',
                'CruiseCommissionAmt',
                'PostedInvoiceDt',
                'AgentTk',
                'Cinvoice1Num',
                'Cinvoice2Num',
                'Cinvoice3Num',
                'Cinvoice4Num',
                'Cinvoice5Num',
                'Cinvoice6Num',
                'PackageCd',
                'LandPackageParticipantQty',
                'LandPackageParticipantInd',
                'DptrFlightQty',
                'RtrnFlightQty',
                'DptrFlightClassCd',
                'RtrnFlightClassCd',
                'AirCostSourceCd',
                'ChannelCountryCd',
                'ChannelCountryName',
                'Pax1AirportHome1Cd',
                'Pax1AirportRtrn1Cd',
                'Pax1FirstFlightClass',
                'Pax1RtrnFlightClass',
                'Pax2AirportHome1Cd',
                'Pax2AirportRtrn1Cd',
                'Pax2FirstFlightClass',
                'Pax2RtrnFlightClass',
                'Pax1LoyaltyLevelNm',
                'Pax2LoyaltyLevelNm',
                'InstallmentPlanInd',
                'InstallmentPlanNum',
                'CruiseSvcMgmtId',
                'OutboundReportingRegionCd',
                'CenturionCd',
                'CenturionInd',
                'PlatinumCd',
                'PlatinumInd',
                'DwPastGuestInd',
                'DwPastGuest1Ind',
                'DwPastGuest2Ind',
                'Pax1NvsPgInd',
                'Pax2NvsPgInd',
                'NvsPgInd',
                'CurrentPackageCd',
                'MpcardNumPax1',
                'CurrentLoyaltyLevelPax1',
                'MpcardNumPax2',
                'CurrentLoyaltyLevelPax2',
                'FccDeferredInd'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DimInvoiceRow = PCHDW.DimInvoiceRow || (PCHDW.DimInvoiceRow = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimInvoiceService;
        (function (DimInvoiceService) {
            DimInvoiceService.baseUrl = 'PCHDW/DimInvoice';
            var Methods;
            (function (Methods) {
            })(Methods = DimInvoiceService.Methods || (DimInvoiceService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DimInvoiceService[x] = function (r, s, o) {
                    return Q.serviceRequest(DimInvoiceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DimInvoiceService.baseUrl + '/' + x;
            });
        })(DimInvoiceService = PCHDW.DimInvoiceService || (PCHDW.DimInvoiceService = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentForm = /** @class */ (function (_super) {
            __extends(OutboundAgentForm, _super);
            function OutboundAgentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundAgentForm.init) {
                    OutboundAgentForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODS.UsersEditor;
                    var w1 = PCHODS.CompanyEditor;
                    var w2 = PCHODS.OutboundAgentLocationEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(OutboundAgentForm, [
                        'NvsUserId', w0,
                        'CompanyCd', w1,
                        'PrimaryBrand', w1,
                        'AgentLocationId', w2,
                        'StartInactiveDt', w3
                    ]);
                }
                return _this;
            }
            OutboundAgentForm.formKey = 'PCHODS.OutboundAgent';
            return OutboundAgentForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundAgentForm = OutboundAgentForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentLocationForm = /** @class */ (function (_super) {
            __extends(OutboundAgentLocationForm, _super);
            function OutboundAgentLocationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundAgentLocationForm.init) {
                    OutboundAgentLocationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OutboundAgentLocationForm, [
                        'Description', w0
                    ]);
                }
                return _this;
            }
            OutboundAgentLocationForm.formKey = 'PCHODS.OutboundAgentLocation';
            return OutboundAgentLocationForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundAgentLocationForm = OutboundAgentLocationForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentLocationRow;
        (function (OutboundAgentLocationRow) {
            OutboundAgentLocationRow.idProperty = 'AgentLocationId';
            OutboundAgentLocationRow.nameProperty = 'Description';
            OutboundAgentLocationRow.localTextPrefix = 'PCHODS.OutboundAgentLocation';
            OutboundAgentLocationRow.lookupKey = 'PCHODS.OutboundAgentLocation';
            function getLookup() {
                return Q.getLookup('PCHODS.OutboundAgentLocation');
            }
            OutboundAgentLocationRow.getLookup = getLookup;
        })(OutboundAgentLocationRow = PCHODS.OutboundAgentLocationRow || (PCHODS.OutboundAgentLocationRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentLocationService;
        (function (OutboundAgentLocationService) {
            OutboundAgentLocationService.baseUrl = 'PCHODS/OutboundAgentLocation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundAgentLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundAgentLocationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundAgentLocationService = PCHODS.OutboundAgentLocationService || (PCHODS.OutboundAgentLocationService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentRow;
        (function (OutboundAgentRow) {
            OutboundAgentRow.idProperty = 'AgentId';
            OutboundAgentRow.nameProperty = 'NvsUserId';
            OutboundAgentRow.localTextPrefix = 'PCHODS.OutboundAgent';
            OutboundAgentRow.lookupKey = 'PCHODS.OutboundAgentLocation';
            function getLookup() {
                return Q.getLookup('PCHODS.OutboundAgentLocation');
            }
            OutboundAgentRow.getLookup = getLookup;
        })(OutboundAgentRow = PCHODS.OutboundAgentRow || (PCHODS.OutboundAgentRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentService;
        (function (OutboundAgentService) {
            OutboundAgentService.baseUrl = 'PCHODS/OutboundAgent';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundAgentService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundAgentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundAgentService = PCHODS.OutboundAgentService || (PCHODS.OutboundAgentService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistAuForm = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistAuForm, _super);
            function OutboundCommissionHistAuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundCommissionHistAuForm.init) {
                    OutboundCommissionHistAuForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(OutboundCommissionHistAuForm, [
                        'CommissionId', w0,
                        'CompanyCd', w0,
                        'LowNumBookings', w1,
                        'HighNumBookings', w1,
                        'CommissionRate', w1,
                        'ActiveDt', w2,
                        'InactiveDt', w2
                    ]);
                }
                return _this;
            }
            OutboundCommissionHistAuForm.formKey = 'PCHODS.OutboundCommissionHistAu';
            return OutboundCommissionHistAuForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundCommissionHistAuForm = OutboundCommissionHistAuForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistAuRow;
        (function (OutboundCommissionHistAuRow) {
            OutboundCommissionHistAuRow.idProperty = 'CommissionHistAuId';
            OutboundCommissionHistAuRow.nameProperty = 'CommissionId';
            OutboundCommissionHistAuRow.localTextPrefix = 'PCHODS.OutboundCommissionHistAu';
        })(OutboundCommissionHistAuRow = PCHODS.OutboundCommissionHistAuRow || (PCHODS.OutboundCommissionHistAuRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistAuService;
        (function (OutboundCommissionHistAuService) {
            OutboundCommissionHistAuService.baseUrl = 'PCHODS/OutboundCommissionHistAu';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundCommissionHistAuService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundCommissionHistAuService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundCommissionHistAuService = PCHODS.OutboundCommissionHistAuService || (PCHODS.OutboundCommissionHistAuService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistBrForm = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistBrForm, _super);
            function OutboundCommissionHistBrForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundCommissionHistBrForm.init) {
                    OutboundCommissionHistBrForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(OutboundCommissionHistBrForm, [
                        'CommissionId', w0,
                        'CompanyCd', w0,
                        'LowNumBookings', w1,
                        'HighNumBookings', w1,
                        'CommissionRate', w1,
                        'ActiveDt', w2,
                        'InactiveDt', w2
                    ]);
                }
                return _this;
            }
            OutboundCommissionHistBrForm.formKey = 'PCHODS.OutboundCommissionHistBr';
            return OutboundCommissionHistBrForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundCommissionHistBrForm = OutboundCommissionHistBrForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistBrRow;
        (function (OutboundCommissionHistBrRow) {
            OutboundCommissionHistBrRow.idProperty = 'CommissionHistBrId';
            OutboundCommissionHistBrRow.nameProperty = 'CommissionId';
            OutboundCommissionHistBrRow.localTextPrefix = 'PCHODS.OutboundCommissionHistBr';
        })(OutboundCommissionHistBrRow = PCHODS.OutboundCommissionHistBrRow || (PCHODS.OutboundCommissionHistBrRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistBrService;
        (function (OutboundCommissionHistBrService) {
            OutboundCommissionHistBrService.baseUrl = 'PCHODS/OutboundCommissionHistBr';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundCommissionHistBrService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundCommissionHistBrService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundCommissionHistBrService = PCHODS.OutboundCommissionHistBrService || (PCHODS.OutboundCommissionHistBrService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistForm = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistForm, _super);
            function OutboundCommissionHistForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundCommissionHistForm.init) {
                    OutboundCommissionHistForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = PCHODS.CompanyEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(OutboundCommissionHistForm, [
                        'CommissionId', w0,
                        'CompanyCd', w1,
                        'LowNumBookings', w2,
                        'HighNumBookings', w2,
                        'CommissionRate', w2,
                        'ActiveDt', w3,
                        'InactiveDt', w3
                    ]);
                }
                return _this;
            }
            OutboundCommissionHistForm.formKey = 'PCHODS.OutboundCommissionHist';
            return OutboundCommissionHistForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundCommissionHistForm = OutboundCommissionHistForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistRow;
        (function (OutboundCommissionHistRow) {
            OutboundCommissionHistRow.idProperty = 'CommissionHistId';
            OutboundCommissionHistRow.nameProperty = 'CommissionId';
            OutboundCommissionHistRow.localTextPrefix = 'PCHODS.OutboundCommissionHist';
        })(OutboundCommissionHistRow = PCHODS.OutboundCommissionHistRow || (PCHODS.OutboundCommissionHistRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistService;
        (function (OutboundCommissionHistService) {
            OutboundCommissionHistService.baseUrl = 'PCHODS/OutboundCommissionHist';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ListByCompany'
            ].forEach(function (x) {
                OutboundCommissionHistService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundCommissionHistService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundCommissionHistService = PCHODS.OutboundCommissionHistService || (PCHODS.OutboundCommissionHistService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionPeriodForm = /** @class */ (function (_super) {
            __extends(OutboundCommissionPeriodForm, _super);
            function OutboundCommissionPeriodForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundCommissionPeriodForm.init) {
                    OutboundCommissionPeriodForm.init = true;
                    var s = Serenity;
                    var w0 = s.BooleanEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(OutboundCommissionPeriodForm, [
                        'IsOpen', w0,
                        'StartDate', w1,
                        'EndDate', w1,
                        'CurrentMonth', w1,
                        'PreviousMonth', w1
                    ]);
                }
                return _this;
            }
            OutboundCommissionPeriodForm.formKey = 'PCHODS.OutboundCommissionPeriod';
            return OutboundCommissionPeriodForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundCommissionPeriodForm = OutboundCommissionPeriodForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionPeriodRow;
        (function (OutboundCommissionPeriodRow) {
            OutboundCommissionPeriodRow.idProperty = 'OutboundCommissionPeriodId';
            OutboundCommissionPeriodRow.nameProperty = 'ClosedBy';
            OutboundCommissionPeriodRow.localTextPrefix = 'PCHODS.OutboundCommissionPeriod';
        })(OutboundCommissionPeriodRow = PCHODS.OutboundCommissionPeriodRow || (PCHODS.OutboundCommissionPeriodRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionPeriodService;
        (function (OutboundCommissionPeriodService) {
            OutboundCommissionPeriodService.baseUrl = 'PCHODS/OutboundCommissionPeriod';
            [
                'Create',
                'CreateWithSP',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundCommissionPeriodService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundCommissionPeriodService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundCommissionPeriodService = PCHODS.OutboundCommissionPeriodService || (PCHODS.OutboundCommissionPeriodService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCompanyRow;
        (function (OutboundCompanyRow) {
            OutboundCompanyRow.idProperty = 'Cd';
            OutboundCompanyRow.nameProperty = 'Cd';
            OutboundCompanyRow.localTextPrefix = 'PCHODS.OutboundCompany';
            OutboundCompanyRow.lookupKey = 'PCHODS.Outbound_Company';
            function getLookup() {
                return Q.getLookup('PCHODS.Outbound_Company');
            }
            OutboundCompanyRow.getLookup = getLookup;
        })(OutboundCompanyRow = PCHODS.OutboundCompanyRow || (PCHODS.OutboundCompanyRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCompanyService;
        (function (OutboundCompanyService) {
            OutboundCompanyService.baseUrl = 'PCHODS/OutboundCompany';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundCompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundCompanyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundCompanyService = PCHODS.OutboundCompanyService || (PCHODS.OutboundCompanyService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundMonthlyRptArchiveOverrideForm = /** @class */ (function (_super) {
            __extends(OutboundMonthlyRptArchiveOverrideForm, _super);
            function OutboundMonthlyRptArchiveOverrideForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundMonthlyRptArchiveOverrideForm.init) {
                    OutboundMonthlyRptArchiveOverrideForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(OutboundMonthlyRptArchiveOverrideForm, [
                        'OutboundMonth', w0,
                        'NclId', w1,
                        'OriginalUserName', w1,
                        'OciPrevMonthDomestic', w2,
                        'SscPrevMonthDomestic', w2,
                        'OciPrevMonthInternational', w2,
                        'SscPrevMonthInternational', w2,
                        'OciPrevMonthRevDomestic', w2,
                        'SscPrevMonthRevDomestic', w2,
                        'OciPrevMonthRevInternational', w2,
                        'SscPrevMonthRevInternational', w2,
                        'OciAdjustdomestic', w2,
                        'SscAdjustdomestic', w2
                    ]);
                }
                return _this;
            }
            OutboundMonthlyRptArchiveOverrideForm.formKey = 'PCHODS.OutboundMonthlyRptArchiveOverride';
            return OutboundMonthlyRptArchiveOverrideForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundMonthlyRptArchiveOverrideForm = OutboundMonthlyRptArchiveOverrideForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundMonthlyRptArchiveOverrideRow;
        (function (OutboundMonthlyRptArchiveOverrideRow) {
            OutboundMonthlyRptArchiveOverrideRow.idProperty = 'OutboundMonthlyRptArchiveId';
            OutboundMonthlyRptArchiveOverrideRow.nameProperty = 'OriginalUserName';
            OutboundMonthlyRptArchiveOverrideRow.localTextPrefix = 'PCHODS.OutboundMonthlyRptArchiveOverride';
        })(OutboundMonthlyRptArchiveOverrideRow = PCHODS.OutboundMonthlyRptArchiveOverrideRow || (PCHODS.OutboundMonthlyRptArchiveOverrideRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundMonthlyRptArchiveOverrideService;
        (function (OutboundMonthlyRptArchiveOverrideService) {
            OutboundMonthlyRptArchiveOverrideService.baseUrl = 'PCHODS/OutboundMonthlyRptArchiveOverride';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundMonthlyRptArchiveOverrideService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundMonthlyRptArchiveOverrideService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundMonthlyRptArchiveOverrideService = PCHODS.OutboundMonthlyRptArchiveOverrideService || (PCHODS.OutboundMonthlyRptArchiveOverrideService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundNvsUsersRow;
        (function (OutboundNvsUsersRow) {
            OutboundNvsUsersRow.idProperty = 'UserId';
            OutboundNvsUsersRow.nameProperty = 'UserId';
            OutboundNvsUsersRow.localTextPrefix = 'PCHODS.OutboundNvsUsers';
            OutboundNvsUsersRow.lookupKey = 'NCLHDSAR.OutboundNvsUsers';
            function getLookup() {
                return Q.getLookup('NCLHDSAR.OutboundNvsUsers');
            }
            OutboundNvsUsersRow.getLookup = getLookup;
        })(OutboundNvsUsersRow = PCHODS.OutboundNvsUsersRow || (PCHODS.OutboundNvsUsersRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundNvsUsersService;
        (function (OutboundNvsUsersService) {
            OutboundNvsUsersService.baseUrl = 'PCHODS/OutboundNvsUsers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundNvsUsersService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundNvsUsersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundNvsUsersService = PCHODS.OutboundNvsUsersService || (PCHODS.OutboundNvsUsersService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var SelectCompanyForm = /** @class */ (function (_super) {
            __extends(SelectCompanyForm, _super);
            function SelectCompanyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SelectCompanyForm.init) {
                    SelectCompanyForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODS.SelectCompanyEditor;
                    Q.initFormType(SelectCompanyForm, [
                        'CompanyCd', w0
                    ]);
                }
                return _this;
            }
            SelectCompanyForm.formKey = 'PCHODS.SelectCompany';
            return SelectCompanyForm;
        }(Serenity.PrefixedContext));
        PCHODS.SelectCompanyForm = SelectCompanyForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrIntlDatelineCruisesForm = /** @class */ (function (_super) {
            __extends(NtrIntlDatelineCruisesForm, _super);
            function NtrIntlDatelineCruisesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrIntlDatelineCruisesForm.init) {
                    NtrIntlDatelineCruisesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(NtrIntlDatelineCruisesForm, [
                        'CompanyCd', w0,
                        'CruiseSegmentCd', w0,
                        'CruiseDaysQty', w1,
                        'CruiseCalendarDaysQty', w1,
                        'LoadDt', w2
                    ]);
                }
                return _this;
            }
            NtrIntlDatelineCruisesForm.formKey = 'PCHODSNVS.NtrIntlDatelineCruises';
            return NtrIntlDatelineCruisesForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrIntlDatelineCruisesForm = NtrIntlDatelineCruisesForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrIntlDatelineCruisesRow;
        (function (NtrIntlDatelineCruisesRow) {
            NtrIntlDatelineCruisesRow.idProperty = 'CruiseIntlTk';
            NtrIntlDatelineCruisesRow.nameProperty = 'CompanyCd';
            NtrIntlDatelineCruisesRow.localTextPrefix = 'PCHODSNVS.NtrIntlDatelineCruises';
        })(NtrIntlDatelineCruisesRow = PCHODSNVS.NtrIntlDatelineCruisesRow || (PCHODSNVS.NtrIntlDatelineCruisesRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrIntlDatelineCruisesService;
        (function (NtrIntlDatelineCruisesService) {
            NtrIntlDatelineCruisesService.baseUrl = 'PCHODSNVS/NtrIntlDatelineCruises';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NtrIntlDatelineCruisesService[x] = function (r, s, o) {
                    return Q.serviceRequest(NtrIntlDatelineCruisesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NtrIntlDatelineCruisesService = PCHODSNVS.NtrIntlDatelineCruisesService || (PCHODSNVS.NtrIntlDatelineCruisesService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var DataFlowForm = /** @class */ (function (_super) {
            __extends(DataFlowForm, _super);
            function DataFlowForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DataFlowForm.init) {
                    DataFlowForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(DataFlowForm, [
                        'Source', w0,
                        'Name', w0,
                        'ProcessYn', w0,
                        'Target', w0,
                        'Description', w0,
                        'SourceDesc', w0,
                        'TargetDesc', w0,
                        'Package', w0,
                        'Status', w1,
                        'Lset', w2,
                        'Cet', w2
                    ]);
                }
                return _this;
            }
            DataFlowForm.formKey = 'SSISConfig.DataFlow';
            return DataFlowForm;
        }(Serenity.PrefixedContext));
        SSISConfig.DataFlowForm = DataFlowForm;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var DataFlowRow;
        (function (DataFlowRow) {
            DataFlowRow.idProperty = 'Key';
            DataFlowRow.nameProperty = 'Source';
            DataFlowRow.localTextPrefix = 'SSISConfig.DataFlow';
        })(DataFlowRow = SSISConfig.DataFlowRow || (SSISConfig.DataFlowRow = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var DataFlowService;
        (function (DataFlowService) {
            DataFlowService.baseUrl = 'SSISConfig/DataFlow';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DataFlowService[x] = function (r, s, o) {
                    return Q.serviceRequest(DataFlowService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DataFlowService = SSISConfig.DataFlowService || (SSISConfig.DataFlowService = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var GpInterfaceLogForm = /** @class */ (function (_super) {
            __extends(GpInterfaceLogForm, _super);
            function GpInterfaceLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GpInterfaceLogForm.init) {
                    GpInterfaceLogForm.init = true;
                    var s = Serenity;
                    var w0 = DAP.PCHODS.CompanyEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(GpInterfaceLogForm, [
                        'CompanyCd', w0,
                        'CruiseSegmentCd', w1,
                        'ExpRevType', w1,
                        'GpInterfaceInd', w1,
                        'GpInterfacedDt', w2,
                        'JournalNum', w3
                    ]);
                }
                return _this;
            }
            GpInterfaceLogForm.formKey = 'SSISConfig.GpInterfaceLog';
            return GpInterfaceLogForm;
        }(Serenity.PrefixedContext));
        SSISConfig.GpInterfaceLogForm = GpInterfaceLogForm;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var GpInterfaceLogRow;
        (function (GpInterfaceLogRow) {
            GpInterfaceLogRow.idProperty = 'InterfaceLogId';
            GpInterfaceLogRow.nameProperty = 'CompanyCd';
            GpInterfaceLogRow.localTextPrefix = 'SSISConfig.GpInterfaceLog';
        })(GpInterfaceLogRow = SSISConfig.GpInterfaceLogRow || (SSISConfig.GpInterfaceLogRow = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var GpInterfaceLogService;
        (function (GpInterfaceLogService) {
            GpInterfaceLogService.baseUrl = 'SSISConfig/GpInterfaceLog';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GpInterfaceLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(GpInterfaceLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GpInterfaceLogService = SSISConfig.GpInterfaceLogService || (SSISConfig.GpInterfaceLogService = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var INTConfigBaseForm = /** @class */ (function (_super) {
            __extends(INTConfigBaseForm, _super);
            function INTConfigBaseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!INTConfigBaseForm.init) {
                    INTConfigBaseForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(INTConfigBaseForm, [
                        'ConfigurationFilter', w0,
                        'PackagePath', w1,
                        'ConfiguredValueType', w1,
                        'ConfiguredValue', w1,
                        'EnvironmentEnum', w2,
                        'EnvironmentDesc', w1,
                        'ConfigId', w2,
                        'ModifiedBy', w1,
                        'ModifiedOn', w3
                    ]);
                }
                return _this;
            }
            INTConfigBaseForm.formKey = 'SSISConfig.INTConfigBase';
            return INTConfigBaseForm;
        }(Serenity.PrefixedContext));
        SSISConfig.INTConfigBaseForm = INTConfigBaseForm;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var INTConfigBaseRow;
        (function (INTConfigBaseRow) {
            INTConfigBaseRow.idProperty = 'ConfigId';
            INTConfigBaseRow.nameProperty = 'ConfigurationFilter';
            INTConfigBaseRow.localTextPrefix = 'SSISConfig.INTConfigBase';
        })(INTConfigBaseRow = SSISConfig.INTConfigBaseRow || (SSISConfig.INTConfigBaseRow = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var INTConfigBaseService;
        (function (INTConfigBaseService) {
            INTConfigBaseService.baseUrl = 'SSISConfig/INTConfigBase';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                INTConfigBaseService[x] = function (r, s, o) {
                    return Q.serviceRequest(INTConfigBaseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(INTConfigBaseService = SSISConfig.INTConfigBaseService || (SSISConfig.INTConfigBaseService = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var MicrosDataFlowForm = /** @class */ (function (_super) {
            __extends(MicrosDataFlowForm, _super);
            function MicrosDataFlowForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MicrosDataFlowForm.formKey = 'SSISConfig.MicrosDataFlow';
            return MicrosDataFlowForm;
        }(Serenity.PrefixedContext));
        SSISConfig.MicrosDataFlowForm = MicrosDataFlowForm;
        [,
            ['Source', function () { return Serenity.StringEditor; }],
            ['Name', function () { return Serenity.StringEditor; }],
            ['ProcessYn', function () { return Serenity.StringEditor; }],
            ['Target', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['SourceDesc', function () { return Serenity.StringEditor; }],
            ['TargetDesc', function () { return Serenity.StringEditor; }],
            ['Package', function () { return Serenity.StringEditor; }],
            ['Status', function () { return Serenity.IntegerEditor; }],
            ['Lset', function () { return Serenity.DateEditor; }],
            ['Cet', function () { return Serenity.DateEditor; }],
            ['LseIndex', function () { return Serenity.IntegerEditor; }],
            ['CeIndex', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MicrosDataFlowForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var MicrosDataFlowRow;
        (function (MicrosDataFlowRow) {
            MicrosDataFlowRow.idProperty = 'Key';
            MicrosDataFlowRow.nameProperty = 'Source';
            MicrosDataFlowRow.localTextPrefix = 'SSISConfig.MicrosDataFlow';
            var Fields;
            (function (Fields) {
            })(Fields = MicrosDataFlowRow.Fields || (MicrosDataFlowRow.Fields = {}));
            [
                'Key',
                'Source',
                'Name',
                'ProcessYn',
                'Target',
                'Description',
                'SourceDesc',
                'TargetDesc',
                'Package',
                'Status',
                'Lset',
                'Cet',
                'LseIndex',
                'CeIndex'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MicrosDataFlowRow = SSISConfig.MicrosDataFlowRow || (SSISConfig.MicrosDataFlowRow = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var MicrosDataFlowService;
        (function (MicrosDataFlowService) {
            MicrosDataFlowService.baseUrl = 'SSISConfig/MicrosDataFlow';
            var Methods;
            (function (Methods) {
            })(Methods = MicrosDataFlowService.Methods || (MicrosDataFlowService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MicrosDataFlowService[x] = function (r, s, o) {
                    return Q.serviceRequest(MicrosDataFlowService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MicrosDataFlowService.baseUrl + '/' + x;
            });
        })(MicrosDataFlowService = SSISConfig.MicrosDataFlowService || (SSISConfig.MicrosDataFlowService = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var PsInterfaceConfigForm = /** @class */ (function (_super) {
            __extends(PsInterfaceConfigForm, _super);
            function PsInterfaceConfigForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PsInterfaceConfigForm.init) {
                    PsInterfaceConfigForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(PsInterfaceConfigForm, [
                        'ConfigSetting', w0,
                        'DataType', w0,
                        'ConfigValue', w0,
                        'ConfigValueDate', w1
                    ]);
                }
                return _this;
            }
            PsInterfaceConfigForm.formKey = 'SSISConfig.PsInterfaceConfig';
            return PsInterfaceConfigForm;
        }(Serenity.PrefixedContext));
        SSISConfig.PsInterfaceConfigForm = PsInterfaceConfigForm;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var PsInterfaceConfigRow;
        (function (PsInterfaceConfigRow) {
            PsInterfaceConfigRow.idProperty = 'ConfigId';
            PsInterfaceConfigRow.nameProperty = 'SourceSystem';
            PsInterfaceConfigRow.localTextPrefix = 'SSISConfig.PsInterfaceConfig';
        })(PsInterfaceConfigRow = SSISConfig.PsInterfaceConfigRow || (SSISConfig.PsInterfaceConfigRow = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var PsInterfaceConfigService;
        (function (PsInterfaceConfigService) {
            PsInterfaceConfigService.baseUrl = 'SSISConfig/PsInterfaceConfig';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PsInterfaceConfigService[x] = function (r, s, o) {
                    return Q.serviceRequest(PsInterfaceConfigService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PsInterfaceConfigService = SSISConfig.PsInterfaceConfigService || (SSISConfig.PsInterfaceConfigService = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var SsisConfigBaseForm = /** @class */ (function (_super) {
            __extends(SsisConfigBaseForm, _super);
            function SsisConfigBaseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SsisConfigBaseForm.init) {
                    SsisConfigBaseForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(SsisConfigBaseForm, [
                        'ConfigurationFilter', w0,
                        'PackagePath', w1,
                        'ConfiguredValueType', w1,
                        'ConfiguredValue', w1,
                        'EnvironmentEnum', w2,
                        'EnvironmentDesc', w1,
                        'ConfigId', w2,
                        'ModifiedBy', w1,
                        'ModifiedOn', w3
                    ]);
                }
                return _this;
            }
            SsisConfigBaseForm.formKey = 'SSISConfig.SsisConfigBase';
            return SsisConfigBaseForm;
        }(Serenity.PrefixedContext));
        SSISConfig.SsisConfigBaseForm = SsisConfigBaseForm;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var SsisConfigBaseRow;
        (function (SsisConfigBaseRow) {
            SsisConfigBaseRow.idProperty = 'ConfigId';
            SsisConfigBaseRow.nameProperty = 'ConfigurationFilter';
            SsisConfigBaseRow.localTextPrefix = 'SSISConfig.SsisConfigBase';
        })(SsisConfigBaseRow = SSISConfig.SsisConfigBaseRow || (SSISConfig.SsisConfigBaseRow = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var SsisConfigBaseService;
        (function (SsisConfigBaseService) {
            SsisConfigBaseService.baseUrl = 'SSISConfig/SsisConfigBase';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SsisConfigBaseService[x] = function (r, s, o) {
                    return Q.serviceRequest(SsisConfigBaseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SsisConfigBaseService = SSISConfig.SsisConfigBaseService || (SSISConfig.SsisConfigBaseService = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Texts;
    (function (Texts) {
        DAP['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { DataAuditLog: { FieldName: 1, LogDate: 1, LogId: 1, LogType: 1, NewValue: 1, OldValue: 1, RecordId: 1, Tablename: 1, UserDisplayName: 1, UserId: 1, Username: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleKey: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, ImpersonationToken: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, MobilePhoneNumber: 1, MobilePhoneVerified: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TwoFactorAuth: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { BackgroundTaskLog: { LogId: 1, Message: 1, RunAt: 1, Server: 1, Status: 1, TaskKey: 1 }, Mail: { Bcc: 1, Body: 1, Cc: 1, ErrorMessage: 1, InsertDate: 1, InsertUser: 1, InsertUserId: 1, LockExpiration: 1, MailFrom: 1, MailId: 1, MailTo: 1, Priority: 1, ReplyTo: 1, RetryCount: 1, SentDate: 1, Status: 1, Subject: 1, Uid: 1 }, UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, DWSupport: { FinReportPublishingSupp: { CreatedByNam: 1, CreatedTs: 1, FinReportPublishingSurKey: 1, ModifiedByNam: 1, ModifiedTs: 1, ProcessedDateTs: 1, PublishCd: 1, PublishCommentsTxt: 1, PublishDat: 1 } }, NCLHDSAR: { Assignee: { AssigneeId: 1, FullName: 1, IsActive: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Request: { Address1: 1, AttrCount: 1, City: 1, Country: 1, CreatedDt: 1, DaysLeft: 1, DaysOld: 1, DeadlineDt: 1, Email: 1, FirstName: 1, FullName: 1, Id: 1, IdentityVerificationOptOuts: 1, IdentityVerificationOtherRequests: 1, LastName: 1, LastUpdatedDt: 1, LatitudesNum: 1, LoadDt: 1, NclYn: 1, OceaniaMpCardNum: 1, OceaniaYn: 1, ProcessDt: 1, RegentMpCardNum: 1, RegentYn: 1, ReqApprover: 1, ReqDetails: 1, ReqExtended: 1, ReqStage: 1, ReqStatus: 1, RequestType: 1, RequestTypeNum: 1, RequestTypeNumDesc: 1, SixthmanYn: 1, SubjectType: 1 }, RequestAttributes: { Addr1: 1, Addr2: 1, CityNm: 1, CountryCd: 1, Email1: 1, ExtractDt: 1, FirstNm: 1, Id: 1, LastNm: 1, MiddleNm: 1, ModifiedBy: 1, ModifiedDate: 1, OldAddr1: 1, OldAddr2: 1, OldCityNm: 1, OldCountryCd: 1, OldEmail: 1, OldFirstNm: 1, OldLastNm: 1, OldMiddleNm: 1, OldPostalCd: 1, OldStateNm: 1, PostalCd: 1, RequestAttributeId: 1, RequestValue: 1, ResolvedDt: 1, StateNm: 1, SystemMasterId: 1, SystemMasterSystemActiveYn: 1, SystemMasterSystemDesc: 1, SystemMasterSystemName: 1, SystemMasterSystemTable: 1 }, RequestStatus: { StatusDescription: 1, StatusId: 1, StatusOrder: 1 }, RequestType: { Desc: 1, Type: 1 }, SwRequest: { ApiResponse: 1, ApiResponseDepth: 1, ApiResponseId: 1, AssigneeFullName: 1, AssigneeId: 1, AssigneeIsActive: 1, AttributeCount: 1, ClientAddress: 1, ClientEmailAddress: 1, ClientFirstName: 1, ClientGuestCategory: 1, ClientIsRelatedtoHousehold: 1, ClientLastName: 1, ClientLatitudesNumber: 1, ClientZipCode: 1, DaysLeft: 1, DaysOld: 1, DeadlineDt: 1, LastUpdatedDt: 1, NoteList: 1, RecordId: 1, RecordTimeStamp: 1, RequestType: 1, StatusId: 1, StatusStatusDescription: 1, StatusStatusOrder: 1, UpdatedBy: 1 }, SwRequestAttributes: { ExtractDt: 1, Id: 1, LastUpdated: 1, RequestAttributeId: 1, RequestValue: 1, ResolvedDt: 1, SystemMasterId: 1, SystemMasterSystemDesc: 1 }, SystemMaster: { Id: 1, SystemActiveYn: 1, SystemDesc: 1, SystemName: 1, SystemTable: 1 } }, NCLHODSSPENDVIS: { Amoslevel: { AccountId: 1, Descr: 1, FlexDim1Name: 1, FlexDim2Name: 1, FlexDim3Name: 1, FlexDim4Name: 1, IdNum: 1, ModifiedBy: 1, ModifiedDate: 1 } }, PCHODS: { OutboundAgent: { AgentId: 1, AgentLocationDescription: 1, AgentLocationId: 1, CompanyCd: 1, CompanyName: 1, Nm: 1, NvsUserId: 1, PrimaryBrand: 1, StartInactiveDt: 1 }, OutboundAgentLocation: { AgentLocationId: 1, Description: 1 }, OutboundCommissionHist: { ActiveDt: 1, CommissionHistId: 1, CommissionId: 1, CommissionRate: 1, CompanyCd: 1, CompanyName: 1, HighNumBookings: 1, InactiveDt: 1, LowNumBookings: 1 }, OutboundCommissionHistAu: { ActiveDt: 1, CommissionHistAuId: 1, CommissionId: 1, CommissionRate: 1, CompanyCd: 1, CompanyName: 1, HighNumBookings: 1, InactiveDt: 1, LowNumBookings: 1 }, OutboundCommissionHistBr: { ActiveDt: 1, CommissionHistBrId: 1, CommissionId: 1, CommissionRate: 1, CompanyCd: 1, CompanyName: 1, HighNumBookings: 1, InactiveDt: 1, LowNumBookings: 1 }, OutboundCommissionPeriod: { ClosedBy: 1, ClosedDate: 1, CurrentMonth: 1, EndDate: 1, IsOpen: 1, OutboundCommissionPeriodId: 1, PreviousMonth: 1, StartDate: 1 }, OutboundCompany: { Cd: 1, Nm: 1 }, OutboundMonthlyRptArchiveOverride: { NclId: 1, OciAdjustdomestic: 1, OciPrevMonthDomestic: 1, OciPrevMonthInternational: 1, OciPrevMonthRevDomestic: 1, OciPrevMonthRevInternational: 1, OriginalUserName: 1, OutboundMonth: 1, OutboundMonthlyRptArchiveId: 1, SscAdjustdomestic: 1, SscPrevMonthDomestic: 1, SscPrevMonthInternational: 1, SscPrevMonthRevDomestic: 1, SscPrevMonthRevInternational: 1 }, OutboundNvsUsers: { ActiveInd: 1, CompanyCd: 1, DepartmentCd: 1, DepartmentDesc: 1, UserFirstName: 1, UserId: 1, UserLastName: 1 } }, PCHODSNVS: { NtrIntlDatelineCruises: { CompanyCd: 1, CruiseCalendarDaysQty: 1, CruiseDaysQty: 1, CruiseIntlTk: 1, CruiseSegmentCd: 1, LoadDt: 1 } }, SSISConfig: { DataFlow: { Cet: 1, Description: 1, Key: 1, Lset: 1, Name: 1, Package: 1, ProcessYn: 1, Source: 1, SourceDesc: 1, Status: 1, Target: 1, TargetDesc: 1 }, GpInterfaceLog: { CompanyCd: 1, CruiseSegmentCd: 1, ExpRevType: 1, GpInterfaceInd: 1, GpInterfacedDt: 1, InterfaceLogId: 1, JournalNum: 1 }, INTConfigBase: { ConfigId: 1, ConfigurationFilter: 1, ConfiguredValue: 1, ConfiguredValueType: 1, EnvironmentDesc: 1, EnvironmentEnum: 1, ModifiedBy: 1, ModifiedOn: 1, PackagePath: 1 }, PsInterfaceConfig: { ConfigId: 1, ConfigSetting: 1, ConfigValue: 1, ConfigValueDate: 1, DataType: 1, ModifiedBy: 1, ModifiedDate: 1, SourceSystem: 1 }, SsisConfigBase: { ConfigId: 1, ConfigurationFilter: 1, ConfiguredValue: 1, ConfiguredValueType: 1, EnvironmentDesc: 1, EnvironmentEnum: 1, ModifiedBy: 1, ModifiedOn: 1, PackagePath: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, CardViewMixin: { CardView: 1, ListView: 1 }, Dashboard: { ContentDescription: 1 }, Dialogs: { PendingChangesConfirmation: 1 }, DraggableGroupingMixin: { CollapseAllButton: 1, DropPlaceholder: 1, ExpandAllButton: 1 }, EmailClient: { BackButton: 1, CCLabel: 1, CancelButton: 1, ComposeButton: 1, DeleteButton: 1, DeleteMessageConfirmation: 1, DeleteMessageSuccess: 1, DeleteNoSelectionWarning: 1, DeleteSelectedConfirmation: 1, DeleteSelectedSuccess: 1, FolderNames: { drafts: 1, inbox: 1, junk: 1, sent: 1, trash: 1 }, FoldersTitle: 1, ForwardButton: 1, ImapHost: 1, ImapPassword: 1, ImapPort: 1, ImapUsername: 1, LoginButton: 1, LoginTitle: 1, MoveMessageSuccess: 1, MoveNoSelectionWarning: 1, MoveSelectedSuccess: 1, MoveToFolder: 1, NewEmailDialogTitle: 1, PageTitle: 1, QuickSettings: 1, RefreshButton: 1, ReplyAllButton: 1, ReplyButton: 1, ReplyEmailDialogTitle: 1, SearchPlaceholder: 1, SendButton: 1, SignoutButton: 1, SmtpHost: 1, SmtpPassword: 1, SmtpPort: 1, SmtpUsername: 1, ToLabel: 1, ToggleReadButton: 1, ToggleSeenNoSelectionWarning: 1 }, FavoriteViewsMixin: { DeleteButtonHint: 1, DeleteSuccessMessage: 1, EmptyNameError: 1, FavoriteViews: 1, LoadedViewMessage: 1, SaveButton: 1, SaveSuccessMessage: 1, SaveView: 1 }, HeaderFiltersMixin: { CancelButton: 1, ClearButton: 1, OkButton: 1, Search: 1, SelectAll: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeAzure: 1, ThemeAzureLight: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeCosmos: 1, ThemeCosmosLight: 1, ThemeGlassy: 1, ThemeGlassyLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 }, WizardDialog: { BackButton: 1, CancelMessage: 1, FinishButton: 1, NextButton: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = DAP.Texts || (DAP.Texts = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var DataAuditLogDialog = /** @class */ (function (_super) {
            __extends(DataAuditLogDialog, _super);
            function DataAuditLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.DataAuditLogForm(_this.idPrefix);
                return _this;
            }
            DataAuditLogDialog.prototype.getFormKey = function () { return Administration.DataAuditLogForm.formKey; };
            DataAuditLogDialog.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getNameProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogDialog.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogDialog.prototype.getToolbarButtons = function () {
                return [];
            };
            DataAuditLogDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            };
            DataAuditLogDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DataAuditLogDialog);
            return DataAuditLogDialog;
        }(Serenity.EntityDialog));
        Administration.DataAuditLogDialog = DataAuditLogDialog;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var DataAuditLogGrid = /** @class */ (function (_super) {
            __extends(DataAuditLogGrid, _super);
            function DataAuditLogGrid(container) {
                return _super.call(this, container) || this;
            }
            DataAuditLogGrid.prototype.getColumnsKey = function () { return 'Administration.DataAuditLog'; };
            DataAuditLogGrid.prototype.getDialogType = function () { return Administration.DataAuditLogDialog; };
            DataAuditLogGrid.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogGrid.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogGrid.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogGrid.prototype.getButtons = function () {
                return [];
            };
            DataAuditLogGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === "LogType" /* LogType */; }).format = function (ctx) {
                    var icon = null;
                    switch (ctx.value) {
                        case Administration.DataAuditLogType.Delete:
                            icon = "fa-times text-red";
                            break;
                        case Administration.DataAuditLogType.Insert:
                            icon = "fa-plus text-green";
                            break;
                        case Administration.DataAuditLogType.Update:
                            icon = "fa-pencil-square-o text-orange";
                            break;
                    }
                    return (icon ? '<i class="fa ' + icon + '"></i> ' : '') +
                        Serenity.EnumFormatter.format(Administration.DataAuditLogType, ctx.value);
                };
                return columns;
            };
            DataAuditLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DataAuditLogGrid);
            return DataAuditLogGrid;
        }(Serenity.EntityGrid));
        Administration.DataAuditLogGrid = DataAuditLogGrid;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var impersonate = Q.tryFirst(columns, function (x) { return x.field == "ImpersonationToken"; });
                if (impersonate != null) {
                    impersonate.format = function (ctx) {
                        if (!ctx.value)
                            return "";
                        return "<a target=\"_blank\" href=\"" + Q.resolveUrl('~/Account/ImpersonateAs?token=') + ctx.value + "\">"
                            + "<i class=\"fa fa-user-secret text-blue\"></i></a>";
                    };
                }
                return columns;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = DAP.Authorization || (DAP.Authorization = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = DAP.Administration || (DAP.Administration = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = DAP.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = DAP.LanguageList || (DAP.LanguageList = {}));
})(DAP || (DAP = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var DAP;
(function (DAP) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('DAP');
        Serenity.EntityDialog.defaultLanguageList = DAP.LanguageList.getValue;
        Serenity.DataGrid.defaultPersistanceStorage = window.localStorage;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        Serenity.setupUIOverrides();
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        $(function () {
            // let demo page use its own settings for idle timeout
            if (window.location.pathname.indexOf('Samples/IdleTimeout') > 0)
                return;
            var meta = $('meta[name=username]');
            if ((meta.length && meta.attr('content')) ||
                (!meta.length && Q.Authorization.isLoggedIn)) {
                new Serenity.IdleTimeout({
                    activityTimeout: 60 * 60,
                    warningDuration: 5 * 60
                });
            }
        });
    })(ScriptInitialization = DAP.ScriptInitialization || (DAP.ScriptInitialization = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    DAP.BasicProgressDialog = BasicProgressDialog;
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new DAP.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm(Q.text('Site.Dialogs.PendingChangesConfirmation'), function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = DAP.DialogUtils || (DAP.DialogUtils = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    icon: options.icon,
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var PromptDialog = /** @class */ (function (_super) {
            __extends(PromptDialog, _super);
            function PromptDialog(opt) {
                var _this = _super.call(this, opt) || this;
                if (!Q.isEmptyOrNull(_this.options.cssClass))
                    _this.element.addClass(_this.options.cssClass);
                if (!Q.isEmptyOrNull(_this.options.message)) {
                    var msg = $("<div/>").addClass("message")
                        .insertBefore(_this.byId("PropertyGrid"));
                    _this.options.isHtml ? msg.html(_this.options.message) : msg.text(_this.options.message);
                }
                return _this;
            }
            PromptDialog_1 = PromptDialog;
            PromptDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text("Dialogs.OkButton"),
                        click: function () {
                            if (!_this.validateForm())
                                return;
                            if (_this.options.validateValue == null || _this.options.validateValue(_this.value))
                                _this.dialogClose();
                        },
                    },
                    {
                        text: Q.text("Dialogs.CancelButton"),
                        click: function () { return _this.dialogClose; }
                    }
                ];
                opt.title = this.options.title || "Prompt";
                return opt;
            };
            PromptDialog.prototype.loadInitialEntity = function () {
                this.value = this.options.value;
            };
            PromptDialog.prototype.getPropertyItems = function () {
                return [
                    {
                        name: "Value",
                        editorType: this.options.editorType || "String",
                        required: Q.coalesce(this.options.required, true),
                        editorParams: this.options.editorOptions
                    }
                ];
            };
            Object.defineProperty(PromptDialog.prototype, "value", {
                get: function () {
                    return this.getSaveEntity().Value;
                },
                set: function (v) {
                    this.propertyGrid.load({
                        Value: v
                    });
                },
                enumerable: true,
                configurable: true
            });
            PromptDialog.prompt = function (title, message, value, validateValue) {
                new PromptDialog_1({
                    title: title,
                    message: message,
                    value: value,
                    validateValue: function (v) { return validateValue(v); }
                }).dialogOpen();
            };
            var PromptDialog_1;
            PromptDialog = PromptDialog_1 = __decorate([
                Serenity.Decorators.registerClass()
            ], PromptDialog);
            return PromptDialog;
        }(Serenity.PropertyDialog));
        Membership.PromptDialog = PromptDialog;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var ServiceEditorBase = /** @class */ (function (_super) {
        __extends(ServiceEditorBase, _super);
        function ServiceEditorBase(hidden, options) {
            var _this = _super.call(this, hidden, options) || this;
            _this.setCascadeFrom(_this.options.cascadeFrom);
            return _this;
        }
        ServiceEditorBase.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (Q.isEmptyOrNull(value)) {
                if (this.cascadeLink) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new Serenity.CascadedWidgetLink(Serenity.Widget, this, function (p) { return _this.cascadeValue = _this.getCascadeFromValue(p); });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeValue", {
            get: function () {
                return this.options.cascadeValue;
            },
            set: function (value) {
                if (value !== this.options.cascadeValue) {
                    this.options.cascadeValue = value;
                    this.value = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeField", {
            get: function () {
                return this.options.cascadeField || this.options.cascadeFrom;
            },
            set: function (value) {
                this.options.cascadeField = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeFrom", {
            get: function () {
                return this.options.cascadeFrom;
            },
            set: function (value) {
                if (value !== this.options.cascadeFrom) {
                    this.setCascadeFrom(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        ServiceEditorBase.prototype.getCascadeFromValue = function (parent) {
            return Serenity.EditorUtils.getValue(parent);
        };
        ServiceEditorBase.prototype.getIncludeColumns = function () {
            return [];
        };
        ServiceEditorBase.prototype.getSort = function () {
            return [];
        };
        ServiceEditorBase.prototype.getTypeDelay = function () {
            return 500;
        };
        ServiceEditorBase.prototype.executeQueryByKey = function (options) {
            var request = options.request;
            request.ColumnSelection = 1 /* keyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            _super.prototype.executeQueryByKey.call(this, options);
        };
        ServiceEditorBase.prototype.executeQuery = function (options) {
            var _this = this;
            var request = options.request;
            request.ColumnSelection = 1 /* KeyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            request.Sort = this.getSort();
            request.ExcludeTotalCount = true;
            if (this.cascadeField) {
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter[this.cascadeField] = this.cascadeValue;
            }
            options.blockUI = false;
            options.error = function () { };
            if (this.lastRequest != null && this.lastRequest.readyState != XMLHttpRequest.DONE)
                this.lastRequest.abort();
            this.lastRequest = Q.serviceCall(options);
            this.lastRequest.then(function () { return _this.lastRequest = null; }, function () { return _this.lastRequest = null; });
        };
        ServiceEditorBase = __decorate([
            Serenity.Decorators.registerClass()
        ], ServiceEditorBase);
        return ServiceEditorBase;
    }(Serenity.Select2AjaxEditor));
    DAP.ServiceEditorBase = ServiceEditorBase;
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    DAP.StaticTextBlock = StaticTextBlock;
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var MailDialog = /** @class */ (function (_super) {
            __extends(MailDialog, _super);
            function MailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Common.MailForm(_this.idPrefix);
                _this.form.Status.changeSelect2(function (e) {
                    if (_this.form.Status.value == Common.MailStatus.InQueue.toString()) {
                        _this.form.RetryCount.value = 0;
                        _this.form.LockExpiration.valueAsDate = new Date();
                    }
                });
                return _this;
            }
            MailDialog.prototype.getFormKey = function () { return Common.MailForm.formKey; };
            MailDialog.prototype.getIdProperty = function () { return Common.MailRow.idProperty; };
            MailDialog.prototype.getLocalTextPrefix = function () { return Common.MailRow.localTextPrefix; };
            MailDialog.prototype.getNameProperty = function () { return Common.MailRow.nameProperty; };
            MailDialog.prototype.getService = function () { return Common.MailService.baseUrl; };
            MailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MailDialog);
            return MailDialog;
        }(Serenity.EntityDialog));
        Common.MailDialog = MailDialog;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var MailGrid = /** @class */ (function (_super) {
            __extends(MailGrid, _super);
            function MailGrid(container) {
                return _super.call(this, container) || this;
            }
            MailGrid.prototype.getColumnsKey = function () { return 'Common.Mail'; };
            MailGrid.prototype.getDialogType = function () { return Common.MailDialog; };
            MailGrid.prototype.getIdProperty = function () { return Common.MailRow.idProperty; };
            MailGrid.prototype.getLocalTextPrefix = function () { return Common.MailRow.localTextPrefix; };
            MailGrid.prototype.getService = function () { return Common.MailService.baseUrl; };
            MailGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            MailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MailGrid);
            return MailGrid;
        }(Serenity.EntityGrid));
        Common.MailGrid = MailGrid;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('DAPTheme', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'azure', Q.text('Site.Layout.ThemeAzure'));
                Q.addOption(select, 'azure-light', Q.text('Site.Layout.ThemeAzureLight'));
                Q.addOption(select, 'cosmos', Q.text('Site.Layout.ThemeCosmos'));
                Q.addOption(select, 'cosmos-light', Q.text('Site.Layout.ThemeCosmosLight'));
                Q.addOption(select, 'glassy', Q.text('Site.Layout.ThemeGlassy'));
                Q.addOption(select, 'glassy-light', Q.text('Site.Layout.ThemeGlassyLight'));
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    icon: options.icon,
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('run-button')
                    .toggle(this.report && this.report.IsExternalReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport && !this.report.IsExternalReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'Run',
                        cssClass: 'run-button',
                        icon: 'fa-print text-blue',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = DAP.Common || (DAP.Common = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinReportPublishingSuppDialog = /** @class */ (function (_super) {
            __extends(FinReportPublishingSuppDialog, _super);
            function FinReportPublishingSuppDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.FinReportPublishingSuppForm(_this.idPrefix);
                _this.form.PublishDat.addValidationRule(_this.uniqueName, function (e) {
                    var pdt = new Date(Q.formatDate(_this.form.PublishDat.value, "MM/dd/yyyy"));
                    //pdt.setHours(0, 0, 0, 0);
                    var dt = new Date(Q.formatDate(new Date(), "MM/dd/yyyy"));
                    //dt.setHours(0, 0, 0, 0);
                    if (pdt.getTime() < dt.getTime()) {
                        return "Publish Date Should be greater or equal than Today";
                    }
                });
                return _this;
            }
            FinReportPublishingSuppDialog.prototype.getFormKey = function () { return DWSupport.FinReportPublishingSuppForm.formKey; };
            FinReportPublishingSuppDialog.prototype.getIdProperty = function () { return DWSupport.FinReportPublishingSuppRow.idProperty; };
            FinReportPublishingSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.FinReportPublishingSuppRow.localTextPrefix; };
            FinReportPublishingSuppDialog.prototype.getNameProperty = function () { return DWSupport.FinReportPublishingSuppRow.nameProperty; };
            FinReportPublishingSuppDialog.prototype.getService = function () { return DWSupport.FinReportPublishingSuppService.baseUrl; };
            FinReportPublishingSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            FinReportPublishingSuppDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.form.ProcessedDateTs.value != null) {
                    Serenity.EditorUtils.setReadOnly(this.form.PublishDat, true);
                    Serenity.EditorUtils.setReadOnly(this.form.PublishCommentsTxt, true);
                    Serenity.EditorUtils.setReadOnly(this.form.PublishCd, true);
                    this.applyChangesButton.hide();
                    this.saveAndCloseButton.hide();
                }
            };
            FinReportPublishingSuppDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                //Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                //// this.form.NclYn.element.closest('.category').toggleClass('category collapsible collapsed', true);
                ////this.form.Address1.element.closest('.category').toggleClass('category collapsible collapsed', true);
                //// img.toggleClass('fa-plus').toggleClass('fa-minus');
                //// remove required asterisk (*)
                //this.element.find('sup').hide();
                //this.applyChangesButton.hide();
                //this.saveAndCloseButton.hide();
            };
            FinReportPublishingSuppDialog.prototype.updateTitle = function () {
                //super.updateTitle();
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                this.dialogTitle = 'Financial Report Publishing';
            };
            FinReportPublishingSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FinReportPublishingSuppDialog);
            return FinReportPublishingSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.FinReportPublishingSuppDialog = FinReportPublishingSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinReportPublishingSuppGrid = /** @class */ (function (_super) {
            __extends(FinReportPublishingSuppGrid, _super);
            function FinReportPublishingSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            FinReportPublishingSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.FinReportPublishingSupp'; };
            FinReportPublishingSuppGrid.prototype.getDialogType = function () { return DWSupport.FinReportPublishingSuppDialog; };
            FinReportPublishingSuppGrid.prototype.getIdProperty = function () { return DWSupport.FinReportPublishingSuppRow.idProperty; };
            FinReportPublishingSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.FinReportPublishingSuppRow.localTextPrefix; };
            FinReportPublishingSuppGrid.prototype.getService = function () { return DWSupport.FinReportPublishingSuppService.baseUrl; };
            FinReportPublishingSuppGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                var btn = Q.first(buttons, function (x) { return x.cssClass == "add-button"; });
                btn.title = Q.text("Add New");
                return buttons;
            };
            FinReportPublishingSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FinReportPublishingSuppGrid);
            return FinReportPublishingSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.FinReportPublishingSuppGrid = FinReportPublishingSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "TwoFactorAuthenticationRequired") {
                                var args = response.Error.Arguments.split('|');
                                _this.handleTwoFactorAuthentication(request.Username, request.Password, args[1], args[0]);
                                return;
                            }
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.handleTwoFactorAuthentication = function (user, pass, twoFactorGuid, info) {
                var _this = this;
                var tries = 0;
                var remaining = 120;
                var dialog = null;
                var showDialog = function () {
                    dialog = new Membership.PromptDialog({
                        title: "Two Factor Authentication",
                        editorOptions: {
                            maxLength: 4,
                        },
                        editorType: "Integer",
                        message: info,
                        isHtml: true,
                        required: true,
                        validateValue: function (x) {
                            if (x >= 1000 && x <= 9999) {
                                tries++;
                                Q.serviceCall({
                                    url: Q.resolveUrl('~/Account/Login'),
                                    request: {
                                        Username: user,
                                        Password: pass,
                                        TwoFactorGuid: twoFactorGuid,
                                        TwoFactorCode: x
                                    },
                                    onSuccess: function (r) {
                                        _this.redirectToReturnUrl();
                                        return;
                                    },
                                    onError: function (z) {
                                        Q.notifyError(z.Error.Message);
                                        if (tries > 2) {
                                            Q.notifyError("Code entered is invalid! You can't try more than 3 times!");
                                            dialog = null;
                                            return;
                                        }
                                        showDialog();
                                    }
                                });
                                return true;
                            }
                            Q.notifyError("Please enter a valid code!");
                            return false;
                        }
                    });
                    dialog.dialogOpen();
                    dialog.element.on("dialogclose.me", function (x) {
                        if (dialog != null) {
                            dialog.element.off("dialogclose.me");
                            dialog = null;
                        }
                    });
                };
                function updateCounter() {
                    remaining -= 1;
                    if (dialog != null) {
                        dialog.element.find("span.counter").text(remaining.toString());
                    }
                    if (remaining >= 0)
                        setTimeout(updateCounter, 1000);
                    else if (dialog != null)
                        dialog.dialogClose();
                }
                ;
                showDialog();
                window.setTimeout(updateCounter, 1000);
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">             \n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = DAP.Membership || (DAP.Membership = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var AssigneeDialog = /** @class */ (function (_super) {
            __extends(AssigneeDialog, _super);
            function AssigneeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHDSAR.AssigneeForm(_this.idPrefix);
                return _this;
            }
            AssigneeDialog.prototype.getFormKey = function () { return NCLHDSAR.AssigneeForm.formKey; };
            AssigneeDialog.prototype.getIdProperty = function () { return NCLHDSAR.AssigneeRow.idProperty; };
            AssigneeDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.AssigneeRow.localTextPrefix; };
            AssigneeDialog.prototype.getNameProperty = function () { return NCLHDSAR.AssigneeRow.nameProperty; };
            AssigneeDialog.prototype.getService = function () { return NCLHDSAR.AssigneeService.baseUrl; };
            AssigneeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssigneeDialog);
            return AssigneeDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.AssigneeDialog = AssigneeDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var AssigneeGrid = /** @class */ (function (_super) {
            __extends(AssigneeGrid, _super);
            function AssigneeGrid(container) {
                return _super.call(this, container) || this;
            }
            AssigneeGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.Assignee'; };
            AssigneeGrid.prototype.getDialogType = function () { return NCLHDSAR.AssigneeDialog; };
            AssigneeGrid.prototype.getIdProperty = function () { return NCLHDSAR.AssigneeRow.idProperty; };
            AssigneeGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.AssigneeRow.localTextPrefix; };
            AssigneeGrid.prototype.getService = function () { return NCLHDSAR.AssigneeService.baseUrl; };
            AssigneeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssigneeGrid);
            return AssigneeGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.AssigneeGrid = AssigneeGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        NCLHDSAR.NoteDialog = NoteDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new NCLHDSAR.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: DAP.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new NCLHDSAR.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        NCLHDSAR.NotesEditor = NotesEditor;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestAttributesDialog = /** @class */ (function (_super) {
            __extends(RequestAttributesDialog, _super);
            function RequestAttributesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new NCLHDSAR.RequestAttributesForm(_this.idPrefix);
                _this.form = new NCLHDSAR.RequestAttributesForm(_this.idPrefix);
                _this.form.SystemMasterId.changeSelect2(function (e) {
                    var sysid = Q.toId(_this.form.SystemMasterId.value);
                    if (sysid != null) {
                        _this.form.ResolvedDt.value = null;
                    }
                });
                _this.form.RequestValue.changeSelect2(function (e) {
                    var rqvalue = Q.toId(_this.form.RequestValue.value);
                    if (rqvalue != null) {
                        _this.form.ResolvedDt.value = null;
                    }
                });
                //this.form.RequestValue.addValidationRule(this.uniqueName, e => {
                //    if (!(/^[0-9]*$/.test(this.form.RequestValue.value))) return "Only Numbers";
                //});
                _this.form.RequestValue.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.SystemMasterId.value != null) {
                        switch (_this.form.SystemMasterId.value) {
                            case "2":
                            case "3":
                                if ((_this.form.RequestValue.value.length > 12) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid NVS MP Card Number Format";
                                }
                                break;
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                                if (_this.form.RequestValue.value.length > 18) {
                                    return "Invalid SFDC ID Format";
                                }
                                break;
                            case "1":
                                if ((_this.form.RequestValue.value.length > 10) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid SEAWARE Client ID Format";
                                }
                                break;
                            case "8":
                            case "9":
                                if ((_this.form.RequestValue.value.length > 10) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid EPSILON OCI/SSC Client ID Format";
                                }
                                break;
                            case "10":
                                if ((_this.form.RequestValue.value.length > 13) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid EPSILON NCL Client ID Format";
                                }
                                break;
                        }
                    }
                });
                return _this;
            }
            RequestAttributesDialog.prototype.getFormKey = function () { return NCLHDSAR.RequestAttributesForm.formKey; };
            RequestAttributesDialog.prototype.getIdProperty = function () { return NCLHDSAR.RequestAttributesRow.idProperty; };
            RequestAttributesDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestAttributesRow.localTextPrefix; };
            RequestAttributesDialog.prototype.getNameProperty = function () { return NCLHDSAR.RequestAttributesRow.nameProperty; };
            RequestAttributesDialog.prototype.getService = function () { return NCLHDSAR.RequestAttributesService.baseUrl; };
            RequestAttributesDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var newBtn = {
                    title: "Save And New",
                    onClick: function () {
                        _this.save(function () {
                            var ent = {};
                            ent.Id = Q.toId(_this.form.Id.value);
                            _this.loadEntity(ent);
                        });
                    }
                };
                btns.push(newBtn);
                return btns;
            };
            RequestAttributesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestAttributesDialog);
            return RequestAttributesDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.RequestAttributesDialog = RequestAttributesDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
/// <reference path="../RequestAttributes/RequestAttributesDialog.ts" />
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var AttributeDialog = /** @class */ (function (_super) {
            __extends(AttributeDialog, _super);
            function AttributeDialog() {
                return _super.call(this) || this;
            }
            AttributeDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.Id, true);
            };
            AttributeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttributeDialog);
            return AttributeDialog;
        }(NCLHDSAR.RequestAttributesDialog));
        NCLHDSAR.AttributeDialog = AttributeDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestAttributesGrid = /** @class */ (function (_super) {
            __extends(RequestAttributesGrid, _super);
            function RequestAttributesGrid(container) {
                return _super.call(this, container) || this;
            }
            RequestAttributesGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.RequestAttributes'; };
            RequestAttributesGrid.prototype.getDialogType = function () { return NCLHDSAR.RequestAttributesDialog; };
            RequestAttributesGrid.prototype.getIdProperty = function () { return NCLHDSAR.RequestAttributesRow.idProperty; };
            RequestAttributesGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestAttributesRow.localTextPrefix; };
            RequestAttributesGrid.prototype.getService = function () { return NCLHDSAR.RequestAttributesService.baseUrl; };
            RequestAttributesGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            RequestAttributesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestAttributesGrid);
            return RequestAttributesGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.RequestAttributesGrid = RequestAttributesGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
/// <reference path="../RequestAttributes/RequestAttributesGrid.ts" />
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var AttributeGrid = /** @class */ (function (_super) {
            __extends(AttributeGrid, _super);
            function AttributeGrid(container) {
                return _super.call(this, container) || this;
            }
            AttributeGrid.prototype.getDialogType = function () { return NCLHDSAR.AttributeDialog; };
            AttributeGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete row">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(5, 0, {
                    field: 'Copy Value',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action copy-value" title="Copy value">' +
                        '<i class="fa fa-clipboard text-green"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(7, 0, {
                    field: 'Resolve Date',
                    name: '',
                    format: function (ctx) {
                        var CurItem = ctx.item;
                        var klass = "";
                        if (CurItem.ResolvedDt == null) {
                            klass = '<a class="inline-action resolve-date" title="Mark as Resolve">' +
                                '<i class="fa fa-calendar-plus-o text-green"></i></a>';
                        }
                        else {
                            klass = '<a class="inline-action date-resolved" title="Resolved">' +
                                '<i class="fa  fa-calendar-check-o text-green"></i></a>';
                        }
                        return klass;
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            AttributeGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            NCLHDSAR.RequestAttributesService.Delete({
                                EntityId: item.RequestAttributeId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('resolve-date')) {
                        Q.confirm('Mark as resolve?', function () {
                            var crow = Q.deepClone(_this.itemAt(row));
                            crow.ResolvedDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                            NCLHDSAR.RequestAttributesService.Update({
                                EntityId: item.RequestAttributeId,
                                Entity: crow
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('copy-value')) {
                        var crow = Q.deepClone(this.itemAt(row));
                        var dummy = $('<input>').val(crow.RequestValue).appendTo('body').select();
                        document.execCommand('copy');
                    }
                }
            };
            AttributeGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            AttributeGrid.prototype.addButtonClick = function () {
                this.editItem({ Id: this.requestID });
            };
            AttributeGrid.prototype.getInitialTitle = function () {
                return null;
            };
            AttributeGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.requestID;
            };
            Object.defineProperty(AttributeGrid.prototype, "requestID", {
                get: function () {
                    return this._RequestID;
                },
                set: function (value) {
                    if (this._RequestID !== value) {
                        this._RequestID = value;
                        this.setEquality('ID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AttributeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttributeGrid);
            return AttributeGrid;
        }(NCLHDSAR.RequestAttributesGrid));
        NCLHDSAR.AttributeGrid = AttributeGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestDialog = /** @class */ (function (_super) {
            __extends(RequestDialog, _super);
            function RequestDialog() {
                var _this = _super.call(this) || this;
                _this.form = new NCLHDSAR.RequestForm(_this.idPrefix);
                _this.aGrid = new NCLHDSAR.AttributeGrid(_this.byId('AttributeGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                //this.aGrid.openDialogsAsPanel = true;
                //this.byId('General').closest('.field').hide().end().appendTo(this.byId('TabDetails'));
                DAP.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            RequestDialog.prototype.getFormKey = function () { return NCLHDSAR.RequestForm.formKey; };
            RequestDialog.prototype.getIdProperty = function () { return NCLHDSAR.RequestRow.idProperty; };
            RequestDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestRow.localTextPrefix; };
            RequestDialog.prototype.getNameProperty = function () { return NCLHDSAR.RequestRow.nameProperty; };
            RequestDialog.prototype.getService = function () { return NCLHDSAR.RequestService.baseUrl; };
            RequestDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            RequestDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            RequestDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            RequestDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Attributes', this.isNewOrDeleted());
                this.aGrid.requestID = entity.Id;
            };
            RequestDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                //Q.reloadLookup('Default.Request');
            };
            RequestDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // this.form.NclYn.element.closest('.category').toggleClass('category collapsible collapsed', true);
                //this.form.Address1.element.closest('.category').toggleClass('category collapsible collapsed', true);
                // img.toggleClass('fa-plus').toggleClass('fa-minus');
                // remove required asterisk (*)
                this.element.find('sup').hide();
                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
            };
            RequestDialog.prototype.updateTitle = function () {
                //super.updateTitle();
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                this.dialogTitle = 'View Request (' + this.getEntityNameFieldValue() + ')';
            };
            RequestDialog.prototype.createToolbar = function () {
            };
            RequestDialog.prototype.createQuickSearchInput = function () {
            };
            RequestDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], RequestDialog);
            return RequestDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.RequestDialog = RequestDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestGrid = /** @class */ (function (_super) {
            __extends(RequestGrid, _super);
            function RequestGrid(container) {
                return _super.call(this, container) || this;
            }
            RequestGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.Request'; };
            RequestGrid.prototype.getDialogType = function () { return NCLHDSAR.RequestDialog; };
            RequestGrid.prototype.getIdProperty = function () { return NCLHDSAR.RequestRow.idProperty; };
            RequestGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestRow.localTextPrefix; };
            RequestGrid.prototype.getService = function () { return NCLHDSAR.RequestService.baseUrl; };
            RequestGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                //filters.push({
                //    field: fld.ReqStatus,
                //    type: Serenity.LookupEditor,
                //    title: "Status",
                //    cssClass: "quick-filter-width-250",
                //    options: {
                //        lookupKey: RequestRow.lookupKey
                //    }
                //});
                //Q.first(filters, x => x.field == fld.ReqStatus).init = w => {
                //    (w as Serenity.TextAreaEditor).value = "IN PROGRESS";
                //};
                // make employee filter a textbox, instead of lookup, and search by starts with
                var filter = Q.first(filters, function (x) { return x.field == "LastName" /* LastName */; });
                filter.title = "Last Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["LastName" /* LastName */], 'like', h.value + '%']);
                    }
                };
                filter = Q.first(filters, function (x) { return x.field == "FirstName" /* FirstName */; });
                filter.title = "First Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["FirstName" /* FirstName */], 'like', h.value + '%']);
                    }
                };
                return filters;
            };
            /**
             * This method is called to get list of buttons to be created.
             */
            RequestGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            RequestGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            RequestGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestGrid);
            return RequestGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.RequestGrid = RequestGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestAttributesEditor = /** @class */ (function (_super) {
            __extends(RequestAttributesEditor, _super);
            function RequestAttributesEditor(container) {
                return _super.call(this, container) || this;
            }
            RequestAttributesEditor.prototype.getColumnsKey = function () { return 'NCLHDSAR.RequestAttributes'; };
            RequestAttributesEditor.prototype.getDialogType = function () { return NCLHDSAR.RequestAttributesDialog; };
            RequestAttributesEditor.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestAttributesRow.localTextPrefix; };
            RequestAttributesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestAttributesEditor);
            return RequestAttributesEditor;
        }(DAP.Common.GridEditorBase));
        NCLHDSAR.RequestAttributesEditor = RequestAttributesEditor;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestValueEditor = /** @class */ (function (_super) {
            __extends(RequestValueEditor, _super);
            function RequestValueEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return RequestValueEditor_1.validate(value);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            RequestValueEditor_1 = RequestValueEditor;
            RequestValueEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            RequestValueEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                return RequestValueEditor_1.formatField(value);
            };
            RequestValueEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            RequestValueEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            RequestValueEditor.validate = function (value) {
                var valid = RequestValueEditor_1.isValidValue(value);
                if (valid) {
                    return null;
                }
                return Q.text('Invalid Format');
            };
            RequestValueEditor.isValidValue = function (requestvalue) {
                if (Q.isEmptyOrNull(requestvalue)) {
                    return false;
                }
                requestvalue = Q.replaceAll(Q.replaceAll(requestvalue, ' ', ''), '-', '');
                if (requestvalue.length < 10) {
                    return false;
                }
                //if (requestvalue.length !== 10) {
                //    return false;
                //}
                for (var i = 0; i < requestvalue.length; i++) {
                    var c = requestvalue.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            RequestValueEditor.formatField = function (requestvalue) {
                //    if (!PhoneEditor.isValidPhone(phone)) {
                //        return phone;
                //    }
                //    phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                //    if (Q.startsWith(phone, '0')) {
                //        phone = phone.substring(1);
                //    }
                //    phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return requestvalue;
            };
            var RequestValueEditor_1;
            __decorate([
                Serenity.Decorators.option()
            ], RequestValueEditor.prototype, "multiple", void 0);
            RequestValueEditor = RequestValueEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], RequestValueEditor);
            return RequestValueEditor;
        }(Serenity.StringEditor));
        NCLHDSAR.RequestValueEditor = RequestValueEditor;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestStatusDialog = /** @class */ (function (_super) {
            __extends(RequestStatusDialog, _super);
            function RequestStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHDSAR.RequestStatusForm(_this.idPrefix);
                return _this;
            }
            RequestStatusDialog.prototype.getFormKey = function () { return NCLHDSAR.RequestStatusForm.formKey; };
            RequestStatusDialog.prototype.getIdProperty = function () { return NCLHDSAR.RequestStatusRow.idProperty; };
            RequestStatusDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestStatusRow.localTextPrefix; };
            RequestStatusDialog.prototype.getNameProperty = function () { return NCLHDSAR.RequestStatusRow.nameProperty; };
            RequestStatusDialog.prototype.getService = function () { return NCLHDSAR.RequestStatusService.baseUrl; };
            RequestStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestStatusDialog);
            return RequestStatusDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.RequestStatusDialog = RequestStatusDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestStatusGrid = /** @class */ (function (_super) {
            __extends(RequestStatusGrid, _super);
            function RequestStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            RequestStatusGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.RequestStatus'; };
            RequestStatusGrid.prototype.getDialogType = function () { return NCLHDSAR.RequestStatusDialog; };
            RequestStatusGrid.prototype.getIdProperty = function () { return NCLHDSAR.RequestStatusRow.idProperty; };
            RequestStatusGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestStatusRow.localTextPrefix; };
            RequestStatusGrid.prototype.getService = function () { return NCLHDSAR.RequestStatusService.baseUrl; };
            RequestStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestStatusGrid);
            return RequestStatusGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.RequestStatusGrid = RequestStatusGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestTypeDialog = /** @class */ (function (_super) {
            __extends(RequestTypeDialog, _super);
            function RequestTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHDSAR.RequestTypeForm(_this.idPrefix);
                return _this;
            }
            RequestTypeDialog.prototype.getFormKey = function () { return NCLHDSAR.RequestTypeForm.formKey; };
            RequestTypeDialog.prototype.getIdProperty = function () { return NCLHDSAR.RequestTypeRow.idProperty; };
            RequestTypeDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestTypeRow.localTextPrefix; };
            RequestTypeDialog.prototype.getNameProperty = function () { return NCLHDSAR.RequestTypeRow.nameProperty; };
            RequestTypeDialog.prototype.getService = function () { return NCLHDSAR.RequestTypeService.baseUrl; };
            RequestTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestTypeDialog);
            return RequestTypeDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.RequestTypeDialog = RequestTypeDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestTypeEditor = /** @class */ (function (_super) {
            __extends(RequestTypeEditor, _super);
            function RequestTypeEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            RequestTypeEditor.prototype.getLookupKey = function () {
                return NCLHDSAR.RequestTypeRow.lookupKey;
            };
            RequestTypeEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup);
            };
            RequestTypeEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RequestTypeEditor);
            return RequestTypeEditor;
        }(Serenity.LookupEditorBase));
        NCLHDSAR.RequestTypeEditor = RequestTypeEditor;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var RequestTypeGrid = /** @class */ (function (_super) {
            __extends(RequestTypeGrid, _super);
            function RequestTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            RequestTypeGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.RequestType'; };
            RequestTypeGrid.prototype.getDialogType = function () { return NCLHDSAR.RequestTypeDialog; };
            RequestTypeGrid.prototype.getIdProperty = function () { return NCLHDSAR.RequestTypeRow.idProperty; };
            RequestTypeGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.RequestTypeRow.localTextPrefix; };
            RequestTypeGrid.prototype.getService = function () { return NCLHDSAR.RequestTypeService.baseUrl; };
            RequestTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RequestTypeGrid);
            return RequestTypeGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.RequestTypeGrid = RequestTypeGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestAttributesDialog = /** @class */ (function (_super) {
            __extends(SwRequestAttributesDialog, _super);
            function SwRequestAttributesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new NCLHDSAR.SwRequestAttributesForm(_this.idPrefix);
                _this.form = new NCLHDSAR.SwRequestAttributesForm(_this.idPrefix);
                _this.form.SystemMasterId.changeSelect2(function (e) {
                    var sysid = Q.toId(_this.form.SystemMasterId.value);
                    if (sysid != null) {
                        _this.form.ResolvedDt.value = null;
                    }
                });
                _this.form.RequestValue.changeSelect2(function (e) {
                    var rqvalue = Q.toId(_this.form.RequestValue.value);
                    if (rqvalue != null) {
                        _this.form.ResolvedDt.value = null;
                    }
                });
                //this.form.RequestValue.addValidationRule(this.uniqueName, e => {
                //    if (!(/^[0-9]*$/.test(this.form.RequestValue.value))) return "Only Numbers";
                //});
                _this.form.RequestValue.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.SystemMasterId.value != null) {
                        switch (_this.form.SystemMasterId.value) {
                            case "2":
                            case "3":
                                if ((_this.form.RequestValue.value.length > 12) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid NVS MP Card Number Format";
                                }
                                break;
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                                if (_this.form.RequestValue.value.length > 18) {
                                    return "Invalid SFDC ID Format";
                                }
                                break;
                            case "1":
                                if ((_this.form.RequestValue.value.length > 10) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid SEAWARE Client ID Format";
                                }
                                break;
                            case "8":
                            case "9":
                                if ((_this.form.RequestValue.value.length > 10) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid EPSILON OCI/SSC Client ID Format";
                                }
                                break;
                            case "10":
                                if ((_this.form.RequestValue.value.length > 13) || (!(/^[0-9]*$/.test(_this.form.RequestValue.value)))) {
                                    return "Invalid EPSILON NCL Client ID Format";
                                }
                                break;
                        }
                    }
                });
                return _this;
            }
            SwRequestAttributesDialog.prototype.getFormKey = function () { return NCLHDSAR.SwRequestAttributesForm.formKey; };
            SwRequestAttributesDialog.prototype.getIdProperty = function () { return NCLHDSAR.SwRequestAttributesRow.idProperty; };
            SwRequestAttributesDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.SwRequestAttributesRow.localTextPrefix; };
            SwRequestAttributesDialog.prototype.getNameProperty = function () { return NCLHDSAR.SwRequestAttributesRow.nameProperty; };
            SwRequestAttributesDialog.prototype.getService = function () { return NCLHDSAR.SwRequestAttributesService.baseUrl; };
            SwRequestAttributesDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var newBtn = {
                    title: "Save And New",
                    onClick: function () {
                        _this.save(function () {
                            var ent = {};
                            ent.Id = Q.toId(_this.form.Id.value);
                            _this.loadEntity(ent);
                        });
                    }
                };
                btns.push(newBtn);
                return btns;
            };
            SwRequestAttributesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SwRequestAttributesDialog);
            return SwRequestAttributesDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.SwRequestAttributesDialog = SwRequestAttributesDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
/// <reference path="../SwRequestAttributes/SwRequestAttributesDialog.ts" />
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwAttributeDialog = /** @class */ (function (_super) {
            __extends(SwAttributeDialog, _super);
            function SwAttributeDialog() {
                return _super.call(this) || this;
            }
            SwAttributeDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.Id, true);
            };
            SwAttributeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SwAttributeDialog);
            return SwAttributeDialog;
        }(NCLHDSAR.SwRequestAttributesDialog));
        NCLHDSAR.SwAttributeDialog = SwAttributeDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestAttributesGrid = /** @class */ (function (_super) {
            __extends(SwRequestAttributesGrid, _super);
            function SwRequestAttributesGrid(container) {
                return _super.call(this, container) || this;
            }
            SwRequestAttributesGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.SwRequestAttributes'; };
            SwRequestAttributesGrid.prototype.getDialogType = function () { return NCLHDSAR.SwRequestAttributesDialog; };
            SwRequestAttributesGrid.prototype.getIdProperty = function () { return NCLHDSAR.SwRequestAttributesRow.idProperty; };
            SwRequestAttributesGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.SwRequestAttributesRow.localTextPrefix; };
            SwRequestAttributesGrid.prototype.getService = function () { return NCLHDSAR.SwRequestAttributesService.baseUrl; };
            SwRequestAttributesGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            SwRequestAttributesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SwRequestAttributesGrid);
            return SwRequestAttributesGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.SwRequestAttributesGrid = SwRequestAttributesGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
/// <reference path="../SwRequestAttributes/SwRequestAttributesGrid.ts" />
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwAttributeGrid = /** @class */ (function (_super) {
            __extends(SwAttributeGrid, _super);
            function SwAttributeGrid(container) {
                return _super.call(this, container) || this;
            }
            SwAttributeGrid.prototype.getDialogType = function () { return NCLHDSAR.SwAttributeDialog; };
            SwAttributeGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete row">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(5, 0, {
                    field: 'Copy Value',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action copy-value" title="Copy value">' +
                        '<i class="fa fa-clipboard text-green"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(7, 0, {
                    field: 'Resolve Date',
                    name: '',
                    format: function (ctx) {
                        var CurItem = ctx.item;
                        var klass = "";
                        if (CurItem.ResolvedDt == null) {
                            klass = '<a class="inline-action resolve-date" title="Mark as Resolve">' +
                                '<i class="fa fa-calendar-plus-o text-green"></i></a>';
                        }
                        else {
                            klass = '<a class="inline-action date-resolved" title="Resolved">' +
                                '<i class="fa  fa-calendar-check-o text-green"></i></a>';
                        }
                        return klass;
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            SwAttributeGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            NCLHDSAR.SwRequestAttributesService.Delete({
                                EntityId: item.RequestAttributeId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('resolve-date')) {
                        Q.confirm('Mark as resolve?', function () {
                            var crow = Q.deepClone(_this.itemAt(row));
                            crow.ResolvedDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                            NCLHDSAR.SwRequestAttributesService.Update({
                                EntityId: item.RequestAttributeId,
                                Entity: crow
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('copy-value')) {
                        var crow = Q.deepClone(this.itemAt(row));
                        var dummy = $('<input>').val(crow.RequestValue).appendTo('body').select();
                        document.execCommand('copy');
                    }
                }
            };
            SwAttributeGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            SwAttributeGrid.prototype.addButtonClick = function () {
                this.editItem({ Id: this.requestID });
            };
            SwAttributeGrid.prototype.getInitialTitle = function () {
                return null;
            };
            SwAttributeGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.requestID;
            };
            Object.defineProperty(SwAttributeGrid.prototype, "requestID", {
                get: function () {
                    return this._RequestID;
                },
                set: function (value) {
                    if (this._RequestID !== value) {
                        this._RequestID = value;
                        this.setEquality('ID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SwAttributeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SwAttributeGrid);
            return SwAttributeGrid;
        }(NCLHDSAR.SwRequestAttributesGrid));
        NCLHDSAR.SwAttributeGrid = SwAttributeGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestDialog = /** @class */ (function (_super) {
            __extends(SwRequestDialog, _super);
            function SwRequestDialog() {
                var _this = _super.call(this) || this;
                _this.form = new NCLHDSAR.SwRequestForm(_this.idPrefix);
                _this.aGrid = new NCLHDSAR.SwAttributeGrid(_this.byId('SwAttributeGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                //this.aGrid.openDialogsAsPanel = true;
                //this.byId('General').closest('.field').hide().end().appendTo(this.byId('TabDetails'));
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                DAP.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            SwRequestDialog.prototype.getFormKey = function () { return NCLHDSAR.SwRequestForm.formKey; };
            SwRequestDialog.prototype.getIdProperty = function () { return NCLHDSAR.SwRequestRow.idProperty; };
            SwRequestDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.SwRequestRow.localTextPrefix; };
            SwRequestDialog.prototype.getNameProperty = function () { return NCLHDSAR.SwRequestRow.nameProperty; };
            SwRequestDialog.prototype.getService = function () { return NCLHDSAR.SwRequestService.baseUrl; };
            SwRequestDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            SwRequestDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            SwRequestDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            SwRequestDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Attributes', this.isNewOrDeleted());
                this.aGrid.requestID = entity.RecordId;
            };
            SwRequestDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                //Q.reloadLookup('Default.Request');
            };
            SwRequestDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                //Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // this.form.NclYn.element.closest('.category').toggleClass('category collapsible collapsed', true);
                //this.form.Address1.element.closest('.category').toggleClass('category collapsible collapsed', true);
                // img.toggleClass('fa-plus').toggleClass('fa-minus');
                // remove required asterisk (*)
                //this.element.find('sup').hide();
                //this.applyChangesButton.hide();
                //this.saveAndCloseButton.hide();
            };
            SwRequestDialog.prototype.updateTitle = function () {
                //super.updateTitle();
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                this.dialogTitle = 'View Request (' + this.getEntityNameFieldValue() + ')';
            };
            SwRequestDialog.prototype.createToolbar = function () {
            };
            SwRequestDialog.prototype.createQuickSearchInput = function () {
            };
            SwRequestDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SwRequestDialog);
            return SwRequestDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.SwRequestDialog = SwRequestDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestGrid = /** @class */ (function (_super) {
            __extends(SwRequestGrid, _super);
            function SwRequestGrid(container) {
                return _super.call(this, container) || this;
            }
            SwRequestGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.SwRequest'; };
            SwRequestGrid.prototype.getDialogType = function () { return NCLHDSAR.SwRequestDialog; };
            SwRequestGrid.prototype.getIdProperty = function () { return NCLHDSAR.SwRequestRow.idProperty; };
            SwRequestGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.SwRequestRow.localTextPrefix; };
            SwRequestGrid.prototype.getService = function () { return NCLHDSAR.SwRequestService.baseUrl; };
            SwRequestGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // make employee filter a textbox, instead of lookup, and search by starts with
                var filter = Q.first(filters, function (x) { return x.field == "ClientLastName" /* ClientLastName */; });
                filter.title = "Last Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ClientLastName" /* ClientLastName */], 'like', h.value + '%']);
                    }
                };
                filter = Q.first(filters, function (x) { return x.field == "ClientFirstName" /* ClientFirstName */; });
                filter.title = "First Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["ClientFirstName" /* ClientFirstName */], 'like', h.value + '%']);
                    }
                };
                return filters;
            };
            /**
             * This method is called to get list of buttons to be created.
             */
            SwRequestGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            SwRequestGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            SwRequestGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SwRequestGrid);
            return SwRequestGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.SwRequestGrid = SwRequestGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SwRequestAttributesEditor = /** @class */ (function (_super) {
            __extends(SwRequestAttributesEditor, _super);
            function SwRequestAttributesEditor(container) {
                return _super.call(this, container) || this;
            }
            SwRequestAttributesEditor.prototype.getColumnsKey = function () { return 'NCLHDSAR.SwRequestAttributes'; };
            SwRequestAttributesEditor.prototype.getDialogType = function () { return NCLHDSAR.SwRequestAttributesDialog; };
            SwRequestAttributesEditor.prototype.getLocalTextPrefix = function () { return NCLHDSAR.SwRequestAttributesRow.localTextPrefix; };
            SwRequestAttributesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SwRequestAttributesEditor);
            return SwRequestAttributesEditor;
        }(DAP.Common.GridEditorBase));
        NCLHDSAR.SwRequestAttributesEditor = SwRequestAttributesEditor;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SystemMasterDialog = /** @class */ (function (_super) {
            __extends(SystemMasterDialog, _super);
            function SystemMasterDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHDSAR.SystemMasterForm(_this.idPrefix);
                return _this;
            }
            SystemMasterDialog.prototype.getFormKey = function () { return NCLHDSAR.SystemMasterForm.formKey; };
            SystemMasterDialog.prototype.getIdProperty = function () { return NCLHDSAR.SystemMasterRow.idProperty; };
            SystemMasterDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.SystemMasterRow.localTextPrefix; };
            SystemMasterDialog.prototype.getNameProperty = function () { return NCLHDSAR.SystemMasterRow.nameProperty; };
            SystemMasterDialog.prototype.getService = function () { return NCLHDSAR.SystemMasterService.baseUrl; };
            SystemMasterDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SystemMasterDialog);
            return SystemMasterDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.SystemMasterDialog = SystemMasterDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SystemMasterEditor = /** @class */ (function (_super) {
            __extends(SystemMasterEditor, _super);
            function SystemMasterEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            SystemMasterEditor.prototype.getLookupKey = function () {
                return NCLHDSAR.SystemMasterRow.lookupKey;
            };
            SystemMasterEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' (' + item.Id + ' - ' + item.SystemTable + ')';
            };
            SystemMasterEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SystemMasterEditor);
            return SystemMasterEditor;
        }(Serenity.LookupEditorBase));
        NCLHDSAR.SystemMasterEditor = SystemMasterEditor;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var SystemMasterGrid = /** @class */ (function (_super) {
            __extends(SystemMasterGrid, _super);
            function SystemMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            SystemMasterGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.SystemMaster'; };
            SystemMasterGrid.prototype.getDialogType = function () { return NCLHDSAR.SystemMasterDialog; };
            SystemMasterGrid.prototype.getIdProperty = function () { return NCLHDSAR.SystemMasterRow.idProperty; };
            SystemMasterGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.SystemMasterRow.localTextPrefix; };
            SystemMasterGrid.prototype.getService = function () { return NCLHDSAR.SystemMasterService.baseUrl; };
            SystemMasterGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SystemMasterGrid);
            return SystemMasterGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.SystemMasterGrid = SystemMasterGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSMICROS;
    (function (NCLHODSMICROS) {
        var DataFlowDialog = /** @class */ (function (_super) {
            __extends(DataFlowDialog, _super);
            function DataFlowDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHODSMICROS.DataFlowForm(_this.idPrefix);
                return _this;
            }
            DataFlowDialog.prototype.getFormKey = function () { return NCLHODSMICROS.DataFlowForm.formKey; };
            DataFlowDialog.prototype.getIdProperty = function () { return NCLHODSMICROS.DataFlowRow.idProperty; };
            DataFlowDialog.prototype.getLocalTextPrefix = function () { return NCLHODSMICROS.DataFlowRow.localTextPrefix; };
            DataFlowDialog.prototype.getNameProperty = function () { return NCLHODSMICROS.DataFlowRow.nameProperty; };
            DataFlowDialog.prototype.getService = function () { return NCLHODSMICROS.DataFlowService.baseUrl; };
            DataFlowDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            DataFlowDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DataFlowDialog);
            return DataFlowDialog;
        }(Serenity.EntityDialog));
        NCLHODSMICROS.DataFlowDialog = DataFlowDialog;
    })(NCLHODSMICROS = DAP.NCLHODSMICROS || (DAP.NCLHODSMICROS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSMICROS;
    (function (NCLHODSMICROS) {
        var DataFlowGrid = /** @class */ (function (_super) {
            __extends(DataFlowGrid, _super);
            function DataFlowGrid(container) {
                return _super.call(this, container) || this;
            }
            DataFlowGrid.prototype.getColumnsKey = function () { return 'NCLHODSMICROS.DataFlow'; };
            DataFlowGrid.prototype.getDialogType = function () { return NCLHODSMICROS.DataFlowDialog; };
            DataFlowGrid.prototype.getIdProperty = function () { return NCLHODSMICROS.DataFlowRow.idProperty; };
            DataFlowGrid.prototype.getLocalTextPrefix = function () { return NCLHODSMICROS.DataFlowRow.localTextPrefix; };
            DataFlowGrid.prototype.getService = function () { return NCLHODSMICROS.DataFlowService.baseUrl; };
            DataFlowGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            DataFlowGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DataFlowGrid);
            return DataFlowGrid;
        }(Serenity.EntityGrid));
        NCLHODSMICROS.DataFlowGrid = DataFlowGrid;
    })(NCLHODSMICROS = DAP.NCLHODSMICROS || (DAP.NCLHODSMICROS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var AmoslevelDialog = /** @class */ (function (_super) {
            __extends(AmoslevelDialog, _super);
            function AmoslevelDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHODSSPENDVIS.AmoslevelForm(_this.idPrefix);
                return _this;
            }
            AmoslevelDialog.prototype.getFormKey = function () { return NCLHODSSPENDVIS.AmoslevelForm.formKey; };
            AmoslevelDialog.prototype.getIdProperty = function () { return NCLHODSSPENDVIS.AmoslevelRow.idProperty; };
            AmoslevelDialog.prototype.getLocalTextPrefix = function () { return NCLHODSSPENDVIS.AmoslevelRow.localTextPrefix; };
            AmoslevelDialog.prototype.getNameProperty = function () { return NCLHODSSPENDVIS.AmoslevelRow.nameProperty; };
            AmoslevelDialog.prototype.getService = function () { return NCLHODSSPENDVIS.AmoslevelService.baseUrl; };
            AmoslevelDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AmoslevelDialog);
            return AmoslevelDialog;
        }(Serenity.EntityDialog));
        NCLHODSSPENDVIS.AmoslevelDialog = AmoslevelDialog;
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var AmoslevelGrid = /** @class */ (function (_super) {
            __extends(AmoslevelGrid, _super);
            function AmoslevelGrid(container) {
                return _super.call(this, container) || this;
            }
            AmoslevelGrid.prototype.getColumnsKey = function () { return 'NCLHODSSPENDVIS.Amoslevel'; };
            AmoslevelGrid.prototype.getDialogType = function () { return NCLHODSSPENDVIS.AmoslevelDialog; };
            AmoslevelGrid.prototype.getIdProperty = function () { return NCLHODSSPENDVIS.AmoslevelRow.idProperty; };
            AmoslevelGrid.prototype.getLocalTextPrefix = function () { return NCLHODSSPENDVIS.AmoslevelRow.localTextPrefix; };
            AmoslevelGrid.prototype.getService = function () { return NCLHODSSPENDVIS.AmoslevelService.baseUrl; };
            AmoslevelGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: NCLHODSSPENDVIS.AmoslevelService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            AmoslevelGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AmoslevelGrid);
            return AmoslevelGrid;
        }(Serenity.EntityGrid));
        NCLHODSSPENDVIS.AmoslevelGrid = AmoslevelGrid;
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var DataFlowDialog = /** @class */ (function (_super) {
            __extends(DataFlowDialog, _super);
            function DataFlowDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHODSSPENDVIS.DataFlowForm(_this.idPrefix);
                return _this;
            }
            DataFlowDialog.prototype.getFormKey = function () { return NCLHODSSPENDVIS.DataFlowForm.formKey; };
            DataFlowDialog.prototype.getIdProperty = function () { return NCLHODSSPENDVIS.DataFlowRow.idProperty; };
            DataFlowDialog.prototype.getLocalTextPrefix = function () { return NCLHODSSPENDVIS.DataFlowRow.localTextPrefix; };
            DataFlowDialog.prototype.getNameProperty = function () { return NCLHODSSPENDVIS.DataFlowRow.nameProperty; };
            DataFlowDialog.prototype.getService = function () { return NCLHODSSPENDVIS.DataFlowService.baseUrl; };
            DataFlowDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            DataFlowDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DataFlowDialog);
            return DataFlowDialog;
        }(Serenity.EntityDialog));
        NCLHODSSPENDVIS.DataFlowDialog = DataFlowDialog;
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHODSSPENDVIS;
    (function (NCLHODSSPENDVIS) {
        var DataFlowGrid = /** @class */ (function (_super) {
            __extends(DataFlowGrid, _super);
            function DataFlowGrid(container) {
                return _super.call(this, container) || this;
            }
            DataFlowGrid.prototype.getColumnsKey = function () { return 'NCLHODSSPENDVIS.DataFlow'; };
            DataFlowGrid.prototype.getDialogType = function () { return NCLHODSSPENDVIS.DataFlowDialog; };
            DataFlowGrid.prototype.getIdProperty = function () { return NCLHODSSPENDVIS.DataFlowRow.idProperty; };
            DataFlowGrid.prototype.getLocalTextPrefix = function () { return NCLHODSSPENDVIS.DataFlowRow.localTextPrefix; };
            DataFlowGrid.prototype.getService = function () { return NCLHODSSPENDVIS.DataFlowService.baseUrl; };
            DataFlowGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            DataFlowGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DataFlowGrid);
            return DataFlowGrid;
        }(Serenity.EntityGrid));
        NCLHODSSPENDVIS.DataFlowGrid = DataFlowGrid;
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimInvoiceDialog = /** @class */ (function (_super) {
            __extends(DimInvoiceDialog, _super);
            function DimInvoiceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHDW.DimInvoiceForm(_this.idPrefix);
                return _this;
            }
            DimInvoiceDialog.prototype.getFormKey = function () { return PCHDW.DimInvoiceForm.formKey; };
            DimInvoiceDialog.prototype.getIdProperty = function () { return PCHDW.DimInvoiceRow.idProperty; };
            DimInvoiceDialog.prototype.getLocalTextPrefix = function () { return PCHDW.DimInvoiceRow.localTextPrefix; };
            DimInvoiceDialog.prototype.getNameProperty = function () { return PCHDW.DimInvoiceRow.nameProperty; };
            DimInvoiceDialog.prototype.getService = function () { return PCHDW.DimInvoiceService.baseUrl; };
            DimInvoiceDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            DimInvoiceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DimInvoiceDialog);
            return DimInvoiceDialog;
        }(Serenity.EntityDialog));
        PCHDW.DimInvoiceDialog = DimInvoiceDialog;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimInvoiceGrid = /** @class */ (function (_super) {
            __extends(DimInvoiceGrid, _super);
            function DimInvoiceGrid(container) {
                return _super.call(this, container) || this;
            }
            DimInvoiceGrid.prototype.getColumnsKey = function () { return 'PCHDW.DimInvoice'; };
            DimInvoiceGrid.prototype.getDialogType = function () { return PCHDW.DimInvoiceDialog; };
            DimInvoiceGrid.prototype.getIdProperty = function () { return PCHDW.DimInvoiceRow.idProperty; };
            DimInvoiceGrid.prototype.getLocalTextPrefix = function () { return PCHDW.DimInvoiceRow.localTextPrefix; };
            DimInvoiceGrid.prototype.getService = function () { return PCHDW.DimInvoiceService.baseUrl; };
            DimInvoiceGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            DimInvoiceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DimInvoiceGrid);
            return DimInvoiceGrid;
        }(Serenity.EntityGrid));
        PCHDW.DimInvoiceGrid = DimInvoiceGrid;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentDialog = /** @class */ (function (_super) {
            __extends(OutboundAgentDialog, _super);
            function OutboundAgentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODS.OutboundAgentForm(_this.idPrefix);
                _this.form = new PCHODS.OutboundAgentForm(_this.idPrefix);
                _this.form.NvsUserId.changeSelect2(function (e) {
                    var nvsuserid = Q.toId(_this.form.NvsUserId.value);
                    if (nvsuserid != null) {
                        // this.form.CompanyCd.value = PCHODS.OutboundNvsUsersRow.getLookup().itemById[nvsuserid].CompanyCd;                   
                    }
                });
                return _this;
            }
            OutboundAgentDialog.prototype.getFormKey = function () { return PCHODS.OutboundAgentForm.formKey; };
            OutboundAgentDialog.prototype.getIdProperty = function () { return PCHODS.OutboundAgentRow.idProperty; };
            OutboundAgentDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundAgentRow.localTextPrefix; };
            OutboundAgentDialog.prototype.getNameProperty = function () { return PCHODS.OutboundAgentRow.nameProperty; };
            OutboundAgentDialog.prototype.getService = function () { return PCHODS.OutboundAgentService.baseUrl; };
            OutboundAgentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundAgentDialog);
            return OutboundAgentDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundAgentDialog = OutboundAgentDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentGrid = /** @class */ (function (_super) {
            __extends(OutboundAgentGrid, _super);
            function OutboundAgentGrid(container) {
                return _super.call(this, container) || this;
            }
            OutboundAgentGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundAgent'; };
            OutboundAgentGrid.prototype.getDialogType = function () { return PCHODS.OutboundAgentDialog; };
            OutboundAgentGrid.prototype.getIdProperty = function () { return PCHODS.OutboundAgentRow.idProperty; };
            OutboundAgentGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundAgentRow.localTextPrefix; };
            OutboundAgentGrid.prototype.getService = function () { return PCHODS.OutboundAgentService.baseUrl; };
            OutboundAgentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundAgentGrid);
            return OutboundAgentGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundAgentGrid = OutboundAgentGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentLocationDialog = /** @class */ (function (_super) {
            __extends(OutboundAgentLocationDialog, _super);
            function OutboundAgentLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODS.OutboundAgentLocationForm(_this.idPrefix);
                return _this;
            }
            OutboundAgentLocationDialog.prototype.getFormKey = function () { return PCHODS.OutboundAgentLocationForm.formKey; };
            OutboundAgentLocationDialog.prototype.getIdProperty = function () { return PCHODS.OutboundAgentLocationRow.idProperty; };
            OutboundAgentLocationDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundAgentLocationRow.localTextPrefix; };
            OutboundAgentLocationDialog.prototype.getNameProperty = function () { return PCHODS.OutboundAgentLocationRow.nameProperty; };
            OutboundAgentLocationDialog.prototype.getService = function () { return PCHODS.OutboundAgentLocationService.baseUrl; };
            OutboundAgentLocationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundAgentLocationDialog);
            return OutboundAgentLocationDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundAgentLocationDialog = OutboundAgentLocationDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentLocationEditor = /** @class */ (function (_super) {
            __extends(OutboundAgentLocationEditor, _super);
            function OutboundAgentLocationEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            OutboundAgentLocationEditor.prototype.getLookupKey = function () {
                return PCHODS.OutboundAgentLocationRow.lookupKey;
            };
            OutboundAgentLocationEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.AgentLocationId + ']';
            };
            OutboundAgentLocationEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], OutboundAgentLocationEditor);
            return OutboundAgentLocationEditor;
        }(Serenity.LookupEditorBase));
        PCHODS.OutboundAgentLocationEditor = OutboundAgentLocationEditor;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundAgentLocationGrid = /** @class */ (function (_super) {
            __extends(OutboundAgentLocationGrid, _super);
            function OutboundAgentLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            OutboundAgentLocationGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundAgentLocation'; };
            OutboundAgentLocationGrid.prototype.getDialogType = function () { return PCHODS.OutboundAgentLocationDialog; };
            OutboundAgentLocationGrid.prototype.getIdProperty = function () { return PCHODS.OutboundAgentLocationRow.idProperty; };
            OutboundAgentLocationGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundAgentLocationRow.localTextPrefix; };
            OutboundAgentLocationGrid.prototype.getService = function () { return PCHODS.OutboundAgentLocationService.baseUrl; };
            OutboundAgentLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundAgentLocationGrid);
            return OutboundAgentLocationGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundAgentLocationGrid = OutboundAgentLocationGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistDialog = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistDialog, _super);
            function OutboundCommissionHistDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODS.OutboundCommissionHistForm(_this.idPrefix);
                return _this;
            }
            OutboundCommissionHistDialog.prototype.getFormKey = function () { return PCHODS.OutboundCommissionHistForm.formKey; };
            OutboundCommissionHistDialog.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionHistRow.idProperty; };
            OutboundCommissionHistDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionHistRow.localTextPrefix; };
            OutboundCommissionHistDialog.prototype.getNameProperty = function () { return PCHODS.OutboundCommissionHistRow.nameProperty; };
            OutboundCommissionHistDialog.prototype.getService = function () { return PCHODS.OutboundCommissionHistService.baseUrl; };
            OutboundCommissionHistDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionHistDialog);
            return OutboundCommissionHistDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundCommissionHistDialog = OutboundCommissionHistDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistGrid = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistGrid, _super);
            function OutboundCommissionHistGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            OutboundCommissionHistGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundCommissionHist'; };
            OutboundCommissionHistGrid.prototype.getDialogType = function () { return PCHODS.OutboundCommissionHistDialog; };
            OutboundCommissionHistGrid.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionHistRow.idProperty; };
            OutboundCommissionHistGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionHistRow.localTextPrefix; };
            OutboundCommissionHistGrid.prototype.getService = function () { return PCHODS.OutboundCommissionHistService.baseUrl; };
            OutboundCommissionHistGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker"; }), 1);
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                buttons.push({
                    title: 'Create New Bracket',
                    cssClass: 'add-button',
                    onClick: function (e) { return _this.createNewBracketClick(); },
                    separator: true
                });
                return buttons;
            };
            OutboundCommissionHistGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            OutboundCommissionHistGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            OutboundCommissionHistGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.CommissionHistId];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            OutboundCommissionHistGrid.prototype.numericInputFormatter = function (ctx, num_dec) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.CommissionHistId];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                if (num_dec == 2) {
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0.##') + "'/>";
                }
                else if (num_dec == 4) {
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0.####') + "'/>";
                }
            };
            OutboundCommissionHistGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx, 2); };
                var num4 = function (ctx) { return _this.numericInputFormatter(ctx, 4); };
                Q.first(columns, function (x) { return x.field === "LowNumBookings" /* LowNumBookings */; }).format = num;
                Q.first(columns, function (x) { return x.field === "HighNumBookings" /* HighNumBookings */; }).format = num;
                Q.first(columns, function (x) { return x.field === "CommissionRate" /* CommissionRate */; }).format = num4;
                return columns;
            };
            OutboundCommissionHistGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.CommissionHistId];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'CommissionRate' || field == 'LowNumBookings' || field == 'HighNumBookings') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.CommissionHistId] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            OutboundCommissionHistGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.CommissionHistId = key;
                    Q.serviceRequest('PCHODS/OutboundCommissionHist/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            OutboundCommissionHistGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setGrouping([{
                        getter: 'CompanyName'
                    }]);
                this.view.collapseAllGroups(0);
                return grid;
            };
            OutboundCommissionHistGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = false;
                return opt;
            };
            OutboundCommissionHistGrid.prototype.usePager = function () {
                return false;
            };
            OutboundCommissionHistGrid.prototype.createNewBracketClick = function () {
                var _this = this;
                var dialog = new PCHODS.SelectComapanyDialog();
                dialog.returnData = function (dataList) {
                    _this._CompanyID = dataList;
                };
                this.initDialog(dialog);
                dialog.dialogOpen();
            };
            OutboundCommissionHistGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionHistGrid);
            return OutboundCommissionHistGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundCommissionHistGrid = OutboundCommissionHistGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var SelectComapanyDialog = /** @class */ (function (_super) {
            __extends(SelectComapanyDialog, _super);
            function SelectComapanyDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODS.SelectCompanyForm(_this.idPrefix);
                _this.dialogTitle = "Create New Bracket";
                return _this;
            }
            SelectComapanyDialog.prototype.getFormKey = function () { return PCHODS.SelectCompanyForm.formKey; };
            SelectComapanyDialog.prototype.createBracket = function () {
                var HistRow;
                var equalFilter = { "CompanyCd": this.form.CompanyCd.value };
                PCHODS.OutboundCommissionHistService.List({
                    EqualityFilter: equalFilter
                }, function (response) {
                    HistRow = response.Entities;
                });
            };
            SelectComapanyDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Create New Bracket',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.CompanyCd.value == null ||
                                Q.isEmptyOrNull(_this.form.CompanyCd.value)) {
                                Q.notifyError("Please select a Company!");
                                return;
                            }
                            //var HistRow[] = <PCHODS.OutboundCommissionHistRow>{};
                            var HistRow;
                            var equalFilter = { "CompanyCd": _this.form.CompanyCd.value };
                            PCHODS.OutboundCommissionHistService.List({
                                EqualityFilter: equalFilter
                            }, function (response) {
                                HistRow = response.Entities;
                                var _loop_1 = function (item) {
                                    item.InactiveDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                                    //Q.alert(item.InactiveDt);
                                    PCHODS.OutboundCommissionHistService.Update({
                                        EntityId: item.CommissionHistId,
                                        Entity: item
                                    }, function (response) {
                                        item.CommissionHistId = null;
                                        item.ActiveDt = item.InactiveDt;
                                        item.InactiveDt = null;
                                        PCHODS.OutboundCommissionHistService.Create({
                                            Entity: item
                                        }, function (response) {
                                            Serenity.SubDialogHelper.triggerDataChange(_this);
                                        });
                                    });
                                };
                                for (var _i = 0, HistRow_1 = HistRow; _i < HistRow_1.length; _i++) {
                                    var item = HistRow_1[_i];
                                    _loop_1(item);
                                }
                                Q.notifySuccess("Bracket Created Successfully!", '');
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            SelectComapanyDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 550;
                return opt;
            };
            SelectComapanyDialog.prototype.onDialogClose = function () {
                this.returnData(this.form.CompanyCd.value);
            };
            SelectComapanyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SelectComapanyDialog);
            return SelectComapanyDialog;
        }(Serenity.PropertyDialog));
        PCHODS.SelectComapanyDialog = SelectComapanyDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var SelectCompanyEditor = /** @class */ (function (_super) {
            __extends(SelectCompanyEditor, _super);
            function SelectCompanyEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("100", "Oceania Cruises");
                _this.addOption("110", "Regent Seven Seas Cruises");
                _this.addOption("111", "International");
                _this.addOption("112", "Latam");
                _this.addOption("113", "UK DE");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
                //this.addItem({
                //    id: "key3",
                //    text: "Text 3"
                //});
                //// don't let selecting this one (disabled)
                //this.addItem({
                //    id: "key4",
                //    text: "Text 4",
                //    disabled: true
                //});
            }
            SelectCompanyEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SelectCompanyEditor);
            return SelectCompanyEditor;
        }(Serenity.Select2Editor));
        PCHODS.SelectCompanyEditor = SelectCompanyEditor;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistAuDialog = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistAuDialog, _super);
            function OutboundCommissionHistAuDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODS.OutboundCommissionHistAuForm(_this.idPrefix);
                return _this;
            }
            OutboundCommissionHistAuDialog.prototype.getFormKey = function () { return PCHODS.OutboundCommissionHistAuForm.formKey; };
            OutboundCommissionHistAuDialog.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionHistAuRow.idProperty; };
            OutboundCommissionHistAuDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionHistAuRow.localTextPrefix; };
            OutboundCommissionHistAuDialog.prototype.getNameProperty = function () { return PCHODS.OutboundCommissionHistAuRow.nameProperty; };
            OutboundCommissionHistAuDialog.prototype.getService = function () { return PCHODS.OutboundCommissionHistAuService.baseUrl; };
            OutboundCommissionHistAuDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionHistAuDialog);
            return OutboundCommissionHistAuDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundCommissionHistAuDialog = OutboundCommissionHistAuDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistAuGrid = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistAuGrid, _super);
            function OutboundCommissionHistAuGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            OutboundCommissionHistAuGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundCommissionHistAu'; };
            OutboundCommissionHistAuGrid.prototype.getDialogType = function () { return PCHODS.OutboundCommissionHistAuDialog; };
            OutboundCommissionHistAuGrid.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionHistAuRow.idProperty; };
            OutboundCommissionHistAuGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionHistAuRow.localTextPrefix; };
            OutboundCommissionHistAuGrid.prototype.getService = function () { return PCHODS.OutboundCommissionHistAuService.baseUrl; };
            OutboundCommissionHistAuGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker"; }), 1);
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                buttons.push({
                    title: 'Create New Bracket',
                    cssClass: 'add-button',
                    onClick: function (e) { return _this.createNewBracketClick(); },
                    separator: true
                });
                return buttons;
            };
            OutboundCommissionHistAuGrid.prototype.createNewBracketClick = function () {
                var _this = this;
                Q.confirm('Are you sure you want to create a new tear breakets?', function () {
                    var HistRow;
                    var equalFilter = { "CompanyCd": 111 };
                    PCHODS.OutboundCommissionHistAuService.List({
                        EqualityFilter: equalFilter
                    }, function (response) {
                        HistRow = response.Entities;
                        var _loop_2 = function (item) {
                            item.InactiveDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                            //Q.alert(item.InactiveDt);
                            PCHODS.OutboundCommissionHistAuService.Update({
                                EntityId: item.CommissionHistAuId,
                                Entity: item
                            }, function (response) {
                                item.CommissionHistAuId = null;
                                item.ActiveDt = item.InactiveDt;
                                item.InactiveDt = null;
                                PCHODS.OutboundCommissionHistAuService.Create({
                                    Entity: item
                                }, function (response) {
                                    _this.refresh();
                                });
                            });
                        };
                        for (var _i = 0, HistRow_2 = HistRow; _i < HistRow_2.length; _i++) {
                            var item = HistRow_2[_i];
                            _loop_2(item);
                        }
                        Q.notifySuccess("Bracket Created Successfully!", '');
                    });
                });
            };
            OutboundCommissionHistAuGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            OutboundCommissionHistAuGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            OutboundCommissionHistAuGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.CommissionHistAuId];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            OutboundCommissionHistAuGrid.prototype.numericInputFormatter = function (ctx, num_dec) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.CommissionHistAuId];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                if (num_dec == 2) {
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0.##') + "'/>";
                }
                else if (num_dec == 4) {
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0.####') + "'/>";
                }
            };
            OutboundCommissionHistAuGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx, 2); };
                var num4 = function (ctx) { return _this.numericInputFormatter(ctx, 4); };
                Q.first(columns, function (x) { return x.field === "LowNumBookings" /* LowNumBookings */; }).format = num;
                Q.first(columns, function (x) { return x.field === "HighNumBookings" /* HighNumBookings */; }).format = num;
                Q.first(columns, function (x) { return x.field === "CommissionRate" /* CommissionRate */; }).format = num4;
                return columns;
            };
            OutboundCommissionHistAuGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.CommissionHistAuId];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'CommissionRate' || field == 'LowNumBookings' || field == 'HighNumBookings') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.CommissionHistAuId] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            OutboundCommissionHistAuGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.CommissionHistAuId = key;
                    Q.serviceRequest('PCHODS/OutboundCommissionHistAu/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            OutboundCommissionHistAuGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setGrouping([{
                        getter: 'CompanyName'
                    }]);
                return grid;
            };
            OutboundCommissionHistAuGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = false;
                return opt;
            };
            OutboundCommissionHistAuGrid.prototype.usePager = function () {
                return false;
            };
            OutboundCommissionHistAuGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionHistAuGrid);
            return OutboundCommissionHistAuGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundCommissionHistAuGrid = OutboundCommissionHistAuGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistBrDialog = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistBrDialog, _super);
            function OutboundCommissionHistBrDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODS.OutboundCommissionHistBrForm(_this.idPrefix);
                return _this;
            }
            OutboundCommissionHistBrDialog.prototype.getFormKey = function () { return PCHODS.OutboundCommissionHistBrForm.formKey; };
            OutboundCommissionHistBrDialog.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionHistBrRow.idProperty; };
            OutboundCommissionHistBrDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionHistBrRow.localTextPrefix; };
            OutboundCommissionHistBrDialog.prototype.getNameProperty = function () { return PCHODS.OutboundCommissionHistBrRow.nameProperty; };
            OutboundCommissionHistBrDialog.prototype.getService = function () { return PCHODS.OutboundCommissionHistBrService.baseUrl; };
            OutboundCommissionHistBrDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionHistBrDialog);
            return OutboundCommissionHistBrDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundCommissionHistBrDialog = OutboundCommissionHistBrDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionHistBrGrid = /** @class */ (function (_super) {
            __extends(OutboundCommissionHistBrGrid, _super);
            function OutboundCommissionHistBrGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.AllowEdits = false;
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            OutboundCommissionHistBrGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundCommissionHistBr'; };
            OutboundCommissionHistBrGrid.prototype.getDialogType = function () { return PCHODS.OutboundCommissionHistBrDialog; };
            OutboundCommissionHistBrGrid.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionHistBrRow.idProperty; };
            OutboundCommissionHistBrGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionHistBrRow.localTextPrefix; };
            OutboundCommissionHistBrGrid.prototype.getService = function () { return PCHODS.OutboundCommissionHistBrService.baseUrl; };
            OutboundCommissionHistBrGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker"; }), 1);
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                buttons.push({
                    title: 'Create New Bracket',
                    cssClass: 'add-button',
                    onClick: function (e) { return _this.createNewBracketClick(); },
                    separator: true
                });
                return buttons;
            };
            OutboundCommissionHistBrGrid.prototype.createNewBracketClick = function () {
                var _this = this;
                Q.confirm('Are you sure you want to create a new tear breakets?', function () {
                    var HistRow;
                    var equalFilter = { "CompanyCd": 111 };
                    PCHODS.OutboundCommissionHistBrService.List({
                        EqualityFilter: equalFilter
                    }, function (response) {
                        HistRow = response.Entities;
                        var _loop_3 = function (item) {
                            item.InactiveDt = Q.formatDate(new Date(), "MM/dd/yyyy");
                            //Q.alert(item.InactiveDt);
                            PCHODS.OutboundCommissionHistBrService.Update({
                                EntityId: item.CommissionHistBrId,
                                Entity: item
                            }, function (response) {
                                item.CommissionHistBrId = null;
                                item.ActiveDt = item.InactiveDt;
                                item.InactiveDt = null;
                                PCHODS.OutboundCommissionHistBrService.Create({
                                    Entity: item
                                }, function (response) {
                                    _this.AllowEdits = true;
                                    _this.refresh();
                                });
                            });
                        };
                        for (var _i = 0, HistRow_3 = HistRow; _i < HistRow_3.length; _i++) {
                            var item = HistRow_3[_i];
                            _loop_3(item);
                        }
                        Q.notifySuccess("Bracket Created Successfully!", '');
                    });
                });
            };
            OutboundCommissionHistBrGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            OutboundCommissionHistBrGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            OutboundCommissionHistBrGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.CommissionHistBrId];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            OutboundCommissionHistBrGrid.prototype.numericInputFormatter = function (ctx, num_dec) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.CommissionHistBrId];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                if (num_dec == 2) {
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0.##') + "'/>";
                }
                else if (num_dec == 4) {
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0.####') + "'/>";
                }
            };
            OutboundCommissionHistBrGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx, 2); };
                var num4 = function (ctx) { return _this.numericInputFormatter(ctx, 4); };
                Q.first(columns, function (x) { return x.field === "LowNumBookings" /* LowNumBookings */; }).format = num;
                Q.first(columns, function (x) { return x.field === "HighNumBookings" /* HighNumBookings */; }).format = num;
                Q.first(columns, function (x) { return x.field === "CommissionRate" /* CommissionRate */; }).format = num4;
                return columns;
            };
            OutboundCommissionHistBrGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.CommissionHistBrId];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'CommissionRate' || field == 'LowNumBookings' || field == 'HighNumBookings') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.CommissionHistBrId] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            OutboundCommissionHistBrGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                //if (!this.AllowEdits) {
                //    Q.notifyError(Q.text('Only new brackets could be editied!'), '', null);
                //    this.refresh();
                //    return;
                //}
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.CommissionHistBrId = key;
                    Q.serviceRequest('PCHODS/OutboundCommissionHistBr/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            OutboundCommissionHistBrGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setGrouping([{
                        getter: 'CompanyName'
                    }]);
                return grid;
            };
            OutboundCommissionHistBrGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = false;
                return opt;
            };
            OutboundCommissionHistBrGrid.prototype.usePager = function () {
                return false;
            };
            OutboundCommissionHistBrGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionHistBrGrid);
            return OutboundCommissionHistBrGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundCommissionHistBrGrid = OutboundCommissionHistBrGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionPeriodDialog = /** @class */ (function (_super) {
            __extends(OutboundCommissionPeriodDialog, _super);
            function OutboundCommissionPeriodDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODS.OutboundCommissionPeriodForm(_this.idPrefix);
                return _this;
            }
            OutboundCommissionPeriodDialog.prototype.getFormKey = function () { return PCHODS.OutboundCommissionPeriodForm.formKey; };
            OutboundCommissionPeriodDialog.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionPeriodRow.idProperty; };
            OutboundCommissionPeriodDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionPeriodRow.localTextPrefix; };
            OutboundCommissionPeriodDialog.prototype.getService = function () { return PCHODS.OutboundCommissionPeriodService.baseUrl; };
            OutboundCommissionPeriodDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionPeriodDialog);
            return OutboundCommissionPeriodDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundCommissionPeriodDialog = OutboundCommissionPeriodDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionPeriodGrid = /** @class */ (function (_super) {
            __extends(OutboundCommissionPeriodGrid, _super);
            function OutboundCommissionPeriodGrid(container) {
                return _super.call(this, container) || this;
            }
            OutboundCommissionPeriodGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundCommissionPeriod'; };
            OutboundCommissionPeriodGrid.prototype.getDialogType = function () { return PCHODS.OutboundCommissionPeriodDialog; };
            OutboundCommissionPeriodGrid.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionPeriodRow.idProperty; };
            OutboundCommissionPeriodGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionPeriodRow.localTextPrefix; };
            OutboundCommissionPeriodGrid.prototype.getService = function () { return PCHODS.OutboundCommissionPeriodService.baseUrl; };
            OutboundCommissionPeriodGrid.prototype.createQuickSearchInput = function () { };
            OutboundCommissionPeriodGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.push({
                    field: 'Close Period',
                    name: '',
                    format: function (ctx) {
                        var CurItem = ctx.item;
                        var klass = "";
                        if (CurItem.IsOpen) {
                            klass = '<a class="inline-action close-period" title="Close Period">' +
                                '<i class="fa  fa-unlock text-red"></i></a>';
                        }
                        else {
                            klass = '<a class="inline-action period-closed" title="Period Closed">' +
                                '<i class="fa  fa-lock text-green"></i></a>';
                        }
                        return klass;
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OutboundCommissionPeriodGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('close-period')) {
                        Q.confirm('Are you sure you want to close this period?', function () {
                            var crow = Q.deepClone(_this.itemAt(row));
                            crow.ClosedDate = Q.formatDate(new Date(), "MM/dd/yyyy");
                            crow.IsOpen = false;
                            crow.ClosedBy = Q.Authorization.username;
                            PCHODS.OutboundCommissionPeriodService.Update({
                                EntityId: item.OutboundCommissionPeriodID,
                                Entity: crow
                            }, function (response) {
                                _this.refresh();
                            });
                            crow.IsOpen = true;
                            crow.ClosedDate = null;
                            crow.ClosedBy = null;
                            crow.OutboundCommissionPeriodID = null;
                            var stDate = new Date(crow.StartDate);
                            var st = new Date(stDate.getFullYear(), stDate.getMonth() + 1, 1);
                            //st.setDate(1);
                            //st.setMonth(st.getMonth() + 1,1);
                            crow.StartDate = st;
                            crow.EndDate = new Date(st.getFullYear(), st.getMonth() + 1, 0);
                            crow.PreviousMonth = crow.CurrentMonth;
                            crow.CurrentMonth = st;
                            PCHODS.OutboundCommissionPeriodService.Create({
                                Entity: crow
                            }, function (response) {
                                _this.refresh();
                            });
                            Q.notifySuccess("Commission Period Closed Successfully.");
                        });
                    }
                }
            };
            OutboundCommissionPeriodGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "Column Picker"), 1);
                //Add a Button
                //buttons.push({
                //    title: "Close Commission Period",
                //    hint: "Close Commission Period",
                //    cssClass: "'close-period-button' ",
                //    icon: "'fa-hand-lizard-o'",
                //    onClick: () => this.closePerdiodClick(),
                //    separator: true
                //});       
                return buttons;
            };
            OutboundCommissionPeriodGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionPeriodGrid);
            return OutboundCommissionPeriodGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundCommissionPeriodGrid = OutboundCommissionPeriodGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var CompanyEditor = /** @class */ (function (_super) {
            __extends(CompanyEditor, _super);
            function CompanyEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CompanyEditor.prototype.getLookupKey = function () {
                return PCHODS.OutboundCompanyRow.lookupKey;
            };
            CompanyEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    item.Nm +
                    ')';
            };
            CompanyEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CompanyEditor);
            return CompanyEditor;
        }(Serenity.LookupEditorBase));
        PCHODS.CompanyEditor = CompanyEditor;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundMonthlyRptArchiveOverrideDialog = /** @class */ (function (_super) {
            __extends(OutboundMonthlyRptArchiveOverrideDialog, _super);
            function OutboundMonthlyRptArchiveOverrideDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODS.OutboundMonthlyRptArchiveOverrideForm(_this.idPrefix);
                return _this;
            }
            OutboundMonthlyRptArchiveOverrideDialog.prototype.getFormKey = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideForm.formKey; };
            OutboundMonthlyRptArchiveOverrideDialog.prototype.getIdProperty = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideRow.idProperty; };
            OutboundMonthlyRptArchiveOverrideDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideRow.localTextPrefix; };
            OutboundMonthlyRptArchiveOverrideDialog.prototype.getNameProperty = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideRow.nameProperty; };
            OutboundMonthlyRptArchiveOverrideDialog.prototype.getService = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideService.baseUrl; };
            OutboundMonthlyRptArchiveOverrideDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            OutboundMonthlyRptArchiveOverrideDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundMonthlyRptArchiveOverrideDialog);
            return OutboundMonthlyRptArchiveOverrideDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundMonthlyRptArchiveOverrideDialog = OutboundMonthlyRptArchiveOverrideDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundMonthlyRptArchiveOverrideGrid = /** @class */ (function (_super) {
            __extends(OutboundMonthlyRptArchiveOverrideGrid, _super);
            function OutboundMonthlyRptArchiveOverrideGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.canSubmit = false;
                return _this;
            }
            OutboundMonthlyRptArchiveOverrideGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundMonthlyRptArchiveOverride'; };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.getDialogType = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideDialog; };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.getIdProperty = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideRow.idProperty; };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideRow.localTextPrefix; };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.getService = function () { return PCHODS.OutboundMonthlyRptArchiveOverrideService.baseUrl; };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.onViewSubmit = function () {
                _super.prototype.onViewSubmit.call(this);
                if (this.canSubmit) {
                    this.canSubmit = false;
                    return true;
                }
                else {
                    return false;
                }
            };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.push({
                    title: "Search",
                    cssClass: "search-button",
                    onClick: function () {
                        _this.canSubmit = true;
                        _this.view.populate();
                    }
                });
                return buttons;
            };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.getPersistanceStorage = function () {
                return null;
            };
            OutboundMonthlyRptArchiveOverrideGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            OutboundMonthlyRptArchiveOverrideGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundMonthlyRptArchiveOverrideGrid);
            return OutboundMonthlyRptArchiveOverrideGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundMonthlyRptArchiveOverrideGrid = OutboundMonthlyRptArchiveOverrideGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UsersEditor = /** @class */ (function (_super) {
            __extends(UsersEditor, _super);
            function UsersEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            UsersEditor.prototype.getLookupKey = function () {
                return PCHODS.OutboundNvsUsersRow.lookupKey;
            };
            UsersEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    item.UserFirstName + ' ' + item.UserLastName +
                    ', ' + item.CompanyCd +
                    ', ' + item.DepartmentDesc +
                    ')';
            };
            UsersEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], UsersEditor);
            return UsersEditor;
        }(Serenity.LookupEditorBase));
        PCHODS.UsersEditor = UsersEditor;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrIntlDatelineCruisesDialog = /** @class */ (function (_super) {
            __extends(NtrIntlDatelineCruisesDialog, _super);
            function NtrIntlDatelineCruisesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODSNVS.NtrIntlDatelineCruisesForm(_this.idPrefix);
                return _this;
            }
            NtrIntlDatelineCruisesDialog.prototype.getFormKey = function () { return PCHODSNVS.NtrIntlDatelineCruisesForm.formKey; };
            NtrIntlDatelineCruisesDialog.prototype.getIdProperty = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.idProperty; };
            NtrIntlDatelineCruisesDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.localTextPrefix; };
            NtrIntlDatelineCruisesDialog.prototype.getNameProperty = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.nameProperty; };
            NtrIntlDatelineCruisesDialog.prototype.getService = function () { return PCHODSNVS.NtrIntlDatelineCruisesService.baseUrl; };
            NtrIntlDatelineCruisesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrIntlDatelineCruisesDialog);
            return NtrIntlDatelineCruisesDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.NtrIntlDatelineCruisesDialog = NtrIntlDatelineCruisesDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrIntlDatelineCruisesGrid = /** @class */ (function (_super) {
            __extends(NtrIntlDatelineCruisesGrid, _super);
            function NtrIntlDatelineCruisesGrid(container) {
                return _super.call(this, container) || this;
            }
            NtrIntlDatelineCruisesGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.NtrIntlDatelineCruises'; };
            NtrIntlDatelineCruisesGrid.prototype.getDialogType = function () { return PCHODSNVS.NtrIntlDatelineCruisesDialog; };
            NtrIntlDatelineCruisesGrid.prototype.getIdProperty = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.idProperty; };
            NtrIntlDatelineCruisesGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.localTextPrefix; };
            NtrIntlDatelineCruisesGrid.prototype.getService = function () { return PCHODSNVS.NtrIntlDatelineCruisesService.baseUrl; };
            NtrIntlDatelineCruisesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrIntlDatelineCruisesGrid);
            return NtrIntlDatelineCruisesGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.NtrIntlDatelineCruisesGrid = NtrIntlDatelineCruisesGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var DataFlowDialog = /** @class */ (function (_super) {
            __extends(DataFlowDialog, _super);
            function DataFlowDialog() {
                var _this = _super.call(this) || this;
                _this.form = new SSISConfig.DataFlowForm(_this.idPrefix);
                return _this;
            }
            DataFlowDialog.prototype.getFormKey = function () { return SSISConfig.DataFlowForm.formKey; };
            DataFlowDialog.prototype.getIdProperty = function () { return SSISConfig.DataFlowRow.idProperty; };
            DataFlowDialog.prototype.getLocalTextPrefix = function () { return SSISConfig.DataFlowRow.localTextPrefix; };
            DataFlowDialog.prototype.getNameProperty = function () { return SSISConfig.DataFlowRow.nameProperty; };
            DataFlowDialog.prototype.getService = function () { return SSISConfig.DataFlowService.baseUrl; };
            DataFlowDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            DataFlowDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DataFlowDialog);
            return DataFlowDialog;
        }(Serenity.EntityDialog));
        SSISConfig.DataFlowDialog = DataFlowDialog;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var DataFlowGrid = /** @class */ (function (_super) {
            __extends(DataFlowGrid, _super);
            function DataFlowGrid(container) {
                return _super.call(this, container) || this;
            }
            DataFlowGrid.prototype.getColumnsKey = function () { return 'SSISConfig.DataFlow'; };
            DataFlowGrid.prototype.getDialogType = function () { return SSISConfig.DataFlowDialog; };
            DataFlowGrid.prototype.getIdProperty = function () { return SSISConfig.DataFlowRow.idProperty; };
            DataFlowGrid.prototype.getLocalTextPrefix = function () { return SSISConfig.DataFlowRow.localTextPrefix; };
            DataFlowGrid.prototype.getService = function () { return SSISConfig.DataFlowService.baseUrl; };
            DataFlowGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            DataFlowGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DataFlowGrid);
            return DataFlowGrid;
        }(Serenity.EntityGrid));
        SSISConfig.DataFlowGrid = DataFlowGrid;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var GpInterfaceLogDialog = /** @class */ (function (_super) {
            __extends(GpInterfaceLogDialog, _super);
            function GpInterfaceLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SSISConfig.GpInterfaceLogForm(_this.idPrefix);
                return _this;
            }
            GpInterfaceLogDialog.prototype.getFormKey = function () { return SSISConfig.GpInterfaceLogForm.formKey; };
            GpInterfaceLogDialog.prototype.getIdProperty = function () { return SSISConfig.GpInterfaceLogRow.idProperty; };
            GpInterfaceLogDialog.prototype.getLocalTextPrefix = function () { return SSISConfig.GpInterfaceLogRow.localTextPrefix; };
            GpInterfaceLogDialog.prototype.getNameProperty = function () { return SSISConfig.GpInterfaceLogRow.nameProperty; };
            GpInterfaceLogDialog.prototype.getService = function () { return SSISConfig.GpInterfaceLogService.baseUrl; };
            GpInterfaceLogDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GpInterfaceLogDialog);
            return GpInterfaceLogDialog;
        }(Serenity.EntityDialog));
        SSISConfig.GpInterfaceLogDialog = GpInterfaceLogDialog;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var GpInterfaceLogGrid = /** @class */ (function (_super) {
            __extends(GpInterfaceLogGrid, _super);
            function GpInterfaceLogGrid(container) {
                return _super.call(this, container) || this;
            }
            GpInterfaceLogGrid.prototype.getColumnsKey = function () { return 'SSISConfig.GpInterfaceLog'; };
            GpInterfaceLogGrid.prototype.getDialogType = function () { return SSISConfig.GpInterfaceLogDialog; };
            GpInterfaceLogGrid.prototype.getIdProperty = function () { return SSISConfig.GpInterfaceLogRow.idProperty; };
            GpInterfaceLogGrid.prototype.getLocalTextPrefix = function () { return SSISConfig.GpInterfaceLogRow.localTextPrefix; };
            GpInterfaceLogGrid.prototype.getService = function () { return SSISConfig.GpInterfaceLogService.baseUrl; };
            GpInterfaceLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GpInterfaceLogGrid);
            return GpInterfaceLogGrid;
        }(Serenity.EntityGrid));
        SSISConfig.GpInterfaceLogGrid = GpInterfaceLogGrid;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var INTConfigBaseDialog = /** @class */ (function (_super) {
            __extends(INTConfigBaseDialog, _super);
            function INTConfigBaseDialog() {
                var _this = _super.call(this) || this;
                _this.form = new SSISConfig.INTConfigBaseForm(_this.idPrefix);
                return _this;
            }
            INTConfigBaseDialog.prototype.getFormKey = function () { return SSISConfig.INTConfigBaseForm.formKey; };
            INTConfigBaseDialog.prototype.getIdProperty = function () { return SSISConfig.INTConfigBaseRow.idProperty; };
            INTConfigBaseDialog.prototype.getLocalTextPrefix = function () { return SSISConfig.INTConfigBaseRow.localTextPrefix; };
            INTConfigBaseDialog.prototype.getNameProperty = function () { return SSISConfig.INTConfigBaseRow.nameProperty; };
            INTConfigBaseDialog.prototype.getService = function () { return SSISConfig.INTConfigBaseService.baseUrl; };
            INTConfigBaseDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            INTConfigBaseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], INTConfigBaseDialog);
            return INTConfigBaseDialog;
        }(Serenity.EntityDialog));
        SSISConfig.INTConfigBaseDialog = INTConfigBaseDialog;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var INTConfigBaseGrid = /** @class */ (function (_super) {
            __extends(INTConfigBaseGrid, _super);
            function INTConfigBaseGrid(container) {
                return _super.call(this, container) || this;
            }
            INTConfigBaseGrid.prototype.getColumnsKey = function () { return 'SSISConfig.INTConfigBase'; };
            INTConfigBaseGrid.prototype.getDialogType = function () { return SSISConfig.INTConfigBaseDialog; };
            INTConfigBaseGrid.prototype.getIdProperty = function () { return SSISConfig.INTConfigBaseRow.idProperty; };
            INTConfigBaseGrid.prototype.getLocalTextPrefix = function () { return SSISConfig.INTConfigBaseRow.localTextPrefix; };
            INTConfigBaseGrid.prototype.getService = function () { return SSISConfig.INTConfigBaseService.baseUrl; };
            INTConfigBaseGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var Configfilter = Q.tryFirst(flt, function (f) { return f.field == "ConfigurationFilter" /* ConfigurationFilter */; });
                Configfilter.cssClass = 'configfilter-filter';
                return flt;
            };
            INTConfigBaseGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            INTConfigBaseGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            INTConfigBaseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], INTConfigBaseGrid);
            return INTConfigBaseGrid;
        }(Serenity.EntityGrid));
        SSISConfig.INTConfigBaseGrid = INTConfigBaseGrid;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var MicrosDataFlowDialog = /** @class */ (function (_super) {
            __extends(MicrosDataFlowDialog, _super);
            function MicrosDataFlowDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SSISConfig.MicrosDataFlowForm(_this.idPrefix);
                return _this;
            }
            MicrosDataFlowDialog.prototype.getFormKey = function () { return SSISConfig.MicrosDataFlowForm.formKey; };
            MicrosDataFlowDialog.prototype.getIdProperty = function () { return SSISConfig.MicrosDataFlowRow.idProperty; };
            MicrosDataFlowDialog.prototype.getLocalTextPrefix = function () { return SSISConfig.MicrosDataFlowRow.localTextPrefix; };
            MicrosDataFlowDialog.prototype.getNameProperty = function () { return SSISConfig.MicrosDataFlowRow.nameProperty; };
            MicrosDataFlowDialog.prototype.getService = function () { return SSISConfig.MicrosDataFlowService.baseUrl; };
            MicrosDataFlowDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            MicrosDataFlowDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MicrosDataFlowDialog);
            return MicrosDataFlowDialog;
        }(Serenity.EntityDialog));
        SSISConfig.MicrosDataFlowDialog = MicrosDataFlowDialog;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var MicrosDataFlowGrid = /** @class */ (function (_super) {
            __extends(MicrosDataFlowGrid, _super);
            function MicrosDataFlowGrid(container) {
                return _super.call(this, container) || this;
            }
            MicrosDataFlowGrid.prototype.getColumnsKey = function () { return 'SSISConfig.MicrosDataFlow'; };
            MicrosDataFlowGrid.prototype.getDialogType = function () { return SSISConfig.MicrosDataFlowDialog; };
            MicrosDataFlowGrid.prototype.getIdProperty = function () { return SSISConfig.MicrosDataFlowRow.idProperty; };
            MicrosDataFlowGrid.prototype.getLocalTextPrefix = function () { return SSISConfig.MicrosDataFlowRow.localTextPrefix; };
            MicrosDataFlowGrid.prototype.getService = function () { return SSISConfig.MicrosDataFlowService.baseUrl; };
            MicrosDataFlowGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            MicrosDataFlowGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MicrosDataFlowGrid);
            return MicrosDataFlowGrid;
        }(Serenity.EntityGrid));
        SSISConfig.MicrosDataFlowGrid = MicrosDataFlowGrid;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var PsInterfaceConfigDialog = /** @class */ (function (_super) {
            __extends(PsInterfaceConfigDialog, _super);
            function PsInterfaceConfigDialog() {
                var _this = _super.call(this) || this;
                _this.form = new SSISConfig.PsInterfaceConfigForm(_this.idPrefix);
                return _this;
            }
            PsInterfaceConfigDialog.prototype.getFormKey = function () { return SSISConfig.PsInterfaceConfigForm.formKey; };
            PsInterfaceConfigDialog.prototype.getIdProperty = function () { return SSISConfig.PsInterfaceConfigRow.idProperty; };
            PsInterfaceConfigDialog.prototype.getLocalTextPrefix = function () { return SSISConfig.PsInterfaceConfigRow.localTextPrefix; };
            PsInterfaceConfigDialog.prototype.getNameProperty = function () { return SSISConfig.PsInterfaceConfigRow.nameProperty; };
            PsInterfaceConfigDialog.prototype.getService = function () { return SSISConfig.PsInterfaceConfigService.baseUrl; };
            //validateEntity(row, id) {
            //    row.ConfigurationValue = "03/26/2020";
            //}
            PsInterfaceConfigDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.form.DataType.value == "Date") {
                    this.form.ConfigValue.getGridField().toggle(false);
                    this.form.ConfigValueDate.getGridField().toggle(true);
                }
                else {
                    this.form.ConfigValue.getGridField().toggle(true);
                    this.form.ConfigValueDate.getGridField().toggle(false);
                }
            };
            PsInterfaceConfigDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            PsInterfaceConfigDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PsInterfaceConfigDialog);
            return PsInterfaceConfigDialog;
        }(Serenity.EntityDialog));
        SSISConfig.PsInterfaceConfigDialog = PsInterfaceConfigDialog;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var PsInterfaceConfigGrid = /** @class */ (function (_super) {
            __extends(PsInterfaceConfigGrid, _super);
            function PsInterfaceConfigGrid(container) {
                return _super.call(this, container) || this;
            }
            PsInterfaceConfigGrid.prototype.getColumnsKey = function () { return 'SSISConfig.PsInterfaceConfig'; };
            PsInterfaceConfigGrid.prototype.getDialogType = function () { return SSISConfig.PsInterfaceConfigDialog; };
            PsInterfaceConfigGrid.prototype.getIdProperty = function () { return SSISConfig.PsInterfaceConfigRow.idProperty; };
            PsInterfaceConfigGrid.prototype.getLocalTextPrefix = function () { return SSISConfig.PsInterfaceConfigRow.localTextPrefix; };
            PsInterfaceConfigGrid.prototype.getService = function () { return SSISConfig.PsInterfaceConfigService.baseUrl; };
            PsInterfaceConfigGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            PsInterfaceConfigGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PsInterfaceConfigGrid);
            return PsInterfaceConfigGrid;
        }(Serenity.EntityGrid));
        SSISConfig.PsInterfaceConfigGrid = PsInterfaceConfigGrid;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var SsisConfigBaseDialog = /** @class */ (function (_super) {
            __extends(SsisConfigBaseDialog, _super);
            function SsisConfigBaseDialog() {
                var _this = _super.call(this) || this;
                _this.form = new SSISConfig.SsisConfigBaseForm(_this.idPrefix);
                return _this;
            }
            SsisConfigBaseDialog.prototype.getFormKey = function () { return SSISConfig.SsisConfigBaseForm.formKey; };
            SsisConfigBaseDialog.prototype.getIdProperty = function () { return SSISConfig.SsisConfigBaseRow.idProperty; };
            SsisConfigBaseDialog.prototype.getLocalTextPrefix = function () { return SSISConfig.SsisConfigBaseRow.localTextPrefix; };
            SsisConfigBaseDialog.prototype.getNameProperty = function () { return SSISConfig.SsisConfigBaseRow.nameProperty; };
            SsisConfigBaseDialog.prototype.getService = function () { return SSISConfig.SsisConfigBaseService.baseUrl; };
            SsisConfigBaseDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                if (!DAP.Authorization.hasPermission("SSISConfig:Config:Delete")) {
                    b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                }
                return b;
            };
            SsisConfigBaseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SsisConfigBaseDialog);
            return SsisConfigBaseDialog;
        }(Serenity.EntityDialog));
        SSISConfig.SsisConfigBaseDialog = SsisConfigBaseDialog;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var SsisConfigBaseGrid = /** @class */ (function (_super) {
            __extends(SsisConfigBaseGrid, _super);
            function SsisConfigBaseGrid(container) {
                return _super.call(this, container) || this;
            }
            SsisConfigBaseGrid.prototype.getColumnsKey = function () { return 'SSISConfig.SsisConfigBase'; };
            SsisConfigBaseGrid.prototype.getDialogType = function () { return SSISConfig.SsisConfigBaseDialog; };
            SsisConfigBaseGrid.prototype.getIdProperty = function () { return SSISConfig.SsisConfigBaseRow.idProperty; };
            SsisConfigBaseGrid.prototype.getLocalTextPrefix = function () { return SSISConfig.SsisConfigBaseRow.localTextPrefix; };
            SsisConfigBaseGrid.prototype.getService = function () { return SSISConfig.SsisConfigBaseService.baseUrl; };
            SsisConfigBaseGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var Configfilter = Q.tryFirst(flt, function (f) { return f.field == "ConfigurationFilter" /* ConfigurationFilter */; });
                Configfilter.cssClass = 'configfilter-filter';
                return flt;
            };
            SsisConfigBaseGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            SsisConfigBaseGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (!DAP.Authorization.hasPermission("SSISConfig:ConfigAdmin")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                }
                return buttons;
            };
            SsisConfigBaseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SsisConfigBaseGrid);
            return SsisConfigBaseGrid;
        }(Serenity.EntityGrid));
        SSISConfig.SsisConfigBaseGrid = SsisConfigBaseGrid;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
//# sourceMappingURL=DAP.Web.js.map