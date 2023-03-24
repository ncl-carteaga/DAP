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
    var Avaya;
    (function (Avaya) {
        var BrandRow;
        (function (BrandRow) {
            BrandRow.idProperty = 'Brand';
            BrandRow.nameProperty = 'Brand';
            BrandRow.localTextPrefix = 'Avaya.Brand';
            BrandRow.lookupKey = 'Avaya.Brand';
            function getLookup() {
                return Q.getLookup('Avaya.Brand');
            }
            BrandRow.getLookup = getLookup;
        })(BrandRow = Avaya.BrandRow || (Avaya.BrandRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var BrandService;
        (function (BrandService) {
            BrandService.baseUrl = 'Avaya/Brand';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BrandService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrandService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrandService = Avaya.BrandService || (Avaya.BrandService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var CallTypeRow;
        (function (CallTypeRow) {
            CallTypeRow.idProperty = 'Type';
            CallTypeRow.nameProperty = 'Type';
            CallTypeRow.localTextPrefix = 'Avaya.CallType';
            CallTypeRow.lookupKey = 'Avaya.Call_Type';
            function getLookup() {
                return Q.getLookup('Avaya.Call_Type');
            }
            CallTypeRow.getLookup = getLookup;
        })(CallTypeRow = Avaya.CallTypeRow || (Avaya.CallTypeRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var CallTypeService;
        (function (CallTypeService) {
            CallTypeService.baseUrl = 'Avaya/CallType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CallTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(CallTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CallTypeService = Avaya.CallTypeService || (Avaya.CallTypeService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var DepartmentRow;
        (function (DepartmentRow) {
            DepartmentRow.idProperty = 'Department';
            DepartmentRow.nameProperty = 'Department';
            DepartmentRow.localTextPrefix = 'Avaya.Department';
            DepartmentRow.lookupKey = 'Avaya.Department';
            function getLookup() {
                return Q.getLookup('Avaya.Department');
            }
            DepartmentRow.getLookup = getLookup;
        })(DepartmentRow = Avaya.DepartmentRow || (Avaya.DepartmentRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var DepartmentService;
        (function (DepartmentService) {
            DepartmentService.baseUrl = 'Avaya/Department';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartmentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DepartmentService = Avaya.DepartmentService || (Avaya.DepartmentService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var GroupRow;
        (function (GroupRow) {
            GroupRow.idProperty = 'Cd';
            GroupRow.nameProperty = 'Cd';
            GroupRow.localTextPrefix = 'Avaya.Group';
            GroupRow.lookupKey = 'Avaya.Group';
            function getLookup() {
                return Q.getLookup('Avaya.Group');
            }
            GroupRow.getLookup = getLookup;
        })(GroupRow = Avaya.GroupRow || (Avaya.GroupRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var GroupService;
        (function (GroupService) {
            GroupService.baseUrl = 'Avaya/Group';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(GroupService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GroupService = Avaya.GroupService || (Avaya.GroupService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'Region';
            RegionRow.nameProperty = 'Region';
            RegionRow.localTextPrefix = 'Avaya.Region';
            RegionRow.lookupKey = 'Avaya.Region';
            function getLookup() {
                return Q.getLookup('Avaya.Region');
            }
            RegionRow.getLookup = getLookup;
        })(RegionRow = Avaya.RegionRow || (Avaya.RegionRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Avaya/Region';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionService = Avaya.RegionService || (Avaya.RegionService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var SkillSplitMappingForm = /** @class */ (function (_super) {
            __extends(SkillSplitMappingForm, _super);
            function SkillSplitMappingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SkillSplitMappingForm.init) {
                    SkillSplitMappingForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(SkillSplitMappingForm, [
                        'CmsNo', w0,
                        'AcdNo', w0,
                        'SplitNo', w0,
                        'SkillName', w1,
                        'Brand', w2,
                        'Status', w2,
                        'GroupCd', w2,
                        'Region', w2,
                        'SupportChannel', w2,
                        'Department', w2,
                        'CallType', w2
                    ]);
                }
                return _this;
            }
            SkillSplitMappingForm.formKey = 'Avaya.SkillSplitMapping';
            return SkillSplitMappingForm;
        }(Serenity.PrefixedContext));
        Avaya.SkillSplitMappingForm = SkillSplitMappingForm;
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var SkillSplitMappingRow;
        (function (SkillSplitMappingRow) {
            SkillSplitMappingRow.idProperty = 'SkillSplitTk';
            SkillSplitMappingRow.nameProperty = 'SkillName';
            SkillSplitMappingRow.localTextPrefix = 'Avaya.SkillSplitMapping';
        })(SkillSplitMappingRow = Avaya.SkillSplitMappingRow || (Avaya.SkillSplitMappingRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var SkillSplitMappingService;
        (function (SkillSplitMappingService) {
            SkillSplitMappingService.baseUrl = 'Avaya/SkillSplitMapping';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SkillSplitMappingService[x] = function (r, s, o) {
                    return Q.serviceRequest(SkillSplitMappingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SkillSplitMappingService = Avaya.SkillSplitMappingService || (Avaya.SkillSplitMappingService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var StatusRow;
        (function (StatusRow) {
            StatusRow.idProperty = 'StatusDesc';
            StatusRow.nameProperty = 'StatusDesc';
            StatusRow.localTextPrefix = 'Avaya.Status';
            StatusRow.lookupKey = 'Avaya.Status';
            function getLookup() {
                return Q.getLookup('Avaya.Status');
            }
            StatusRow.getLookup = getLookup;
        })(StatusRow = Avaya.StatusRow || (Avaya.StatusRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var StatusService;
        (function (StatusService) {
            StatusService.baseUrl = 'Avaya/Status';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(StatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StatusService = Avaya.StatusService || (Avaya.StatusService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var SupportChannelRow;
        (function (SupportChannelRow) {
            SupportChannelRow.idProperty = 'SupportChannel';
            SupportChannelRow.nameProperty = 'SupportChannel';
            SupportChannelRow.localTextPrefix = 'Avaya.SupportChannel';
            SupportChannelRow.lookupKey = 'Avaya.Support_Channel';
            function getLookup() {
                return Q.getLookup('Avaya.Support_Channel');
            }
            SupportChannelRow.getLookup = getLookup;
        })(SupportChannelRow = Avaya.SupportChannelRow || (Avaya.SupportChannelRow = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var SupportChannelService;
        (function (SupportChannelService) {
            SupportChannelService.baseUrl = 'Avaya/SupportChannel';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupportChannelService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupportChannelService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupportChannelService = Avaya.SupportChannelService || (Avaya.SupportChannelService = {}));
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
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
        var AgencySnapshotRequestForm = /** @class */ (function (_super) {
            __extends(AgencySnapshotRequestForm, _super);
            function AgencySnapshotRequestForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AgencySnapshotRequestForm.init) {
                    AgencySnapshotRequestForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(AgencySnapshotRequestForm, [
                        'RequestedBy', w0,
                        'RequestedByDate', w1,
                        'RequestedReason', w0,
                        'CreatedBy', w0,
                        'CreatedDate', w1,
                        'ModifiedBy', w0,
                        'ModifiedDate', w1
                    ]);
                }
                return _this;
            }
            AgencySnapshotRequestForm.formKey = 'DWSupport.AgencySnapshotRequest';
            return AgencySnapshotRequestForm;
        }(Serenity.PrefixedContext));
        DWSupport.AgencySnapshotRequestForm = AgencySnapshotRequestForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AgencySnapshotRequestRow;
        (function (AgencySnapshotRequestRow) {
            AgencySnapshotRequestRow.idProperty = 'AgencySnapshotReqId';
            AgencySnapshotRequestRow.nameProperty = 'RequestedBy';
            AgencySnapshotRequestRow.localTextPrefix = 'DWSupport.AgencySnapshotRequest';
        })(AgencySnapshotRequestRow = DWSupport.AgencySnapshotRequestRow || (DWSupport.AgencySnapshotRequestRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AgencySnapshotRequestService;
        (function (AgencySnapshotRequestService) {
            AgencySnapshotRequestService.baseUrl = 'DWSupport/AgencySnapshotRequest';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AgencySnapshotRequestService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgencySnapshotRequestService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgencySnapshotRequestService = DWSupport.AgencySnapshotRequestService || (DWSupport.AgencySnapshotRequestService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenitiesSuppForm = /** @class */ (function (_super) {
            __extends(AmenitiesSuppForm, _super);
            function AmenitiesSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AmenitiesSuppForm.init) {
                    AmenitiesSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = DWSupport.SelectYNEditor;
                    var w5 = s.TextAreaEditor;
                    var w6 = s.DateEditor;
                    Q.initFormType(AmenitiesSuppForm, [
                        'AmenityCd', w0,
                        'AmenityTypeId', w1,
                        'AmenityDesc', w0,
                        'AmenityCategoryCd', w1,
                        'DisplayOrderCd', w2,
                        'AmenityCostAmt', w3,
                        'AmenityAddonAmt', w3,
                        'IsPerDiemCd', w4,
                        'CurrencyCd', w1,
                        'ConditionDesc', w5,
                        'CommentTxt', w5,
                        'CreatedDat', w6,
                        'CreatedByNam', w0,
                        'ModifiedDat', w6,
                        'ModifiedByNam', w0
                    ]);
                }
                return _this;
            }
            AmenitiesSuppForm.formKey = 'DWSupport.AmenitiesSupp';
            return AmenitiesSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.AmenitiesSuppForm = AmenitiesSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenitiesSuppRow;
        (function (AmenitiesSuppRow) {
            AmenitiesSuppRow.idProperty = 'AmenityId';
            AmenitiesSuppRow.nameProperty = 'AmenityCd';
            AmenitiesSuppRow.localTextPrefix = 'DWSupport.AmenitiesSupp';
        })(AmenitiesSuppRow = DWSupport.AmenitiesSuppRow || (DWSupport.AmenitiesSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenitiesSuppService;
        (function (AmenitiesSuppService) {
            AmenitiesSuppService.baseUrl = 'DWSupport/AmenitiesSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AmenitiesSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(AmenitiesSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AmenitiesSuppService = DWSupport.AmenitiesSuppService || (DWSupport.AmenitiesSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityCategoryRow;
        (function (AmenityCategoryRow) {
            AmenityCategoryRow.idProperty = 'CategoryCd';
            AmenityCategoryRow.nameProperty = 'CategoryCd';
            AmenityCategoryRow.localTextPrefix = 'DWSupport.AmenityCategory';
            AmenityCategoryRow.lookupKey = 'DWSupport.AmenityCategory';
            function getLookup() {
                return Q.getLookup('DWSupport.AmenityCategory');
            }
            AmenityCategoryRow.getLookup = getLookup;
        })(AmenityCategoryRow = DWSupport.AmenityCategoryRow || (DWSupport.AmenityCategoryRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityCategoryService;
        (function (AmenityCategoryService) {
            AmenityCategoryService.baseUrl = 'DWSupport/AmenityCategory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AmenityCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(AmenityCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AmenityCategoryService = DWSupport.AmenityCategoryService || (DWSupport.AmenityCategoryService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityDetailsSuppForm = /** @class */ (function (_super) {
            __extends(AmenityDetailsSuppForm, _super);
            function AmenityDetailsSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AmenityDetailsSuppForm.init) {
                    AmenityDetailsSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(AmenityDetailsSuppForm, [
                        'AmenityId', w0,
                        'AmenityDetailCd', w0,
                        'OfficeCd', w1,
                        'SailDayFromQty', w2,
                        'SailDayToQty', w2,
                        'AmenityPtsQty', w2,
                        'MinCabinQty', w2,
                        'ConditionDesc', w3,
                        'CommentTxt', w3,
                        'CreatedDat', w4,
                        'CreatedByNam', w0,
                        'ModifiedDat', w4,
                        'ModifiedByNam', w0
                    ]);
                }
                return _this;
            }
            AmenityDetailsSuppForm.formKey = 'DWSupport.AmenityDetailsSupp';
            return AmenityDetailsSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.AmenityDetailsSuppForm = AmenityDetailsSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityDetailsSuppRow;
        (function (AmenityDetailsSuppRow) {
            AmenityDetailsSuppRow.idProperty = 'AmenityDetailId';
            AmenityDetailsSuppRow.nameProperty = 'AmenityDetailCd';
            AmenityDetailsSuppRow.localTextPrefix = 'DWSupport.AmenityDetailsSupp';
        })(AmenityDetailsSuppRow = DWSupport.AmenityDetailsSuppRow || (DWSupport.AmenityDetailsSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityDetailsSuppService;
        (function (AmenityDetailsSuppService) {
            AmenityDetailsSuppService.baseUrl = 'DWSupport/AmenityDetailsSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AmenityDetailsSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(AmenityDetailsSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AmenityDetailsSuppService = DWSupport.AmenityDetailsSuppService || (DWSupport.AmenityDetailsSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityOfficeRow;
        (function (AmenityOfficeRow) {
            AmenityOfficeRow.idProperty = 'Cd';
            AmenityOfficeRow.nameProperty = 'Cd';
            AmenityOfficeRow.localTextPrefix = 'DWSupport.AmenityOffice';
            AmenityOfficeRow.lookupKey = 'DWSupport.AmenityOffice';
            function getLookup() {
                return Q.getLookup('DWSupport.AmenityOffice');
            }
            AmenityOfficeRow.getLookup = getLookup;
        })(AmenityOfficeRow = DWSupport.AmenityOfficeRow || (DWSupport.AmenityOfficeRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityOfficeService;
        (function (AmenityOfficeService) {
            AmenityOfficeService.baseUrl = 'DWSupport/AmenityOffice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AmenityOfficeService[x] = function (r, s, o) {
                    return Q.serviceRequest(AmenityOfficeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AmenityOfficeService = DWSupport.AmenityOfficeService || (DWSupport.AmenityOfficeService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityTypesSuppRow;
        (function (AmenityTypesSuppRow) {
            AmenityTypesSuppRow.idProperty = 'AmenityTypeId';
            AmenityTypesSuppRow.nameProperty = 'AmenityTypeCd';
            AmenityTypesSuppRow.localTextPrefix = 'DWSupport.AmenityTypesSupp';
            AmenityTypesSuppRow.lookupKey = 'DWSupport.AmenityType';
            function getLookup() {
                return Q.getLookup('DWSupport.AmenityType');
            }
            AmenityTypesSuppRow.getLookup = getLookup;
        })(AmenityTypesSuppRow = DWSupport.AmenityTypesSuppRow || (DWSupport.AmenityTypesSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityTypesSuppService;
        (function (AmenityTypesSuppService) {
            AmenityTypesSuppService.baseUrl = 'DWSupport/AmenityTypesSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AmenityTypesSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(AmenityTypesSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AmenityTypesSuppService = DWSupport.AmenityTypesSuppService || (DWSupport.AmenityTypesSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CasinoSlotMasterDescSuppForm = /** @class */ (function (_super) {
            __extends(CasinoSlotMasterDescSuppForm, _super);
            function CasinoSlotMasterDescSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CasinoSlotMasterDescSuppForm.init) {
                    CasinoSlotMasterDescSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(CasinoSlotMasterDescSuppForm, [
                        'SlotMasterDesc', w0,
                        'CommentTxt', w0,
                        'CreatedTs', w1,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ManufacturerNam', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            CasinoSlotMasterDescSuppForm.formKey = 'DWSupport.CasinoSlotMasterDescSupp';
            return CasinoSlotMasterDescSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.CasinoSlotMasterDescSuppForm = CasinoSlotMasterDescSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CasinoSlotMasterDescSuppRow;
        (function (CasinoSlotMasterDescSuppRow) {
            CasinoSlotMasterDescSuppRow.idProperty = 'SlotMasterDescSurKey';
            CasinoSlotMasterDescSuppRow.nameProperty = 'SlotMasterDesc';
            CasinoSlotMasterDescSuppRow.localTextPrefix = 'DWSupport.CasinoSlotMasterDescSupp';
        })(CasinoSlotMasterDescSuppRow = DWSupport.CasinoSlotMasterDescSuppRow || (DWSupport.CasinoSlotMasterDescSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CasinoSlotMasterDescSuppService;
        (function (CasinoSlotMasterDescSuppService) {
            CasinoSlotMasterDescSuppService.baseUrl = 'DWSupport/CasinoSlotMasterDescSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CasinoSlotMasterDescSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(CasinoSlotMasterDescSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CasinoSlotMasterDescSuppService = DWSupport.CasinoSlotMasterDescSuppService || (DWSupport.CasinoSlotMasterDescSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CategoryMasterSuppForm = /** @class */ (function (_super) {
            __extends(CategoryMasterSuppForm, _super);
            function CategoryMasterSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryMasterSuppForm.init) {
                    CategoryMasterSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(CategoryMasterSuppForm, [
                        'ShipCd', w0,
                        'SailFromDat', w1,
                        'SailToDat', w1,
                        'CategoryCd', w0,
                        'MetaCategoryCd', w0,
                        'FleetCategoryPriorityNbr', w2,
                        'PseudoCategoryCd', w0,
                        'MandatoryAssignmentCd', w0,
                        'NewMetaCategoryCd', w0,
                        'RmsPseudoCategoryCd', w0,
                        'CreatedTs', w1,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            CategoryMasterSuppForm.formKey = 'DWSupport.CategoryMasterSupp';
            return CategoryMasterSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.CategoryMasterSuppForm = CategoryMasterSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CategoryMasterSuppRow;
        (function (CategoryMasterSuppRow) {
            CategoryMasterSuppRow.idProperty = 'CategoryMasterSurKey';
            CategoryMasterSuppRow.nameProperty = 'CategoryCd';
            CategoryMasterSuppRow.localTextPrefix = 'DWSupport.CategoryMasterSupp';
        })(CategoryMasterSuppRow = DWSupport.CategoryMasterSuppRow || (DWSupport.CategoryMasterSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CategoryMasterSuppService;
        (function (CategoryMasterSuppService) {
            CategoryMasterSuppService.baseUrl = 'DWSupport/CategoryMasterSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryMasterSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryMasterSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryMasterSuppService = DWSupport.CategoryMasterSuppService || (DWSupport.CategoryMasterSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CcOfficeLoationsRow;
        (function (CcOfficeLoationsRow) {
            CcOfficeLoationsRow.idProperty = 'Cd';
            CcOfficeLoationsRow.nameProperty = 'Cd';
            CcOfficeLoationsRow.localTextPrefix = 'DWSupport.CcOfficeLoations';
            CcOfficeLoationsRow.lookupKey = 'DWSupport.CCOffice';
            function getLookup() {
                return Q.getLookup('DWSupport.CCOffice');
            }
            CcOfficeLoationsRow.getLookup = getLookup;
        })(CcOfficeLoationsRow = DWSupport.CcOfficeLoationsRow || (DWSupport.CcOfficeLoationsRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CcOfficeLoationsService;
        (function (CcOfficeLoationsService) {
            CcOfficeLoationsService.baseUrl = 'DWSupport/CcOfficeLoations';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CcOfficeLoationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CcOfficeLoationsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CcOfficeLoationsService = DWSupport.CcOfficeLoationsService || (DWSupport.CcOfficeLoationsService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CmiSuppForm = /** @class */ (function (_super) {
            __extends(CmiSuppForm, _super);
            function CmiSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CmiSuppForm.init) {
                    CmiSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(CmiSuppForm, [
                        'ShipCd', w0,
                        'SailId', w1,
                        'AgencyId', w1,
                        'CmiTypeCd', w2,
                        'CruiseRevAmt', w3,
                        'NcfAmt', w3,
                        'CommissionAmt', w3,
                        'CmiAmenityCostAmt', w3,
                        'ContractDat', w4,
                        'CabinQty', w1,
                        'PaxQty', w1,
                        'BookingCurrencyCd', w2,
                        'CreatedTs', w4,
                        'CreatedByNam', w2,
                        'ModifiedByNam', w2,
                        'ModifiedTs', w4,
                        'CmiSubTypeCd', w2,
                        'CmiSubType2Cd', w2,
                        'VoyageCd', w2,
                        'SmCabinFareAmt', w3,
                        'SmCabinFareNonrevAmt', w3,
                        'SmExcessTicketingAmt', w3,
                        'SmCruiseDiscAmt', w3,
                        'SmCostOfSalesAmt', w3,
                        'SmGuestFeesGratsExpenseAmt', w3,
                        'SmCreditCardCostAmt', w3,
                        'SailDat', w4,
                        'SailDayQty', w1,
                        'CharterDesc', w2,
                        'RmContractAdjNtrNoSvcAmt', w2,
                        'OfficeCd', w2,
                        'RmFinalGuestQty', w1,
                        'RmFinalAdjNtrAmt', w1,
                        'RmFinalAdjNtrNoSvcAmt', w1,
                        'DistrictNbr', w2,
                        'ContractPriceAmt', w1,
                        'DepositDat', w4
                    ]);
                }
                return _this;
            }
            CmiSuppForm.formKey = 'DWSupport.CmiSupp';
            return CmiSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.CmiSuppForm = CmiSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CmiSuppRow;
        (function (CmiSuppRow) {
            CmiSuppRow.idProperty = 'CmiSurKey';
            CmiSuppRow.nameProperty = 'CmiTypeCd';
            CmiSuppRow.localTextPrefix = 'DWSupport.CmiSupp';
        })(CmiSuppRow = DWSupport.CmiSuppRow || (DWSupport.CmiSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CmiSuppService;
        (function (CmiSuppService) {
            CmiSuppService.baseUrl = 'DWSupport/CmiSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CmiSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(CmiSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CmiSuppService = DWSupport.CmiSuppService || (DWSupport.CmiSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CreditCardAdjSuppForm = /** @class */ (function (_super) {
            __extends(CreditCardAdjSuppForm, _super);
            function CreditCardAdjSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CreditCardAdjSuppForm.init) {
                    CreditCardAdjSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(CreditCardAdjSuppForm, [
                        'Office', w0,
                        'BaseRate', w1,
                        'ParticipationRate', w1,
                        'CxBuffer', w1,
                        'BlendedRate', w1,
                        'ProposedRate', w1,
                        'EffectiveFromDt', w2,
                        'EffectiveToDt', w2,
                        'CreatedTs', w2,
                        'CreatedByName', w3,
                        'ModifiedTs', w2,
                        'ModifiedByNam', w3
                    ]);
                }
                return _this;
            }
            CreditCardAdjSuppForm.formKey = 'DWSupport.CreditCardAdjSupp';
            return CreditCardAdjSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.CreditCardAdjSuppForm = CreditCardAdjSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CreditCardAdjSuppRow;
        (function (CreditCardAdjSuppRow) {
            CreditCardAdjSuppRow.idProperty = 'CreditcardAdjId';
            CreditCardAdjSuppRow.nameProperty = 'Office';
            CreditCardAdjSuppRow.localTextPrefix = 'DWSupport.CreditCardAdjSupp';
        })(CreditCardAdjSuppRow = DWSupport.CreditCardAdjSuppRow || (DWSupport.CreditCardAdjSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CreditCardAdjSuppService;
        (function (CreditCardAdjSuppService) {
            CreditCardAdjSuppService.baseUrl = 'DWSupport/CreditCardAdjSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CreditCardAdjSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(CreditCardAdjSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CreditCardAdjSuppService = DWSupport.CreditCardAdjSuppService || (DWSupport.CreditCardAdjSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CurrencyExchangeRateSuppForm = /** @class */ (function (_super) {
            __extends(CurrencyExchangeRateSuppForm, _super);
            function CurrencyExchangeRateSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CurrencyExchangeRateSuppForm.init) {
                    CurrencyExchangeRateSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(CurrencyExchangeRateSuppForm, [
                        'CurrencyCd', w0,
                        'SailFromDat', w1,
                        'SailToDat', w1,
                        'ExchangeRateNbr', w2,
                        'CommentTxt', w0,
                        'AuditRecordId', w0,
                        'CreatedByNam', w0,
                        'CreatedTs', w1,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            CurrencyExchangeRateSuppForm.formKey = 'DWSupport.CurrencyExchangeRateSupp';
            return CurrencyExchangeRateSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.CurrencyExchangeRateSuppForm = CurrencyExchangeRateSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CurrencyExchangeRateSuppRow;
        (function (CurrencyExchangeRateSuppRow) {
            CurrencyExchangeRateSuppRow.idProperty = 'CurrencySurKey';
            CurrencyExchangeRateSuppRow.nameProperty = 'CurrencyCd';
            CurrencyExchangeRateSuppRow.localTextPrefix = 'DWSupport.CurrencyExchangeRateSupp';
        })(CurrencyExchangeRateSuppRow = DWSupport.CurrencyExchangeRateSuppRow || (DWSupport.CurrencyExchangeRateSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CurrencyExchangeRateSuppService;
        (function (CurrencyExchangeRateSuppService) {
            CurrencyExchangeRateSuppService.baseUrl = 'DWSupport/CurrencyExchangeRateSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CurrencyExchangeRateSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(CurrencyExchangeRateSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CurrencyExchangeRateSuppService = DWSupport.CurrencyExchangeRateSuppService || (DWSupport.CurrencyExchangeRateSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var DistrictMasterSuppForm = /** @class */ (function (_super) {
            __extends(DistrictMasterSuppForm, _super);
            function DistrictMasterSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DistrictMasterSuppForm.init) {
                    DistrictMasterSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(DistrictMasterSuppForm, [
                        'DistrictNbr', w0,
                        'SalesrepUserId', w1,
                        'GroupCd', w1,
                        'SalesChannelCd', w1,
                        'RmChannelCd', w1,
                        'AreaCd', w1,
                        'PrimaryCrmSupportNam', w0,
                        'SecondaryCrmSupportNam', w0,
                        'GssChannelCd', w0,
                        'CreatedTs', w2,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w2,
                        'ChannelCd', w1
                    ]);
                }
                return _this;
            }
            DistrictMasterSuppForm.formKey = 'DWSupport.DistrictMasterSupp';
            return DistrictMasterSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.DistrictMasterSuppForm = DistrictMasterSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var DistrictMasterSuppRow;
        (function (DistrictMasterSuppRow) {
            DistrictMasterSuppRow.idProperty = 'DistrictSurKey';
            DistrictMasterSuppRow.nameProperty = 'DistrictNbr';
            DistrictMasterSuppRow.localTextPrefix = 'DWSupport.DistrictMasterSupp';
        })(DistrictMasterSuppRow = DWSupport.DistrictMasterSuppRow || (DWSupport.DistrictMasterSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var DistrictMasterSuppService;
        (function (DistrictMasterSuppService) {
            DistrictMasterSuppService.baseUrl = 'DWSupport/DistrictMasterSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DistrictMasterSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(DistrictMasterSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DistrictMasterSuppService = DWSupport.DistrictMasterSuppService || (DWSupport.DistrictMasterSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinPlannedCapacitySuppForm = /** @class */ (function (_super) {
            __extends(FinPlannedCapacitySuppForm, _super);
            function FinPlannedCapacitySuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FinPlannedCapacitySuppForm.init) {
                    FinPlannedCapacitySuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(FinPlannedCapacitySuppForm, [
                        'ShipCd', w0,
                        'SailFromDat', w1,
                        'SailToDat', w1,
                        'FinancialCabinCapacityQty', w2,
                        'FinancialGuestCapacityQty', w2,
                        'CapacityDesc', w0,
                        'CreatedTs', w1,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w1,
                        'UnadjustedFinancialCabinCapacityQty', w2,
                        'UnadjustedFinancialGuestCapacityQty', w2
                    ]);
                }
                return _this;
            }
            FinPlannedCapacitySuppForm.formKey = 'DWSupport.FinPlannedCapacitySupp';
            return FinPlannedCapacitySuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.FinPlannedCapacitySuppForm = FinPlannedCapacitySuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinPlannedCapacitySuppRow;
        (function (FinPlannedCapacitySuppRow) {
            FinPlannedCapacitySuppRow.idProperty = 'FinPlannedCapacitySurKey';
            FinPlannedCapacitySuppRow.nameProperty = 'ShipCd';
            FinPlannedCapacitySuppRow.localTextPrefix = 'DWSupport.FinPlannedCapacitySupp';
        })(FinPlannedCapacitySuppRow = DWSupport.FinPlannedCapacitySuppRow || (DWSupport.FinPlannedCapacitySuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinPlannedCapacitySuppService;
        (function (FinPlannedCapacitySuppService) {
            FinPlannedCapacitySuppService.baseUrl = 'DWSupport/FinPlannedCapacitySupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FinPlannedCapacitySuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(FinPlannedCapacitySuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FinPlannedCapacitySuppService = DWSupport.FinPlannedCapacitySuppService || (DWSupport.FinPlannedCapacitySuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
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
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(FinReportPublishingSuppForm, [
                        'ReportName', w0,
                        'OnHold', w1,
                        'CreatedTs', w2,
                        'CreatedByNam', w0,
                        'ModifiedTs', w2,
                        'ModifiedByNam', w0
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
            FinReportPublishingSuppRow.nameProperty = 'ReportName';
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
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FullShipChartersSuppForm = /** @class */ (function (_super) {
            __extends(FullShipChartersSuppForm, _super);
            function FullShipChartersSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FullShipChartersSuppForm.init) {
                    FullShipChartersSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(FullShipChartersSuppForm, [
                        'ShipCd', w0,
                        'SailDat', w1,
                        'SailId', w2,
                        'SailDayQty', w2,
                        'VoyageCd', w0,
                        'AgencyId', w2,
                        'CharterDesc', w0,
                        'GuestQty', w2,
                        'CharterRevAmt', w2,
                        'CharterCommAmt', w2,
                        'RmContractAdjNtrNoSvcAmt', w0,
                        'OfficeCd', w0,
                        'ContractDat', w1,
                        'RmFinalGuestQty', w2,
                        'RmFinalAdjNtrAmt', w2,
                        'RmFinalAdjNtrNoSvcAmt', w2,
                        'DistrictNbr', w0,
                        'ContractPriceAmt', w2,
                        'DepositDat', w1,
                        'RmNcfAmt', w2,
                        'CreatedByNam', w0,
                        'CreatedTs', w1,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            FullShipChartersSuppForm.formKey = 'DWSupport.FullShipChartersSupp';
            return FullShipChartersSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.FullShipChartersSuppForm = FullShipChartersSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FullShipChartersSuppRow;
        (function (FullShipChartersSuppRow) {
            FullShipChartersSuppRow.idProperty = 'ShipCharterSurKey';
            FullShipChartersSuppRow.nameProperty = 'ShipCd';
            FullShipChartersSuppRow.localTextPrefix = 'DWSupport.FullShipChartersSupp';
        })(FullShipChartersSuppRow = DWSupport.FullShipChartersSuppRow || (DWSupport.FullShipChartersSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FullShipChartersSuppService;
        (function (FullShipChartersSuppService) {
            FullShipChartersSuppService.baseUrl = 'DWSupport/FullShipChartersSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FullShipChartersSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(FullShipChartersSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FullShipChartersSuppService = DWSupport.FullShipChartersSuppService || (DWSupport.FullShipChartersSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GtfSuppForm = /** @class */ (function (_super) {
            __extends(GtfSuppForm, _super);
            function GtfSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GtfSuppForm.init) {
                    GtfSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = DWSupport.GTFCategoryEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.StringEditor;
                    Q.initFormType(GtfSuppForm, [
                        'ShipCd', w0,
                        'CategoryCd', w1,
                        'EmbarkDebarkCd', w0,
                        'Rate', w2,
                        'EffectiveFromDt', w3,
                        'EffectiveToDt', w3,
                        'CreatedTs', w3,
                        'CreatedByNam', w4,
                        'ModifiedTs', w3,
                        'ModifiedByNam', w4
                    ]);
                }
                return _this;
            }
            GtfSuppForm.formKey = 'DWSupport.GtfSupp';
            return GtfSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.GtfSuppForm = GtfSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GtfSuppRow;
        (function (GtfSuppRow) {
            GtfSuppRow.idProperty = 'GtfsuppId';
            GtfSuppRow.nameProperty = 'ShipCd';
            GtfSuppRow.localTextPrefix = 'DWSupport.GtfSupp';
        })(GtfSuppRow = DWSupport.GtfSuppRow || (DWSupport.GtfSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GtfSuppService;
        (function (GtfSuppService) {
            GtfSuppService.baseUrl = 'DWSupport/GtfSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GtfSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(GtfSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GtfSuppService = DWSupport.GtfSuppService || (DWSupport.GtfSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GuestPreventDepartureForm = /** @class */ (function (_super) {
            __extends(GuestPreventDepartureForm, _super);
            function GuestPreventDepartureForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GuestPreventDepartureForm.init) {
                    GuestPreventDepartureForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(GuestPreventDepartureForm, [
                        'GuestFirstNam', w0,
                        'GuestLastNam', w0,
                        'NameTypeDesc', w0,
                        'FromReportNbr', w1,
                        'InternalExternalCd', w0,
                        'TypeCd', w2,
                        'SirsNbrTxt', w0,
                        'IncidentReportedDat', w3,
                        'BoardingDenialReasonDesc', w4,
                        'CasinoIncidentNbrTxt', w0,
                        'CreatedTs', w3,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w3
                    ]);
                }
                return _this;
            }
            GuestPreventDepartureForm.formKey = 'DWSupport.GuestPreventDeparture';
            return GuestPreventDepartureForm;
        }(Serenity.PrefixedContext));
        DWSupport.GuestPreventDepartureForm = GuestPreventDepartureForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GuestPreventDepartureRow;
        (function (GuestPreventDepartureRow) {
            GuestPreventDepartureRow.idProperty = 'GuestPreventDepartureKey';
            GuestPreventDepartureRow.nameProperty = 'GuestFirstNam';
            GuestPreventDepartureRow.localTextPrefix = 'DWSupport.GuestPreventDeparture';
        })(GuestPreventDepartureRow = DWSupport.GuestPreventDepartureRow || (DWSupport.GuestPreventDepartureRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GuestPreventDepartureService;
        (function (GuestPreventDepartureService) {
            GuestPreventDepartureService.baseUrl = 'DWSupport/GuestPreventDeparture';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GuestPreventDepartureService[x] = function (r, s, o) {
                    return Q.serviceRequest(GuestPreventDepartureService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GuestPreventDepartureService = DWSupport.GuestPreventDepartureService || (DWSupport.GuestPreventDepartureService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ImportErrorLogForm = /** @class */ (function (_super) {
            __extends(ImportErrorLogForm, _super);
            function ImportErrorLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportErrorLogForm.init) {
                    ImportErrorLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(ImportErrorLogForm, [
                        'RunNumber', w0,
                        'ImportDate', w1,
                        'Calledby', w2,
                        'FileName', w2,
                        'ErrorMessage', w3
                    ]);
                }
                return _this;
            }
            ImportErrorLogForm.formKey = 'DWSupport.ImportErrorLog';
            return ImportErrorLogForm;
        }(Serenity.PrefixedContext));
        DWSupport.ImportErrorLogForm = ImportErrorLogForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ImportErrorLogRow;
        (function (ImportErrorLogRow) {
            ImportErrorLogRow.idProperty = 'ImportLogId';
            ImportErrorLogRow.nameProperty = 'Calledby';
            ImportErrorLogRow.localTextPrefix = 'DWSupport.ImportErrorLog';
        })(ImportErrorLogRow = DWSupport.ImportErrorLogRow || (DWSupport.ImportErrorLogRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ImportErrorLogService;
        (function (ImportErrorLogService) {
            ImportErrorLogService.baseUrl = 'DWSupport/ImportErrorLog';
            [
                'Create',
                'Update',
                'Delete',
                'DeleteAll',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportErrorLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportErrorLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportErrorLogService = DWSupport.ImportErrorLogService || (DWSupport.ImportErrorLogService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSourceRow;
        (function (InvoiceItemSourceRow) {
            InvoiceItemSourceRow.idProperty = 'ItemSourceCd';
            InvoiceItemSourceRow.nameProperty = 'ItemSourceCd';
            InvoiceItemSourceRow.localTextPrefix = 'DWSupport.InvoiceItemSource';
            InvoiceItemSourceRow.lookupKey = 'DWSupport.GetInvoiceItemSource';
            function getLookup() {
                return Q.getLookup('DWSupport.GetInvoiceItemSource');
            }
            InvoiceItemSourceRow.getLookup = getLookup;
        })(InvoiceItemSourceRow = DWSupport.InvoiceItemSourceRow || (DWSupport.InvoiceItemSourceRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSourceService;
        (function (InvoiceItemSourceService) {
            InvoiceItemSourceService.baseUrl = 'DWSupport/InvoiceItemSource';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemSourceService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemSourceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemSourceService = DWSupport.InvoiceItemSourceService || (DWSupport.InvoiceItemSourceService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSubType2Row;
        (function (InvoiceItemSubType2Row) {
            InvoiceItemSubType2Row.idProperty = 'ItemSubType2Cd';
            InvoiceItemSubType2Row.nameProperty = 'ItemSubType2Cd';
            InvoiceItemSubType2Row.localTextPrefix = 'DWSupport.InvoiceItemSubType2';
            InvoiceItemSubType2Row.lookupKey = 'DWSupport.GetInvoiceItemSubType2';
            function getLookup() {
                return Q.getLookup('DWSupport.GetInvoiceItemSubType2');
            }
            InvoiceItemSubType2Row.getLookup = getLookup;
        })(InvoiceItemSubType2Row = DWSupport.InvoiceItemSubType2Row || (DWSupport.InvoiceItemSubType2Row = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSubType2Service;
        (function (InvoiceItemSubType2Service) {
            InvoiceItemSubType2Service.baseUrl = 'DWSupport/InvoiceItemSubType2';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemSubType2Service[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemSubType2Service.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemSubType2Service = DWSupport.InvoiceItemSubType2Service || (DWSupport.InvoiceItemSubType2Service = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSubType3Row;
        (function (InvoiceItemSubType3Row) {
            InvoiceItemSubType3Row.idProperty = 'ItemSubType3Cd';
            InvoiceItemSubType3Row.nameProperty = 'ItemSubType3Cd';
            InvoiceItemSubType3Row.localTextPrefix = 'DWSupport.InvoiceItemSubType3';
            InvoiceItemSubType3Row.lookupKey = 'DWSupport.GetInvoiceItemSubType3';
            function getLookup() {
                return Q.getLookup('DWSupport.GetInvoiceItemSubType3');
            }
            InvoiceItemSubType3Row.getLookup = getLookup;
        })(InvoiceItemSubType3Row = DWSupport.InvoiceItemSubType3Row || (DWSupport.InvoiceItemSubType3Row = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSubType3Service;
        (function (InvoiceItemSubType3Service) {
            InvoiceItemSubType3Service.baseUrl = 'DWSupport/InvoiceItemSubType3';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemSubType3Service[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemSubType3Service.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemSubType3Service = DWSupport.InvoiceItemSubType3Service || (DWSupport.InvoiceItemSubType3Service = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSubTypeRow;
        (function (InvoiceItemSubTypeRow) {
            InvoiceItemSubTypeRow.idProperty = 'ItemSubTypeCd';
            InvoiceItemSubTypeRow.nameProperty = 'ItemSubTypeCd';
            InvoiceItemSubTypeRow.localTextPrefix = 'DWSupport.InvoiceItemSubType';
            InvoiceItemSubTypeRow.lookupKey = 'DWSupport.GetInvoiceItemSubType';
            function getLookup() {
                return Q.getLookup('DWSupport.GetInvoiceItemSubType');
            }
            InvoiceItemSubTypeRow.getLookup = getLookup;
        })(InvoiceItemSubTypeRow = DWSupport.InvoiceItemSubTypeRow || (DWSupport.InvoiceItemSubTypeRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemSubTypeService;
        (function (InvoiceItemSubTypeService) {
            InvoiceItemSubTypeService.baseUrl = 'DWSupport/InvoiceItemSubType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemSubTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemSubTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemSubTypeService = DWSupport.InvoiceItemSubTypeService || (DWSupport.InvoiceItemSubTypeService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeMasterSuppForm = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeMasterSuppForm, _super);
            function InvoiceItemTypeMasterSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceItemTypeMasterSuppForm.init) {
                    InvoiceItemTypeMasterSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(InvoiceItemTypeMasterSuppForm, [
                        'MasterComponentCd', w0,
                        'InvoiceItemSourceCd', w1,
                        'InvoiceItemTypeCd', w1,
                        'InvoiceItemSubTypeCd', w1,
                        'InvoiceItemSubType2Cd', w1,
                        'InvoiceItemSubType3Cd', w1,
                        'CommentsTxt', w1,
                        'CreatedTs', w2,
                        'CreatedByNam', w1,
                        'ModifiedByNam', w1,
                        'ModifiedTs', w2
                    ]);
                }
                return _this;
            }
            InvoiceItemTypeMasterSuppForm.formKey = 'DWSupport.InvoiceItemTypeMasterSupp';
            return InvoiceItemTypeMasterSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.InvoiceItemTypeMasterSuppForm = InvoiceItemTypeMasterSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeMasterSuppRow;
        (function (InvoiceItemTypeMasterSuppRow) {
            InvoiceItemTypeMasterSuppRow.idProperty = 'InvoiceItemTypeMasterId';
            InvoiceItemTypeMasterSuppRow.nameProperty = 'InvoiceItemTypeCd';
            InvoiceItemTypeMasterSuppRow.localTextPrefix = 'DWSupport.InvoiceItemTypeMasterSupp';
        })(InvoiceItemTypeMasterSuppRow = DWSupport.InvoiceItemTypeMasterSuppRow || (DWSupport.InvoiceItemTypeMasterSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeMasterSuppService;
        (function (InvoiceItemTypeMasterSuppService) {
            InvoiceItemTypeMasterSuppService.baseUrl = 'DWSupport/InvoiceItemTypeMasterSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemTypeMasterSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemTypeMasterSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemTypeMasterSuppService = DWSupport.InvoiceItemTypeMasterSuppService || (DWSupport.InvoiceItemTypeMasterSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeRow;
        (function (InvoiceItemTypeRow) {
            InvoiceItemTypeRow.idProperty = 'ItemTypeCd';
            InvoiceItemTypeRow.nameProperty = 'ItemTypeCd';
            InvoiceItemTypeRow.localTextPrefix = 'DWSupport.InvoiceItemType';
            InvoiceItemTypeRow.lookupKey = 'DWSupport.GetInvoiceItemType';
            function getLookup() {
                return Q.getLookup('DWSupport.GetInvoiceItemType');
            }
            InvoiceItemTypeRow.getLookup = getLookup;
        })(InvoiceItemTypeRow = DWSupport.InvoiceItemTypeRow || (DWSupport.InvoiceItemTypeRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeService;
        (function (InvoiceItemTypeService) {
            InvoiceItemTypeService.baseUrl = 'DWSupport/InvoiceItemType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemTypeService = DWSupport.InvoiceItemTypeService || (DWSupport.InvoiceItemTypeService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeSuppForm = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeSuppForm, _super);
            function InvoiceItemTypeSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceItemTypeSuppForm.init) {
                    InvoiceItemTypeSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(InvoiceItemTypeSuppForm, [
                        'InvoiceClassType1Cd', w0,
                        'InvoiceClassType2Cd', w0,
                        'InvoiceClassType3Cd', w0,
                        'InvoiceClassType4Cd', w0,
                        'InvoiceItemSourceCd', w0,
                        'InvoiceItemTypeCd', w1,
                        'InvoiceItemSubTypeCd', w1,
                        'InvoiceItemSubType2Cd', w1,
                        'InvoiceItemSubType3Cd', w1,
                        'ComponentCd', w1,
                        'ComponentDesc', w0,
                        'ChartOfAccountNbr', w0,
                        'CommentsTxt', w0,
                        'IsNtrCd', w0,
                        'IsGtrCd', w0,
                        'IsDilutionCd', w0,
                        'IsCostCd', w0,
                        'IsTaxCd', w0,
                        'IsCcCostCd', w0,
                        'IsAcctgAdjCd', w0,
                        'IsPioCd', w0,
                        'IsGroupAmenityCd', w0,
                        'AmenityCostAmt', w2,
                        'IsPerDiemCd', w0,
                        'CreatedTs', w3,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w3,
                        'IsAcctgActualCd', w0,
                        'CasinoComponentCd', w0,
                        'CasinoComponentDesc', w0,
                        'DeptShortDesc', w0,
                        'IsSuppressBuiltCd', w0
                    ]);
                }
                return _this;
            }
            InvoiceItemTypeSuppForm.formKey = 'DWSupport.InvoiceItemTypeSupp';
            return InvoiceItemTypeSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.InvoiceItemTypeSuppForm = InvoiceItemTypeSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeSuppRow;
        (function (InvoiceItemTypeSuppRow) {
            InvoiceItemTypeSuppRow.idProperty = 'InvoiceItemTypeGenNatKey';
            InvoiceItemTypeSuppRow.nameProperty = 'InvoiceClassType1Cd';
            InvoiceItemTypeSuppRow.localTextPrefix = 'DWSupport.InvoiceItemTypeSupp';
        })(InvoiceItemTypeSuppRow = DWSupport.InvoiceItemTypeSuppRow || (DWSupport.InvoiceItemTypeSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeSuppService;
        (function (InvoiceItemTypeSuppService) {
            InvoiceItemTypeSuppService.baseUrl = 'DWSupport/InvoiceItemTypeSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemTypeSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemTypeSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemTypeSuppService = DWSupport.InvoiceItemTypeSuppService || (DWSupport.InvoiceItemTypeSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var MasterComponentRow;
        (function (MasterComponentRow) {
            MasterComponentRow.idProperty = 'MasterComponentCd';
            MasterComponentRow.nameProperty = 'MasterComponentCd';
            MasterComponentRow.localTextPrefix = 'DWSupport.MasterComponent';
            MasterComponentRow.lookupKey = 'DWSupport.GetMasterComponent';
            function getLookup() {
                return Q.getLookup('DWSupport.GetMasterComponent');
            }
            MasterComponentRow.getLookup = getLookup;
        })(MasterComponentRow = DWSupport.MasterComponentRow || (DWSupport.MasterComponentRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var MasterComponentService;
        (function (MasterComponentService) {
            MasterComponentService.baseUrl = 'DWSupport/MasterComponent';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MasterComponentService[x] = function (r, s, o) {
                    return Q.serviceRequest(MasterComponentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MasterComponentService = DWSupport.MasterComponentService || (DWSupport.MasterComponentService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var MinibarSetupSuppForm = /** @class */ (function (_super) {
            __extends(MinibarSetupSuppForm, _super);
            function MinibarSetupSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MinibarSetupSuppForm.init) {
                    MinibarSetupSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(MinibarSetupSuppForm, [
                        'ShipCd', w0,
                        'EffectiveDat', w1,
                        'MinibarSetupCostAmt', w2,
                        'CommentTxt', w0,
                        'CreatedByNam', w0,
                        'CreatedTs', w1,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            MinibarSetupSuppForm.formKey = 'DWSupport.MinibarSetupSupp';
            return MinibarSetupSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.MinibarSetupSuppForm = MinibarSetupSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var MinibarSetupSuppRow;
        (function (MinibarSetupSuppRow) {
            MinibarSetupSuppRow.idProperty = 'MinibarSetupSurKey';
            MinibarSetupSuppRow.nameProperty = 'ShipCd';
            MinibarSetupSuppRow.localTextPrefix = 'DWSupport.MinibarSetupSupp';
        })(MinibarSetupSuppRow = DWSupport.MinibarSetupSuppRow || (DWSupport.MinibarSetupSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var MinibarSetupSuppService;
        (function (MinibarSetupSuppService) {
            MinibarSetupSuppService.baseUrl = 'DWSupport/MinibarSetupSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MinibarSetupSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(MinibarSetupSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MinibarSetupSuppService = DWSupport.MinibarSetupSuppService || (DWSupport.MinibarSetupSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PackageTypeCodeSuppRow;
        (function (PackageTypeCodeSuppRow) {
            PackageTypeCodeSuppRow.idProperty = 'TypeCode';
            PackageTypeCodeSuppRow.nameProperty = 'TypeCode';
            PackageTypeCodeSuppRow.localTextPrefix = 'DWSupport.PackageTypeCodeSupp';
            PackageTypeCodeSuppRow.lookupKey = 'DWSupport.PackageTypeCodeSupp';
            function getLookup() {
                return Q.getLookup('DWSupport.PackageTypeCodeSupp');
            }
            PackageTypeCodeSuppRow.getLookup = getLookup;
        })(PackageTypeCodeSuppRow = DWSupport.PackageTypeCodeSuppRow || (DWSupport.PackageTypeCodeSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PackageTypeCodeSuppService;
        (function (PackageTypeCodeSuppService) {
            PackageTypeCodeSuppService.baseUrl = 'DWSupport/PackageTypeCodeSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PackageTypeCodeSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(PackageTypeCodeSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PackageTypeCodeSuppService = DWSupport.PackageTypeCodeSuppService || (DWSupport.PackageTypeCodeSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PortSubstitutionSuppForm = /** @class */ (function (_super) {
            __extends(PortSubstitutionSuppForm, _super);
            function PortSubstitutionSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PortSubstitutionSuppForm.init) {
                    PortSubstitutionSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(PortSubstitutionSuppForm, [
                        'PortCd', w0,
                        'PortNam', w1,
                        'PortSubstitutonNam', w1,
                        'CommentTxt', w1,
                        'CreatedTs', w2,
                        'CreatedByNam', w1,
                        'ModifiedByNam', w1,
                        'ModifiedTs', w2
                    ]);
                }
                return _this;
            }
            PortSubstitutionSuppForm.formKey = 'DWSupport.PortSubstitutionSupp';
            return PortSubstitutionSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.PortSubstitutionSuppForm = PortSubstitutionSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PortSubstitutionSuppRow;
        (function (PortSubstitutionSuppRow) {
            PortSubstitutionSuppRow.idProperty = 'PortSubstitutonSurKey';
            PortSubstitutionSuppRow.nameProperty = 'PortCd';
            PortSubstitutionSuppRow.localTextPrefix = 'DWSupport.PortSubstitutionSupp';
        })(PortSubstitutionSuppRow = DWSupport.PortSubstitutionSuppRow || (DWSupport.PortSubstitutionSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PortSubstitutionSuppService;
        (function (PortSubstitutionSuppService) {
            PortSubstitutionSuppService.baseUrl = 'DWSupport/PortSubstitutionSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PortSubstitutionSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(PortSubstitutionSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PortSubstitutionSuppService = DWSupport.PortSubstitutionSuppService || (DWSupport.PortSubstitutionSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ProductCodeSuppForm = /** @class */ (function (_super) {
            __extends(ProductCodeSuppForm, _super);
            function ProductCodeSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductCodeSuppForm.init) {
                    ProductCodeSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(ProductCodeSuppForm, [
                        'ProductCd', w0,
                        'ProductDesc', w0,
                        'ProductCodeId', w1,
                        'CreatedTs', w2,
                        'CreatedByName', w0,
                        'ModifiedByName', w0,
                        'ModifiedTs', w2
                    ]);
                }
                return _this;
            }
            ProductCodeSuppForm.formKey = 'DWSupport.ProductCodeSupp';
            return ProductCodeSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.ProductCodeSuppForm = ProductCodeSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ProductCodeSuppRow;
        (function (ProductCodeSuppRow) {
            ProductCodeSuppRow.idProperty = 'ProductCd';
            ProductCodeSuppRow.nameProperty = 'ProductDesc';
            ProductCodeSuppRow.localTextPrefix = 'DWSupport.ProductCodeSupp';
            ProductCodeSuppRow.lookupKey = 'DWSupport.ProductCodeSupp';
            function getLookup() {
                return Q.getLookup('DWSupport.ProductCodeSupp');
            }
            ProductCodeSuppRow.getLookup = getLookup;
        })(ProductCodeSuppRow = DWSupport.ProductCodeSuppRow || (DWSupport.ProductCodeSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ProductCodeSuppService;
        (function (ProductCodeSuppService) {
            ProductCodeSuppService.baseUrl = 'DWSupport/ProductCodeSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductCodeSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductCodeSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductCodeSuppService = DWSupport.ProductCodeSuppService || (DWSupport.ProductCodeSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PsGlAccountSuppForm = /** @class */ (function (_super) {
            __extends(PsGlAccountSuppForm, _super);
            function PsGlAccountSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PsGlAccountSuppForm.init) {
                    PsGlAccountSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(PsGlAccountSuppForm, [
                        'SetId', w0,
                        'AccountId', w0,
                        'OlapAccountDesc', w0,
                        'GrossCostCd', w0,
                        'AccountClassType1Cd', w0,
                        'AccountClassType2Cd', w0,
                        'AccountClassType3Cd', w0,
                        'AccountClassType4Cd', w0,
                        'CreatedTs', w1,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            PsGlAccountSuppForm.formKey = 'DWSupport.PsGlAccountSupp';
            return PsGlAccountSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.PsGlAccountSuppForm = PsGlAccountSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PsGlAccountSuppRow;
        (function (PsGlAccountSuppRow) {
            PsGlAccountSuppRow.idProperty = 'AccountSurKey';
            PsGlAccountSuppRow.nameProperty = 'SetId';
            PsGlAccountSuppRow.localTextPrefix = 'DWSupport.PsGlAccountSupp';
        })(PsGlAccountSuppRow = DWSupport.PsGlAccountSuppRow || (DWSupport.PsGlAccountSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PsGlAccountSuppService;
        (function (PsGlAccountSuppService) {
            PsGlAccountSuppService.baseUrl = 'DWSupport/PsGlAccountSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PsGlAccountSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(PsGlAccountSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PsGlAccountSuppService = DWSupport.PsGlAccountSuppService || (DWSupport.PsGlAccountSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var RollupProductCodesSuppForm = /** @class */ (function (_super) {
            __extends(RollupProductCodesSuppForm, _super);
            function RollupProductCodesSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RollupProductCodesSuppForm.init) {
                    RollupProductCodesSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(RollupProductCodesSuppForm, [
                        'ProductCd', w0,
                        'RmRollupProductCd', w0,
                        'RmRollupProductDesc', w0,
                        'BrochureRollupProductCd', w0,
                        'BrochureRollupProductDesc', w0,
                        'CreatedByNam', w0,
                        'CreatedTs', w1,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            RollupProductCodesSuppForm.formKey = 'DWSupport.RollupProductCodesSupp';
            return RollupProductCodesSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.RollupProductCodesSuppForm = RollupProductCodesSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var RollupProductCodesSuppRow;
        (function (RollupProductCodesSuppRow) {
            RollupProductCodesSuppRow.idProperty = 'RollupProductSurKey';
            RollupProductCodesSuppRow.nameProperty = 'ProductCd';
            RollupProductCodesSuppRow.localTextPrefix = 'DWSupport.RollupProductCodesSupp';
        })(RollupProductCodesSuppRow = DWSupport.RollupProductCodesSuppRow || (DWSupport.RollupProductCodesSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var RollupProductCodesSuppService;
        (function (RollupProductCodesSuppService) {
            RollupProductCodesSuppService.baseUrl = 'DWSupport/RollupProductCodesSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RollupProductCodesSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(RollupProductCodesSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RollupProductCodesSuppService = DWSupport.RollupProductCodesSuppService || (DWSupport.RollupProductCodesSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SailingMasterSuppExcelImportForm = /** @class */ (function (_super) {
            __extends(SailingMasterSuppExcelImportForm, _super);
            function SailingMasterSuppExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SailingMasterSuppExcelImportForm.init) {
                    SailingMasterSuppExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(SailingMasterSuppExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            SailingMasterSuppExcelImportForm.formKey = 'DWSupport.SailingMasterSuppExcelImport';
            return SailingMasterSuppExcelImportForm;
        }(Serenity.PrefixedContext));
        DWSupport.SailingMasterSuppExcelImportForm = SailingMasterSuppExcelImportForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SailingMasterSuppForm = /** @class */ (function (_super) {
            __extends(SailingMasterSuppForm, _super);
            function SailingMasterSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SailingMasterSuppForm.init) {
                    SailingMasterSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.MaskedEditor;
                    var w4 = DWSupport.SelectYNEditor;
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
                return _this;
            }
            SailingMasterSuppForm.formKey = 'DWSupport.SailingMasterSupp';
            return SailingMasterSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.SailingMasterSuppForm = SailingMasterSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SailingMasterSuppRow;
        (function (SailingMasterSuppRow) {
            SailingMasterSuppRow.idProperty = 'SailSurKey';
            SailingMasterSuppRow.nameProperty = 'PackageTypeCd';
            SailingMasterSuppRow.localTextPrefix = 'DWSupport.SailingMasterSupp';
        })(SailingMasterSuppRow = DWSupport.SailingMasterSuppRow || (DWSupport.SailingMasterSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SailingMasterSuppService;
        (function (SailingMasterSuppService) {
            SailingMasterSuppService.baseUrl = 'DWSupport/SailingMasterSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                SailingMasterSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(SailingMasterSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SailingMasterSuppService = DWSupport.SailingMasterSuppService || (DWSupport.SailingMasterSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ShipRow;
        (function (ShipRow) {
            ShipRow.idProperty = 'ShipCode';
            ShipRow.nameProperty = 'ShipCode';
            ShipRow.localTextPrefix = 'DWSupport.Ship';
            ShipRow.lookupKey = 'DWSupport.ShipCode';
            function getLookup() {
                return Q.getLookup('DWSupport.ShipCode');
            }
            ShipRow.getLookup = getLookup;
        })(ShipRow = DWSupport.ShipRow || (DWSupport.ShipRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ShipService;
        (function (ShipService) {
            ShipService.baseUrl = 'DWSupport/Ship';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShipService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShipService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShipService = DWSupport.ShipService || (DWSupport.ShipService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SlProductCodeSuppForm = /** @class */ (function (_super) {
            __extends(SlProductCodeSuppForm, _super);
            function SlProductCodeSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SlProductCodeSuppForm.init) {
                    SlProductCodeSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(SlProductCodeSuppForm, [
                        'SlProductCd', w0,
                        'SlProductDesc', w0,
                        'CreatedTs', w1,
                        'CreatedByName', w0,
                        'ModifiedByName', w0,
                        'ModifiedTs', w1
                    ]);
                }
                return _this;
            }
            SlProductCodeSuppForm.formKey = 'DWSupport.SlProductCodeSupp';
            return SlProductCodeSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.SlProductCodeSuppForm = SlProductCodeSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SlProductCodeSuppRow;
        (function (SlProductCodeSuppRow) {
            SlProductCodeSuppRow.idProperty = 'SlProductCd';
            SlProductCodeSuppRow.nameProperty = 'SlProductDesc';
            SlProductCodeSuppRow.localTextPrefix = 'DWSupport.SlProductCodeSupp';
            SlProductCodeSuppRow.lookupKey = 'DWSupport.SlProductCodeSupp';
            function getLookup() {
                return Q.getLookup('DWSupport.SlProductCodeSupp');
            }
            SlProductCodeSuppRow.getLookup = getLookup;
        })(SlProductCodeSuppRow = DWSupport.SlProductCodeSuppRow || (DWSupport.SlProductCodeSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SlProductCodeSuppService;
        (function (SlProductCodeSuppService) {
            SlProductCodeSuppService.baseUrl = 'DWSupport/SlProductCodeSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SlProductCodeSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(SlProductCodeSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SlProductCodeSuppService = DWSupport.SlProductCodeSuppService || (DWSupport.SlProductCodeSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SurveyFilterExclusionSuppForm = /** @class */ (function (_super) {
            __extends(SurveyFilterExclusionSuppForm, _super);
            function SurveyFilterExclusionSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SurveyFilterExclusionSuppForm.init) {
                    SurveyFilterExclusionSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(SurveyFilterExclusionSuppForm, [
                        'SurveyExclusionId', w0,
                        'ReasonDesc', w0,
                        'CommentsTxt', w0,
                        'SailId', w1,
                        'GuestId', w1,
                        'CreatedTs', w2,
                        'CreatedByNam', w0,
                        'ModifiedByNam', w0,
                        'ModifiedTs', w2
                    ]);
                }
                return _this;
            }
            SurveyFilterExclusionSuppForm.formKey = 'DWSupport.SurveyFilterExclusionSupp';
            return SurveyFilterExclusionSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.SurveyFilterExclusionSuppForm = SurveyFilterExclusionSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SurveyFilterExclusionSuppRow;
        (function (SurveyFilterExclusionSuppRow) {
            SurveyFilterExclusionSuppRow.idProperty = 'SurveyExclusionSurKey';
            SurveyFilterExclusionSuppRow.nameProperty = 'ReasonDesc';
            SurveyFilterExclusionSuppRow.localTextPrefix = 'DWSupport.SurveyFilterExclusionSupp';
        })(SurveyFilterExclusionSuppRow = DWSupport.SurveyFilterExclusionSuppRow || (DWSupport.SurveyFilterExclusionSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SurveyFilterExclusionSuppService;
        (function (SurveyFilterExclusionSuppService) {
            SurveyFilterExclusionSuppService.baseUrl = 'DWSupport/SurveyFilterExclusionSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SurveyFilterExclusionSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(SurveyFilterExclusionSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SurveyFilterExclusionSuppService = DWSupport.SurveyFilterExclusionSuppService || (DWSupport.SurveyFilterExclusionSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var TblStrategicPriceControlExcelImportForm = /** @class */ (function (_super) {
            __extends(TblStrategicPriceControlExcelImportForm, _super);
            function TblStrategicPriceControlExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblStrategicPriceControlExcelImportForm.init) {
                    TblStrategicPriceControlExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(TblStrategicPriceControlExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            TblStrategicPriceControlExcelImportForm.formKey = 'DWSupport.TblStrategicPriceControlExcelImport';
            return TblStrategicPriceControlExcelImportForm;
        }(Serenity.PrefixedContext));
        DWSupport.TblStrategicPriceControlExcelImportForm = TblStrategicPriceControlExcelImportForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var TblStrategicPriceControlForm = /** @class */ (function (_super) {
            __extends(TblStrategicPriceControlForm, _super);
            function TblStrategicPriceControlForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TblStrategicPriceControlForm.init) {
                    TblStrategicPriceControlForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(TblStrategicPriceControlForm, [
                        'SailId', w0,
                        'CategoryCd', w0,
                        'EffectiveFromDat', w1,
                        'EffectiveToDat', w1,
                        'DiscPct', w2,
                        'CreatedDat', w1,
                        'CreatedByNam', w0,
                        'ModifiedDat', w1,
                        'ModifiedByNam', w0
                    ]);
                }
                return _this;
            }
            TblStrategicPriceControlForm.formKey = 'DWSupport.TblStrategicPriceControl';
            return TblStrategicPriceControlForm;
        }(Serenity.PrefixedContext));
        DWSupport.TblStrategicPriceControlForm = TblStrategicPriceControlForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var TblStrategicPriceControlRow;
        (function (TblStrategicPriceControlRow) {
            TblStrategicPriceControlRow.idProperty = 'StrategicPriceControlId';
            TblStrategicPriceControlRow.nameProperty = 'CategoryCd';
            TblStrategicPriceControlRow.localTextPrefix = 'DWSupport.TblStrategicPriceControl';
        })(TblStrategicPriceControlRow = DWSupport.TblStrategicPriceControlRow || (DWSupport.TblStrategicPriceControlRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var TblStrategicPriceControlService;
        (function (TblStrategicPriceControlService) {
            TblStrategicPriceControlService.baseUrl = 'DWSupport/TblStrategicPriceControl';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                TblStrategicPriceControlService[x] = function (r, s, o) {
                    return Q.serviceRequest(TblStrategicPriceControlService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TblStrategicPriceControlService = DWSupport.TblStrategicPriceControlService || (DWSupport.TblStrategicPriceControlService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var UpgradeAdvAdjSuppForm = /** @class */ (function (_super) {
            __extends(UpgradeAdvAdjSuppForm, _super);
            function UpgradeAdvAdjSuppForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UpgradeAdvAdjSuppForm.init) {
                    UpgradeAdvAdjSuppForm.init = true;
                    var s = Serenity;
                    var w0 = s.DecimalEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(UpgradeAdvAdjSuppForm, [
                        'UpgradeAmountMin', w0,
                        'UpgradeAmountMax', w0,
                        'CommissionPercent', w0,
                        'EffectiveFromDt', w1,
                        'EffectiveToDt', w1,
                        'CreatedTs', w1,
                        'CreatedByName', w2,
                        'ModifiedTs', w1,
                        'ModifiedByName', w2
                    ]);
                }
                return _this;
            }
            UpgradeAdvAdjSuppForm.formKey = 'DWSupport.UpgradeAdvAdjSupp';
            return UpgradeAdvAdjSuppForm;
        }(Serenity.PrefixedContext));
        DWSupport.UpgradeAdvAdjSuppForm = UpgradeAdvAdjSuppForm;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var UpgradeAdvAdjSuppRow;
        (function (UpgradeAdvAdjSuppRow) {
            UpgradeAdvAdjSuppRow.idProperty = 'UpgradeAdvAdjId';
            UpgradeAdvAdjSuppRow.nameProperty = 'CreatedByName';
            UpgradeAdvAdjSuppRow.localTextPrefix = 'DWSupport.UpgradeAdvAdjSupp';
        })(UpgradeAdvAdjSuppRow = DWSupport.UpgradeAdvAdjSuppRow || (DWSupport.UpgradeAdvAdjSuppRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var UpgradeAdvAdjSuppService;
        (function (UpgradeAdvAdjSuppService) {
            UpgradeAdvAdjSuppService.baseUrl = 'DWSupport/UpgradeAdvAdjSupp';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UpgradeAdvAdjSuppService[x] = function (r, s, o) {
                    return Q.serviceRequest(UpgradeAdvAdjSuppService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UpgradeAdvAdjSuppService = DWSupport.UpgradeAdvAdjSuppService || (DWSupport.UpgradeAdvAdjSuppService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var VwGetSeaPortCodeRow;
        (function (VwGetSeaPortCodeRow) {
            VwGetSeaPortCodeRow.idProperty = 'PortCode';
            VwGetSeaPortCodeRow.nameProperty = 'PortCode';
            VwGetSeaPortCodeRow.localTextPrefix = 'DWSupport.VwGetSeaPortCode';
            VwGetSeaPortCodeRow.lookupKey = 'DWSupport.GetPortNames';
            function getLookup() {
                return Q.getLookup('DWSupport.GetPortNames');
            }
            VwGetSeaPortCodeRow.getLookup = getLookup;
        })(VwGetSeaPortCodeRow = DWSupport.VwGetSeaPortCodeRow || (DWSupport.VwGetSeaPortCodeRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var VwGetSeaPortCodeService;
        (function (VwGetSeaPortCodeService) {
            VwGetSeaPortCodeService.baseUrl = 'DWSupport/VwGetSeaPortCode';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VwGetSeaPortCodeService[x] = function (r, s, o) {
                    return Q.serviceRequest(VwGetSeaPortCodeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VwGetSeaPortCodeService = DWSupport.VwGetSeaPortCodeService || (DWSupport.VwGetSeaPortCodeService = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var VwGetSeaSalesRepIdRow;
        (function (VwGetSeaSalesRepIdRow) {
            VwGetSeaSalesRepIdRow.idProperty = 'UserLoginName';
            VwGetSeaSalesRepIdRow.nameProperty = 'UserLoginName';
            VwGetSeaSalesRepIdRow.localTextPrefix = 'DWSupport.VwGetSeaSalesRepId';
            VwGetSeaSalesRepIdRow.lookupKey = 'DWSupport.LoginName';
            function getLookup() {
                return Q.getLookup('DWSupport.LoginName');
            }
            VwGetSeaSalesRepIdRow.getLookup = getLookup;
        })(VwGetSeaSalesRepIdRow = DWSupport.VwGetSeaSalesRepIdRow || (DWSupport.VwGetSeaSalesRepIdRow = {}));
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var VwGetSeaSalesRepIdService;
        (function (VwGetSeaSalesRepIdService) {
            VwGetSeaSalesRepIdService.baseUrl = 'DWSupport/VwGetSeaSalesRepId';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VwGetSeaSalesRepIdService[x] = function (r, s, o) {
                    return Q.serviceRequest(VwGetSeaSalesRepIdService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VwGetSeaSalesRepIdService = DWSupport.VwGetSeaSalesRepIdService || (DWSupport.VwGetSeaSalesRepIdService = {}));
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
                        'Cet', w2,
                        'LseIndex', w1,
                        'CeIndex', w1
                    ]);
                }
                return _this;
            }
            DataFlowForm.formKey = 'NCLHDSAR.DataFlow';
            return DataFlowForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.DataFlowForm = DataFlowForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var DataFlowRow;
        (function (DataFlowRow) {
            DataFlowRow.idProperty = 'Key';
            DataFlowRow.nameProperty = 'Source';
            DataFlowRow.localTextPrefix = 'NCLHDSAR.DataFlow';
        })(DataFlowRow = NCLHDSAR.DataFlowRow || (NCLHDSAR.DataFlowRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var DataFlowService;
        (function (DataFlowService) {
            DataFlowService.baseUrl = 'NCLHDSAR/DataFlow';
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
        })(DataFlowService = NCLHDSAR.DataFlowService || (NCLHDSAR.DataFlowService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestBrandsRow;
        (function (MarketingRequestBrandsRow) {
            MarketingRequestBrandsRow.idProperty = 'Id';
            MarketingRequestBrandsRow.nameProperty = 'Description';
            MarketingRequestBrandsRow.localTextPrefix = 'DWSupport.MarketingRequestBrands';
        })(MarketingRequestBrandsRow = NCLHDSAR.MarketingRequestBrandsRow || (NCLHDSAR.MarketingRequestBrandsRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestBrandsService;
        (function (MarketingRequestBrandsService) {
            MarketingRequestBrandsService.baseUrl = 'NCLHDSAR/MarketingRequestBrands';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MarketingRequestBrandsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MarketingRequestBrandsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MarketingRequestBrandsService = NCLHDSAR.MarketingRequestBrandsService || (NCLHDSAR.MarketingRequestBrandsService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestChannelsRow;
        (function (MarketingRequestChannelsRow) {
            MarketingRequestChannelsRow.idProperty = 'Id';
            MarketingRequestChannelsRow.nameProperty = 'Description';
            MarketingRequestChannelsRow.localTextPrefix = 'DWSupport.MarketingRequestChannels';
        })(MarketingRequestChannelsRow = NCLHDSAR.MarketingRequestChannelsRow || (NCLHDSAR.MarketingRequestChannelsRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestChannelsService;
        (function (MarketingRequestChannelsService) {
            MarketingRequestChannelsService.baseUrl = 'NCLHDSAR/MarketingRequestChannels';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MarketingRequestChannelsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MarketingRequestChannelsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MarketingRequestChannelsService = NCLHDSAR.MarketingRequestChannelsService || (NCLHDSAR.MarketingRequestChannelsService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestExcelImportForm = /** @class */ (function (_super) {
            __extends(MarketingRequestExcelImportForm, _super);
            function MarketingRequestExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MarketingRequestExcelImportForm.init) {
                    MarketingRequestExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(MarketingRequestExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            MarketingRequestExcelImportForm.formKey = 'NCLHDSAR.MarketingRequestExcelImport';
            return MarketingRequestExcelImportForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.MarketingRequestExcelImportForm = MarketingRequestExcelImportForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestForm = /** @class */ (function (_super) {
            __extends(MarketingRequestForm, _super);
            function MarketingRequestForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MarketingRequestForm.init) {
                    MarketingRequestForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(MarketingRequestForm, [
                        'RequestTypeId', w0,
                        'SourceId', w0,
                        'BrandId', w0,
                        'ContactId', w1,
                        'FirstName', w1,
                        'LastName', w1,
                        'Phone', w1,
                        'EmailAddress', w1,
                        'OptOutStatusID', w0,
                        'ChannelId', w0,
                        'IsReturnedMailCd', w2,
                        'Title', w1,
                        'Address1', w1,
                        'Address2', w1,
                        'City', w1,
                        'State', w1,
                        'Zip', w1,
                        'Country', w1,
                        'CreatedBy', w1,
                        'CreatedDate', w3,
                        'ModifiedBy', w1,
                        'ModifiedDate', w3
                    ]);
                }
                return _this;
            }
            MarketingRequestForm.formKey = 'NCLHDSAR.MarketingRequest';
            return MarketingRequestForm;
        }(Serenity.PrefixedContext));
        NCLHDSAR.MarketingRequestForm = MarketingRequestForm;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestOptOutStatusRow;
        (function (MarketingRequestOptOutStatusRow) {
            MarketingRequestOptOutStatusRow.idProperty = 'Id';
            MarketingRequestOptOutStatusRow.nameProperty = 'Description';
            MarketingRequestOptOutStatusRow.localTextPrefix = 'DWSupport.MarketingRequestOptOutStatus';
        })(MarketingRequestOptOutStatusRow = NCLHDSAR.MarketingRequestOptOutStatusRow || (NCLHDSAR.MarketingRequestOptOutStatusRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestOptOutStatusService;
        (function (MarketingRequestOptOutStatusService) {
            MarketingRequestOptOutStatusService.baseUrl = 'NCLHDSAR/MarketingRequestOptOutStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MarketingRequestOptOutStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(MarketingRequestOptOutStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MarketingRequestOptOutStatusService = NCLHDSAR.MarketingRequestOptOutStatusService || (NCLHDSAR.MarketingRequestOptOutStatusService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestRow;
        (function (MarketingRequestRow) {
            MarketingRequestRow.idProperty = 'Id';
            MarketingRequestRow.nameProperty = 'ContactId';
            MarketingRequestRow.localTextPrefix = 'DWSupport.MarketingRequest';
        })(MarketingRequestRow = NCLHDSAR.MarketingRequestRow || (NCLHDSAR.MarketingRequestRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestService;
        (function (MarketingRequestService) {
            MarketingRequestService.baseUrl = 'NCLHDSAR/MarketingRequest';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImportChangeOfAddress',
                'ExcelImportReturnMail'
            ].forEach(function (x) {
                MarketingRequestService[x] = function (r, s, o) {
                    return Q.serviceRequest(MarketingRequestService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MarketingRequestService = NCLHDSAR.MarketingRequestService || (NCLHDSAR.MarketingRequestService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestSourcesRow;
        (function (MarketingRequestSourcesRow) {
            MarketingRequestSourcesRow.idProperty = 'Id';
            MarketingRequestSourcesRow.nameProperty = 'Description';
            MarketingRequestSourcesRow.localTextPrefix = 'DWSupport.MarketingRequestSources';
        })(MarketingRequestSourcesRow = NCLHDSAR.MarketingRequestSourcesRow || (NCLHDSAR.MarketingRequestSourcesRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestSourcesService;
        (function (MarketingRequestSourcesService) {
            MarketingRequestSourcesService.baseUrl = 'NCLHDSAR/MarketingRequestSources';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MarketingRequestSourcesService[x] = function (r, s, o) {
                    return Q.serviceRequest(MarketingRequestSourcesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MarketingRequestSourcesService = NCLHDSAR.MarketingRequestSourcesService || (NCLHDSAR.MarketingRequestSourcesService = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestTypesRow;
        (function (MarketingRequestTypesRow) {
            MarketingRequestTypesRow.idProperty = 'Id';
            MarketingRequestTypesRow.nameProperty = 'Description';
            MarketingRequestTypesRow.localTextPrefix = 'DWSupport.MarketingRequestTypes';
        })(MarketingRequestTypesRow = NCLHDSAR.MarketingRequestTypesRow || (NCLHDSAR.MarketingRequestTypesRow = {}));
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestTypesService;
        (function (MarketingRequestTypesService) {
            MarketingRequestTypesService.baseUrl = 'NCLHDSAR/MarketingRequestTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MarketingRequestTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(MarketingRequestTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MarketingRequestTypesService = NCLHDSAR.MarketingRequestTypesService || (NCLHDSAR.MarketingRequestTypesService = {}));
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
                'UpdateSP',
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
            function DataFlowForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DataFlowForm.init) {
                    DataFlowForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateTimeEditor;
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
            DataFlowForm.formKey = 'NCLHODSMICROS.DataFlow';
            return DataFlowForm;
        }(Serenity.PrefixedContext));
        NCLHODSMICROS.DataFlowForm = DataFlowForm;
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
            function DataFlowForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DataFlowForm.init) {
                    DataFlowForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateTimeEditor;
                    Q.initFormType(DataFlowForm, [
                        'Source', w0,
                        'Name', w0,
                        'ProcessYn', w0,
                        'Target', w0,
                        'Description', w0,
                        'Package', w0,
                        'Status', w1,
                        'Lset', w2,
                        'Cet', w2
                    ]);
                }
                return _this;
            }
            DataFlowForm.formKey = 'NCLHODSSPENDVIS.DataFlow';
            return DataFlowForm;
        }(Serenity.PrefixedContext));
        NCLHODSSPENDVIS.DataFlowForm = DataFlowForm;
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
        })(DataFlowService = NCLHODSSPENDVIS.DataFlowService || (NCLHODSSPENDVIS.DataFlowService = {}));
    })(NCLHODSSPENDVIS = DAP.NCLHODSSPENDVIS || (DAP.NCLHODSSPENDVIS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCruiseExcelImportForm = /** @class */ (function (_super) {
            __extends(DimCruiseExcelImportForm, _super);
            function DimCruiseExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DimCruiseExcelImportForm.init) {
                    DimCruiseExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(DimCruiseExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            DimCruiseExcelImportForm.formKey = 'PCHDW.DimCruiseExcelImport';
            return DimCruiseExcelImportForm;
        }(Serenity.PrefixedContext));
        PCHDW.DimCruiseExcelImportForm = DimCruiseExcelImportForm;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCruiseForm = /** @class */ (function (_super) {
            __extends(DimCruiseForm, _super);
            function DimCruiseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DimCruiseForm.init) {
                    DimCruiseForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.DecimalEditor;
                    Q.initFormType(DimCruiseForm, [
                        'CruiseCd', w0,
                        'CruiseSegmentCd', w0,
                        'CruiseName', w0,
                        'LocationName', w0,
                        'SeasonName', w0,
                        'RouteName', w0,
                        'MarketName', w0,
                        'CruiseDaysQty', w1,
                        'CruiseFromDt', w2,
                        'CruiseToDt', w2,
                        'CruiseSegmentDaysQty', w1,
                        'CruiseSegmentFromDt', w2,
                        'CruiseSegmentToDt', w2,
                        'IrsTaxInd', w3,
                        'IrsTaxAmt', w4,
                        'IufExemptFeeInd', w3,
                        'IufExemptQty', w1,
                        'IufExemptFeeAmt', w4,
                        'IufNonexemptFeeInd', w3,
                        'IufNonexemptQty', w1,
                        'IufNonexemptFeeAmt', w4,
                        'PpfExemptInd', w3,
                        'PpfExemptFeeAmt', w4,
                        'PpfNonexemptInd', w3,
                        'PpfNonexemptFeeAmt', w4,
                        'HmfFeeInd', w3,
                        'HmfPct', w4,
                        'CpvTaxInd', w3,
                        'CpvTaxAmt', w4,
                        'CruiseSailingStatusDesc', w0,
                        'CharterInd', w0,
                        'StatedCapacity', w1,
                        'CappedCapacity', w1,
                        'CruiseStatusCd', w0,
                        'MinisegInd', w0,
                        'OnbrdAvgPaxQty', w1,
                        'HighlightInd', w1,
                        'ColorInd', w0,
                        'DrydockInd', w1,
                        'AmenityPointsAllowedQty', w1,
                        'VarToCurve', w4,
                        'FinancialSuppressInd', w0,
                        'FromPortCd', w0,
                        'ToPortCd', w0,
                        'FromPortName', w0,
                        'ToPortName', w0,
                        'SegmentFromPortCd', w0,
                        'SegmentToPortCd', w0,
                        'SegmentFromPortName', w0,
                        'SegmentToPortName', w0,
                        'SuperMarketCd', w0,
                        'SuperMarketDesc', w0,
                        'CruiseSegmentName', w0,
                        'SegmentLocationName', w0,
                        'SegmentSeasonName', w0,
                        'SegmentRouteName', w0,
                        'SegmentMarketName', w0,
                        'SegmentSuperMarketCd', w0,
                        'SegmentSuperMarketDesc', w0,
                        'CompanyCd', w0,
                        'ShipCd', w0,
                        'ShowInReport', w0,
                        'CruiseFromDtMmddyyyy', w0,
                        'CruiseToDtMmddyyyy', w0,
                        'SegmentFromDtMmddyyyy', w0,
                        'SegmentToDtMmddyyyy', w0,
                        'OnboardAcctTrandate', w0,
                        'SegmentOnboardAcctTrandate', w0,
                        'RevenueMgmtMarketSegment', w0
                    ]);
                }
                return _this;
            }
            DimCruiseForm.formKey = 'PCHDW.DimCruise';
            return DimCruiseForm;
        }(Serenity.PrefixedContext));
        PCHDW.DimCruiseForm = DimCruiseForm;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCruiseRow;
        (function (DimCruiseRow) {
            DimCruiseRow.idProperty = 'CruiseTk';
            DimCruiseRow.nameProperty = 'CruiseCd';
            DimCruiseRow.localTextPrefix = 'PCHDW.DimCruise';
            DimCruiseRow.lookupKey = 'PCHDW.GetDimCruise';
            function getLookup() {
                return Q.getLookup('PCHDW.GetDimCruise');
            }
            DimCruiseRow.getLookup = getLookup;
        })(DimCruiseRow = PCHDW.DimCruiseRow || (PCHDW.DimCruiseRow = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCruiseService;
        (function (DimCruiseService) {
            DimCruiseService.baseUrl = 'PCHDW/DimCruise';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                DimCruiseService[x] = function (r, s, o) {
                    return Q.serviceRequest(DimCruiseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DimCruiseService = PCHDW.DimCruiseService || (PCHDW.DimCruiseService = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCurrencyRow;
        (function (DimCurrencyRow) {
            DimCurrencyRow.idProperty = 'Cd';
            DimCurrencyRow.nameProperty = 'Cd';
            DimCurrencyRow.localTextPrefix = 'PCHDW.DimCurrency';
            DimCurrencyRow.lookupKey = 'PCHDW.Currency';
            function getLookup() {
                return Q.getLookup('PCHDW.Currency');
            }
            DimCurrencyRow.getLookup = getLookup;
        })(DimCurrencyRow = PCHDW.DimCurrencyRow || (PCHDW.DimCurrencyRow = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCurrencyService;
        (function (DimCurrencyService) {
            DimCurrencyService.baseUrl = 'PCHDW/DimCurrency';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DimCurrencyService[x] = function (r, s, o) {
                    return Q.serviceRequest(DimCurrencyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DimCurrencyService = PCHDW.DimCurrencyService || (PCHDW.DimCurrencyService = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimInvoiceForm = /** @class */ (function (_super) {
            __extends(DimInvoiceForm, _super);
            function DimInvoiceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DimInvoiceForm.init) {
                    DimInvoiceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.DecimalEditor;
                    Q.initFormType(DimInvoiceForm, [
                        'InvoiceNum', w0,
                        'CompanyCd', w0,
                        'PassengerQty', w1,
                        'NonrevPassengerQty', w1,
                        'NontaxPassengerQty', w1,
                        'OfficeCd', w0,
                        'OfficeDesc', w0,
                        'CurrencyCd', w0,
                        'CurrencyDesc', w0,
                        'StatusCd', w0,
                        'StatusDesc', w0,
                        'ZipCd', w0,
                        'CityName', w0,
                        'StateCd', w0,
                        'CountryName', w0,
                        'CancellationDt', w2,
                        'BonusSavingsCd', w0,
                        'BonusSavingsDesc', w0,
                        'AirParticipationInd', w3,
                        'HotelParticipationInd', w3,
                        'PaxAirClassCd', w0,
                        'DepositDt', w2,
                        'DepositAmt', w0,
                        'UserId', w0,
                        'Pax1FirstName', w0,
                        'Pax1LastName', w0,
                        'Pax2FirstName', w0,
                        'Pax2LastName', w0,
                        'CruiseTk', w1,
                        'ChangeDt', w2,
                        'CreateDt', w2,
                        'FirstPaymentDt', w2,
                        'FinalPaymentDueDt', w2,
                        'InitialWaitlistInd', w3,
                        'CancelBookingStatusCd', w0,
                        'SalesSourceCd', w0,
                        'SalesSourceDesc', w0,
                        'OriginalConsortiumCd', w0,
                        'OriginalConsortiumDesc', w0,
                        'UserName', w0,
                        'OriginalUserId', w0,
                        'OriginalUserName', w0,
                        'OriginalDeptCd', w0,
                        'OriginalDeptName', w0,
                        'OriginalUserActiveInd', w0,
                        'WaitlistDt', w2,
                        'FirstConfirmDt', w2,
                        'PastGuestInd', w1,
                        'DirectBookingInd', w0,
                        'AttnName', w0,
                        'ComboBookingInd', w0,
                        'OnboardTypeDesc', w0,
                        'CruiseSvcMgmtCrNum', w0,
                        'PromoCd', w0,
                        'GdsSystemCd', w0,
                        'GdsSystemDesc', w0,
                        'PromoDesc', w0,
                        'CancellationType', w0,
                        'ChannelTk', w1,
                        'PromoBonusComm', w0,
                        'PromoCommAmt', w4,
                        'ComboLegQty', w4,
                        'CancelReason', w0,
                        'PaidClassCd', w0,
                        'PaidClassCategoryDesc', w0,
                        'OciOfficeCd', w0,
                        'AirXferFeeAmt', w4,
                        'CountryCd', w0,
                        'FutureDepositFlag', w0,
                        'PromotionalAmenityCd', w0,
                        'CruiseCommissionAmt', w4,
                        'PostedInvoiceDt', w2,
                        'AgentTk', w1,
                        'Cinvoice1Num', w0,
                        'Cinvoice2Num', w0,
                        'Cinvoice3Num', w0,
                        'Cinvoice4Num', w0,
                        'Cinvoice5Num', w0,
                        'Cinvoice6Num', w0,
                        'PackageCd', w0,
                        'LandPackageParticipantQty', w1,
                        'LandPackageParticipantInd', w0,
                        'DptrFlightQty', w1,
                        'RtrnFlightQty', w1,
                        'DptrFlightClassCd', w0,
                        'RtrnFlightClassCd', w0,
                        'AirCostSourceCd', w0,
                        'ChannelCountryCd', w0,
                        'ChannelCountryName', w0,
                        'Pax1AirportHome1Cd', w0,
                        'Pax1AirportRtrn1Cd', w0,
                        'Pax1FirstFlightClass', w0,
                        'Pax1RtrnFlightClass', w0,
                        'Pax2AirportHome1Cd', w0,
                        'Pax2AirportRtrn1Cd', w0,
                        'Pax2FirstFlightClass', w0,
                        'Pax2RtrnFlightClass', w0,
                        'Pax1LoyaltyLevelNm', w0,
                        'Pax2LoyaltyLevelNm', w0,
                        'InstallmentPlanInd', w0,
                        'InstallmentPlanNum', w1,
                        'CruiseSvcMgmtId', w0,
                        'OutboundReportingRegionCd', w0,
                        'CenturionCd', w0,
                        'CenturionInd', w0,
                        'PlatinumCd', w0,
                        'PlatinumInd', w0,
                        'DwPastGuestInd', w0,
                        'DwPastGuest1Ind', w0,
                        'DwPastGuest2Ind', w0,
                        'Pax1NvsPgInd', w0,
                        'Pax2NvsPgInd', w0,
                        'NvsPgInd', w0,
                        'CurrentPackageCd', w0,
                        'MpcardNumPax1', w0,
                        'CurrentLoyaltyLevelPax1', w0,
                        'MpcardNumPax2', w0,
                        'CurrentLoyaltyLevelPax2', w0,
                        'FccDeferredInd', w0
                    ]);
                }
                return _this;
            }
            DimInvoiceForm.formKey = 'PCHDW.DimInvoice';
            return DimInvoiceForm;
        }(Serenity.PrefixedContext));
        PCHDW.DimInvoiceForm = DimInvoiceForm;
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
            });
        })(DimInvoiceService = PCHDW.DimInvoiceService || (PCHDW.DimInvoiceService = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimOfficeRow;
        (function (DimOfficeRow) {
            DimOfficeRow.idProperty = 'Tk';
            DimOfficeRow.nameProperty = 'Desc';
            DimOfficeRow.localTextPrefix = 'PCHDW.DimOffice';
            DimOfficeRow.lookupKey = 'PCHDW.DimOffice';
            function getLookup() {
                return Q.getLookup('PCHDW.DimOffice');
            }
            DimOfficeRow.getLookup = getLookup;
        })(DimOfficeRow = PCHDW.DimOfficeRow || (PCHDW.DimOfficeRow = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimOfficeService;
        (function (DimOfficeService) {
            DimOfficeService.baseUrl = 'PCHDW/DimOffice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DimOfficeService[x] = function (r, s, o) {
                    return Q.serviceRequest(DimOfficeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DimOfficeService = PCHDW.DimOfficeService || (PCHDW.DimOfficeService = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var ScheduledJobForm = /** @class */ (function (_super) {
            __extends(ScheduledJobForm, _super);
            function ScheduledJobForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ScheduledJobForm.init) {
                    ScheduledJobForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(ScheduledJobForm, [
                        'JobName', w0,
                        'JobDescription', w1
                    ]);
                }
                return _this;
            }
            ScheduledJobForm.formKey = 'PCHDW.ScheduledJob';
            return ScheduledJobForm;
        }(Serenity.PrefixedContext));
        PCHDW.ScheduledJobForm = ScheduledJobForm;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var ScheduledJobRow;
        (function (ScheduledJobRow) {
            ScheduledJobRow.idProperty = 'ScheduledJobId';
            ScheduledJobRow.nameProperty = 'JobName';
            ScheduledJobRow.localTextPrefix = 'PCHDW.ScheduledJob';
        })(ScheduledJobRow = PCHDW.ScheduledJobRow || (PCHDW.ScheduledJobRow = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var ScheduledJobService;
        (function (ScheduledJobService) {
            ScheduledJobService.baseUrl = 'PCHDW/ScheduledJob';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ScheduledJobService[x] = function (r, s, o) {
                    return Q.serviceRequest(ScheduledJobService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ScheduledJobService = PCHDW.ScheduledJobService || (PCHDW.ScheduledJobService = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var VwSqlJobListForm = /** @class */ (function (_super) {
            __extends(VwSqlJobListForm, _super);
            function VwSqlJobListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VwSqlJobListForm.init) {
                    VwSqlJobListForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(VwSqlJobListForm, [
                        'Enabled', w0,
                        'DateCreated', w1,
                        'DateModified', w1
                    ]);
                }
                return _this;
            }
            VwSqlJobListForm.formKey = 'PCHDW.VwSqlJobList';
            return VwSqlJobListForm;
        }(Serenity.PrefixedContext));
        PCHDW.VwSqlJobListForm = VwSqlJobListForm;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var VwSqlJobListRow;
        (function (VwSqlJobListRow) {
            VwSqlJobListRow.idProperty = 'Name';
            VwSqlJobListRow.nameProperty = 'Name';
            VwSqlJobListRow.localTextPrefix = 'PCHDW.VwSqlJobList';
        })(VwSqlJobListRow = PCHDW.VwSqlJobListRow || (PCHDW.VwSqlJobListRow = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var VwSqlJobListService;
        (function (VwSqlJobListService) {
            VwSqlJobListService.baseUrl = 'PCHDW/VwSqlJobList';
            [
                'Create',
                'Update',
                'UpdateWithSP',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VwSqlJobListService[x] = function (r, s, o) {
                    return Q.serviceRequest(VwSqlJobListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VwSqlJobListService = PCHDW.VwSqlJobListService || (PCHDW.VwSqlJobListService = {}));
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var InboundUserOverrideDescriptionRow;
        (function (InboundUserOverrideDescriptionRow) {
            InboundUserOverrideDescriptionRow.idProperty = 'Id';
            InboundUserOverrideDescriptionRow.nameProperty = 'Description';
            InboundUserOverrideDescriptionRow.localTextPrefix = 'PCHODS.InboundUserOverrideDescription';
        })(InboundUserOverrideDescriptionRow = PCHODS.InboundUserOverrideDescriptionRow || (PCHODS.InboundUserOverrideDescriptionRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var InboundUserOverrideDescriptionService;
        (function (InboundUserOverrideDescriptionService) {
            InboundUserOverrideDescriptionService.baseUrl = 'PCHODS/InboundUserOverrideDescription';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InboundUserOverrideDescriptionService[x] = function (r, s, o) {
                    return Q.serviceRequest(InboundUserOverrideDescriptionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InboundUserOverrideDescriptionService = PCHODS.InboundUserOverrideDescriptionService || (PCHODS.InboundUserOverrideDescriptionService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var InboundUserOverrideForm = /** @class */ (function (_super) {
            __extends(InboundUserOverrideForm, _super);
            function InboundUserOverrideForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InboundUserOverrideForm.init) {
                    InboundUserOverrideForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(InboundUserOverrideForm, [
                        'Company', w0,
                        'Invoice', w0,
                        'UserAssign', w0,
                        'ItDescription', w1,
                        'Inbound', w0,
                        'Comments', w0
                    ]);
                }
                return _this;
            }
            InboundUserOverrideForm.formKey = 'PCHODS.InboundUserOverride';
            return InboundUserOverrideForm;
        }(Serenity.PrefixedContext));
        PCHODS.InboundUserOverrideForm = InboundUserOverrideForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var InboundUserOverrideRow;
        (function (InboundUserOverrideRow) {
            InboundUserOverrideRow.idProperty = 'Id';
            InboundUserOverrideRow.nameProperty = 'Company';
            InboundUserOverrideRow.localTextPrefix = 'PCHODS.InboundUserOverride';
        })(InboundUserOverrideRow = PCHODS.InboundUserOverrideRow || (PCHODS.InboundUserOverrideRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var InboundUserOverrideService;
        (function (InboundUserOverrideService) {
            InboundUserOverrideService.baseUrl = 'PCHODS/InboundUserOverride';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InboundUserOverrideService[x] = function (r, s, o) {
                    return Q.serviceRequest(InboundUserOverrideService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InboundUserOverrideService = PCHODS.InboundUserOverrideService || (PCHODS.InboundUserOverrideService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
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
                    var w2 = s.StringEditor;
                    var w3 = PCHODS.OutboundAgentLocationEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(OutboundAgentForm, [
                        'NvsUserId', w0,
                        'CompanyCd', w1,
                        'PrimaryBrand', w1,
                        'CobrandInd', w2,
                        'TeamCompanyCd', w1,
                        'AgentLocationId', w3,
                        'StartInactiveDt', w4
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
        var OutboundCommissionBkGoalForm = /** @class */ (function (_super) {
            __extends(OutboundCommissionBkGoalForm, _super);
            function OutboundCommissionBkGoalForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutboundCommissionBkGoalForm.init) {
                    OutboundCommissionBkGoalForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODS.CompanyEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OutboundCommissionBkGoalForm, [
                        'CompanyCd', w0,
                        'CommissionMonth', w1,
                        'NumOfBkGoal', w2,
                        'LoadDt', w1
                    ]);
                }
                return _this;
            }
            OutboundCommissionBkGoalForm.formKey = 'PCHODS.OutboundCommissionBkGoal';
            return OutboundCommissionBkGoalForm;
        }(Serenity.PrefixedContext));
        PCHODS.OutboundCommissionBkGoalForm = OutboundCommissionBkGoalForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionBkGoalRow;
        (function (OutboundCommissionBkGoalRow) {
            OutboundCommissionBkGoalRow.idProperty = 'CommissionTk';
            OutboundCommissionBkGoalRow.localTextPrefix = 'PCHODS.OutboundCommissionBkGoal';
            OutboundCommissionBkGoalRow.lookupKey = 'PCHODS.OutboundAgentLocation';
            function getLookup() {
                return Q.getLookup('PCHODS.OutboundAgentLocation');
            }
            OutboundCommissionBkGoalRow.getLookup = getLookup;
        })(OutboundCommissionBkGoalRow = PCHODS.OutboundCommissionBkGoalRow || (PCHODS.OutboundCommissionBkGoalRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionBkGoalService;
        (function (OutboundCommissionBkGoalService) {
            OutboundCommissionBkGoalService.baseUrl = 'PCHODS/OutboundCommissionBkGoal';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutboundCommissionBkGoalService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutboundCommissionBkGoalService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutboundCommissionBkGoalService = PCHODS.OutboundCommissionBkGoalService || (PCHODS.OutboundCommissionBkGoalService = {}));
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
        var SelectCompanyAuForm = /** @class */ (function (_super) {
            __extends(SelectCompanyAuForm, _super);
            function SelectCompanyAuForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SelectCompanyAuForm.init) {
                    SelectCompanyAuForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODS.SelectCompanyAUEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(SelectCompanyAuForm, [
                        'CompanyCd', w0,
                        'EffectiveDt', w1
                    ]);
                }
                return _this;
            }
            SelectCompanyAuForm.formKey = 'PCHODS.SelectCompanyAU';
            return SelectCompanyAuForm;
        }(Serenity.PrefixedContext));
        PCHODS.SelectCompanyAuForm = SelectCompanyAuForm;
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
                    var w1 = s.DateEditor;
                    Q.initFormType(SelectCompanyForm, [
                        'CompanyCd', w0,
                        'EffectiveDt', w1
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
    var PCHODS;
    (function (PCHODS) {
        var UarEmployeeDirectreportsRow;
        (function (UarEmployeeDirectreportsRow) {
            UarEmployeeDirectreportsRow.idProperty = 'EmployeeId';
            UarEmployeeDirectreportsRow.nameProperty = 'EmployeeId';
            UarEmployeeDirectreportsRow.localTextPrefix = 'PCHODS.UarEmployeeDirectreports';
            UarEmployeeDirectreportsRow.lookupKey = 'PCHODS.UarEmployeeDirectreports';
            function getLookup() {
                return Q.getLookup('PCHODS.UarEmployeeDirectreports');
            }
            UarEmployeeDirectreportsRow.getLookup = getLookup;
        })(UarEmployeeDirectreportsRow = PCHODS.UarEmployeeDirectreportsRow || (PCHODS.UarEmployeeDirectreportsRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarEmployeeDirectreportsService;
        (function (UarEmployeeDirectreportsService) {
            UarEmployeeDirectreportsService.baseUrl = 'PCHODS/UarEmployeeDirectreports';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UarEmployeeDirectreportsService[x] = function (r, s, o) {
                    return Q.serviceRequest(UarEmployeeDirectreportsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UarEmployeeDirectreportsService = PCHODS.UarEmployeeDirectreportsService || (PCHODS.UarEmployeeDirectreportsService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarSrDirAboveListForm = /** @class */ (function (_super) {
            __extends(UarSrDirAboveListForm, _super);
            function UarSrDirAboveListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UarSrDirAboveListForm.init) {
                    UarSrDirAboveListForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(UarSrDirAboveListForm, [
                        'Jobtitle', w0,
                        'IsSrDirAbove', w1,
                        'DateEffective', w2,
                        'DateExpires', w2,
                        'RowChangeReason', w0
                    ]);
                }
                return _this;
            }
            UarSrDirAboveListForm.formKey = 'PCHODS.UarSrDirAboveList';
            return UarSrDirAboveListForm;
        }(Serenity.PrefixedContext));
        PCHODS.UarSrDirAboveListForm = UarSrDirAboveListForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarSrDirAboveListRow;
        (function (UarSrDirAboveListRow) {
            UarSrDirAboveListRow.idProperty = 'Id';
            UarSrDirAboveListRow.nameProperty = 'Jobtitle';
            UarSrDirAboveListRow.localTextPrefix = 'PCHODS.UarSrDirAboveList';
        })(UarSrDirAboveListRow = PCHODS.UarSrDirAboveListRow || (PCHODS.UarSrDirAboveListRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarSrDirAboveListService;
        (function (UarSrDirAboveListService) {
            UarSrDirAboveListService.baseUrl = 'PCHODS/UarSrDirAboveList';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UarSrDirAboveListService[x] = function (r, s, o) {
                    return Q.serviceRequest(UarSrDirAboveListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UarSrDirAboveListService = PCHODS.UarSrDirAboveListService || (PCHODS.UarSrDirAboveListService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarUnknownReviewerForm = /** @class */ (function (_super) {
            __extends(UarUnknownReviewerForm, _super);
            function UarUnknownReviewerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UarUnknownReviewerForm.init) {
                    UarUnknownReviewerForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(UarUnknownReviewerForm, [
                        'EmployeeId', w0,
                        'UserLoginName', w1,
                        'UserFullName', w1,
                        'Firstname', w1,
                        'Middlename', w1,
                        'Lastname', w1,
                        'OfficeCode', w1,
                        'Department', w1,
                        'Comments', w1,
                        'UserGroupId', w1,
                        'UserGroupName', w1,
                        'GroupDescription', w1,
                        'UserGroupRights', w1,
                        'TaskId', w1,
                        'TaskName', w1,
                        'CriticalFuction', w1,
                        'Accesstype', w1,
                        'SupEmployeeid', w1,
                        'ReviewerFirstname', w1,
                        'ReviewerLastname', w1,
                        'HowFound', w1,
                        'AdManager', w1,
                        'AdActiveStatus', w1,
                        'HrEmpStatus', w1,
                        'AdDescription', w1,
                        'ReviewerItCompliance', w0
                    ]);
                }
                return _this;
            }
            UarUnknownReviewerForm.formKey = 'PCHODS.UarUnknownReviewer';
            return UarUnknownReviewerForm;
        }(Serenity.PrefixedContext));
        PCHODS.UarUnknownReviewerForm = UarUnknownReviewerForm;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarUnknownReviewerRow;
        (function (UarUnknownReviewerRow) {
            UarUnknownReviewerRow.idProperty = 'Id';
            UarUnknownReviewerRow.nameProperty = 'EmployeeId';
            UarUnknownReviewerRow.localTextPrefix = 'PCHODS.UarUnknownReviewer';
        })(UarUnknownReviewerRow = PCHODS.UarUnknownReviewerRow || (PCHODS.UarUnknownReviewerRow = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarUnknownReviewerService;
        (function (UarUnknownReviewerService) {
            UarUnknownReviewerService.baseUrl = 'PCHODS/UarUnknownReviewer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UarUnknownReviewerService[x] = function (r, s, o) {
                    return Q.serviceRequest(UarUnknownReviewerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UarUnknownReviewerService = PCHODS.UarUnknownReviewerService || (PCHODS.UarUnknownReviewerService = {}));
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var AgencyRow;
        (function (AgencyRow) {
            AgencyRow.idProperty = 'AgencyCd';
            AgencyRow.nameProperty = 'AgencyCdName';
            AgencyRow.localTextPrefix = 'PCHODSNVS.Agency';
            AgencyRow.lookupKey = 'PCHODSNVS.Agency';
            function getLookup() {
                return Q.getLookup('PCHODSNVS.Agency');
            }
            AgencyRow.getLookup = getLookup;
        })(AgencyRow = PCHODSNVS.AgencyRow || (PCHODSNVS.AgencyRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var AgencyService;
        (function (AgencyService) {
            AgencyService.baseUrl = 'PCHODSNVS/Agency';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AgencyService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgencyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgencyService = PCHODSNVS.AgencyService || (PCHODSNVS.AgencyService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var ConsortiumExceptionListForm = /** @class */ (function (_super) {
            __extends(ConsortiumExceptionListForm, _super);
            function ConsortiumExceptionListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ConsortiumExceptionListForm.init) {
                    ConsortiumExceptionListForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(ConsortiumExceptionListForm, [
                        'CompanyCd', w0,
                        'NewItemType', w1,
                        'NewItemName', w2,
                        'ItemType', w1,
                        'ItemCd', w2,
                        'ItemName', w2,
                        'ExcludeInd', w3,
                        'CombineInd', w3,
                        'LoadDt', w4
                    ]);
                }
                return _this;
            }
            ConsortiumExceptionListForm.formKey = 'PCHODSNVS.ConsortiumExceptionList';
            return ConsortiumExceptionListForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.ConsortiumExceptionListForm = ConsortiumExceptionListForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var ConsortiumExceptionListRow;
        (function (ConsortiumExceptionListRow) {
            ConsortiumExceptionListRow.idProperty = 'ConsortiumExceptionListTk';
            ConsortiumExceptionListRow.nameProperty = 'CompanyCd';
            ConsortiumExceptionListRow.localTextPrefix = 'PCHODSNVS.ConsortiumExceptionList';
        })(ConsortiumExceptionListRow = PCHODSNVS.ConsortiumExceptionListRow || (PCHODSNVS.ConsortiumExceptionListRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var ConsortiumExceptionListService;
        (function (ConsortiumExceptionListService) {
            ConsortiumExceptionListService.baseUrl = 'PCHODSNVS/ConsortiumExceptionList';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ConsortiumExceptionListService[x] = function (r, s, o) {
                    return Q.serviceRequest(ConsortiumExceptionListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ConsortiumExceptionListService = PCHODSNVS.ConsortiumExceptionListService || (PCHODSNVS.ConsortiumExceptionListService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var GetCruiseSegmentRow;
        (function (GetCruiseSegmentRow) {
            GetCruiseSegmentRow.idProperty = 'CruiseSegmentCd';
            GetCruiseSegmentRow.nameProperty = 'CruiseSegmentCd';
            GetCruiseSegmentRow.localTextPrefix = 'PCHODSNVS.GetCruiseSegment';
            GetCruiseSegmentRow.lookupKey = 'PCHODSNVS.GetSegment';
            function getLookup() {
                return Q.getLookup('PCHODSNVS.GetSegment');
            }
            GetCruiseSegmentRow.getLookup = getLookup;
        })(GetCruiseSegmentRow = PCHODSNVS.GetCruiseSegmentRow || (PCHODSNVS.GetCruiseSegmentRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var GetCruiseSegmentService;
        (function (GetCruiseSegmentService) {
            GetCruiseSegmentService.baseUrl = 'PCHODSNVS/GetCruiseSegment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GetCruiseSegmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(GetCruiseSegmentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GetCruiseSegmentService = PCHODSNVS.GetCruiseSegmentService || (PCHODSNVS.GetCruiseSegmentService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var GsaDistributionListForm = /** @class */ (function (_super) {
            __extends(GsaDistributionListForm, _super);
            function GsaDistributionListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GsaDistributionListForm.init) {
                    GsaDistributionListForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(GsaDistributionListForm, [
                        'CompanyCd', w0,
                        'AgencyCd', w1,
                        'AccountName', w2,
                        'ContactName', w2,
                        'Email', w2,
                        'LoadDt', w3
                    ]);
                }
                return _this;
            }
            GsaDistributionListForm.formKey = 'PCHODSNVS.GsaDistributionList';
            return GsaDistributionListForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.GsaDistributionListForm = GsaDistributionListForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var GsaDistributionListRow;
        (function (GsaDistributionListRow) {
            GsaDistributionListRow.idProperty = 'GsaDistributionListTk';
            GsaDistributionListRow.nameProperty = 'CompanyCd';
            GsaDistributionListRow.localTextPrefix = 'PCHODSNVS.GsaDistributionList';
        })(GsaDistributionListRow = PCHODSNVS.GsaDistributionListRow || (PCHODSNVS.GsaDistributionListRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var GsaDistributionListService;
        (function (GsaDistributionListService) {
            GsaDistributionListService.baseUrl = 'PCHODSNVS/GsaDistributionList';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GsaDistributionListService[x] = function (r, s, o) {
                    return Q.serviceRequest(GsaDistributionListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GsaDistributionListService = PCHODSNVS.GsaDistributionListService || (PCHODSNVS.GsaDistributionListService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var ItemTypeRow;
        (function (ItemTypeRow) {
            ItemTypeRow.idProperty = 'Type';
            ItemTypeRow.nameProperty = 'Type';
            ItemTypeRow.localTextPrefix = 'PCHODSNVS.ItemType';
            ItemTypeRow.lookupKey = 'PCHODSNVS.Item_Type';
            function getLookup() {
                return Q.getLookup('PCHODSNVS.Item_Type');
            }
            ItemTypeRow.getLookup = getLookup;
        })(ItemTypeRow = PCHODSNVS.ItemTypeRow || (PCHODSNVS.ItemTypeRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var ItemTypeService;
        (function (ItemTypeService) {
            ItemTypeService.baseUrl = 'PCHODSNVS/ItemType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemTypeService = PCHODSNVS.ItemTypeService || (PCHODSNVS.ItemTypeService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var KeyAcctTargetExcelImportForm = /** @class */ (function (_super) {
            __extends(KeyAcctTargetExcelImportForm, _super);
            function KeyAcctTargetExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!KeyAcctTargetExcelImportForm.init) {
                    KeyAcctTargetExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(KeyAcctTargetExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            KeyAcctTargetExcelImportForm.formKey = 'PCHODSNVS.KeyAcctTargetExcelImport';
            return KeyAcctTargetExcelImportForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.KeyAcctTargetExcelImportForm = KeyAcctTargetExcelImportForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetByChannelExcelImportForm = /** @class */ (function (_super) {
            __extends(NtrBudgetByChannelExcelImportForm, _super);
            function NtrBudgetByChannelExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrBudgetByChannelExcelImportForm.init) {
                    NtrBudgetByChannelExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(NtrBudgetByChannelExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            NtrBudgetByChannelExcelImportForm.formKey = 'PCHODSNVS.NtrBudgetByChannelExcelImport';
            return NtrBudgetByChannelExcelImportForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrBudgetByChannelExcelImportForm = NtrBudgetByChannelExcelImportForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetByChannelForm = /** @class */ (function (_super) {
            __extends(NtrBudgetByChannelForm, _super);
            function NtrBudgetByChannelForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrBudgetByChannelForm.init) {
                    NtrBudgetByChannelForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(NtrBudgetByChannelForm, [
                        'CompanyCd', w0,
                        'AccountingYear', w1,
                        'ChannelSummDesc', w2,
                        'ChannelDesc', w2,
                        'NtrBudget', w3,
                        'PdsBudgetTotal', w3,
                        'NpdBudget', w3
                    ]);
                }
                return _this;
            }
            NtrBudgetByChannelForm.formKey = 'PCHODSNVS.NtrBudgetByChannel';
            return NtrBudgetByChannelForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrBudgetByChannelForm = NtrBudgetByChannelForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetByChannelRow;
        (function (NtrBudgetByChannelRow) {
            NtrBudgetByChannelRow.idProperty = 'BudgetbychannelTk';
            NtrBudgetByChannelRow.nameProperty = 'CompanyCd';
            NtrBudgetByChannelRow.localTextPrefix = 'PCHODSNVS.NtrBudgetByChannel';
        })(NtrBudgetByChannelRow = PCHODSNVS.NtrBudgetByChannelRow || (PCHODSNVS.NtrBudgetByChannelRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetByChannelService;
        (function (NtrBudgetByChannelService) {
            NtrBudgetByChannelService.baseUrl = 'PCHODSNVS/NtrBudgetByChannel';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                NtrBudgetByChannelService[x] = function (r, s, o) {
                    return Q.serviceRequest(NtrBudgetByChannelService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NtrBudgetByChannelService = PCHODSNVS.NtrBudgetByChannelService || (PCHODSNVS.NtrBudgetByChannelService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetExcelImportForm = /** @class */ (function (_super) {
            __extends(NtrBudgetExcelImportForm, _super);
            function NtrBudgetExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrBudgetExcelImportForm.init) {
                    NtrBudgetExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(NtrBudgetExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            NtrBudgetExcelImportForm.formKey = 'PCHODSNVS.NtrBudgetExcelImport';
            return NtrBudgetExcelImportForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrBudgetExcelImportForm = NtrBudgetExcelImportForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetForm = /** @class */ (function (_super) {
            __extends(NtrBudgetForm, _super);
            function NtrBudgetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrBudgetForm.init) {
                    NtrBudgetForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(NtrBudgetForm, [
                        'CompanyCd', w0,
                        'AccountPeriodNum', w1,
                        'NtrBudget', w2,
                        'PdsBudgetTotal', w2,
                        'ApcdFinal', w2,
                        'NtrFinancialBudget', w2
                    ]);
                }
                return _this;
            }
            NtrBudgetForm.formKey = 'PCHODSNVS.NtrBudget';
            return NtrBudgetForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrBudgetForm = NtrBudgetForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetRow;
        (function (NtrBudgetRow) {
            NtrBudgetRow.idProperty = 'BudgetTk';
            NtrBudgetRow.nameProperty = 'CompanyCd';
            NtrBudgetRow.localTextPrefix = 'PCHODSNVS.NtrBudget';
        })(NtrBudgetRow = PCHODSNVS.NtrBudgetRow || (PCHODSNVS.NtrBudgetRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetService;
        (function (NtrBudgetService) {
            NtrBudgetService.baseUrl = 'PCHODSNVS/NtrBudget';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                NtrBudgetService[x] = function (r, s, o) {
                    return Q.serviceRequest(NtrBudgetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NtrBudgetService = PCHODSNVS.NtrBudgetService || (PCHODSNVS.NtrBudgetService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrFcstExcelImportForm = /** @class */ (function (_super) {
            __extends(NtrFcstExcelImportForm, _super);
            function NtrFcstExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrFcstExcelImportForm.init) {
                    NtrFcstExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(NtrFcstExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            NtrFcstExcelImportForm.formKey = 'PCHODSNVS.NtrFcstExcelImport';
            return NtrFcstExcelImportForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrFcstExcelImportForm = NtrFcstExcelImportForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrFcstForm = /** @class */ (function (_super) {
            __extends(NtrFcstForm, _super);
            function NtrFcstForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrFcstForm.init) {
                    NtrFcstForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(NtrFcstForm, [
                        'CompanyCd', w0,
                        'AccountPeriodNum', w1,
                        'NtrFcst', w2,
                        'PdsFcstTotal', w2,
                        'ApcdFinal', w2,
                        'NtrFinancialBudget', w2
                    ]);
                }
                return _this;
            }
            NtrFcstForm.formKey = 'PCHODSNVS.NtrFcst';
            return NtrFcstForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrFcstForm = NtrFcstForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrFcstRow;
        (function (NtrFcstRow) {
            NtrFcstRow.idProperty = 'FcstTk';
            NtrFcstRow.nameProperty = 'CompanyCd';
            NtrFcstRow.localTextPrefix = 'PCHODSNVS.NtrFcst';
        })(NtrFcstRow = PCHODSNVS.NtrFcstRow || (PCHODSNVS.NtrFcstRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrFcstService;
        (function (NtrFcstService) {
            NtrFcstService.baseUrl = 'PCHODSNVS/NtrFcst';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                NtrFcstService[x] = function (r, s, o) {
                    return Q.serviceRequest(NtrFcstService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NtrFcstService = PCHODSNVS.NtrFcstService || (PCHODSNVS.NtrFcstService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
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
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(NtrIntlDatelineCruisesForm, [
                        'CompanyCd', w0,
                        'CruiseSegmentCd', w1,
                        'CruiseDaysQty', w2,
                        'CruiseCalendarDaysQty', w2,
                        'LoadDt', w3
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
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrPastMonthsActualExcelImportForm = /** @class */ (function (_super) {
            __extends(NtrPastMonthsActualExcelImportForm, _super);
            function NtrPastMonthsActualExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrPastMonthsActualExcelImportForm.init) {
                    NtrPastMonthsActualExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(NtrPastMonthsActualExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            NtrPastMonthsActualExcelImportForm.formKey = 'PCHODSNVS.NtrPastMonthsActualExcelImport';
            return NtrPastMonthsActualExcelImportForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrPastMonthsActualExcelImportForm = NtrPastMonthsActualExcelImportForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrPastMonthsActualForm = /** @class */ (function (_super) {
            __extends(NtrPastMonthsActualForm, _super);
            function NtrPastMonthsActualForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrPastMonthsActualForm.init) {
                    NtrPastMonthsActualForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(NtrPastMonthsActualForm, [
                        'CompanyCd', w0,
                        'YearMonth', w1,
                        'NtrFinal', w2,
                        'CxRev', w2,
                        'PdsFinalTotal', w2,
                        'ApcdFinal', w2,
                        'BookedNumOfCabins', w2,
                        'AvailableNumOfCabins', w2,
                        'StlyBookedNumOfCabins', w2,
                        'StlyAvailableNumOfCabins', w2
                    ]);
                }
                return _this;
            }
            NtrPastMonthsActualForm.formKey = 'PCHODSNVS.NtrPastMonthsActual';
            return NtrPastMonthsActualForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrPastMonthsActualForm = NtrPastMonthsActualForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrPastMonthsActualRow;
        (function (NtrPastMonthsActualRow) {
            NtrPastMonthsActualRow.idProperty = 'PastmonthactualTk';
            NtrPastMonthsActualRow.nameProperty = 'CompanyCd';
            NtrPastMonthsActualRow.localTextPrefix = 'PCHODSNVS.NtrPastMonthsActual';
        })(NtrPastMonthsActualRow = PCHODSNVS.NtrPastMonthsActualRow || (PCHODSNVS.NtrPastMonthsActualRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrPastMonthsActualService;
        (function (NtrPastMonthsActualService) {
            NtrPastMonthsActualService.baseUrl = 'PCHODSNVS/NtrPastMonthsActual';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                NtrPastMonthsActualService[x] = function (r, s, o) {
                    return Q.serviceRequest(NtrPastMonthsActualService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NtrPastMonthsActualService = PCHODSNVS.NtrPastMonthsActualService || (PCHODSNVS.NtrPastMonthsActualService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrRptCommentForm = /** @class */ (function (_super) {
            __extends(NtrRptCommentForm, _super);
            function NtrRptCommentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NtrRptCommentForm.init) {
                    NtrRptCommentForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(NtrRptCommentForm, [
                        'CompanyCd', w0,
                        'ReportDate', w1,
                        'Comment', w2,
                        'AccountPeriodNum', w3
                    ]);
                }
                return _this;
            }
            NtrRptCommentForm.formKey = 'PCHODSNVS.NtrRptComment';
            return NtrRptCommentForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.NtrRptCommentForm = NtrRptCommentForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrRptCommentRow;
        (function (NtrRptCommentRow) {
            NtrRptCommentRow.idProperty = 'CommentTk';
            NtrRptCommentRow.nameProperty = 'CompanyCd';
            NtrRptCommentRow.localTextPrefix = 'PCHODSNVS.NtrRptComment';
        })(NtrRptCommentRow = PCHODSNVS.NtrRptCommentRow || (PCHODSNVS.NtrRptCommentRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrRptCommentService;
        (function (NtrRptCommentService) {
            NtrRptCommentService.baseUrl = 'PCHODSNVS/NtrRptComment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NtrRptCommentService[x] = function (r, s, o) {
                    return Q.serviceRequest(NtrRptCommentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NtrRptCommentService = PCHODSNVS.NtrRptCommentService || (PCHODSNVS.NtrRptCommentService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var RevenueAdhocManagementForm = /** @class */ (function (_super) {
            __extends(RevenueAdhocManagementForm, _super);
            function RevenueAdhocManagementForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RevenueAdhocManagementForm.init) {
                    RevenueAdhocManagementForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(RevenueAdhocManagementForm, [
                        'DatabaseId', w0,
                        'CubeId', w0,
                        'CompanyCd', w1,
                        'AdhocDate', w2,
                        'AdhocDateTk', w3,
                        'SqlJobName', w0,
                        'LastProcessedDateTime', w2
                    ]);
                }
                return _this;
            }
            RevenueAdhocManagementForm.formKey = 'PCHODSNVS.RevenueAdhocManagement';
            return RevenueAdhocManagementForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.RevenueAdhocManagementForm = RevenueAdhocManagementForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var RevenueAdhocManagementRow;
        (function (RevenueAdhocManagementRow) {
            RevenueAdhocManagementRow.idProperty = 'Key';
            RevenueAdhocManagementRow.nameProperty = 'DatabaseId';
            RevenueAdhocManagementRow.localTextPrefix = 'PCHODSNVS.RevenueAdhocManagement';
        })(RevenueAdhocManagementRow = PCHODSNVS.RevenueAdhocManagementRow || (PCHODSNVS.RevenueAdhocManagementRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var RevenueAdhocManagementService;
        (function (RevenueAdhocManagementService) {
            RevenueAdhocManagementService.baseUrl = 'PCHODSNVS/RevenueAdhocManagement';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExecuteSP'
            ].forEach(function (x) {
                RevenueAdhocManagementService[x] = function (r, s, o) {
                    return Q.serviceRequest(RevenueAdhocManagementService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RevenueAdhocManagementService = PCHODSNVS.RevenueAdhocManagementService || (PCHODSNVS.RevenueAdhocManagementService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var SuppKeyAcctTargetForm = /** @class */ (function (_super) {
            __extends(SuppKeyAcctTargetForm, _super);
            function SuppKeyAcctTargetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SuppKeyAcctTargetForm.init) {
                    SuppKeyAcctTargetForm.init = true;
                    var s = Serenity;
                    var w0 = PCHODSNVS.SelectPCHCompanyEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.DecimalEditor;
                    Q.initFormType(SuppKeyAcctTargetForm, [
                        'CompanyCd', w0,
                        'AgencyCd', w1,
                        'Year', w2,
                        'KeyAcctLink', w3,
                        'AccountType', w3,
                        'LoadDt', w4,
                        'CcfTargetQ1', w5,
                        'PrctTargetQ1', w5,
                        'CcfTargetQ12', w5,
                        'PrctTargetQ12', w5,
                        'CcfTargetQ13', w5,
                        'PrctTargetQ13', w5,
                        'CcfTargetQ14', w5,
                        'PrctTargetQ14', w5,
                        'CcfTargetQ15', w5,
                        'PrctTargetQ15', w5,
                        'CcfTargetQ2', w5,
                        'PrctTargetQ2', w5,
                        'CcfTargetQ22', w5,
                        'PrctTargetQ22', w5,
                        'CcfTargetQ23', w5,
                        'PrctTargetQ23', w5,
                        'CcfTargetQ24', w5,
                        'PrctTargetQ24', w5,
                        'CcfTargetQ25', w5,
                        'PrctTargetQ25', w5,
                        'CcfTargetQ3', w5,
                        'PrctTargetQ3', w5,
                        'CcfTargetQ32', w5,
                        'PrctTargetQ32', w5,
                        'CcfTargetQ33', w5,
                        'PrctTargetQ33', w5,
                        'CcfTargetQ34', w5,
                        'PrctTargetQ34', w5,
                        'CcfTargetQ35', w5,
                        'PrctTargetQ35', w5,
                        'CcfTargetQ4', w5,
                        'PrctTargetQ4', w5,
                        'CcfTargetQ42', w5,
                        'PrctTargetQ42', w5,
                        'CcfTargetQ43', w5,
                        'PrctTargetQ43', w5,
                        'CcfTargetQ44', w5,
                        'PrctTargetQ44', w5,
                        'CcfTargetQ45', w5,
                        'PrctTargetQ45', w5,
                        'CcfTargetFy1', w5,
                        'CcfTargetFy2', w5,
                        'CcfTargetFy3', w5,
                        'CcfTargetFy4', w5,
                        'CcfTargetFy5', w5
                    ]);
                }
                return _this;
            }
            SuppKeyAcctTargetForm.formKey = 'PCHODSNVS.SuppKeyAcctTarget';
            return SuppKeyAcctTargetForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.SuppKeyAcctTargetForm = SuppKeyAcctTargetForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var SuppKeyAcctTargetRow;
        (function (SuppKeyAcctTargetRow) {
            SuppKeyAcctTargetRow.idProperty = 'KeyAcctTk';
            SuppKeyAcctTargetRow.nameProperty = 'KeyAcctLink';
            SuppKeyAcctTargetRow.localTextPrefix = 'PCHODSNVS.SuppKeyAcctTarget';
        })(SuppKeyAcctTargetRow = PCHODSNVS.SuppKeyAcctTargetRow || (PCHODSNVS.SuppKeyAcctTargetRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var SuppKeyAcctTargetService;
        (function (SuppKeyAcctTargetService) {
            SuppKeyAcctTargetService.baseUrl = 'PCHODSNVS/SuppKeyAcctTarget';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport',
                'ExcelImport2'
            ].forEach(function (x) {
                SuppKeyAcctTargetService[x] = function (r, s, o) {
                    return Q.serviceRequest(SuppKeyAcctTargetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SuppKeyAcctTargetService = PCHODSNVS.SuppKeyAcctTargetService || (PCHODSNVS.SuppKeyAcctTargetService = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var TransferEstimateOciAmtExcelImportForm = /** @class */ (function (_super) {
            __extends(TransferEstimateOciAmtExcelImportForm, _super);
            function TransferEstimateOciAmtExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransferEstimateOciAmtExcelImportForm.init) {
                    TransferEstimateOciAmtExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(TransferEstimateOciAmtExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            TransferEstimateOciAmtExcelImportForm.formKey = 'PCHODSNVS.TransferEstimateOciAmtExcelImport';
            return TransferEstimateOciAmtExcelImportForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.TransferEstimateOciAmtExcelImportForm = TransferEstimateOciAmtExcelImportForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var TransferEstimateOciAmtForm = /** @class */ (function (_super) {
            __extends(TransferEstimateOciAmtForm, _super);
            function TransferEstimateOciAmtForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransferEstimateOciAmtForm.init) {
                    TransferEstimateOciAmtForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(TransferEstimateOciAmtForm, [
                        'CruiseSegmentCd', w0,
                        'SegmentMarketName', w1,
                        'ShipCd', w1,
                        'TransferCostPerPax', w2,
                        'LoadDt', w3
                    ]);
                }
                return _this;
            }
            TransferEstimateOciAmtForm.formKey = 'PCHODSNVS.TransferEstimateOciAmt';
            return TransferEstimateOciAmtForm;
        }(Serenity.PrefixedContext));
        PCHODSNVS.TransferEstimateOciAmtForm = TransferEstimateOciAmtForm;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var TransferEstimateOciAmtRow;
        (function (TransferEstimateOciAmtRow) {
            TransferEstimateOciAmtRow.idProperty = 'TransferId';
            TransferEstimateOciAmtRow.nameProperty = 'SegmentMarketName';
            TransferEstimateOciAmtRow.localTextPrefix = 'PCHODSNVS.TransferEstimateOciAmt';
        })(TransferEstimateOciAmtRow = PCHODSNVS.TransferEstimateOciAmtRow || (PCHODSNVS.TransferEstimateOciAmtRow = {}));
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var TransferEstimateOciAmtService;
        (function (TransferEstimateOciAmtService) {
            TransferEstimateOciAmtService.baseUrl = 'PCHODSNVS/TransferEstimateOciAmt';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                TransferEstimateOciAmtService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransferEstimateOciAmtService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransferEstimateOciAmtService = PCHODSNVS.TransferEstimateOciAmtService || (PCHODSNVS.TransferEstimateOciAmtService = {}));
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
                    var w2 = s.DateTimeEditor;
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
            function MicrosDataFlowForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MicrosDataFlowForm.init) {
                    MicrosDataFlowForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateTimeEditor;
                    Q.initFormType(MicrosDataFlowForm, [
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
                        'Cet', w2,
                        'LseIndex', w1,
                        'CeIndex', w1
                    ]);
                }
                return _this;
            }
            MicrosDataFlowForm.formKey = 'SSISConfig.MicrosDataFlow';
            return MicrosDataFlowForm;
        }(Serenity.PrefixedContext));
        SSISConfig.MicrosDataFlowForm = MicrosDataFlowForm;
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
            });
        })(MicrosDataFlowService = SSISConfig.MicrosDataFlowService || (SSISConfig.MicrosDataFlowService = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var NclhShipForm = /** @class */ (function (_super) {
            __extends(NclhShipForm, _super);
            function NclhShipForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NclhShipForm.init) {
                    NclhShipForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(NclhShipForm, [
                        'ShipAbbreviation', w0,
                        'ShipFullName', w0,
                        'CompanyCd', w0,
                        'DepartmentCd', w0,
                        'LocationCd', w0,
                        'IsActive', w1,
                        'ShipTk', w2,
                        'HasMerged', w1
                    ]);
                }
                return _this;
            }
            NclhShipForm.formKey = 'SSISConfig.NclhShip';
            return NclhShipForm;
        }(Serenity.PrefixedContext));
        SSISConfig.NclhShipForm = NclhShipForm;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var NclhShipRow;
        (function (NclhShipRow) {
            NclhShipRow.idProperty = 'ShipId';
            NclhShipRow.nameProperty = 'ShipAbbreviation';
            NclhShipRow.localTextPrefix = 'SSISConfig.NclhShip';
        })(NclhShipRow = SSISConfig.NclhShipRow || (SSISConfig.NclhShipRow = {}));
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var NclhShipService;
        (function (NclhShipService) {
            NclhShipService.baseUrl = 'SSISConfig/NclhShip';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NclhShipService[x] = function (r, s, o) {
                    return Q.serviceRequest(NclhShipService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NclhShipService = SSISConfig.NclhShipService || (SSISConfig.NclhShipService = {}));
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
        DAP['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { DataAuditLog: { FieldName: 1, LogDate: 1, LogId: 1, LogType: 1, NewValue: 1, OldValue: 1, RecordId: 1, Tablename: 1, UserDisplayName: 1, UserId: 1, Username: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleKey: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, ImpersonationToken: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, MobilePhoneNumber: 1, MobilePhoneVerified: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TwoFactorAuth: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Avaya: { Brand: { Brand: 1, BrandTk: 1 }, CallType: { Type: 1, TypeTk: 1 }, Department: { Department: 1, DepartmentTk: 1 }, Group: { Cd: 1, Tk: 1 }, Region: { Region: 1, RegionTk: 1 }, SkillSplitMapping: { AcdNo: 1, Brand: 1, BrandBrandTk: 1, CallType: 1, CallTypeTypeTk: 1, CmsNo: 1, Department: 1, DepartmentDepartmentTk: 1, GroupCd: 1, GroupCdTk: 1, Region: 1, RegionRegionTk: 1, SkillName: 1, SkillSplitTk: 1, SplitNo: 1, Status: 1, StatusStatusTk: 1, SupportChannel: 1, SupportChannelSuppChannelTk: 1 }, Status: { StatusDesc: 1, StatusTk: 1 }, SupportChannel: { SuppChannelTk: 1, SupportChannel: 1 } }, Common: { BackgroundTaskLog: { LogId: 1, Message: 1, RunAt: 1, Server: 1, Status: 1, TaskKey: 1 }, Mail: { Bcc: 1, Body: 1, Cc: 1, ErrorMessage: 1, InsertDate: 1, InsertUser: 1, InsertUserId: 1, LockExpiration: 1, MailFrom: 1, MailId: 1, MailTo: 1, Priority: 1, ReplyTo: 1, RetryCount: 1, SentDate: 1, Status: 1, Subject: 1, Uid: 1 }, UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, DWSupport: { AgencySnapshotRequest: { AgencySnapshotReqId: 1, CreatedBy: 1, CreatedDate: 1, ModifiedBy: 1, ModifiedDate: 1, RequestedBy: 1, RequestedByDate: 1, RequestedReason: 1 }, AmenitiesSupp: { AmenityAddonAmt: 1, AmenityCategoryCd: 1, AmenityCd: 1, AmenityCostAmt: 1, AmenityDesc: 1, AmenityId: 1, AmenityTypeAmenityTypeCd: 1, AmenityTypeAmenityTypeDesc: 1, AmenityTypeCommentTxt: 1, AmenityTypeConditionDesc: 1, AmenityTypeCreatedByNam: 1, AmenityTypeCreatedDat: 1, AmenityTypeDisplayOrderCd: 1, AmenityTypeId: 1, AmenityTypeModifiedByNam: 1, AmenityTypeModifiedDat: 1, CommentTxt: 1, ConditionDesc: 1, CreatedByNam: 1, CreatedDat: 1, CurrencyCd: 1, DisplayOrderCd: 1, IsPerDiemCd: 1, ModifiedByNam: 1, ModifiedDat: 1 }, AmenityCategory: { CategoryCd: 1 }, AmenityDetailsSupp: { AmenityAmenityAddonAmt: 1, AmenityAmenityCategoryCd: 1, AmenityAmenityCd: 1, AmenityAmenityCostAmt: 1, AmenityAmenityDesc: 1, AmenityAmenityTypeId: 1, AmenityCommentTxt: 1, AmenityConditionDesc: 1, AmenityCreatedByNam: 1, AmenityCreatedDat: 1, AmenityCurrencyCd: 1, AmenityDetailCd: 1, AmenityDetailId: 1, AmenityDisplayOrderCd: 1, AmenityId: 1, AmenityIsPerDiemCd: 1, AmenityModifiedByNam: 1, AmenityModifiedDat: 1, AmenityPtsQty: 1, CommentTxt: 1, ConditionDesc: 1, CreatedByNam: 1, CreatedDat: 1, MinCabinQty: 1, ModifiedByNam: 1, ModifiedDat: 1, OfficeCd: 1, SailDayFromQty: 1, SailDayToQty: 1 }, AmenityOffice: { Cd: 1 }, AmenityTypesSupp: { AmenityTypeCd: 1, AmenityTypeDesc: 1, AmenityTypeId: 1, CommentTxt: 1, ConditionDesc: 1, CreatedByNam: 1, CreatedDat: 1, DisplayOrderCd: 1, ModifiedByNam: 1, ModifiedDat: 1 }, CasinoSlotMasterDescSupp: { CommentTxt: 1, CreatedByNam: 1, CreatedTs: 1, ManufacturerNam: 1, ModifiedByNam: 1, ModifiedTs: 1, SlotMasterDesc: 1, SlotMasterDescSurKey: 1 }, CategoryMasterSupp: { CategoryCd: 1, CategoryMasterSurKey: 1, CreatedByNam: 1, CreatedTs: 1, FleetCategoryPriorityNbr: 1, MandatoryAssignmentCd: 1, MetaCategoryCd: 1, ModifiedByNam: 1, ModifiedTs: 1, NewMetaCategoryCd: 1, PseudoCategoryCd: 1, RmsPseudoCategoryCd: 1, SailFromDat: 1, SailToDat: 1, ShipCd: 1 }, CcOfficeLoations: { Cd: 1 }, CmiSupp: { AgencyId: 1, BookingCurrencyCd: 1, CabinQty: 1, CharterDesc: 1, CmiAmenityCostAmt: 1, CmiSubType2Cd: 1, CmiSubTypeCd: 1, CmiSurKey: 1, CmiTypeCd: 1, CommissionAmt: 1, ContractDat: 1, ContractPriceAmt: 1, CreatedByNam: 1, CreatedTs: 1, CruiseRevAmt: 1, DepositDat: 1, DistrictNbr: 1, ModifiedByNam: 1, ModifiedTs: 1, NcfAmt: 1, OfficeCd: 1, PaxQty: 1, RmContractAdjNtrNoSvcAmt: 1, RmFinalAdjNtrAmt: 1, RmFinalAdjNtrNoSvcAmt: 1, RmFinalGuestQty: 1, SailDat: 1, SailDayQty: 1, SailId: 1, ShipCd: 1, SmCabinFareAmt: 1, SmCabinFareNonrevAmt: 1, SmCostOfSalesAmt: 1, SmCreditCardCostAmt: 1, SmCruiseDiscAmt: 1, SmExcessTicketingAmt: 1, SmGuestFeesGratsExpenseAmt: 1, VoyageCd: 1 }, CreditCardAdjSupp: { BaseRate: 1, BlendedRate: 1, CreatedByName: 1, CreatedTs: 1, CreditcardAdjId: 1, CxBuffer: 1, EffectiveFromDt: 1, EffectiveToDt: 1, ModifiedByNam: 1, ModifiedTs: 1, Office: 1, ParticipationRate: 1, ProposedRate: 1 }, CurrencyExchangeRateSupp: { AuditRecordId: 1, CommentTxt: 1, CreatedByNam: 1, CreatedTs: 1, CurrencyCd: 1, CurrencySurKey: 1, ExchangeRateNbr: 1, ModifiedByNam: 1, ModifiedTs: 1, SailFromDat: 1, SailToDat: 1 }, DistrictMasterSupp: { AreaCd: 1, ChannelCd: 1, CreatedByNam: 1, CreatedTs: 1, DistrictNbr: 1, DistrictSurKey: 1, GroupCd: 1, GssChannelCd: 1, ModifiedByNam: 1, ModifiedTs: 1, PrimaryCrmSupportNam: 1, RmChannelCd: 1, SalesChannelCd: 1, SalesrepUserId: 1, SecondaryCrmSupportNam: 1 }, FinPlannedCapacitySupp: { CapacityDesc: 1, CreatedByNam: 1, CreatedTs: 1, FinPlannedCapacitySurKey: 1, FinancialCabinCapacityQty: 1, FinancialGuestCapacityQty: 1, ModifiedByNam: 1, ModifiedTs: 1, SailFromDat: 1, SailToDat: 1, ShipCd: 1, UnadjustedFinancialCabinCapacityQty: 1, UnadjustedFinancialGuestCapacityQty: 1 }, FinReportPublishingSupp: { CreatedByNam: 1, CreatedTs: 1, FinReportPublishingSurKey: 1, ModifiedByNam: 1, ModifiedTs: 1, OnHold: 1, ReportName: 1 }, FullShipChartersSupp: { AgencyId: 1, CharterCommAmt: 1, CharterDesc: 1, CharterRevAmt: 1, ContractDat: 1, ContractPriceAmt: 1, CreatedByNam: 1, CreatedTs: 1, DepositDat: 1, DistrictNbr: 1, GuestQty: 1, ModifiedByNam: 1, ModifiedTs: 1, OfficeCd: 1, RmContractAdjNtrNoSvcAmt: 1, RmFinalAdjNtrAmt: 1, RmFinalAdjNtrNoSvcAmt: 1, RmFinalGuestQty: 1, RmNcfAmt: 1, SailDat: 1, SailDayQty: 1, SailId: 1, ShipCd: 1, ShipCharterSurKey: 1, VoyageCd: 1 }, GtfSupp: { CategoryCd: 1, CreatedByNam: 1, CreatedTs: 1, EffectiveFromDt: 1, EffectiveToDt: 1, EmbarkDebarkCd: 1, GtfsuppId: 1, ModifiedByNam: 1, ModifiedTs: 1, Rate: 1, ShipCd: 1 }, GuestPreventDeparture: { BoardingDenialReasonDesc: 1, CasinoIncidentNbrTxt: 1, CreatedByNam: 1, CreatedTs: 1, FromReportNbr: 1, GuestFirstNam: 1, GuestLastNam: 1, GuestPreventDepartureKey: 1, IncidentReportedDat: 1, InternalExternalCd: 1, ModifiedByNam: 1, ModifiedTs: 1, NameTypeDesc: 1, SirsNbrTxt: 1, TypeCd: 1 }, ImportErrorLog: { Calledby: 1, ErrorMessage: 1, FileName: 1, ImportDate: 1, ImportLogId: 1, RunNumber: 1 }, InvoiceItemSource: { ItemSourceCd: 1 }, InvoiceItemSubType: { ItemSubTypeCd: 1 }, InvoiceItemSubType2: { ItemSubType2Cd: 1 }, InvoiceItemSubType3: { ItemSubType3Cd: 1 }, InvoiceItemType: { ItemTypeCd: 1 }, InvoiceItemTypeMasterSupp: { CommentsTxt: 1, CreatedByNam: 1, CreatedTs: 1, InvoiceItemSourceCd: 1, InvoiceItemSubType2Cd: 1, InvoiceItemSubType3Cd: 1, InvoiceItemSubTypeCd: 1, InvoiceItemTypeCd: 1, InvoiceItemTypeMasterId: 1, MasterComponentCd: 1, ModifiedByNam: 1, ModifiedTs: 1 }, InvoiceItemTypeSupp: { AmenityCostAmt: 1, CasinoComponentCd: 1, CasinoComponentDesc: 1, ChartOfAccountNbr: 1, CommentsTxt: 1, ComponentCd: 1, ComponentDesc: 1, CreatedByNam: 1, CreatedTs: 1, DeptShortDesc: 1, InvoiceClassType1Cd: 1, InvoiceClassType2Cd: 1, InvoiceClassType3Cd: 1, InvoiceClassType4Cd: 1, InvoiceItemSourceCd: 1, InvoiceItemSubType2Cd: 1, InvoiceItemSubType3Cd: 1, InvoiceItemSubTypeCd: 1, InvoiceItemTypeCd: 1, InvoiceItemTypeGenNatKey: 1, IsAcctgActualCd: 1, IsAcctgAdjCd: 1, IsCcCostCd: 1, IsCostCd: 1, IsDilutionCd: 1, IsGroupAmenityCd: 1, IsGtrCd: 1, IsNtrCd: 1, IsPerDiemCd: 1, IsPioCd: 1, IsSuppressBuiltCd: 1, IsTaxCd: 1, M1: 1, M2: 1, M3: 1, M4: 1, ModifiedByNam: 1, ModifiedTs: 1 }, MarketingRequest: { Address1: 1, Address2: 1, BrandDescription: 1, BrandId: 1, ChannelDescription: 1, ChannelId: 1, City: 1, ContactId: 1, Country: 1, CreatedBy: 1, CreatedDate: 1, EmailAddress: 1, FirstName: 1, Id: 1, IsReturnedMailCd: 1, LastName: 1, ModifiedBy: 1, ModifiedDate: 1, OptOutStatusID: 1, Phone: 1, RequestTypeDescription: 1, RequestTypeId: 1, SourceDescription: 1, SourceId: 1, State: 1, Title: 1, Zip: 1 }, MarketingRequestBrands: { Description: 1, Id: 1 }, MarketingRequestChannels: { Description: 1, Id: 1 }, MarketingRequestOptOutStatus: { Description: 1, Id: 1 }, MarketingRequestSources: { Description: 1, Id: 1 }, MarketingRequestTypes: { Description: 1, Id: 1 }, MasterComponent: { MasterComponentCd: 1 }, MinibarSetupSupp: { CommentTxt: 1, CreatedByNam: 1, CreatedTs: 1, EffectiveDat: 1, MinibarSetupCostAmt: 1, MinibarSetupSurKey: 1, ModifiedByNam: 1, ModifiedTs: 1, ShipCd: 1 }, PackageTypeCodeSupp: { TypeCode: 1, TypeId: 1 }, PortSubstitutionSupp: { CommentTxt: 1, CreatedByNam: 1, CreatedTs: 1, ModifiedByNam: 1, ModifiedTs: 1, PortCd: 1, PortNam: 1, PortSubstitutonNam: 1, PortSubstitutonSurKey: 1 }, ProductCodeSupp: { CreatedByName: 1, CreatedTs: 1, ModifiedByName: 1, ModifiedTs: 1, ProductCd: 1, ProductCodeId: 1, ProductDesc: 1, ProductSurKey: 1 }, PsGlAccountSupp: { AccountClassType1Cd: 1, AccountClassType2Cd: 1, AccountClassType3Cd: 1, AccountClassType4Cd: 1, AccountId: 1, AccountSurKey: 1, CreatedByNam: 1, CreatedTs: 1, GrossCostCd: 1, ModifiedByNam: 1, ModifiedTs: 1, OlapAccountDesc: 1, SetId: 1 }, RollupProductCodesSupp: { BrochureRollupProductCd: 1, BrochureRollupProductDesc: 1, CreatedByNam: 1, CreatedTs: 1, ModifiedByNam: 1, ModifiedTs: 1, ProductCd: 1, RmRollupProductCd: 1, RmRollupProductDesc: 1, RollupProductSurKey: 1 }, SailingMasterSupp: { AmenityPtsQty: 1, BackToBackCd: 1, CasinoCabinCapacityQty: 1, CharterCd: 1, CreatedByNam: 1, CreatedTs: 1, FareFeedIncludeCd: 1, FsGrpAmenityAmt: 1, InactiveCd: 1, InterportCd: 1, IsExtraordinaryCd: 1, IsFreeOpenBarCd: 1, IsHolidayCd: 1, IsVoyageExceptionCd: 1, ItineraryChangedDat: 1, JonesActSailId: 1, LatitudeCruiseCd: 1, MainVoyageCd: 1, MandateWeeksQty: 1, ModifiedByNam: 1, ModifiedTs: 1, ObrSeasonCd: 1, ObrSubTradeCd: 1, ObrTradeCd: 1, OnSaleDat: 1, PackageTypeCd: 1, ProductCd: 1, ProductCdCreatedByName: 1, ProductCdCreatedTs: 1, ProductCdModifiedByName: 1, ProductCdModifiedTs: 1, ProductCdProductCodeId: 1, ProductCdProductDesc: 1, ProductCdProductSurKey: 1, ProxyBudgetSailId: 1, ProxyMetaWeightSailId: 1, ProxySailId: 1, RmsColorNameDesc: 1, RmsForecastCd: 1, RmsParentSail10Id: 1, RmsParentSail11Id: 1, RmsParentSail12Id: 1, RmsParentSail13Id: 1, RmsParentSail14Id: 1, RmsParentSail15Id: 1, RmsParentSail1Id: 1, RmsParentSail2Id: 1, RmsParentSail3Id: 1, RmsParentSail4Id: 1, RmsParentSail5Id: 1, RmsParentSail6Id: 1, RmsParentSail7Id: 1, RmsParentSail8Id: 1, RmsParentSail9Id: 1, RmsRefLinkSailId: 1, RmsSeasonCd: 1, SailDat: 1, SailId: 1, SailSurKey: 1, SeasonYearCd: 1, ShipCd: 1, ShipNbr: 1, SlProductCd: 1, SlProductCdCreatedByName: 1, SlProductCdCreatedTs: 1, SlProductCdModifiedByName: 1, SlProductCdModifiedTs: 1, SlProductCdSlProductDesc: 1, SlProductCdSlProductSurKey: 1, ValidVoyageCd: 1, VoyageExceptionDesc: 1 }, Ship: { Brand: 1, IsActive: 1, ShipCode: 1, ShipName: 1 }, SlProductCodeSupp: { CreatedByName: 1, CreatedTs: 1, ModifiedByName: 1, ModifiedTs: 1, SlProductCd: 1, SlProductDesc: 1, SlProductSurKey: 1 }, SurveyFilterExclusionSupp: { CommentsTxt: 1, CreatedByNam: 1, CreatedTs: 1, GuestId: 1, ModifiedByNam: 1, ModifiedTs: 1, ReasonDesc: 1, SailId: 1, SurveyExclusionId: 1, SurveyExclusionSurKey: 1 }, TblStrategicPriceControl: { CategoryCd: 1, CreatedByNam: 1, CreatedDat: 1, DiscPct: 1, EffectiveFromDat: 1, EffectiveToDat: 1, ModifiedByNam: 1, ModifiedDat: 1, SailId: 1, StrategicPriceControlId: 1 }, UpgradeAdvAdjSupp: { CommissionPercent: 1, CreatedByName: 1, CreatedTs: 1, EffectiveFromDt: 1, EffectiveToDt: 1, ModifiedByName: 1, ModifiedTs: 1, UpgradeAdvAdjId: 1, UpgradeAmountMax: 1, UpgradeAmountMin: 1 }, VwGetSeaPortCode: { CountryCode: 1, PortCode: 1, PortName: 1 }, VwGetSeaSalesRepId: { Comments: 1, OfficeCode: 1, UserFullName: 1, UserId: 1, UserLoginName: 1 } }, NCLHDSAR: { Assignee: { AssigneeId: 1, FullName: 1, IsActive: 1 }, DataFlow: { CeIndex: 1, Cet: 1, Description: 1, Key: 1, LseIndex: 1, Lset: 1, Name: 1, Package: 1, ProcessYn: 1, Source: 1, SourceDesc: 1, Status: 1, Target: 1, TargetDesc: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Request: { Address1: 1, AttrCount: 1, City: 1, Country: 1, CreatedDt: 1, DaysLeft: 1, DaysOld: 1, DeadlineDt: 1, Email: 1, FirstName: 1, FullName: 1, Id: 1, IdentityVerificationOptOuts: 1, IdentityVerificationOtherRequests: 1, LastName: 1, LastUpdatedDt: 1, LatitudesNum: 1, LoadDt: 1, NclYn: 1, OceaniaMpCardNum: 1, OceaniaYn: 1, ProcessDt: 1, RegentMpCardNum: 1, RegentYn: 1, ReqApprover: 1, ReqDetails: 1, ReqExtended: 1, ReqStage: 1, ReqStatus: 1, RequestType: 1, RequestTypeNum: 1, RequestTypeNumDesc: 1, SixthmanYn: 1, SubjectType: 1 }, RequestAttributes: { Addr1: 1, Addr2: 1, CityNm: 1, CountryCd: 1, Email1: 1, ExtractDt: 1, FirstNm: 1, Id: 1, LastNm: 1, MiddleNm: 1, ModifiedBy: 1, ModifiedDate: 1, OldAddr1: 1, OldAddr2: 1, OldCityNm: 1, OldCountryCd: 1, OldEmail: 1, OldFirstNm: 1, OldLastNm: 1, OldMiddleNm: 1, OldPostalCd: 1, OldStateNm: 1, PostalCd: 1, RequestAttributeId: 1, RequestValue: 1, ResolvedDt: 1, StateNm: 1, SystemMasterId: 1, SystemMasterSystemActiveYn: 1, SystemMasterSystemDesc: 1, SystemMasterSystemName: 1, SystemMasterSystemTable: 1 }, RequestStatus: { StatusDescription: 1, StatusId: 1, StatusOrder: 1 }, RequestType: { Desc: 1, Type: 1 }, SwRequest: { ApiResponse: 1, ApiResponseDepth: 1, ApiResponseId: 1, AssigneeFullName: 1, AssigneeId: 1, AssigneeIsActive: 1, AttributeCount: 1, ClientAddress: 1, ClientEmailAddress: 1, ClientFirstName: 1, ClientGuestCategory: 1, ClientIsRelatedtoHousehold: 1, ClientLastName: 1, ClientLatitudesNumber: 1, ClientZipCode: 1, DaysLeft: 1, DaysOld: 1, DeadlineDt: 1, LastUpdatedDt: 1, NoteList: 1, RecordId: 1, RecordTimeStamp: 1, RequestType: 1, StatusId: 1, StatusStatusDescription: 1, StatusStatusOrder: 1, UpdatedBy: 1 }, SwRequestAttributes: { ExtractDt: 1, Id: 1, LastUpdated: 1, RequestAttributeId: 1, RequestValue: 1, ResolvedDt: 1, SystemMasterId: 1, SystemMasterSystemDesc: 1 }, SystemMaster: { Id: 1, SystemActiveYn: 1, SystemDesc: 1, SystemName: 1, SystemTable: 1 } }, NCLHODSMICROS: { DataFlow: { Cet: 1, Description: 1, Key: 1, Lset: 1, Name: 1, Package: 1, ProcessYn: 1, Source: 1, SourceDesc: 1, Status: 1, Target: 1, TargetDesc: 1 } }, NCLHODSSPENDVIS: { Amoslevel: { AccountId: 1, Descr: 1, FlexDim1Name: 1, FlexDim2Name: 1, FlexDim3Name: 1, FlexDim4Name: 1, IdNum: 1, ModifiedBy: 1, ModifiedDate: 1 }, DataFlow: { Cet: 1, Description: 1, Key: 1, Lset: 1, Name: 1, Package: 1, ProcessYn: 1, Source: 1, Status: 1, Target: 1 } }, PCHDW: { DimCruise: { AmenityPointsAllowedQty: 1, CappedCapacity: 1, CharterInd: 1, ColorInd: 1, CompanyCd: 1, CpvTaxAmt: 1, CpvTaxInd: 1, CruiseCd: 1, CruiseDaysQty: 1, CruiseFromDt: 1, CruiseFromDtMmddyyyy: 1, CruiseName: 1, CruiseSailingStatusDesc: 1, CruiseSegmentCd: 1, CruiseSegmentDaysQty: 1, CruiseSegmentFromDt: 1, CruiseSegmentName: 1, CruiseSegmentToDt: 1, CruiseStatusCd: 1, CruiseTk: 1, CruiseToDt: 1, CruiseToDtMmddyyyy: 1, DrydockInd: 1, FinancialSuppressInd: 1, FromPortCd: 1, FromPortName: 1, HighlightInd: 1, HmfFeeInd: 1, HmfPct: 1, IrsTaxAmt: 1, IrsTaxInd: 1, IufExemptFeeAmt: 1, IufExemptFeeInd: 1, IufExemptQty: 1, IufNonexemptFeeAmt: 1, IufNonexemptFeeInd: 1, IufNonexemptQty: 1, LocationName: 1, MarketName: 1, MinisegInd: 1, OnboardAcctTrandate: 1, OnbrdAvgPaxQty: 1, PpfExemptFeeAmt: 1, PpfExemptInd: 1, PpfNonexemptFeeAmt: 1, PpfNonexemptInd: 1, RevenueMgmtMarketSegment: 1, RouteName: 1, SeasonName: 1, SegmentFromDtMmddyyyy: 1, SegmentFromPortCd: 1, SegmentFromPortName: 1, SegmentLocationName: 1, SegmentMarketName: 1, SegmentOnboardAcctTrandate: 1, SegmentRouteName: 1, SegmentSeasonName: 1, SegmentSuperMarketCd: 1, SegmentSuperMarketDesc: 1, SegmentToDtMmddyyyy: 1, SegmentToPortCd: 1, SegmentToPortName: 1, ShipCd: 1, ShowInReport: 1, StatedCapacity: 1, SuperMarketCd: 1, SuperMarketDesc: 1, ToPortCd: 1, ToPortName: 1, VarToCurve: 1 }, DimCurrency: { Cd: 1, Desc: 1, Tk: 1 }, DimInvoice: { AgentTk: 1, AirCostSourceCd: 1, AirParticipationInd: 1, AirXferFeeAmt: 1, AttnName: 1, BonusSavingsCd: 1, BonusSavingsDesc: 1, CancelBookingStatusCd: 1, CancelReason: 1, CancellationDt: 1, CancellationType: 1, CenturionCd: 1, CenturionInd: 1, ChangeDt: 1, ChannelCountryCd: 1, ChannelCountryName: 1, ChannelTk: 1, Cinvoice1Num: 1, Cinvoice2Num: 1, Cinvoice3Num: 1, Cinvoice4Num: 1, Cinvoice5Num: 1, Cinvoice6Num: 1, CityName: 1, ComboBookingInd: 1, ComboLegQty: 1, CompanyCd: 1, CountryCd: 1, CountryName: 1, CreateDt: 1, CruiseCommissionAmt: 1, CruiseSvcMgmtCrNum: 1, CruiseSvcMgmtId: 1, CruiseTk: 1, CurrencyCd: 1, CurrencyDesc: 1, CurrentLoyaltyLevelPax1: 1, CurrentLoyaltyLevelPax2: 1, CurrentPackageCd: 1, DepositAmt: 1, DepositDt: 1, DirectBookingInd: 1, DptrFlightClassCd: 1, DptrFlightQty: 1, DwPastGuest1Ind: 1, DwPastGuest2Ind: 1, DwPastGuestInd: 1, FccDeferredInd: 1, FinalPaymentDueDt: 1, FirstConfirmDt: 1, FirstPaymentDt: 1, FutureDepositFlag: 1, GdsSystemCd: 1, GdsSystemDesc: 1, HotelParticipationInd: 1, InitialWaitlistInd: 1, InstallmentPlanInd: 1, InstallmentPlanNum: 1, InvoiceNum: 1, InvoiceTk: 1, LandPackageParticipantInd: 1, LandPackageParticipantQty: 1, MpcardNumPax1: 1, MpcardNumPax2: 1, NonrevPassengerQty: 1, NontaxPassengerQty: 1, NvsPgInd: 1, OciOfficeCd: 1, OfficeCd: 1, OfficeDesc: 1, OnboardTypeDesc: 1, OriginalConsortiumCd: 1, OriginalConsortiumDesc: 1, OriginalDeptCd: 1, OriginalDeptName: 1, OriginalUserActiveInd: 1, OriginalUserId: 1, OriginalUserName: 1, OutboundReportingRegionCd: 1, PackageCd: 1, PaidClassCategoryDesc: 1, PaidClassCd: 1, PassengerQty: 1, PastGuestInd: 1, Pax1AirportHome1Cd: 1, Pax1AirportRtrn1Cd: 1, Pax1FirstFlightClass: 1, Pax1FirstName: 1, Pax1LastName: 1, Pax1LoyaltyLevelNm: 1, Pax1NvsPgInd: 1, Pax1RtrnFlightClass: 1, Pax2AirportHome1Cd: 1, Pax2AirportRtrn1Cd: 1, Pax2FirstFlightClass: 1, Pax2FirstName: 1, Pax2LastName: 1, Pax2LoyaltyLevelNm: 1, Pax2NvsPgInd: 1, Pax2RtrnFlightClass: 1, PaxAirClassCd: 1, PlatinumCd: 1, PlatinumInd: 1, PostedInvoiceDt: 1, PromoBonusComm: 1, PromoCd: 1, PromoCommAmt: 1, PromoDesc: 1, PromotionalAmenityCd: 1, RtrnFlightClassCd: 1, RtrnFlightQty: 1, SalesSourceCd: 1, SalesSourceDesc: 1, StateCd: 1, StatusCd: 1, StatusDesc: 1, UserId: 1, UserName: 1, WaitlistDt: 1, ZipCd: 1 }, DimOffice: { Cd: 1, Desc: 1, Tk: 1 }, ScheduledJob: { JobDescription: 1, JobName: 1, ScheduledJobId: 1 }, VwSqlJobList: { DateCreated: 1, DateModified: 1, Enabled: 1, JobDescription: 1, Name: 1 } }, PCHODS: { InboundUserOverride: { Comments: 1, Company: 1, Id: 1, Inbound: 1, Invoice: 1, ItDescription: 1, ItDescriptionDescription: 1, ItDescriptionOutboundComments: 1, UserAssign: 1 }, InboundUserOverrideDescription: { Description: 1, Id: 1, OutboundComments: 1 }, OutboundAgent: { AgentId: 1, AgentLocationDescription: 1, AgentLocationId: 1, CobrandInd: 1, CompanyCd: 1, CompanyName: 1, Nm: 1, NvsUserId: 1, PrimaryBrand: 1, StartInactiveDt: 1, TeamCompanyCd: 1, TeamCompanyName: 1 }, OutboundAgentLocation: { AgentLocationId: 1, Description: 1 }, OutboundCommissionBkGoal: { CommissionMonth: 1, CommissionTk: 1, CompanyCd: 1, CompanyName: 1, LoadDt: 1, NumOfBkGoal: 1 }, OutboundCommissionHist: { ActiveDt: 1, CommissionHistId: 1, CommissionId: 1, CommissionRate: 1, CompanyCd: 1, CompanyName: 1, HighNumBookings: 1, InactiveDt: 1, LowNumBookings: 1 }, OutboundCommissionHistAu: { ActiveDt: 1, CommissionHistAuId: 1, CommissionId: 1, CommissionRate: 1, CompanyCd: 1, CompanyName: 1, HighNumBookings: 1, InactiveDt: 1, LowNumBookings: 1 }, OutboundCommissionHistBr: { ActiveDt: 1, CommissionHistBrId: 1, CommissionId: 1, CommissionRate: 1, CompanyCd: 1, CompanyName: 1, HighNumBookings: 1, InactiveDt: 1, LowNumBookings: 1 }, OutboundCommissionPeriod: { ClosedBy: 1, ClosedDate: 1, CurrentMonth: 1, EndDate: 1, IsOpen: 1, OutboundCommissionPeriodId: 1, PreviousMonth: 1, StartDate: 1 }, OutboundCompany: { Cd: 1, Nm: 1 }, OutboundMonthlyRptArchiveOverride: { NclId: 1, OciAdjustdomestic: 1, OciPrevMonthDomestic: 1, OciPrevMonthInternational: 1, OciPrevMonthRevDomestic: 1, OciPrevMonthRevInternational: 1, OriginalUserName: 1, OutboundMonth: 1, OutboundMonthlyRptArchiveId: 1, SscAdjustdomestic: 1, SscPrevMonthDomestic: 1, SscPrevMonthInternational: 1, SscPrevMonthRevDomestic: 1, SscPrevMonthRevInternational: 1 }, OutboundNvsUsers: { ActiveInd: 1, CompanyCd: 1, DepartmentCd: 1, DepartmentDesc: 1, UserFirstName: 1, UserId: 1, UserLastName: 1 }, UarEmployeeDirectreports: { EmpCompanyCd: 1, EmpCompanyDesc: 1, EmpEmail: 1, EmpJobcode: 1, EmpJobtitle: 1, EmpStatus: 1, EmployeeFirstName: 1, EmployeeId: 1, EmployeeLastName: 1, IsSrDir: 1, SupEmployeeId: 1, SupFirstName: 1, SupJobcode: 1, SupJobtitle: 1, SupLastName: 1, SupLevel: 1 }, UarSrDirAboveList: { DateEffective: 1, DateExpires: 1, Id: 1, IsSrDirAbove: 1, Jobtitle: 1, RowChangeReason: 1 }, UarUnknownReviewer: { Accesstype: 1, AdActiveStatus: 1, AdDescription: 1, AdManager: 1, Comments: 1, CriticalFuction: 1, Department: 1, EmployeeId: 1, Firstname: 1, GroupDescription: 1, HowFound: 1, HrEmpStatus: 1, Id: 1, Lastname: 1, Middlename: 1, OfficeCode: 1, ReviewerFirstname: 1, ReviewerItCompliance: 1, ReviewerLastname: 1, SupEmployeeid: 1, TaskId: 1, TaskName: 1, UserFullName: 1, UserGroupId: 1, UserGroupName: 1, UserGroupRights: 1, UserLoginName: 1 } }, PCHODSNVS: { Agency: { ActiveInd: 1, Addr1: 1, Addr2: 1, Addr3: 1, AgencyCd: 1, AgencyCdName: 1, AgencyCreateDt: 1, AgencyDefaultStatusInd: 1, AgencyEmail: 1, AgencyNameDesc: 1, AgencyStatusCd: 1, AgencyWebAddress: 1, AgentLinkDesc: 1, AgentNum: 1, AllowBankInd: 1, AllowGpInd: 1, AllowPlatInd: 1, AllowSdbdInd: 1, ApolloInd: 1, AttnDesc: 1, AutoCxlInd: 1, AutoEnvoInd: 1, BankAccountBalAmt: 1, BankAcct2Amt: 1, BdmCd: 1, BdmRepCd: 1, CityName: 1, CliaNum: 1, Comment1Desc: 1, Comment2Desc: 1, CommissionPct: 1, CompanyCd: 1, ConsortRgnNum: 1, ConsortiumAddedDt: 1, ConsortiumCd: 1, ConsortiumRegionAddedDt: 1, ConsortiumRegionCd: 1, CorpComDesc: 1, CorporationInd: 1, Country: 1, CreditAgtInd: 1, CurrencyCd: 1, CurrentYearSalesAmt: 1, EMemberDesc: 1, FaxNum: 1, FinHoldInd: 1, FinalDaysQty: 1, FirstBookingDt: 1, GdsSysCd: 1, GsaInd: 1, GsaPriceLevelAmt: 1, IataNum: 1, InsDefaultCd: 1, Key1: 1, KeyAcctInd: 1, L7daysNum: 1, LastUpdated: 1, LastYearKeyAcctCd: 1, LastYearSalesAmt: 1, MahanaClubInd: 1, MasterAgencyInd: 1, McActiveInd: 1, NactaNum: 1, NationalAcctInd: 1, NvsKeyAcctInd: 1, OfficeCd: 1, Option1DueDaysQty: 1, Option2DueDaysQty: 1, OverVacSummInd: 1, OverrideFinalDaysInd: 1, OverrideOption1DaysInd: 1, OverrideOption2DaysInd: 1, OwnerCd: 1, PaymentViaWireInd: 1, Phone1Num: 1, Phone2Num: 1, PinClubInd: 1, PreferredCommunicationCd: 1, PreferredLanguageDesc: 1, PreviousYrPaxQty: 1, PreviousYrRevAmt: 1, PromoAdInd: 1, Prt1099Ind: 1, PrtD1099Dt: 1, PseudoCityCd: 1, RequiredSecondaryAgentInd: 1, RevLabelCd: 1, SalesRegionCd: 1, SecondaryCurrencyCd: 1, SelfBillInd: 1, SendCustInvInd: 1, SiblingId: 1, SsrRepCd: 1, StateNm: 1, TaxIdNum: 1, TaxInfoReceivedDt: 1, TaxPayer1099Name: 1, UserInUseById: 1, VacSummEmailDesc: 1, VatId: 1, Zip2Cd: 1, ZipCd: 1 }, ConsortiumExceptionList: { CombineInd: 1, CompanyCd: 1, ConsortiumExceptionListTk: 1, ExcludeInd: 1, ItemCd: 1, ItemName: 1, ItemType: 1, ItemTypeTypeTk: 1, LoadDt: 1, NewItemName: 1, NewItemType: 1, NewItemTypeTypeTk: 1 }, GetCruiseSegment: { CruiseSegmentCd: 1, SegmentMarketName: 1, ShipCd: 1 }, GsaDistributionList: { AccountName: 1, AgencyCd: 1, CompanyCd: 1, ContactName: 1, Email: 1, GsaDistributionListTk: 1, LoadDt: 1 }, ItemType: { Type: 1, TypeTk: 1 }, NtrBudget: { AccountPeriodNum: 1, ApcdFinal: 1, BudgetTk: 1, CompanyCd: 1, NtrBudget: 1, NtrFinancialBudget: 1, PdsBudgetTotal: 1 }, NtrBudgetByChannel: { AccountingYear: 1, BudgetbychannelTk: 1, ChannelDesc: 1, ChannelSummDesc: 1, CompanyCd: 1, NpdBudget: 1, NtrBudget: 1, PdsBudgetTotal: 1 }, NtrFcst: { AccountPeriodNum: 1, ApcdFinal: 1, CompanyCd: 1, FcstTk: 1, NtrFcst: 1, NtrFinancialBudget: 1, PdsFcstTotal: 1 }, NtrIntlDatelineCruises: { CompanyCd: 1, CruiseCalendarDaysQty: 1, CruiseDaysQty: 1, CruiseIntlTk: 1, CruiseSegmentCd: 1, LoadDt: 1 }, NtrPastMonthsActual: { ApcdFinal: 1, AvailableNumOfCabins: 1, BookedNumOfCabins: 1, CompanyCd: 1, CxRev: 1, NtrFinal: 1, PastmonthactualTk: 1, PdsFinalTotal: 1, StlyAvailableNumOfCabins: 1, StlyBookedNumOfCabins: 1, YearMonth: 1 }, NtrRptComment: { AccountPeriodNum: 1, Comment: 1, CommentTk: 1, CompanyCd: 1, ReportDate: 1 }, RevenueAdhocManagement: { AdhocDate: 1, AdhocDateTk: 1, CompanyCd: 1, CubeId: 1, DatabaseId: 1, Key: 1, LastProcessedDateTime: 1, LastUpdatedBy: 1, SqlJobName: 1 }, SuppKeyAcctTarget: { AccountType: 1, AgencyCd: 1, CcfTargetFy1: 1, CcfTargetFy2: 1, CcfTargetFy3: 1, CcfTargetFy4: 1, CcfTargetFy5: 1, CcfTargetQ1: 1, CcfTargetQ12: 1, CcfTargetQ13: 1, CcfTargetQ14: 1, CcfTargetQ15: 1, CcfTargetQ2: 1, CcfTargetQ22: 1, CcfTargetQ23: 1, CcfTargetQ24: 1, CcfTargetQ25: 1, CcfTargetQ3: 1, CcfTargetQ32: 1, CcfTargetQ33: 1, CcfTargetQ34: 1, CcfTargetQ35: 1, CcfTargetQ4: 1, CcfTargetQ42: 1, CcfTargetQ43: 1, CcfTargetQ44: 1, CcfTargetQ45: 1, CompanyCd: 1, KeyAcctLink: 1, KeyAcctTk: 1, LoadDt: 1, PrctTargetQ1: 1, PrctTargetQ12: 1, PrctTargetQ13: 1, PrctTargetQ14: 1, PrctTargetQ15: 1, PrctTargetQ2: 1, PrctTargetQ22: 1, PrctTargetQ23: 1, PrctTargetQ24: 1, PrctTargetQ25: 1, PrctTargetQ3: 1, PrctTargetQ32: 1, PrctTargetQ33: 1, PrctTargetQ34: 1, PrctTargetQ35: 1, PrctTargetQ4: 1, PrctTargetQ42: 1, PrctTargetQ43: 1, PrctTargetQ44: 1, PrctTargetQ45: 1, Year: 1 }, TransferEstimateOciAmt: { CruiseSegmentCd: 1, LoadDt: 1, SegmentMarketName: 1, ShipCd: 1, TransferCostPerPax: 1, TransferId: 1 } }, SSISConfig: { DataFlow: { Cet: 1, Description: 1, Key: 1, Lset: 1, Name: 1, Package: 1, ProcessYn: 1, Source: 1, SourceDesc: 1, Status: 1, Target: 1, TargetDesc: 1 }, GpInterfaceLog: { CompanyCd: 1, CruiseSegmentCd: 1, ExpRevType: 1, GpInterfaceInd: 1, GpInterfacedDt: 1, InterfaceLogId: 1, JournalNum: 1 }, INTConfigBase: { ConfigId: 1, ConfigurationFilter: 1, ConfiguredValue: 1, ConfiguredValueType: 1, EnvironmentDesc: 1, EnvironmentEnum: 1, ModifiedBy: 1, ModifiedOn: 1, PackagePath: 1 }, MicrosDataFlow: { CeIndex: 1, Cet: 1, Description: 1, Key: 1, LseIndex: 1, Lset: 1, Name: 1, Package: 1, ProcessYn: 1, Source: 1, SourceDesc: 1, Status: 1, Target: 1, TargetDesc: 1 }, NclhShip: { CompanyCd: 1, DepartmentCd: 1, HasMerged: 1, IsActive: 1, LocationCd: 1, ShipAbbreviation: 1, ShipFullName: 1, ShipId: 1, ShipTk: 1 }, PsInterfaceConfig: { ConfigId: 1, ConfigSetting: 1, ConfigValue: 1, ConfigValueDate: 1, DataType: 1, ModifiedBy: 1, ModifiedDate: 1, SourceSystem: 1 }, SsisConfigBase: { ConfigId: 1, ConfigurationFilter: 1, ConfiguredValue: 1, ConfiguredValueType: 1, EnvironmentDesc: 1, EnvironmentEnum: 1, ModifiedBy: 1, ModifiedOn: 1, PackagePath: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, CardViewMixin: { CardView: 1, ListView: 1 }, Dashboard: { ContentDescription: 1 }, Dialogs: { PendingChangesConfirmation: 1 }, DraggableGroupingMixin: { CollapseAllButton: 1, DropPlaceholder: 1, ExpandAllButton: 1 }, EmailClient: { BackButton: 1, CCLabel: 1, CancelButton: 1, ComposeButton: 1, DeleteButton: 1, DeleteMessageConfirmation: 1, DeleteMessageSuccess: 1, DeleteNoSelectionWarning: 1, DeleteSelectedConfirmation: 1, DeleteSelectedSuccess: 1, FolderNames: { drafts: 1, inbox: 1, junk: 1, sent: 1, trash: 1 }, FoldersTitle: 1, ForwardButton: 1, ImapHost: 1, ImapPassword: 1, ImapPort: 1, ImapUsername: 1, LoginButton: 1, LoginTitle: 1, MoveMessageSuccess: 1, MoveNoSelectionWarning: 1, MoveSelectedSuccess: 1, MoveToFolder: 1, NewEmailDialogTitle: 1, PageTitle: 1, QuickSettings: 1, RefreshButton: 1, ReplyAllButton: 1, ReplyButton: 1, ReplyEmailDialogTitle: 1, SearchPlaceholder: 1, SendButton: 1, SignoutButton: 1, SmtpHost: 1, SmtpPassword: 1, SmtpPort: 1, SmtpUsername: 1, ToLabel: 1, ToggleReadButton: 1, ToggleSeenNoSelectionWarning: 1 }, FavoriteViewsMixin: { DeleteButtonHint: 1, DeleteSuccessMessage: 1, EmptyNameError: 1, FavoriteViews: 1, LoadedViewMessage: 1, SaveButton: 1, SaveSuccessMessage: 1, SaveView: 1 }, HeaderFiltersMixin: { CancelButton: 1, ClearButton: 1, OkButton: 1, Search: 1, SelectAll: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeAzure: 1, ThemeAzureLight: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeCosmos: 1, ThemeCosmosLight: 1, ThemeGlassy: 1, ThemeGlassyLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 }, WizardDialog: { BackButton: 1, CancelMessage: 1, FinishButton: 1, NextButton: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
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
    var Avaya;
    (function (Avaya) {
        var SkillSplitMappingDialog = /** @class */ (function (_super) {
            __extends(SkillSplitMappingDialog, _super);
            function SkillSplitMappingDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Avaya.SkillSplitMappingForm(_this.idPrefix);
                return _this;
            }
            SkillSplitMappingDialog.prototype.getFormKey = function () { return Avaya.SkillSplitMappingForm.formKey; };
            SkillSplitMappingDialog.prototype.getIdProperty = function () { return Avaya.SkillSplitMappingRow.idProperty; };
            SkillSplitMappingDialog.prototype.getLocalTextPrefix = function () { return Avaya.SkillSplitMappingRow.localTextPrefix; };
            SkillSplitMappingDialog.prototype.getNameProperty = function () { return Avaya.SkillSplitMappingRow.nameProperty; };
            SkillSplitMappingDialog.prototype.getService = function () { return Avaya.SkillSplitMappingService.baseUrl; };
            SkillSplitMappingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SkillSplitMappingDialog);
            return SkillSplitMappingDialog;
        }(Serenity.EntityDialog));
        Avaya.SkillSplitMappingDialog = SkillSplitMappingDialog;
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var Avaya;
    (function (Avaya) {
        var SkillSplitMappingGrid = /** @class */ (function (_super) {
            __extends(SkillSplitMappingGrid, _super);
            function SkillSplitMappingGrid(container) {
                return _super.call(this, container) || this;
            }
            SkillSplitMappingGrid.prototype.getColumnsKey = function () { return 'Avaya.SkillSplitMapping'; };
            SkillSplitMappingGrid.prototype.getDialogType = function () { return Avaya.SkillSplitMappingDialog; };
            SkillSplitMappingGrid.prototype.getIdProperty = function () { return Avaya.SkillSplitMappingRow.idProperty; };
            SkillSplitMappingGrid.prototype.getLocalTextPrefix = function () { return Avaya.SkillSplitMappingRow.localTextPrefix; };
            SkillSplitMappingGrid.prototype.getService = function () { return Avaya.SkillSplitMappingService.baseUrl; };
            SkillSplitMappingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SkillSplitMappingGrid);
            return SkillSplitMappingGrid;
        }(Serenity.EntityGrid));
        Avaya.SkillSplitMappingGrid = SkillSplitMappingGrid;
    })(Avaya = DAP.Avaya || (DAP.Avaya = {}));
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
        var AgencySnapshotRequestDialog = /** @class */ (function (_super) {
            __extends(AgencySnapshotRequestDialog, _super);
            function AgencySnapshotRequestDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.AgencySnapshotRequestForm(_this.idPrefix);
                _this.form = new DWSupport.AgencySnapshotRequestForm(_this.idPrefix);
                _this.form.RequestedByDate.addValidationRule(_this.uniqueName, function (e) {
                    var rdt = new Date(Q.formatDate(_this.form.RequestedByDate.value, "MM/dd/yyyy"));
                    rdt.setHours(0, 0, 0, 0);
                    var dt = new Date(Q.formatDate(new Date(), "MM/dd/yyyy"));
                    dt.setHours(0, 0, 0, 0);
                    if (rdt.getTime() <= dt.getTime()) {
                        return "Requested Date Should be greater than Today";
                    }
                });
                return _this;
            }
            AgencySnapshotRequestDialog.prototype.getFormKey = function () { return DWSupport.AgencySnapshotRequestForm.formKey; };
            AgencySnapshotRequestDialog.prototype.getIdProperty = function () { return DWSupport.AgencySnapshotRequestRow.idProperty; };
            AgencySnapshotRequestDialog.prototype.getLocalTextPrefix = function () { return DWSupport.AgencySnapshotRequestRow.localTextPrefix; };
            AgencySnapshotRequestDialog.prototype.getNameProperty = function () { return DWSupport.AgencySnapshotRequestRow.nameProperty; };
            AgencySnapshotRequestDialog.prototype.getService = function () { return DWSupport.AgencySnapshotRequestService.baseUrl; };
            AgencySnapshotRequestDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew) {
                    this.form.RequestedBy.value = DAP.Authorization.userDefinition.Username;
                }
                var rdt = new Date(Q.formatDate(this.form.RequestedByDate.value, "MM/dd/yyyy"));
                //pdt.setHours(0, 0, 0, 0);
                var dt = new Date(Q.formatDate(new Date(), "MM/dd/yyyy"));
                //dt.setHours(0, 0, 0, 0);
                if (rdt.getTime() < dt.getTime()) {
                    Serenity.EditorUtils.setReadOnly(this.form.RequestedBy, true);
                    Serenity.EditorUtils.setReadOnly(this.form.RequestedByDate, true);
                    Serenity.EditorUtils.setReadOnly(this.form.RequestedReason, true);
                    this.applyChangesButton.hide();
                    this.saveAndCloseButton.hide();
                    this.deleteButton.hide();
                }
            };
            AgencySnapshotRequestDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgencySnapshotRequestDialog);
            return AgencySnapshotRequestDialog;
        }(Serenity.EntityDialog));
        DWSupport.AgencySnapshotRequestDialog = AgencySnapshotRequestDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AgencySnapshotRequestGrid = /** @class */ (function (_super) {
            __extends(AgencySnapshotRequestGrid, _super);
            function AgencySnapshotRequestGrid(container) {
                return _super.call(this, container) || this;
            }
            AgencySnapshotRequestGrid.prototype.getColumnsKey = function () { return 'DWSupport.AgencySnapshotRequest'; };
            AgencySnapshotRequestGrid.prototype.getDialogType = function () { return DWSupport.AgencySnapshotRequestDialog; };
            AgencySnapshotRequestGrid.prototype.getIdProperty = function () { return DWSupport.AgencySnapshotRequestRow.idProperty; };
            AgencySnapshotRequestGrid.prototype.getLocalTextPrefix = function () { return DWSupport.AgencySnapshotRequestRow.localTextPrefix; };
            AgencySnapshotRequestGrid.prototype.getService = function () { return DWSupport.AgencySnapshotRequestService.baseUrl; };
            AgencySnapshotRequestGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            AgencySnapshotRequestGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AgencySnapshotRequestGrid);
            return AgencySnapshotRequestGrid;
        }(Serenity.EntityGrid));
        DWSupport.AgencySnapshotRequestGrid = AgencySnapshotRequestGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenitiesSuppDialog = /** @class */ (function (_super) {
            __extends(AmenitiesSuppDialog, _super);
            function AmenitiesSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.AmenitiesSuppForm(_this.idPrefix);
                return _this;
            }
            AmenitiesSuppDialog.prototype.getFormKey = function () { return DWSupport.AmenitiesSuppForm.formKey; };
            AmenitiesSuppDialog.prototype.getIdProperty = function () { return DWSupport.AmenitiesSuppRow.idProperty; };
            AmenitiesSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.AmenitiesSuppRow.localTextPrefix; };
            AmenitiesSuppDialog.prototype.getNameProperty = function () { return DWSupport.AmenitiesSuppRow.nameProperty; };
            AmenitiesSuppDialog.prototype.getService = function () { return DWSupport.AmenitiesSuppService.baseUrl; };
            AmenitiesSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AmenitiesSuppDialog);
            return AmenitiesSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.AmenitiesSuppDialog = AmenitiesSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenitiesSuppGrid = /** @class */ (function (_super) {
            __extends(AmenitiesSuppGrid, _super);
            function AmenitiesSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            AmenitiesSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.AmenitiesSupp'; };
            AmenitiesSuppGrid.prototype.getDialogType = function () { return DWSupport.AmenitiesSuppDialog; };
            AmenitiesSuppGrid.prototype.getIdProperty = function () { return DWSupport.AmenitiesSuppRow.idProperty; };
            AmenitiesSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.AmenitiesSuppRow.localTextPrefix; };
            AmenitiesSuppGrid.prototype.getService = function () { return DWSupport.AmenitiesSuppService.baseUrl; };
            AmenitiesSuppGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DWSupport.AmenitiesSuppService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                return buttons;
            };
            AmenitiesSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AmenitiesSuppGrid);
            return AmenitiesSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.AmenitiesSuppGrid = AmenitiesSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityDetailsSuppDialog = /** @class */ (function (_super) {
            __extends(AmenityDetailsSuppDialog, _super);
            function AmenityDetailsSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.AmenityDetailsSuppForm(_this.idPrefix);
                return _this;
            }
            AmenityDetailsSuppDialog.prototype.getFormKey = function () { return DWSupport.AmenityDetailsSuppForm.formKey; };
            AmenityDetailsSuppDialog.prototype.getIdProperty = function () { return DWSupport.AmenityDetailsSuppRow.idProperty; };
            AmenityDetailsSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.AmenityDetailsSuppRow.localTextPrefix; };
            AmenityDetailsSuppDialog.prototype.getNameProperty = function () { return DWSupport.AmenityDetailsSuppRow.nameProperty; };
            AmenityDetailsSuppDialog.prototype.getService = function () { return DWSupport.AmenityDetailsSuppService.baseUrl; };
            AmenityDetailsSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AmenityDetailsSuppDialog);
            return AmenityDetailsSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.AmenityDetailsSuppDialog = AmenityDetailsSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
/// <reference path="../AmenityDetailsSupp/AmenityDetailsSuppDialog.ts" />
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityDetailDialog = /** @class */ (function (_super) {
            __extends(AmenityDetailDialog, _super);
            function AmenityDetailDialog() {
                return _super.call(this) || this;
            }
            AmenityDetailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.AmenityId, true);
            };
            AmenityDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AmenityDetailDialog);
            return AmenityDetailDialog;
        }(DWSupport.AmenityDetailsSuppDialog));
        DWSupport.AmenityDetailDialog = AmenityDetailDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityDetailsSuppGrid = /** @class */ (function (_super) {
            __extends(AmenityDetailsSuppGrid, _super);
            function AmenityDetailsSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            AmenityDetailsSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.AmenityDetailsSupp'; };
            AmenityDetailsSuppGrid.prototype.getDialogType = function () { return DWSupport.AmenityDetailsSuppDialog; };
            AmenityDetailsSuppGrid.prototype.getIdProperty = function () { return DWSupport.AmenityDetailsSuppRow.idProperty; };
            AmenityDetailsSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.AmenityDetailsSuppRow.localTextPrefix; };
            AmenityDetailsSuppGrid.prototype.getService = function () { return DWSupport.AmenityDetailsSuppService.baseUrl; };
            AmenityDetailsSuppGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DWSupport.AmenityDetailsSuppService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                return buttons;
            };
            AmenityDetailsSuppGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    AmenityId: eq ? eq.AmenityID : null
                });
            };
            AmenityDetailsSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AmenityDetailsSuppGrid);
            return AmenityDetailsSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.AmenityDetailsSuppGrid = AmenityDetailsSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
/// <reference path="../AmenityDetailsSupp/AmenityDetailsSuppGrid.ts" />
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var AmenityDetailGrid = /** @class */ (function (_super) {
            __extends(AmenityDetailGrid, _super);
            function AmenityDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            AmenityDetailGrid.prototype.getDialogType = function () { return DWSupport.AmenityDetailDialog; };
            AmenityDetailGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "AmenityId" /* AmenityId */; });
            };
            AmenityDetailGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            AmenityDetailGrid.prototype.addButtonClick = function () {
                this.editItem({ AmenityId: this.amenityID });
            };
            AmenityDetailGrid.prototype.getInitialTitle = function () {
                return null;
            };
            AmenityDetailGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.amenityID;
            };
            Object.defineProperty(AmenityDetailGrid.prototype, "amenityID", {
                get: function () {
                    return this._amenityID;
                },
                set: function (value) {
                    if (this._amenityID !== value) {
                        this._amenityID = value;
                        this.setEquality('AmenityId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AmenityDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AmenityDetailGrid);
            return AmenityDetailGrid;
        }(DWSupport.AmenityDetailsSuppGrid));
        DWSupport.AmenityDetailGrid = AmenityDetailGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
/// <reference path="../AmenitiesSupp/AmenityDetailGrid.ts" />
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SplitDetailGrid = /** @class */ (function (_super) {
            __extends(SplitDetailGrid, _super);
            function SplitDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            SplitDetailGrid.prototype.usePager = function () {
                return false;
            };
            SplitDetailGrid = __decorate([
                Serenity.Decorators.registerClass("DAP.DWSupport.SplitDetailGrid")
            ], SplitDetailGrid);
            return SplitDetailGrid;
        }(DWSupport.AmenityDetailGrid));
        DWSupport.SplitDetailGrid = SplitDetailGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SplitMasterDetailPane = /** @class */ (function (_super) {
            __extends(SplitMasterDetailPane, _super);
            function SplitMasterDetailPane(container) {
                var _this = _super.call(this, container) || this;
                var masterDiv = container[0].appendChild(document.createElement("div"));
                masterDiv.classList.add('pane');
                var AmenitiesSuppGrid = new DWSupport.SplitMasterGrid($(masterDiv));
                var detailDiv = container[0].appendChild(document.createElement("div"));
                detailDiv.classList.add('pane');
                var AmenityDetailsSuppGrid = new DWSupport.SplitDetailGrid($(detailDiv));
                var resize = Q.debounce(function () {
                    if (!_this.element)
                        return;
                    AmenitiesSuppGrid.element.triggerHandler("layout");
                    AmenityDetailsSuppGrid.element.triggerHandler("layout");
                }, 250);
                AmenitiesSuppGrid.view.onDataLoaded.subscribe(function (e) { return AmenitiesSuppGrid.slickGrid.setSelectedRows([]); });
                AmenitiesSuppGrid.slickGrid.onSelectedRowsChanged.subscribe(Q.debounce(function (e) {
                    if (!_this.element)
                        return;
                    var rows = AmenitiesSuppGrid.slickGrid.getSelectedRows();
                    if (!rows.length) {
                        AmenityDetailsSuppGrid.amenityID = null;
                    }
                    else {
                        AmenitiesSuppGrid.slickGrid.scrollRowIntoView(rows[0], false);
                        var master = AmenitiesSuppGrid.view.getItem(rows[0]);
                        AmenityDetailsSuppGrid.amenityID = master.AmenityId;
                        AmenityDetailsSuppGrid.setTitle('Amenity Details of ' + master.AmenityId + " - " + master.AmenityCd);
                    }
                }, 500));
                var split = Split([masterDiv, detailDiv], {
                    direction: "vertical",
                    cursor: "row-resize",
                    minSize: [380, 310],
                    onDragEnd: resize,
                    onDrag: resize
                });
                window.setTimeout(function () { return resize(); }, 1);
                return _this;
            }
            SplitMasterDetailPane = __decorate([
                Serenity.Decorators.registerClass("DAP.DWSupport.SplitPane")
            ], SplitMasterDetailPane);
            return SplitMasterDetailPane;
        }(Serenity.Widget));
        DWSupport.SplitMasterDetailPane = SplitMasterDetailPane;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
/// <reference path="../AmenitiesSupp/AmenitiesSuppGrid.ts" />
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SplitMasterGrid = /** @class */ (function (_super) {
            __extends(SplitMasterGrid, _super);
            function SplitMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            SplitMasterGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableCellNavigation = true;
                return opt;
            };
            SplitMasterGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            SplitMasterGrid = __decorate([
                Serenity.Decorators.registerClass("DAP.DWSupport.SplitMasterGrid")
            ], SplitMasterGrid);
            return SplitMasterGrid;
        }(DWSupport.AmenitiesSuppGrid));
        DWSupport.SplitMasterGrid = SplitMasterGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CasinoSlotMasterDescSuppDialog = /** @class */ (function (_super) {
            __extends(CasinoSlotMasterDescSuppDialog, _super);
            function CasinoSlotMasterDescSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.CasinoSlotMasterDescSuppForm(_this.idPrefix);
                return _this;
            }
            CasinoSlotMasterDescSuppDialog.prototype.getFormKey = function () { return DWSupport.CasinoSlotMasterDescSuppForm.formKey; };
            CasinoSlotMasterDescSuppDialog.prototype.getIdProperty = function () { return DWSupport.CasinoSlotMasterDescSuppRow.idProperty; };
            CasinoSlotMasterDescSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.CasinoSlotMasterDescSuppRow.localTextPrefix; };
            CasinoSlotMasterDescSuppDialog.prototype.getNameProperty = function () { return DWSupport.CasinoSlotMasterDescSuppRow.nameProperty; };
            CasinoSlotMasterDescSuppDialog.prototype.getService = function () { return DWSupport.CasinoSlotMasterDescSuppService.baseUrl; };
            CasinoSlotMasterDescSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CasinoSlotMasterDescSuppDialog);
            return CasinoSlotMasterDescSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.CasinoSlotMasterDescSuppDialog = CasinoSlotMasterDescSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CasinoSlotMasterDescSuppGrid = /** @class */ (function (_super) {
            __extends(CasinoSlotMasterDescSuppGrid, _super);
            function CasinoSlotMasterDescSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            CasinoSlotMasterDescSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.CasinoSlotMasterDescSupp'; };
            CasinoSlotMasterDescSuppGrid.prototype.getDialogType = function () { return DWSupport.CasinoSlotMasterDescSuppDialog; };
            CasinoSlotMasterDescSuppGrid.prototype.getIdProperty = function () { return DWSupport.CasinoSlotMasterDescSuppRow.idProperty; };
            CasinoSlotMasterDescSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.CasinoSlotMasterDescSuppRow.localTextPrefix; };
            CasinoSlotMasterDescSuppGrid.prototype.getService = function () { return DWSupport.CasinoSlotMasterDescSuppService.baseUrl; };
            CasinoSlotMasterDescSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CasinoSlotMasterDescSuppGrid);
            return CasinoSlotMasterDescSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.CasinoSlotMasterDescSuppGrid = CasinoSlotMasterDescSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CategoryMasterSuppDialog = /** @class */ (function (_super) {
            __extends(CategoryMasterSuppDialog, _super);
            function CategoryMasterSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.CategoryMasterSuppForm(_this.idPrefix);
                return _this;
            }
            CategoryMasterSuppDialog.prototype.getFormKey = function () { return DWSupport.CategoryMasterSuppForm.formKey; };
            CategoryMasterSuppDialog.prototype.getIdProperty = function () { return DWSupport.CategoryMasterSuppRow.idProperty; };
            CategoryMasterSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.CategoryMasterSuppRow.localTextPrefix; };
            CategoryMasterSuppDialog.prototype.getNameProperty = function () { return DWSupport.CategoryMasterSuppRow.nameProperty; };
            CategoryMasterSuppDialog.prototype.getService = function () { return DWSupport.CategoryMasterSuppService.baseUrl; };
            CategoryMasterSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryMasterSuppDialog);
            return CategoryMasterSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.CategoryMasterSuppDialog = CategoryMasterSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CategoryMasterSuppGrid = /** @class */ (function (_super) {
            __extends(CategoryMasterSuppGrid, _super);
            function CategoryMasterSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryMasterSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.CategoryMasterSupp'; };
            CategoryMasterSuppGrid.prototype.getDialogType = function () { return DWSupport.CategoryMasterSuppDialog; };
            CategoryMasterSuppGrid.prototype.getIdProperty = function () { return DWSupport.CategoryMasterSuppRow.idProperty; };
            CategoryMasterSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.CategoryMasterSuppRow.localTextPrefix; };
            CategoryMasterSuppGrid.prototype.getService = function () { return DWSupport.CategoryMasterSuppService.baseUrl; };
            CategoryMasterSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryMasterSuppGrid);
            return CategoryMasterSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.CategoryMasterSuppGrid = CategoryMasterSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CmiSuppDialog = /** @class */ (function (_super) {
            __extends(CmiSuppDialog, _super);
            function CmiSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.CmiSuppForm(_this.idPrefix);
                return _this;
            }
            CmiSuppDialog.prototype.getFormKey = function () { return DWSupport.CmiSuppForm.formKey; };
            CmiSuppDialog.prototype.getIdProperty = function () { return DWSupport.CmiSuppRow.idProperty; };
            CmiSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.CmiSuppRow.localTextPrefix; };
            CmiSuppDialog.prototype.getNameProperty = function () { return DWSupport.CmiSuppRow.nameProperty; };
            CmiSuppDialog.prototype.getService = function () { return DWSupport.CmiSuppService.baseUrl; };
            CmiSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CmiSuppDialog);
            return CmiSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.CmiSuppDialog = CmiSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CmiSuppGrid = /** @class */ (function (_super) {
            __extends(CmiSuppGrid, _super);
            function CmiSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            CmiSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.CmiSupp'; };
            CmiSuppGrid.prototype.getDialogType = function () { return DWSupport.CmiSuppDialog; };
            CmiSuppGrid.prototype.getIdProperty = function () { return DWSupport.CmiSuppRow.idProperty; };
            CmiSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.CmiSuppRow.localTextPrefix; };
            CmiSuppGrid.prototype.getService = function () { return DWSupport.CmiSuppService.baseUrl; };
            CmiSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CmiSuppGrid);
            return CmiSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.CmiSuppGrid = CmiSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CreditCardAdjSuppDialog = /** @class */ (function (_super) {
            __extends(CreditCardAdjSuppDialog, _super);
            function CreditCardAdjSuppDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.CreditCardAdjSuppForm(_this.idPrefix);
                // Calculate and refresh [Calculated fields] when base fields change
                // ---------------------------------------------
                _this.form.BaseRate.change(function (e) {
                    var t1 = _this.form.ParticipationRate.value;
                    var t2 = _this.form.BaseRate.value;
                    var t3 = _this.form.CxBuffer.value;
                    _this.form.BlendedRate.set_value(t1 * t2);
                    _this.form.ProposedRate.set_value(_this.form.BlendedRate.value + t3);
                });
                _this.form.ParticipationRate.change(function (e) {
                    var t1 = _this.form.ParticipationRate.value;
                    var t2 = _this.form.BaseRate.value;
                    var t3 = _this.form.CxBuffer.value;
                    _this.form.BlendedRate.set_value(t1 * t2);
                    _this.form.ProposedRate.set_value(_this.form.BlendedRate.value + t3);
                });
                _this.form.CxBuffer.change(function (e) {
                    var t1 = _this.form.CxBuffer.value;
                    var t2 = _this.form.BlendedRate.value;
                    _this.form.ProposedRate.set_value(t1 + t2);
                });
                return _this;
                // ---------------------------------------------     
            }
            CreditCardAdjSuppDialog.prototype.getFormKey = function () { return DWSupport.CreditCardAdjSuppForm.formKey; };
            CreditCardAdjSuppDialog.prototype.getIdProperty = function () { return DWSupport.CreditCardAdjSuppRow.idProperty; };
            CreditCardAdjSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.CreditCardAdjSuppRow.localTextPrefix; };
            CreditCardAdjSuppDialog.prototype.getNameProperty = function () { return DWSupport.CreditCardAdjSuppRow.nameProperty; };
            CreditCardAdjSuppDialog.prototype.getService = function () { return DWSupport.CreditCardAdjSuppService.baseUrl; };
            CreditCardAdjSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            CreditCardAdjSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CreditCardAdjSuppDialog);
            return CreditCardAdjSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.CreditCardAdjSuppDialog = CreditCardAdjSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CreditCardAdjSuppGrid = /** @class */ (function (_super) {
            __extends(CreditCardAdjSuppGrid, _super);
            function CreditCardAdjSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            CreditCardAdjSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.CreditCardAdjSupp'; };
            CreditCardAdjSuppGrid.prototype.getDialogType = function () { return DWSupport.CreditCardAdjSuppDialog; };
            CreditCardAdjSuppGrid.prototype.getIdProperty = function () { return DWSupport.CreditCardAdjSuppRow.idProperty; };
            CreditCardAdjSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.CreditCardAdjSuppRow.localTextPrefix; };
            CreditCardAdjSuppGrid.prototype.getService = function () { return DWSupport.CreditCardAdjSuppService.baseUrl; };
            CreditCardAdjSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CreditCardAdjSuppGrid);
            return CreditCardAdjSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.CreditCardAdjSuppGrid = CreditCardAdjSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CurrencyExchangeRateSuppDialog = /** @class */ (function (_super) {
            __extends(CurrencyExchangeRateSuppDialog, _super);
            function CurrencyExchangeRateSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.CurrencyExchangeRateSuppForm(_this.idPrefix);
                return _this;
            }
            CurrencyExchangeRateSuppDialog.prototype.getFormKey = function () { return DWSupport.CurrencyExchangeRateSuppForm.formKey; };
            CurrencyExchangeRateSuppDialog.prototype.getIdProperty = function () { return DWSupport.CurrencyExchangeRateSuppRow.idProperty; };
            CurrencyExchangeRateSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.CurrencyExchangeRateSuppRow.localTextPrefix; };
            CurrencyExchangeRateSuppDialog.prototype.getNameProperty = function () { return DWSupport.CurrencyExchangeRateSuppRow.nameProperty; };
            CurrencyExchangeRateSuppDialog.prototype.getService = function () { return DWSupport.CurrencyExchangeRateSuppService.baseUrl; };
            CurrencyExchangeRateSuppDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: 'Close Record',
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        // -------------------------------- [ VALIDATE ] --------------------------------- //
                        // (record cannot be closed if criteria already met)
                        if (_this.form.SailToDat.value == lastDayOfMonthDate(_this.form.SailFromDat.value)) {
                            window.setTimeout(function () { return Q.notifyError('Record already closed.'); }, 0);
                            _this.dialogClose();
                            return buttons; // return immediately
                        }
                        // ------------------------------ [ CLOSE RECORD ] ------------------------------ //
                        // get sailFromDate's last day of the month to update sailFromToDate
                        _this.entity.SailToDat = lastDayOfMonthDate(_this.form.SailFromDat.value);
                        DWSupport.CurrencyExchangeRateSuppService.Update({
                            EntityId: _this.entityId,
                            Entity: _this.entity
                        }, function (response) {
                            //
                        });
                        // ---------------------------- [ INSERT NEW RECORD ] --------------------------- //
                        // After previous record is closed with UPDATE, a new row is inserted
                        var row = {
                            CurrencyCd: _this.form.CurrencyCd.value,
                            SailToDat: "9999-12-31",
                            SailFromDat: firstDayOfMonthDate(lastDayOfMonthDate(_this.form.SailFromDat.value)),
                            ExchangeRateNbr: _this.form.ExchangeRateNbr.value,
                            CommentTxt: _this.form.CommentTxt.value,
                            AuditRecordId: _this.form.AuditRecordId.value,
                            CreatedByNam: DAP.Authorization.userDefinition.Username,
                            CreatedTs: new Date().toISOString().slice(0, 10)
                        };
                        // INSERT
                        DWSupport.CurrencyExchangeRateSuppService.Create({
                            Entity: row
                        }, function (response) {
                            _this.dialogClose();
                            window.setTimeout(function () { return Q.notifySuccess('Record successfully closed.'); }, 0);
                            // refresh data changes
                            Serenity.SubDialogHelper.triggerDataChange(_this);
                        });
                    }
                });
                return buttons;
            };
            CurrencyExchangeRateSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrencyExchangeRateSuppDialog);
            return CurrencyExchangeRateSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.CurrencyExchangeRateSuppDialog = CurrencyExchangeRateSuppDialog;
        function firstDayOfMonthDate(date) {
            var dateArr = date.split('-');
            var dateObj = new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]));
            var newDate = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
            return Q.formatDate(newDate.toDateString(), "yyyy-MM-dd");
        }
        function lastDayOfMonthDate(date) {
            var dateArr = date.split('-');
            var dateObj = new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]));
            var newDate = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0);
            return Q.formatDate(newDate.toDateString(), "yyyy-MM-dd");
        }
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var CurrencyExchangeRateSuppGrid = /** @class */ (function (_super) {
            __extends(CurrencyExchangeRateSuppGrid, _super);
            function CurrencyExchangeRateSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrencyExchangeRateSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.CurrencyExchangeRateSupp'; };
            CurrencyExchangeRateSuppGrid.prototype.getDialogType = function () { return DWSupport.CurrencyExchangeRateSuppDialog; };
            CurrencyExchangeRateSuppGrid.prototype.getIdProperty = function () { return DWSupport.CurrencyExchangeRateSuppRow.idProperty; };
            CurrencyExchangeRateSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.CurrencyExchangeRateSuppRow.localTextPrefix; };
            CurrencyExchangeRateSuppGrid.prototype.getService = function () { return DWSupport.CurrencyExchangeRateSuppService.baseUrl; };
            CurrencyExchangeRateSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrencyExchangeRateSuppGrid);
            return CurrencyExchangeRateSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.CurrencyExchangeRateSuppGrid = CurrencyExchangeRateSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var DistrictMasterSuppDialog = /** @class */ (function (_super) {
            __extends(DistrictMasterSuppDialog, _super);
            function DistrictMasterSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.DistrictMasterSuppForm(_this.idPrefix);
                return _this;
            }
            DistrictMasterSuppDialog.prototype.getFormKey = function () { return DWSupport.DistrictMasterSuppForm.formKey; };
            DistrictMasterSuppDialog.prototype.getIdProperty = function () { return DWSupport.DistrictMasterSuppRow.idProperty; };
            DistrictMasterSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.DistrictMasterSuppRow.localTextPrefix; };
            DistrictMasterSuppDialog.prototype.getNameProperty = function () { return DWSupport.DistrictMasterSuppRow.nameProperty; };
            DistrictMasterSuppDialog.prototype.getService = function () { return DWSupport.DistrictMasterSuppService.baseUrl; };
            DistrictMasterSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                // b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return b;
            };
            DistrictMasterSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DistrictMasterSuppDialog);
            return DistrictMasterSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.DistrictMasterSuppDialog = DistrictMasterSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var DistrictMasterSuppGrid = /** @class */ (function (_super) {
            __extends(DistrictMasterSuppGrid, _super);
            function DistrictMasterSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            DistrictMasterSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.DistrictMasterSupp'; };
            DistrictMasterSuppGrid.prototype.getDialogType = function () { return DWSupport.DistrictMasterSuppDialog; };
            DistrictMasterSuppGrid.prototype.getIdProperty = function () { return DWSupport.DistrictMasterSuppRow.idProperty; };
            DistrictMasterSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.DistrictMasterSuppRow.localTextPrefix; };
            DistrictMasterSuppGrid.prototype.getService = function () { return DWSupport.DistrictMasterSuppService.baseUrl; };
            //protected createQuickSearchInput() { }
            DistrictMasterSuppGrid.prototype.createQuickFilters = function () { };
            DistrictMasterSuppGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            DistrictMasterSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DistrictMasterSuppGrid);
            return DistrictMasterSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.DistrictMasterSuppGrid = DistrictMasterSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinPlannedCapacitySuppDialog = /** @class */ (function (_super) {
            __extends(FinPlannedCapacitySuppDialog, _super);
            function FinPlannedCapacitySuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.FinPlannedCapacitySuppForm(_this.idPrefix);
                return _this;
            }
            FinPlannedCapacitySuppDialog.prototype.getFormKey = function () { return DWSupport.FinPlannedCapacitySuppForm.formKey; };
            FinPlannedCapacitySuppDialog.prototype.getIdProperty = function () { return DWSupport.FinPlannedCapacitySuppRow.idProperty; };
            FinPlannedCapacitySuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.FinPlannedCapacitySuppRow.localTextPrefix; };
            FinPlannedCapacitySuppDialog.prototype.getNameProperty = function () { return DWSupport.FinPlannedCapacitySuppRow.nameProperty; };
            FinPlannedCapacitySuppDialog.prototype.getService = function () { return DWSupport.FinPlannedCapacitySuppService.baseUrl; };
            FinPlannedCapacitySuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FinPlannedCapacitySuppDialog);
            return FinPlannedCapacitySuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.FinPlannedCapacitySuppDialog = FinPlannedCapacitySuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinPlannedCapacitySuppGrid = /** @class */ (function (_super) {
            __extends(FinPlannedCapacitySuppGrid, _super);
            function FinPlannedCapacitySuppGrid(container) {
                return _super.call(this, container) || this;
            }
            FinPlannedCapacitySuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.FinPlannedCapacitySupp'; };
            FinPlannedCapacitySuppGrid.prototype.getDialogType = function () { return DWSupport.FinPlannedCapacitySuppDialog; };
            FinPlannedCapacitySuppGrid.prototype.getIdProperty = function () { return DWSupport.FinPlannedCapacitySuppRow.idProperty; };
            FinPlannedCapacitySuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.FinPlannedCapacitySuppRow.localTextPrefix; };
            FinPlannedCapacitySuppGrid.prototype.getService = function () { return DWSupport.FinPlannedCapacitySuppService.baseUrl; };
            FinPlannedCapacitySuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FinPlannedCapacitySuppGrid);
            return FinPlannedCapacitySuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.FinPlannedCapacitySuppGrid = FinPlannedCapacitySuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FinReportPublishingSuppDialog = /** @class */ (function (_super) {
            __extends(FinReportPublishingSuppDialog, _super);
            function FinReportPublishingSuppDialog() {
                return _super.call(this) || this;
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
                //if (this.form.ProcessedDateTs.value != null) {
                //    Serenity.EditorUtils.setReadOnly(this.form.PublishDat, true);
                //    Serenity.EditorUtils.setReadOnly(this.form.PublishCommentsTxt, true);
                //    Serenity.EditorUtils.setReadOnly(this.form.PublishCd, true);
                //    this.applyChangesButton.hide();
                //    this.saveAndCloseButton.hide();
                //}
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
                //var btn = Q.first(buttons, x => x.cssClass == "add-button");
                //btn.title = Q.text("Add New");            
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
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
    var DWSupport;
    (function (DWSupport) {
        var FullShipChartersSuppDialog = /** @class */ (function (_super) {
            __extends(FullShipChartersSuppDialog, _super);
            function FullShipChartersSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.FullShipChartersSuppForm(_this.idPrefix);
                return _this;
            }
            FullShipChartersSuppDialog.prototype.getFormKey = function () { return DWSupport.FullShipChartersSuppForm.formKey; };
            FullShipChartersSuppDialog.prototype.getIdProperty = function () { return DWSupport.FullShipChartersSuppRow.idProperty; };
            FullShipChartersSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.FullShipChartersSuppRow.localTextPrefix; };
            FullShipChartersSuppDialog.prototype.getNameProperty = function () { return DWSupport.FullShipChartersSuppRow.nameProperty; };
            FullShipChartersSuppDialog.prototype.getService = function () { return DWSupport.FullShipChartersSuppService.baseUrl; };
            FullShipChartersSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FullShipChartersSuppDialog);
            return FullShipChartersSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.FullShipChartersSuppDialog = FullShipChartersSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var FullShipChartersSuppGrid = /** @class */ (function (_super) {
            __extends(FullShipChartersSuppGrid, _super);
            function FullShipChartersSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            FullShipChartersSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.FullShipChartersSupp'; };
            FullShipChartersSuppGrid.prototype.getDialogType = function () { return DWSupport.FullShipChartersSuppDialog; };
            FullShipChartersSuppGrid.prototype.getIdProperty = function () { return DWSupport.FullShipChartersSuppRow.idProperty; };
            FullShipChartersSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.FullShipChartersSuppRow.localTextPrefix; };
            FullShipChartersSuppGrid.prototype.getService = function () { return DWSupport.FullShipChartersSuppService.baseUrl; };
            FullShipChartersSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FullShipChartersSuppGrid);
            return FullShipChartersSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.FullShipChartersSuppGrid = FullShipChartersSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var GTFCategoryEditor = /** @class */ (function (_super) {
            __extends(GTFCategoryEditor, _super);
            function GTFCategoryEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("SEATTLE GTF", "SEATTLE GTF");
                _this.addOption("PANAMA GTF", "PANAMA GTF");
                return _this;
            }
            GTFCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], GTFCategoryEditor);
            return GTFCategoryEditor;
        }(Serenity.Select2Editor));
        DWSupport.GTFCategoryEditor = GTFCategoryEditor;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GtfSuppDialog = /** @class */ (function (_super) {
            __extends(GtfSuppDialog, _super);
            function GtfSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.GtfSuppForm(_this.idPrefix);
                return _this;
            }
            GtfSuppDialog.prototype.getFormKey = function () { return DWSupport.GtfSuppForm.formKey; };
            GtfSuppDialog.prototype.getIdProperty = function () { return DWSupport.GtfSuppRow.idProperty; };
            GtfSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.GtfSuppRow.localTextPrefix; };
            GtfSuppDialog.prototype.getNameProperty = function () { return DWSupport.GtfSuppRow.nameProperty; };
            GtfSuppDialog.prototype.getService = function () { return DWSupport.GtfSuppService.baseUrl; };
            GtfSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                //b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
                return b;
            };
            GtfSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GtfSuppDialog);
            return GtfSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.GtfSuppDialog = GtfSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GtfSuppGrid = /** @class */ (function (_super) {
            __extends(GtfSuppGrid, _super);
            function GtfSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            GtfSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.GtfSupp'; };
            GtfSuppGrid.prototype.getDialogType = function () { return DWSupport.GtfSuppDialog; };
            GtfSuppGrid.prototype.getIdProperty = function () { return DWSupport.GtfSuppRow.idProperty; };
            GtfSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.GtfSuppRow.localTextPrefix; };
            GtfSuppGrid.prototype.getService = function () { return DWSupport.GtfSuppService.baseUrl; };
            GtfSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GtfSuppGrid);
            return GtfSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.GtfSuppGrid = GtfSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GuestPreventDepartureDialog = /** @class */ (function (_super) {
            __extends(GuestPreventDepartureDialog, _super);
            function GuestPreventDepartureDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.GuestPreventDepartureForm(_this.idPrefix);
                return _this;
            }
            GuestPreventDepartureDialog.prototype.getFormKey = function () { return DWSupport.GuestPreventDepartureForm.formKey; };
            GuestPreventDepartureDialog.prototype.getIdProperty = function () { return DWSupport.GuestPreventDepartureRow.idProperty; };
            GuestPreventDepartureDialog.prototype.getLocalTextPrefix = function () { return DWSupport.GuestPreventDepartureRow.localTextPrefix; };
            GuestPreventDepartureDialog.prototype.getNameProperty = function () { return DWSupport.GuestPreventDepartureRow.nameProperty; };
            GuestPreventDepartureDialog.prototype.getService = function () { return DWSupport.GuestPreventDepartureService.baseUrl; };
            GuestPreventDepartureDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GuestPreventDepartureDialog);
            return GuestPreventDepartureDialog;
        }(Serenity.EntityDialog));
        DWSupport.GuestPreventDepartureDialog = GuestPreventDepartureDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var GuestPreventDepartureGrid = /** @class */ (function (_super) {
            __extends(GuestPreventDepartureGrid, _super);
            function GuestPreventDepartureGrid(container) {
                return _super.call(this, container) || this;
            }
            GuestPreventDepartureGrid.prototype.getColumnsKey = function () { return 'DWSupport.GuestPreventDeparture'; };
            GuestPreventDepartureGrid.prototype.getDialogType = function () { return DWSupport.GuestPreventDepartureDialog; };
            GuestPreventDepartureGrid.prototype.getIdProperty = function () { return DWSupport.GuestPreventDepartureRow.idProperty; };
            GuestPreventDepartureGrid.prototype.getLocalTextPrefix = function () { return DWSupport.GuestPreventDepartureRow.localTextPrefix; };
            GuestPreventDepartureGrid.prototype.getService = function () { return DWSupport.GuestPreventDepartureService.baseUrl; };
            GuestPreventDepartureGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                // make employee filter a textbox, instead of lookup, and search by starts with
                var filter = Q.first(filters, function (x) { return x.field == "BoardingDenialReasonDesc" /* BoardingDenialReasonDesc */; });
                filter.title = "Boarding Denial Reason Contains";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["BoardingDenialReasonDesc" /* BoardingDenialReasonDesc */], 'like', '%' + h.value + '%']);
                    }
                };
                return filters;
            };
            GuestPreventDepartureGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GuestPreventDepartureGrid);
            return GuestPreventDepartureGrid;
        }(Serenity.EntityGrid));
        DWSupport.GuestPreventDepartureGrid = GuestPreventDepartureGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ImportErrorLogDialog = /** @class */ (function (_super) {
            __extends(ImportErrorLogDialog, _super);
            function ImportErrorLogDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.ImportErrorLogForm(_this.idPrefix);
                return _this;
            }
            ImportErrorLogDialog.prototype.getFormKey = function () { return DWSupport.ImportErrorLogForm.formKey; };
            ImportErrorLogDialog.prototype.getIdProperty = function () { return DWSupport.ImportErrorLogRow.idProperty; };
            ImportErrorLogDialog.prototype.getLocalTextPrefix = function () { return DWSupport.ImportErrorLogRow.localTextPrefix; };
            ImportErrorLogDialog.prototype.getNameProperty = function () { return DWSupport.ImportErrorLogRow.nameProperty; };
            ImportErrorLogDialog.prototype.getService = function () { return DWSupport.ImportErrorLogService.baseUrl; };
            //protected getToolbarButtons(): Serenity.ToolButton[] {
            //    var b = super.getToolbarButtons();
            //    b.splice(Q.indexOf(b, x => x.cssClass == "save-and-close-button"), 1);
            //    b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            //    b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            //    return b;
            //}
            ImportErrorLogDialog.prototype.updateInterface = function () {
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
                this.deleteButton.hide();
            };
            ImportErrorLogDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportErrorLogDialog);
            return ImportErrorLogDialog;
        }(Serenity.EntityDialog));
        DWSupport.ImportErrorLogDialog = ImportErrorLogDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ImportErrorLogGrid = /** @class */ (function (_super) {
            __extends(ImportErrorLogGrid, _super);
            function ImportErrorLogGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportErrorLogGrid.prototype.getColumnsKey = function () { return 'DWSupport.ImportErrorLog'; };
            ImportErrorLogGrid.prototype.getDialogType = function () { return DWSupport.ImportErrorLogDialog; };
            ImportErrorLogGrid.prototype.getIdProperty = function () { return DWSupport.ImportErrorLogRow.idProperty; };
            ImportErrorLogGrid.prototype.getLocalTextPrefix = function () { return DWSupport.ImportErrorLogRow.localTextPrefix; };
            ImportErrorLogGrid.prototype.getService = function () { return DWSupport.ImportErrorLogService.baseUrl; };
            ImportErrorLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportErrorLogGrid);
            return ImportErrorLogGrid;
        }(Serenity.EntityGrid));
        DWSupport.ImportErrorLogGrid = ImportErrorLogGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ImportErrorLogGridDialog = /** @class */ (function (_super) {
            __extends(ImportErrorLogGridDialog, _super);
            function ImportErrorLogGridDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.ImportErrorLogForm(_this.idPrefix);
                _this.dialogTitle = "Import Error Log";
                _this.aGrid = new DWSupport.ImportErrorLogListGrid(_this.byId("ErrorGrid"));
                return _this;
                // this.aGrid = new ImportErrorLogGrid(this.byId('Grid'));
            }
            ImportErrorLogGridDialog.prototype.getFormKey = function () { return DWSupport.ImportErrorLogForm.formKey; };
            ImportErrorLogGridDialog.prototype.getIdProperty = function () { return DWSupport.ImportErrorLogRow.idProperty; };
            ImportErrorLogGridDialog.prototype.getLocalTextPrefix = function () { return DWSupport.ImportErrorLogRow.localTextPrefix; };
            ImportErrorLogGridDialog.prototype.getNameProperty = function () { return DWSupport.ImportErrorLogRow.nameProperty; };
            ImportErrorLogGridDialog.prototype.getService = function () { return DWSupport.ImportErrorLogService.baseUrl; };
            //protected getDialogTitle(): string {
            //    return "Import Error Log";
            //}
            //protected onDialogOpen() {
            //    super.onDialogOpen();
            //    this.element.html("~/Modules/DWSupport/ImportErrorLog/ImportErrorLogIndex.cshtml");
            //}
            ImportErrorLogGridDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "undo-delete-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "localization-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "clone-button"; }), 1);
                return b;
            };
            ImportErrorLogGridDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportErrorLogGridDialog);
            return ImportErrorLogGridDialog;
        }(Serenity.EntityDialog));
        DWSupport.ImportErrorLogGridDialog = ImportErrorLogGridDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ImportErrorLogListGrid = /** @class */ (function (_super) {
            __extends(ImportErrorLogListGrid, _super);
            function ImportErrorLogListGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportErrorLogListGrid.prototype.getColumnsKey = function () { return "DWSupport.ImportErrorLog"; };
            ImportErrorLogListGrid.prototype.getIdProperty = function () { return DWSupport.ImportErrorLogRow.idProperty; };
            ImportErrorLogListGrid.prototype.getDialogType = function () { return DWSupport.ImportErrorLogDialog; };
            ImportErrorLogListGrid.prototype.getLocalTextPrefix = function () { return DWSupport.ImportErrorLogRow.localTextPrefix; };
            ImportErrorLogListGrid.prototype.getService = function () { return DWSupport.ImportErrorLogService.baseUrl; };
            ImportErrorLogListGrid.prototype.createToolbar = function () {
            };
            ImportErrorLogListGrid.prototype.createQuickSearchInput = function () {
            };
            ImportErrorLogListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportErrorLogListGrid);
            return ImportErrorLogListGrid;
        }(Serenity.EntityGrid));
        DWSupport.ImportErrorLogListGrid = ImportErrorLogListGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeSuppGrid = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeSuppGrid, _super);
            function InvoiceItemTypeSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceItemTypeSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.InvoiceItemTypeSupp'; };
            InvoiceItemTypeSuppGrid.prototype.getDialogType = function () { return DWSupport.InvoiceItemTypeSuppDialog; };
            InvoiceItemTypeSuppGrid.prototype.getIdProperty = function () { return DWSupport.InvoiceItemTypeSuppRow.idProperty; };
            InvoiceItemTypeSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.InvoiceItemTypeSuppRow.localTextPrefix; };
            InvoiceItemTypeSuppGrid.prototype.getService = function () { return DWSupport.InvoiceItemTypeSuppService.baseUrl; };
            InvoiceItemTypeSuppGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                // REMOVE button if no access
                if (!DAP.Authorization.hasPermission("DWSupport:DWSupport_Revenue")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                }
                return buttons;
            };
            InvoiceItemTypeSuppGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this); //.filter(x => x.field !== fld.M1);
            };
            InvoiceItemTypeSuppGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            InvoiceItemTypeSuppGrid.prototype.addButtonClick = function () {
                this.editItem({ InvoiceItemTypeCd: this.invoiceItemTypeCd });
            };
            InvoiceItemTypeSuppGrid.prototype.getInitialTitle = function () {
                return null;
            };
            InvoiceItemTypeSuppGrid.prototype.getGridCanLoad = function () {
                // return true if grid can load and Grid's field exists
                return _super.prototype.getGridCanLoad.call(this) && !!this.invoiceItemTypeCd;
            };
            Object.defineProperty(InvoiceItemTypeSuppGrid.prototype, "invoiceItemTypeCd", {
                get: function () {
                    return this._invoiceItemTypeCd;
                },
                set: function (value) {
                    if (this._invoiceItemTypeCd !== value) {
                        this._invoiceItemTypeCd = value;
                        this.setEquality('M1', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            InvoiceItemTypeSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceItemTypeSuppGrid);
            return InvoiceItemTypeSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.InvoiceItemTypeSuppGrid = InvoiceItemTypeSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
/// <reference path="../InvoiceItemTypeSupp/InvoiceItemTypeSuppGrid.ts" />
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeSplitDetailGrid = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeSplitDetailGrid, _super);
            function InvoiceItemTypeSplitDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceItemTypeSplitDetailGrid.prototype.usePager = function () {
                return false;
            };
            InvoiceItemTypeSplitDetailGrid = __decorate([
                Serenity.Decorators.registerClass("DAP.DWSupport.InvoiceItemTypeSplitDetailGrid")
            ], InvoiceItemTypeSplitDetailGrid);
            return InvoiceItemTypeSplitDetailGrid;
        }(DWSupport.InvoiceItemTypeSuppGrid));
        DWSupport.InvoiceItemTypeSplitDetailGrid = InvoiceItemTypeSplitDetailGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        /*
         * Connect master grid's row to child grid's row by ID.
        */
        var InvoiceItemTypeSplitMasterDetailPane = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeSplitMasterDetailPane, _super);
            function InvoiceItemTypeSplitMasterDetailPane(container) {
                var _this = _super.call(this, container) || this;
                // get grid objects
                var masterDiv = container[0].appendChild(document.createElement("div"));
                masterDiv.classList.add('pane');
                var InvoiceItemTypeMasterGrid = new DWSupport.InvoiceItemTypeSplitMasterGrid($(masterDiv));
                var detailDiv = container[0].appendChild(document.createElement("div"));
                detailDiv.classList.add('pane');
                var InvoiceItemTypeDetailsGrid = new DWSupport.InvoiceItemTypeSplitDetailGrid($(detailDiv));
                var resize = Q.debounce(function () {
                    if (!_this.element)
                        return;
                    InvoiceItemTypeMasterGrid.element.triggerHandler("layout");
                    InvoiceItemTypeDetailsGrid.element.triggerHandler("layout");
                }, 250);
                InvoiceItemTypeMasterGrid.view.onDataLoaded.subscribe(function (e) { return InvoiceItemTypeMasterGrid.slickGrid.setSelectedRows([]); });
                InvoiceItemTypeMasterGrid.slickGrid.onSelectedRowsChanged.subscribe(Q.debounce(function (e) {
                    if (!_this.element)
                        return;
                    // if there are no data rows in master, set child row's ID to null
                    var rows = InvoiceItemTypeMasterGrid.slickGrid.getSelectedRows();
                    if (!rows.length) {
                        InvoiceItemTypeDetailsGrid.invoiceItemTypeCd = null;
                    }
                    // if master grid has data, set child grid's row ID to master's ID
                    else {
                        InvoiceItemTypeMasterGrid.slickGrid.scrollRowIntoView(rows[0], false);
                        var master = InvoiceItemTypeMasterGrid.view.getItem(rows[0]);
                        InvoiceItemTypeDetailsGrid.invoiceItemTypeCd = 274;
                        //InvoiceItemTypeDetailsGrid.m2 = master.InvoiceItemTypeMasterId;
                        //InvoiceItemTypeDetailsGrid.m3 = master.InvoiceItemTypeMasterId;
                        //InvoiceItemTypeDetailsGrid.m4 = master.InvoiceItemTypeMasterId;
                        InvoiceItemTypeDetailsGrid.setTitle('Invoice Item Type Details of ' + master.InvoiceItemTypeMasterId + ' - ' + master.InvoiceItemTypeCd);
                    }
                }, 500));
                var split = Split([masterDiv, detailDiv], {
                    direction: "vertical",
                    cursor: "row-resize",
                    minSize: [380, 310],
                    onDragEnd: resize,
                    onDrag: resize
                });
                window.setTimeout(function () { return resize(); }, 1);
                return _this;
            }
            InvoiceItemTypeSplitMasterDetailPane = __decorate([
                Serenity.Decorators.registerClass("DAP.DWSupport.InvoiceItemTypeSplitMasterDetailPane")
            ], InvoiceItemTypeSplitMasterDetailPane);
            return InvoiceItemTypeSplitMasterDetailPane;
        }(Serenity.Widget));
        DWSupport.InvoiceItemTypeSplitMasterDetailPane = InvoiceItemTypeSplitMasterDetailPane;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeMasterSuppGrid = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeMasterSuppGrid, _super);
            function InvoiceItemTypeMasterSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceItemTypeMasterSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.InvoiceItemTypeMasterSupp'; };
            InvoiceItemTypeMasterSuppGrid.prototype.getDialogType = function () { return DWSupport.InvoiceItemTypeMasterSuppDialog; };
            InvoiceItemTypeMasterSuppGrid.prototype.getIdProperty = function () { return DWSupport.InvoiceItemTypeMasterSuppRow.idProperty; };
            InvoiceItemTypeMasterSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.InvoiceItemTypeMasterSuppRow.localTextPrefix; };
            InvoiceItemTypeMasterSuppGrid.prototype.getService = function () { return DWSupport.InvoiceItemTypeMasterSuppService.baseUrl; };
            InvoiceItemTypeMasterSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceItemTypeMasterSuppGrid);
            return InvoiceItemTypeMasterSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.InvoiceItemTypeMasterSuppGrid = InvoiceItemTypeMasterSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
/// <reference path="../InvoiceItemTypeMasterSupp/InvoiceItemTypeMasterSuppGrid.ts" />
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeSplitMasterGrid = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeSplitMasterGrid, _super);
            function InvoiceItemTypeSplitMasterGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceItemTypeSplitMasterGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.enableCellNavigation = true;
                return opt;
            };
            InvoiceItemTypeSplitMasterGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            InvoiceItemTypeSplitMasterGrid = __decorate([
                Serenity.Decorators.registerClass("DAP.DWSupport.InvoiceItemTypeSplitMasterGrid")
            ], InvoiceItemTypeSplitMasterGrid);
            return InvoiceItemTypeSplitMasterGrid;
        }(DWSupport.InvoiceItemTypeMasterSuppGrid));
        DWSupport.InvoiceItemTypeSplitMasterGrid = InvoiceItemTypeSplitMasterGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeMasterSuppDialog = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeMasterSuppDialog, _super);
            function InvoiceItemTypeMasterSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.InvoiceItemTypeMasterSuppForm(_this.idPrefix);
                return _this;
            }
            InvoiceItemTypeMasterSuppDialog.prototype.getFormKey = function () { return DWSupport.InvoiceItemTypeMasterSuppForm.formKey; };
            InvoiceItemTypeMasterSuppDialog.prototype.getIdProperty = function () { return DWSupport.InvoiceItemTypeMasterSuppRow.idProperty; };
            InvoiceItemTypeMasterSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.InvoiceItemTypeMasterSuppRow.localTextPrefix; };
            InvoiceItemTypeMasterSuppDialog.prototype.getNameProperty = function () { return DWSupport.InvoiceItemTypeMasterSuppRow.nameProperty; };
            InvoiceItemTypeMasterSuppDialog.prototype.getService = function () { return DWSupport.InvoiceItemTypeMasterSuppService.baseUrl; };
            InvoiceItemTypeMasterSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceItemTypeMasterSuppDialog);
            return InvoiceItemTypeMasterSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.InvoiceItemTypeMasterSuppDialog = InvoiceItemTypeMasterSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var InvoiceItemTypeSuppDialog = /** @class */ (function (_super) {
            __extends(InvoiceItemTypeSuppDialog, _super);
            function InvoiceItemTypeSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.InvoiceItemTypeSuppForm(_this.idPrefix);
                return _this;
            }
            InvoiceItemTypeSuppDialog.prototype.getFormKey = function () { return DWSupport.InvoiceItemTypeSuppForm.formKey; };
            InvoiceItemTypeSuppDialog.prototype.getIdProperty = function () { return DWSupport.InvoiceItemTypeSuppRow.idProperty; };
            InvoiceItemTypeSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.InvoiceItemTypeSuppRow.localTextPrefix; };
            InvoiceItemTypeSuppDialog.prototype.getNameProperty = function () { return DWSupport.InvoiceItemTypeSuppRow.nameProperty; };
            InvoiceItemTypeSuppDialog.prototype.getService = function () { return DWSupport.InvoiceItemTypeSuppService.baseUrl; };
            InvoiceItemTypeSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            InvoiceItemTypeSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceItemTypeSuppDialog);
            return InvoiceItemTypeSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.InvoiceItemTypeSuppDialog = InvoiceItemTypeSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var MinibarSetupSuppDialog = /** @class */ (function (_super) {
            __extends(MinibarSetupSuppDialog, _super);
            function MinibarSetupSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.MinibarSetupSuppForm(_this.idPrefix);
                return _this;
            }
            MinibarSetupSuppDialog.prototype.getFormKey = function () { return DWSupport.MinibarSetupSuppForm.formKey; };
            MinibarSetupSuppDialog.prototype.getIdProperty = function () { return DWSupport.MinibarSetupSuppRow.idProperty; };
            MinibarSetupSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.MinibarSetupSuppRow.localTextPrefix; };
            MinibarSetupSuppDialog.prototype.getNameProperty = function () { return DWSupport.MinibarSetupSuppRow.nameProperty; };
            MinibarSetupSuppDialog.prototype.getService = function () { return DWSupport.MinibarSetupSuppService.baseUrl; };
            MinibarSetupSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MinibarSetupSuppDialog);
            return MinibarSetupSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.MinibarSetupSuppDialog = MinibarSetupSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var MinibarSetupSuppGrid = /** @class */ (function (_super) {
            __extends(MinibarSetupSuppGrid, _super);
            function MinibarSetupSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            MinibarSetupSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.MinibarSetupSupp'; };
            MinibarSetupSuppGrid.prototype.getDialogType = function () { return DWSupport.MinibarSetupSuppDialog; };
            MinibarSetupSuppGrid.prototype.getIdProperty = function () { return DWSupport.MinibarSetupSuppRow.idProperty; };
            MinibarSetupSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.MinibarSetupSuppRow.localTextPrefix; };
            MinibarSetupSuppGrid.prototype.getService = function () { return DWSupport.MinibarSetupSuppService.baseUrl; };
            MinibarSetupSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MinibarSetupSuppGrid);
            return MinibarSetupSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.MinibarSetupSuppGrid = MinibarSetupSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PortSubstitutionSuppDialog = /** @class */ (function (_super) {
            __extends(PortSubstitutionSuppDialog, _super);
            function PortSubstitutionSuppDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.PortSubstitutionSuppForm(_this.idPrefix);
                _this.form = new DWSupport.PortSubstitutionSuppForm(_this.idPrefix);
                _this.form.PortCd.changeSelect2(function (e) {
                    var portcd = Q.toId(_this.form.PortCd.value);
                    if (portcd != null) {
                        _this.form.PortNam.value = DWSupport.VwGetSeaPortCodeRow.getLookup().itemById[portcd].PortName;
                    }
                });
                return _this;
            }
            PortSubstitutionSuppDialog.prototype.getFormKey = function () { return DWSupport.PortSubstitutionSuppForm.formKey; };
            PortSubstitutionSuppDialog.prototype.getIdProperty = function () { return DWSupport.PortSubstitutionSuppRow.idProperty; };
            PortSubstitutionSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.PortSubstitutionSuppRow.localTextPrefix; };
            PortSubstitutionSuppDialog.prototype.getNameProperty = function () { return DWSupport.PortSubstitutionSuppRow.nameProperty; };
            PortSubstitutionSuppDialog.prototype.getService = function () { return DWSupport.PortSubstitutionSuppService.baseUrl; };
            PortSubstitutionSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                // b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return b;
            };
            PortSubstitutionSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PortSubstitutionSuppDialog);
            return PortSubstitutionSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.PortSubstitutionSuppDialog = PortSubstitutionSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PortSubstitutionSuppGrid = /** @class */ (function (_super) {
            __extends(PortSubstitutionSuppGrid, _super);
            function PortSubstitutionSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            PortSubstitutionSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.PortSubstitutionSupp'; };
            PortSubstitutionSuppGrid.prototype.getDialogType = function () { return DWSupport.PortSubstitutionSuppDialog; };
            PortSubstitutionSuppGrid.prototype.getIdProperty = function () { return DWSupport.PortSubstitutionSuppRow.idProperty; };
            PortSubstitutionSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.PortSubstitutionSuppRow.localTextPrefix; };
            PortSubstitutionSuppGrid.prototype.getService = function () { return DWSupport.PortSubstitutionSuppService.baseUrl; };
            PortSubstitutionSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PortSubstitutionSuppGrid);
            return PortSubstitutionSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.PortSubstitutionSuppGrid = PortSubstitutionSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ProductCodeSuppDialog = /** @class */ (function (_super) {
            __extends(ProductCodeSuppDialog, _super);
            function ProductCodeSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.ProductCodeSuppForm(_this.idPrefix);
                return _this;
            }
            ProductCodeSuppDialog.prototype.getFormKey = function () { return DWSupport.ProductCodeSuppForm.formKey; };
            ProductCodeSuppDialog.prototype.getIdProperty = function () { return DWSupport.ProductCodeSuppRow.idProperty; };
            ProductCodeSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.ProductCodeSuppRow.localTextPrefix; };
            ProductCodeSuppDialog.prototype.getNameProperty = function () { return DWSupport.ProductCodeSuppRow.nameProperty; };
            ProductCodeSuppDialog.prototype.getService = function () { return DWSupport.ProductCodeSuppService.baseUrl; };
            ProductCodeSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductCodeSuppDialog);
            return ProductCodeSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.ProductCodeSuppDialog = ProductCodeSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var ProductCodeSuppGrid = /** @class */ (function (_super) {
            __extends(ProductCodeSuppGrid, _super);
            function ProductCodeSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductCodeSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.ProductCodeSupp'; };
            ProductCodeSuppGrid.prototype.getDialogType = function () { return DWSupport.ProductCodeSuppDialog; };
            ProductCodeSuppGrid.prototype.getIdProperty = function () { return DWSupport.ProductCodeSuppRow.idProperty; };
            ProductCodeSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.ProductCodeSuppRow.localTextPrefix; };
            ProductCodeSuppGrid.prototype.getService = function () { return DWSupport.ProductCodeSuppService.baseUrl; };
            ProductCodeSuppGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "ProductCd" /* ProductCd */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"product-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            ProductCodeSuppGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("product-link")) {
                    e.preventDefault();
                    var productCode = Q.first(DWSupport.ProductCodeSuppRow.getLookup().items, function (x) { return x.ProductCd == item.ProductCd; });
                    new DWSupport.ProductCodeSuppDialog().loadByIdAndOpenDialog(productCode.ProductCd);
                }
            };
            ProductCodeSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductCodeSuppGrid);
            return ProductCodeSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.ProductCodeSuppGrid = ProductCodeSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PsGlAccountSuppDialog = /** @class */ (function (_super) {
            __extends(PsGlAccountSuppDialog, _super);
            function PsGlAccountSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.PsGlAccountSuppForm(_this.idPrefix);
                return _this;
            }
            PsGlAccountSuppDialog.prototype.getFormKey = function () { return DWSupport.PsGlAccountSuppForm.formKey; };
            PsGlAccountSuppDialog.prototype.getIdProperty = function () { return DWSupport.PsGlAccountSuppRow.idProperty; };
            PsGlAccountSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.PsGlAccountSuppRow.localTextPrefix; };
            PsGlAccountSuppDialog.prototype.getNameProperty = function () { return DWSupport.PsGlAccountSuppRow.nameProperty; };
            PsGlAccountSuppDialog.prototype.getService = function () { return DWSupport.PsGlAccountSuppService.baseUrl; };
            PsGlAccountSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PsGlAccountSuppDialog);
            return PsGlAccountSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.PsGlAccountSuppDialog = PsGlAccountSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var PsGlAccountSuppGrid = /** @class */ (function (_super) {
            __extends(PsGlAccountSuppGrid, _super);
            function PsGlAccountSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            PsGlAccountSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.PsGlAccountSupp'; };
            PsGlAccountSuppGrid.prototype.getDialogType = function () { return DWSupport.PsGlAccountSuppDialog; };
            PsGlAccountSuppGrid.prototype.getIdProperty = function () { return DWSupport.PsGlAccountSuppRow.idProperty; };
            PsGlAccountSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.PsGlAccountSuppRow.localTextPrefix; };
            PsGlAccountSuppGrid.prototype.getService = function () { return DWSupport.PsGlAccountSuppService.baseUrl; };
            PsGlAccountSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PsGlAccountSuppGrid);
            return PsGlAccountSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.PsGlAccountSuppGrid = PsGlAccountSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var RollupProductCodesSuppDialog = /** @class */ (function (_super) {
            __extends(RollupProductCodesSuppDialog, _super);
            function RollupProductCodesSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.RollupProductCodesSuppForm(_this.idPrefix);
                return _this;
            }
            RollupProductCodesSuppDialog.prototype.getFormKey = function () { return DWSupport.RollupProductCodesSuppForm.formKey; };
            RollupProductCodesSuppDialog.prototype.getIdProperty = function () { return DWSupport.RollupProductCodesSuppRow.idProperty; };
            RollupProductCodesSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.RollupProductCodesSuppRow.localTextPrefix; };
            RollupProductCodesSuppDialog.prototype.getNameProperty = function () { return DWSupport.RollupProductCodesSuppRow.nameProperty; };
            RollupProductCodesSuppDialog.prototype.getService = function () { return DWSupport.RollupProductCodesSuppService.baseUrl; };
            RollupProductCodesSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RollupProductCodesSuppDialog);
            return RollupProductCodesSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.RollupProductCodesSuppDialog = RollupProductCodesSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var RollupProductCodesSuppGrid = /** @class */ (function (_super) {
            __extends(RollupProductCodesSuppGrid, _super);
            function RollupProductCodesSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            RollupProductCodesSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.RollupProductCodesSupp'; };
            RollupProductCodesSuppGrid.prototype.getDialogType = function () { return DWSupport.RollupProductCodesSuppDialog; };
            RollupProductCodesSuppGrid.prototype.getIdProperty = function () { return DWSupport.RollupProductCodesSuppRow.idProperty; };
            RollupProductCodesSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.RollupProductCodesSuppRow.localTextPrefix; };
            RollupProductCodesSuppGrid.prototype.getService = function () { return DWSupport.RollupProductCodesSuppService.baseUrl; };
            RollupProductCodesSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RollupProductCodesSuppGrid);
            return RollupProductCodesSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.RollupProductCodesSuppGrid = RollupProductCodesSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SailingMasterSuppDialog = /** @class */ (function (_super) {
            __extends(SailingMasterSuppDialog, _super);
            function SailingMasterSuppDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.SailingMasterSuppForm(_this.idPrefix);
                _this.form.RmsSeasonCd.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.RmsSeasonCd.value != null) {
                        if ((_this.form.RmsSeasonCd.value.length > 30) || (!(/[A-Za-z]/.test(_this.form.RmsSeasonCd.value)))) {
                            return "Rm_Season_Cd Only accepts letters.";
                        }
                    }
                });
                return _this;
            }
            SailingMasterSuppDialog.prototype.getFormKey = function () { return DWSupport.SailingMasterSuppForm.formKey; };
            SailingMasterSuppDialog.prototype.getIdProperty = function () { return DWSupport.SailingMasterSuppRow.idProperty; };
            SailingMasterSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.SailingMasterSuppRow.localTextPrefix; };
            SailingMasterSuppDialog.prototype.getNameProperty = function () { return DWSupport.SailingMasterSuppRow.nameProperty; };
            SailingMasterSuppDialog.prototype.getService = function () { return DWSupport.SailingMasterSuppService.baseUrl; };
            SailingMasterSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return b;
            };
            SailingMasterSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SailingMasterSuppDialog);
            return SailingMasterSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.SailingMasterSuppDialog = SailingMasterSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SailingMasterSuppExcelImportDialog = /** @class */ (function (_super) {
            __extends(SailingMasterSuppExcelImportDialog, _super);
            function SailingMasterSuppExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.SailingMasterSuppExcelImportForm(_this.idPrefix);
                return _this;
            }
            SailingMasterSuppExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            SailingMasterSuppExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            DWSupport.ImportErrorLogService.DeleteAll({});
                            DWSupport.SailingMasterSuppService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            SailingMasterSuppExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SailingMasterSuppExcelImportDialog);
            return SailingMasterSuppExcelImportDialog;
        }(Serenity.PropertyDialog));
        DWSupport.SailingMasterSuppExcelImportDialog = SailingMasterSuppExcelImportDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SailingMasterSuppGrid = /** @class */ (function (_super) {
            __extends(SailingMasterSuppGrid, _super);
            function SailingMasterSuppGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            SailingMasterSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.SailingMasterSupp'; };
            SailingMasterSuppGrid.prototype.getDialogType = function () { return DWSupport.SailingMasterSuppDialog; };
            SailingMasterSuppGrid.prototype.getIdProperty = function () { return DWSupport.SailingMasterSuppRow.idProperty; };
            SailingMasterSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.SailingMasterSuppRow.localTextPrefix; };
            SailingMasterSuppGrid.prototype.getService = function () { return DWSupport.SailingMasterSuppService.baseUrl; };
            SailingMasterSuppGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            SailingMasterSuppGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker"), 1);
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DWSupport.SailingMasterSuppService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new DWSupport.SailingMasterSuppExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                buttons.push({
                    title: 'Show Error Log',
                    cssClass: 'info-button',
                    onClick: function (e) { return _this.showErrorLogClick(); },
                    separator: true
                });
                return buttons;
            };
            SailingMasterSuppGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            SailingMasterSuppGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            SailingMasterSuppGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.SailSurKey];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            SailingMasterSuppGrid.prototype.numericInputFormatter = function (ctx, num_dec) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.SailSurKey];
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
                else if (num_dec == 0) {
                    return "<input type='text' class='" + klass +
                        "' data-field='" + ctx.column.field +
                        "' value='" + Q.formatNumber(value, '0') + "'/>";
                }
            };
            SailingMasterSuppGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.SailSurKey];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            SailingMasterSuppGrid.prototype.selectYNFormatter = function (ctx, idField) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.SailSurKey];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 60%; max-width: 60%'>";
                var id = 'Y';
                markup += "<option value='" + Q.attrEncode(id) + "'";
                if (id == value) {
                    markup += " selected";
                }
                markup += ">Yes</option>";
                id = 'N';
                markup += "<option value='" + Q.attrEncode(id) + "'";
                if (id == value) {
                    markup += " selected";
                }
                markup += ">No</option>";
                return markup + "</select>";
            };
            SailingMasterSuppGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.SailSurKey];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            SailingMasterSuppGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                var num = function (ctx) { return _this.numericInputFormatter(ctx, -1); };
                //var num4 = ctx => this.numericInputFormatter(ctx, 4);
                //Q.first(columns, x => x.field === fld.ProxySailId).format = num;
                Q.first(columns, function (x) { return x.field === "SeasonYearCd" /* SeasonYearCd */; }).format = str;
                Q.first(columns, function (x) { return x.field === "MandateWeeksQty" /* MandateWeeksQty */; }).format = num;
                Q.first(columns, function (x) { return x.field === "RmsSeasonCd" /* RmsSeasonCd */; }).format = str;
                //Q.first(columns, x => x.field === fld.CommissionRate).format = num4;
                //Q.first(columns, x => x.field === fld.OnSaleDat).format = str;
                var packagecd = Q.first(columns, function (x) { return x.field === "PackageTypeCd" /* PackageTypeCd */; });
                packagecd.referencedFields = ["PackageTypeCd" /* PackageTypeCd */];
                packagecd.format = function (ctx) { return _this.selectFormatter(ctx, "PackageTypeCd" /* PackageTypeCd */, DWSupport.PackageTypeCodeSuppRow.getLookup()); };
                var productcd = Q.first(columns, function (x) { return x.field === "ProductCd" /* ProductCd */; });
                productcd.referencedFields = ["ProductCd" /* ProductCd */];
                productcd.format = function (ctx) { return _this.selectFormatter(ctx, "ProductCd" /* ProductCd */, DWSupport.ProductCodeSuppRow.getLookup()); };
                var slproductcd = Q.first(columns, function (x) { return x.field === "SlProductCd" /* SlProductCd */; });
                slproductcd.referencedFields = ["SlProductCd" /* SlProductCd */];
                slproductcd.format = function (ctx) { return _this.selectFormatter(ctx, "SlProductCd" /* SlProductCd */, DWSupport.SlProductCodeSuppRow.getLookup()); };
                var validvoyagecd = Q.first(columns, function (x) { return x.field === "ValidVoyageCd" /* ValidVoyageCd */; });
                validvoyagecd.referencedFields = ["ValidVoyageCd" /* ValidVoyageCd */];
                validvoyagecd.format = function (ctx) { return _this.selectYNFormatter(ctx, "ValidVoyageCd" /* ValidVoyageCd */); };
                //var latitudecruisecd = Q.first(columns, x => x.field === fld.LatitudeCruiseCd);
                //latitudecruisecd.referencedFields = [fld.LatitudeCruiseCd];
                //latitudecruisecd.format = ctx => this.selectYNFormatter(ctx, fld.LatitudeCruiseCd);
                var farefeedincludecd = Q.first(columns, function (x) { return x.field === "FareFeedIncludeCd" /* FareFeedIncludeCd */; });
                farefeedincludecd.referencedFields = ["FareFeedIncludeCd" /* FareFeedIncludeCd */];
                farefeedincludecd.format = function (ctx) { return _this.selectYNFormatter(ctx, "FareFeedIncludeCd" /* FareFeedIncludeCd */); };
                var inactivecd = Q.first(columns, function (x) { return x.field === "InactiveCd" /* InactiveCd */; });
                inactivecd.referencedFields = ["InactiveCd" /* InactiveCd */];
                inactivecd.format = function (ctx) { return _this.selectYNFormatter(ctx, "InactiveCd" /* InactiveCd */); };
                var mainvoyagecd = Q.first(columns, function (x) { return x.field === "MainVoyageCd" /* MainVoyageCd */; });
                mainvoyagecd.referencedFields = ["MainVoyageCd" /* MainVoyageCd */];
                mainvoyagecd.format = function (ctx) { return _this.selectYNFormatter(ctx, "MainVoyageCd" /* MainVoyageCd */); };
                var interportcd = Q.first(columns, function (x) { return x.field === "InterportCd" /* InterportCd */; });
                interportcd.referencedFields = ["InterportCd" /* InterportCd */];
                interportcd.format = function (ctx) { return _this.selectYNFormatter(ctx, "InterportCd" /* InterportCd */); };
                var chartercd = Q.first(columns, function (x) { return x.field === "CharterCd" /* CharterCd */; });
                chartercd.referencedFields = ["CharterCd" /* CharterCd */];
                chartercd.format = function (ctx) { return _this.selectYNFormatter(ctx, "CharterCd" /* CharterCd */); };
                return columns;
            };
            SailingMasterSuppGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.SailSurKey];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0');
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
                    this.pendingChanges[item.SailSurKey] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            SailingMasterSuppGrid.prototype.saveClick = function () {
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
                    entity.SailSurKey = key;
                    Q.serviceRequest('DWSupport/SailingMasterSupp/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            SailingMasterSuppGrid.prototype.showErrorLogClick = function () {
                var dialog = new DWSupport.ImportErrorLogGridDialog();
                ////dialog.returnData = (dataList) => {
                ////    this._CompanyID = dataList;
                ////};
                this.initDialog(dialog);
                dialog.dialogOpen();
            };
            SailingMasterSuppGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // get filter for SailDat field and set default value
                filters[1].type = Serenity.DateEditor;
                filters[1].init = function (w) {
                    var date = new Date();
                    var t = Q.formatDate(date.toDateString(), "MM/dd/yyyy");
                    w.value = t;
                };
                return filters;
            };
            SailingMasterSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SailingMasterSuppGrid);
            return SailingMasterSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.SailingMasterSuppGrid = SailingMasterSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var SelectYNEditor = /** @class */ (function (_super) {
            __extends(SelectYNEditor, _super);
            function SelectYNEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("Y", "Yes");
                _this.addOption("N", "No");
                return _this;
            }
            SelectYNEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SelectYNEditor);
            return SelectYNEditor;
        }(Serenity.Select2Editor));
        DWSupport.SelectYNEditor = SelectYNEditor;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SlProductCodeSuppDialog = /** @class */ (function (_super) {
            __extends(SlProductCodeSuppDialog, _super);
            function SlProductCodeSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.SlProductCodeSuppForm(_this.idPrefix);
                return _this;
            }
            SlProductCodeSuppDialog.prototype.getFormKey = function () { return DWSupport.SlProductCodeSuppForm.formKey; };
            SlProductCodeSuppDialog.prototype.getIdProperty = function () { return DWSupport.SlProductCodeSuppRow.idProperty; };
            SlProductCodeSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.SlProductCodeSuppRow.localTextPrefix; };
            SlProductCodeSuppDialog.prototype.getNameProperty = function () { return DWSupport.SlProductCodeSuppRow.nameProperty; };
            SlProductCodeSuppDialog.prototype.getService = function () { return DWSupport.SlProductCodeSuppService.baseUrl; };
            SlProductCodeSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SlProductCodeSuppDialog);
            return SlProductCodeSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.SlProductCodeSuppDialog = SlProductCodeSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SlProductCodeSuppGrid = /** @class */ (function (_super) {
            __extends(SlProductCodeSuppGrid, _super);
            function SlProductCodeSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            SlProductCodeSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.SlProductCodeSupp'; };
            SlProductCodeSuppGrid.prototype.getDialogType = function () { return DWSupport.SlProductCodeSuppDialog; };
            SlProductCodeSuppGrid.prototype.getIdProperty = function () { return DWSupport.SlProductCodeSuppRow.idProperty; };
            SlProductCodeSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.SlProductCodeSuppRow.localTextPrefix; };
            SlProductCodeSuppGrid.prototype.getService = function () { return DWSupport.SlProductCodeSuppService.baseUrl; };
            SlProductCodeSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SlProductCodeSuppGrid);
            return SlProductCodeSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.SlProductCodeSuppGrid = SlProductCodeSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SurveyFilterExclusionSuppDialog = /** @class */ (function (_super) {
            __extends(SurveyFilterExclusionSuppDialog, _super);
            function SurveyFilterExclusionSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.SurveyFilterExclusionSuppForm(_this.idPrefix);
                return _this;
            }
            SurveyFilterExclusionSuppDialog.prototype.getFormKey = function () { return DWSupport.SurveyFilterExclusionSuppForm.formKey; };
            SurveyFilterExclusionSuppDialog.prototype.getIdProperty = function () { return DWSupport.SurveyFilterExclusionSuppRow.idProperty; };
            SurveyFilterExclusionSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.SurveyFilterExclusionSuppRow.localTextPrefix; };
            SurveyFilterExclusionSuppDialog.prototype.getNameProperty = function () { return DWSupport.SurveyFilterExclusionSuppRow.nameProperty; };
            SurveyFilterExclusionSuppDialog.prototype.getService = function () { return DWSupport.SurveyFilterExclusionSuppService.baseUrl; };
            SurveyFilterExclusionSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                //b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return b;
            };
            SurveyFilterExclusionSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SurveyFilterExclusionSuppDialog);
            return SurveyFilterExclusionSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.SurveyFilterExclusionSuppDialog = SurveyFilterExclusionSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var SurveyFilterExclusionSuppGrid = /** @class */ (function (_super) {
            __extends(SurveyFilterExclusionSuppGrid, _super);
            function SurveyFilterExclusionSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            SurveyFilterExclusionSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.SurveyFilterExclusionSupp'; };
            SurveyFilterExclusionSuppGrid.prototype.getDialogType = function () { return DWSupport.SurveyFilterExclusionSuppDialog; };
            SurveyFilterExclusionSuppGrid.prototype.getIdProperty = function () { return DWSupport.SurveyFilterExclusionSuppRow.idProperty; };
            SurveyFilterExclusionSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.SurveyFilterExclusionSuppRow.localTextPrefix; };
            SurveyFilterExclusionSuppGrid.prototype.getService = function () { return DWSupport.SurveyFilterExclusionSuppService.baseUrl; };
            SurveyFilterExclusionSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SurveyFilterExclusionSuppGrid);
            return SurveyFilterExclusionSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.SurveyFilterExclusionSuppGrid = SurveyFilterExclusionSuppGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var TblStrategicPriceControlDialog = /** @class */ (function (_super) {
            __extends(TblStrategicPriceControlDialog, _super);
            function TblStrategicPriceControlDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.TblStrategicPriceControlForm(_this.idPrefix);
                _this.form.CategoryCd.change(function (e) {
                    var t = _this.form.CategoryCd;
                    _this.form.CategoryCd.value = t.value.toUpperCase();
                });
                _this.form.EffectiveToDat.addValidationRule(_this.uniqueName, function (e) {
                    var startDate = new Date(_this.form.EffectiveFromDat.value);
                    var endDate = new Date(_this.form.EffectiveToDat.value);
                    if (endDate < startDate) {
                        return "Invalid Effective Dates!";
                    }
                });
                return _this;
            }
            TblStrategicPriceControlDialog.prototype.getFormKey = function () { return DWSupport.TblStrategicPriceControlForm.formKey; };
            TblStrategicPriceControlDialog.prototype.getIdProperty = function () { return DWSupport.TblStrategicPriceControlRow.idProperty; };
            TblStrategicPriceControlDialog.prototype.getLocalTextPrefix = function () { return DWSupport.TblStrategicPriceControlRow.localTextPrefix; };
            TblStrategicPriceControlDialog.prototype.getNameProperty = function () { return DWSupport.TblStrategicPriceControlRow.nameProperty; };
            TblStrategicPriceControlDialog.prototype.getService = function () { return DWSupport.TblStrategicPriceControlService.baseUrl; };
            TblStrategicPriceControlDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            TblStrategicPriceControlDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStrategicPriceControlDialog);
            return TblStrategicPriceControlDialog;
        }(Serenity.EntityDialog));
        DWSupport.TblStrategicPriceControlDialog = TblStrategicPriceControlDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var TblStrategicPriceControlExcelImportDialog = /** @class */ (function (_super) {
            __extends(TblStrategicPriceControlExcelImportDialog, _super);
            function TblStrategicPriceControlExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new DWSupport.TblStrategicPriceControlExcelImportForm(_this.idPrefix);
                return _this;
            }
            TblStrategicPriceControlExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            TblStrategicPriceControlExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            DWSupport.TblStrategicPriceControlService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            TblStrategicPriceControlExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStrategicPriceControlExcelImportDialog);
            return TblStrategicPriceControlExcelImportDialog;
        }(Serenity.PropertyDialog));
        DWSupport.TblStrategicPriceControlExcelImportDialog = TblStrategicPriceControlExcelImportDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var TblStrategicPriceControlGrid = /** @class */ (function (_super) {
            __extends(TblStrategicPriceControlGrid, _super);
            function TblStrategicPriceControlGrid(container) {
                return _super.call(this, container) || this;
            }
            TblStrategicPriceControlGrid.prototype.getColumnsKey = function () { return 'DWSupport.TblStrategicPriceControl'; };
            TblStrategicPriceControlGrid.prototype.getDialogType = function () { return DWSupport.TblStrategicPriceControlDialog; };
            TblStrategicPriceControlGrid.prototype.getIdProperty = function () { return DWSupport.TblStrategicPriceControlRow.idProperty; };
            TblStrategicPriceControlGrid.prototype.getLocalTextPrefix = function () { return DWSupport.TblStrategicPriceControlRow.localTextPrefix; };
            TblStrategicPriceControlGrid.prototype.getService = function () { return DWSupport.TblStrategicPriceControlService.baseUrl; };
            TblStrategicPriceControlGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DWSupport.TblStrategicPriceControlService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new DWSupport.TblStrategicPriceControlExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                // buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            TblStrategicPriceControlGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TblStrategicPriceControlGrid);
            return TblStrategicPriceControlGrid;
        }(Serenity.EntityGrid));
        DWSupport.TblStrategicPriceControlGrid = TblStrategicPriceControlGrid;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var UpgradeAdvAdjSuppDialog = /** @class */ (function (_super) {
            __extends(UpgradeAdvAdjSuppDialog, _super);
            function UpgradeAdvAdjSuppDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DWSupport.UpgradeAdvAdjSuppForm(_this.idPrefix);
                return _this;
            }
            UpgradeAdvAdjSuppDialog.prototype.getFormKey = function () { return DWSupport.UpgradeAdvAdjSuppForm.formKey; };
            UpgradeAdvAdjSuppDialog.prototype.getIdProperty = function () { return DWSupport.UpgradeAdvAdjSuppRow.idProperty; };
            UpgradeAdvAdjSuppDialog.prototype.getLocalTextPrefix = function () { return DWSupport.UpgradeAdvAdjSuppRow.localTextPrefix; };
            UpgradeAdvAdjSuppDialog.prototype.getNameProperty = function () { return DWSupport.UpgradeAdvAdjSuppRow.nameProperty; };
            UpgradeAdvAdjSuppDialog.prototype.getService = function () { return DWSupport.UpgradeAdvAdjSuppService.baseUrl; };
            UpgradeAdvAdjSuppDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                return b;
            };
            UpgradeAdvAdjSuppDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UpgradeAdvAdjSuppDialog);
            return UpgradeAdvAdjSuppDialog;
        }(Serenity.EntityDialog));
        DWSupport.UpgradeAdvAdjSuppDialog = UpgradeAdvAdjSuppDialog;
    })(DWSupport = DAP.DWSupport || (DAP.DWSupport = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var DWSupport;
    (function (DWSupport) {
        var UpgradeAdvAdjSuppGrid = /** @class */ (function (_super) {
            __extends(UpgradeAdvAdjSuppGrid, _super);
            function UpgradeAdvAdjSuppGrid(container) {
                return _super.call(this, container) || this;
            }
            UpgradeAdvAdjSuppGrid.prototype.getColumnsKey = function () { return 'DWSupport.UpgradeAdvAdjSupp'; };
            UpgradeAdvAdjSuppGrid.prototype.getDialogType = function () { return DWSupport.UpgradeAdvAdjSuppDialog; };
            UpgradeAdvAdjSuppGrid.prototype.getIdProperty = function () { return DWSupport.UpgradeAdvAdjSuppRow.idProperty; };
            UpgradeAdvAdjSuppGrid.prototype.getLocalTextPrefix = function () { return DWSupport.UpgradeAdvAdjSuppRow.localTextPrefix; };
            UpgradeAdvAdjSuppGrid.prototype.getService = function () { return DWSupport.UpgradeAdvAdjSuppService.baseUrl; };
            UpgradeAdvAdjSuppGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UpgradeAdvAdjSuppGrid);
            return UpgradeAdvAdjSuppGrid;
        }(Serenity.EntityGrid));
        DWSupport.UpgradeAdvAdjSuppGrid = UpgradeAdvAdjSuppGrid;
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
        var DataFlowDialog = /** @class */ (function (_super) {
            __extends(DataFlowDialog, _super);
            function DataFlowDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new NCLHDSAR.DataFlowForm(_this.idPrefix);
                return _this;
            }
            DataFlowDialog.prototype.getFormKey = function () { return NCLHDSAR.DataFlowForm.formKey; };
            DataFlowDialog.prototype.getIdProperty = function () { return NCLHDSAR.DataFlowRow.idProperty; };
            DataFlowDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.DataFlowRow.localTextPrefix; };
            DataFlowDialog.prototype.getNameProperty = function () { return NCLHDSAR.DataFlowRow.nameProperty; };
            DataFlowDialog.prototype.getService = function () { return NCLHDSAR.DataFlowService.baseUrl; };
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
        NCLHDSAR.DataFlowDialog = DataFlowDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var DataFlowGrid = /** @class */ (function (_super) {
            __extends(DataFlowGrid, _super);
            function DataFlowGrid(container) {
                return _super.call(this, container) || this;
            }
            DataFlowGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.DataFlow'; };
            DataFlowGrid.prototype.getDialogType = function () { return NCLHDSAR.DataFlowDialog; };
            DataFlowGrid.prototype.getIdProperty = function () { return NCLHDSAR.DataFlowRow.idProperty; };
            DataFlowGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.DataFlowRow.localTextPrefix; };
            DataFlowGrid.prototype.getService = function () { return NCLHDSAR.DataFlowService.baseUrl; };
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
        NCLHDSAR.DataFlowGrid = DataFlowGrid;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestDialog = /** @class */ (function (_super) {
            __extends(MarketingRequestDialog, _super);
            function MarketingRequestDialog() {
                var _this = _super.call(this) || this;
                _this.form = new NCLHDSAR.MarketingRequestForm(_this.idPrefix);
                // get form obj
                _this.form = new NCLHDSAR.MarketingRequestForm(_this.idPrefix);
                // For each drop-down option, check required fields have value. //
                _this.form.RequestTypeId.addValidationRule(_this.uniqueName, function (e) {
                    // Check dropdown ID 1 (Opt Outs)
                    if (_this.form.RequestTypeId.value == "1") {
                        if (Q.isEmptyOrNull(_this.form.ChannelId.value)) {
                            var fld1 = "ChannelId" /* ChannelId */;
                            return "Field " + fld1 + " is required.";
                        }
                    }
                    // Check dropdown ID 2 (Change of Address)
                    else if (_this.form.RequestTypeId.value == "2") {
                        if (Q.isEmptyOrNull(_this.form.BrandId.value)) {
                            var fld1 = "BrandId" /* BrandId */;
                            return "Field " + fld1 + " is required.";
                        }
                        else if (Q.isEmptyOrNull(_this.form.Address1.value)) {
                            var fld1 = "Address1" /* Address1 */;
                            return "Field " + fld1 + " is required.";
                        }
                    }
                });
                return _this;
            }
            MarketingRequestDialog.prototype.getFormKey = function () { return NCLHDSAR.MarketingRequestForm.formKey; };
            MarketingRequestDialog.prototype.getIdProperty = function () { return NCLHDSAR.MarketingRequestRow.idProperty; };
            MarketingRequestDialog.prototype.getLocalTextPrefix = function () { return NCLHDSAR.MarketingRequestRow.localTextPrefix; };
            MarketingRequestDialog.prototype.getNameProperty = function () { return NCLHDSAR.MarketingRequestRow.nameProperty; };
            MarketingRequestDialog.prototype.getService = function () { return NCLHDSAR.MarketingRequestService.baseUrl; };
            MarketingRequestDialog.prototype.updateTitle = function () {
                this.dialogTitle = "Marketing Operations";
            };
            MarketingRequestDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // set dropdown default value. Passing in item ID
                this.form.ChannelId.value = '6';
            };
            MarketingRequestDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MarketingRequestDialog);
            return MarketingRequestDialog;
        }(Serenity.EntityDialog));
        NCLHDSAR.MarketingRequestDialog = MarketingRequestDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestExcelImportDialog = /** @class */ (function (_super) {
            __extends(MarketingRequestExcelImportDialog, _super);
            function MarketingRequestExcelImportDialog(i) {
                var _this = _super.call(this) || this;
                _this.form = new NCLHDSAR.MarketingRequestExcelImportForm(_this.idPrefix);
                _this.index = i;
                return _this;
            }
            MarketingRequestExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            MarketingRequestExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            // Select service type
                            if (_this.index == 0) {
                                NCLHDSAR.MarketingRequestService.ExcelImportChangeOfAddress({
                                    FileName: _this.form.FileName.value.Filename
                                }, function (response) {
                                    Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                        ', Updated: ' + (response.Updated || 0));
                                    if (response.ErrorList != null && response.ErrorList.length > 0) {
                                        Q.notifyError(response.ErrorList.join(',\r\n '));
                                    }
                                    _this.dialogClose();
                                });
                            }
                            else if (_this.index == 1) {
                                NCLHDSAR.MarketingRequestService.ExcelImportReturnMail({
                                    FileName: _this.form.FileName.value.Filename
                                }, function (response) {
                                    Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                        ', Updated: ' + (response.Updated || 0));
                                    if (response.ErrorList != null && response.ErrorList.length > 0) {
                                        Q.notifyError(response.ErrorList.join(',\r\n '));
                                    }
                                    _this.dialogClose();
                                });
                            }
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            MarketingRequestExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MarketingRequestExcelImportDialog);
            return MarketingRequestExcelImportDialog;
        }(Serenity.PropertyDialog));
        NCLHDSAR.MarketingRequestExcelImportDialog = MarketingRequestExcelImportDialog;
    })(NCLHDSAR = DAP.NCLHDSAR || (DAP.NCLHDSAR = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var NCLHDSAR;
    (function (NCLHDSAR) {
        var MarketingRequestGrid = /** @class */ (function (_super) {
            __extends(MarketingRequestGrid, _super);
            function MarketingRequestGrid(container) {
                return _super.call(this, container) || this;
            }
            MarketingRequestGrid.prototype.getColumnsKey = function () { return 'NCLHDSAR.MarketingRequest'; };
            MarketingRequestGrid.prototype.getDialogType = function () { return NCLHDSAR.MarketingRequestDialog; };
            MarketingRequestGrid.prototype.getIdProperty = function () { return NCLHDSAR.MarketingRequestRow.idProperty; };
            MarketingRequestGrid.prototype.getLocalTextPrefix = function () { return NCLHDSAR.MarketingRequestRow.localTextPrefix; };
            MarketingRequestGrid.prototype.getService = function () { return NCLHDSAR.MarketingRequestService.baseUrl; };
            MarketingRequestGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                // Update main INSERT button title
                console.log(buttons);
                var _button = Q.first(buttons, function (x) { return x.title == "New Marketing Request"; });
                _button.title = "New Marketing Operation";
                // export button 1
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: NCLHDSAR.MarketingRequestService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export Excel"
                }));
                // import button 1
                buttons.push({
                    title: 'Import Change of Address',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new NCLHDSAR.MarketingRequestExcelImportDialog(0);
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                // import button 2
                buttons.push({
                    title: 'Import Return Mail',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new NCLHDSAR.MarketingRequestExcelImportDialog(1);
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            MarketingRequestGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MarketingRequestGrid);
            return MarketingRequestGrid;
        }(Serenity.EntityGrid));
        NCLHDSAR.MarketingRequestGrid = MarketingRequestGrid;
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
            RequestAttributesDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                //this.cloneButton.toggle(this.isEditMode());
            };
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
                var dupBtn = {
                    title: "Clone",
                    onClick: function () {
                        if (!_this.isEditMode()) {
                            return;
                        }
                        var cloneEntity = _this.getCloningEntity();
                        var ent = _this.getCloningEntity();
                        ent.Id = Q.toId(_this.form.Id.value);
                        ent.ResolvedDt = null;
                        ent.RequestValue = null;
                        _this.loadEntity(ent);
                        Q.notifySuccess("Request Attribute cloned - Enter new ID.");
                    }
                };
                btns.push(dupBtn);
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
        var DimCruiseDialog = /** @class */ (function (_super) {
            __extends(DimCruiseDialog, _super);
            function DimCruiseDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHDW.DimCruiseForm(_this.idPrefix);
                _this.form.CruiseSegmentToDt.addValidationRule(_this.uniqueName, function (e) {
                    var startDate = new Date(_this.form.CruiseSegmentFromDt.value);
                    var endDate = new Date(_this.form.CruiseSegmentToDt.value);
                    if (endDate < startDate) {
                        return "Invalid Cruise Segment Dates!";
                    }
                });
                _this.form.CruiseToDt.addValidationRule(_this.uniqueName, function (e) {
                    var startDate = new Date(_this.form.CruiseFromDt.value);
                    var endDate = new Date(_this.form.CruiseToDt.value);
                    if (endDate < startDate) {
                        return "Invalid Cruise Dates!";
                    }
                });
                _this.form.SegmentToDtMmddyyyy.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.SegmentToDtMmddyyyy.value != null) {
                        if ((_this.form.SegmentToDtMmddyyyy.value.length > 10) || (!(/(0[1-9]|1[0-2])[- \/.](1[0-9]|2[0-9]|3[0-1])[- \/.](19|20)\d\d/.test(_this.form.SegmentToDtMmddyyyy.value)))) {
                            return "Invalid Segment to Format. It should be dd/mm/yyyy.";
                        }
                    }
                });
                _this.form.CruiseToDtMmddyyyy.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.CruiseToDtMmddyyyy.value != null) {
                        if ((_this.form.CruiseToDtMmddyyyy.value.length > 10) || (!(/(0[1-9]|1[0-2])[- \/.](1[0-9]|2[0-9]|3[0-1])[- \/.](19|20)\d\d/.test(_this.form.CruiseToDtMmddyyyy.value)))) {
                            return "Invalid Cruise to Format. It should be dd/mm/yyyy.";
                        }
                    }
                });
                return _this;
            }
            DimCruiseDialog.prototype.getFormKey = function () { return PCHDW.DimCruiseForm.formKey; };
            DimCruiseDialog.prototype.getIdProperty = function () { return PCHDW.DimCruiseRow.idProperty; };
            DimCruiseDialog.prototype.getLocalTextPrefix = function () { return PCHDW.DimCruiseRow.localTextPrefix; };
            DimCruiseDialog.prototype.getNameProperty = function () { return PCHDW.DimCruiseRow.nameProperty; };
            DimCruiseDialog.prototype.getService = function () { return PCHDW.DimCruiseService.baseUrl; };
            DimCruiseDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                //this.cloneButton.toggle(this.isEditMode());
            };
            DimCruiseDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var dupBtn = {
                    title: "Clone",
                    onClick: function () {
                        if (!_this.isEditMode()) {
                            return;
                        }
                        var cloneEntity = _this.getCloningEntity();
                        var ent = _this.getCloningEntity();
                        ent.CruiseCd = null;
                        _this.loadEntity(ent);
                        Q.notifySuccess("Dim_Cruise cloned.  Edit cloned record");
                    }
                };
                btns.push(dupBtn);
                return btns;
            };
            DimCruiseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DimCruiseDialog);
            return DimCruiseDialog;
        }(Serenity.EntityDialog));
        PCHDW.DimCruiseDialog = DimCruiseDialog;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCruiseExcelImportDialog = /** @class */ (function (_super) {
            __extends(DimCruiseExcelImportDialog, _super);
            function DimCruiseExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHDW.DimCruiseExcelImportForm(_this.idPrefix);
                return _this;
            }
            DimCruiseExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            DimCruiseExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PCHDW.DimCruiseService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            DimCruiseExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DimCruiseExcelImportDialog);
            return DimCruiseExcelImportDialog;
        }(Serenity.PropertyDialog));
        PCHDW.DimCruiseExcelImportDialog = DimCruiseExcelImportDialog;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var DimCruiseGrid = /** @class */ (function (_super) {
            __extends(DimCruiseGrid, _super);
            function DimCruiseGrid(container) {
                return _super.call(this, container) || this;
            }
            DimCruiseGrid.prototype.getColumnsKey = function () { return 'PCHDW.DimCruise'; };
            DimCruiseGrid.prototype.getDialogType = function () { return PCHDW.DimCruiseDialog; };
            DimCruiseGrid.prototype.getIdProperty = function () { return PCHDW.DimCruiseRow.idProperty; };
            DimCruiseGrid.prototype.getLocalTextPrefix = function () { return PCHDW.DimCruiseRow.localTextPrefix; };
            DimCruiseGrid.prototype.getService = function () { return PCHDW.DimCruiseService.baseUrl; };
            DimCruiseGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            DimCruiseGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: PCHDW.DimCruiseService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PCHDW.DimCruiseExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                // buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            DimCruiseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DimCruiseGrid);
            return DimCruiseGrid;
        }(Serenity.EntityGrid));
        PCHDW.DimCruiseGrid = DimCruiseGrid;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
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
    var PCHDW;
    (function (PCHDW) {
        var ScheduledJobDialog = /** @class */ (function (_super) {
            __extends(ScheduledJobDialog, _super);
            function ScheduledJobDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHDW.ScheduledJobForm(_this.idPrefix);
                return _this;
            }
            ScheduledJobDialog.prototype.getFormKey = function () { return PCHDW.ScheduledJobForm.formKey; };
            ScheduledJobDialog.prototype.getIdProperty = function () { return PCHDW.ScheduledJobRow.idProperty; };
            ScheduledJobDialog.prototype.getLocalTextPrefix = function () { return PCHDW.ScheduledJobRow.localTextPrefix; };
            ScheduledJobDialog.prototype.getNameProperty = function () { return PCHDW.ScheduledJobRow.nameProperty; };
            ScheduledJobDialog.prototype.getService = function () { return PCHDW.ScheduledJobService.baseUrl; };
            ScheduledJobDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ScheduledJobDialog);
            return ScheduledJobDialog;
        }(Serenity.EntityDialog));
        PCHDW.ScheduledJobDialog = ScheduledJobDialog;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var ScheduledJobGrid = /** @class */ (function (_super) {
            __extends(ScheduledJobGrid, _super);
            function ScheduledJobGrid(container) {
                return _super.call(this, container) || this;
            }
            ScheduledJobGrid.prototype.getColumnsKey = function () { return 'PCHDW.ScheduledJob'; };
            ScheduledJobGrid.prototype.getDialogType = function () { return PCHDW.ScheduledJobDialog; };
            ScheduledJobGrid.prototype.getIdProperty = function () { return PCHDW.ScheduledJobRow.idProperty; };
            ScheduledJobGrid.prototype.getLocalTextPrefix = function () { return PCHDW.ScheduledJobRow.localTextPrefix; };
            ScheduledJobGrid.prototype.getService = function () { return PCHDW.ScheduledJobService.baseUrl; };
            ScheduledJobGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ScheduledJobGrid);
            return ScheduledJobGrid;
        }(Serenity.EntityGrid));
        PCHDW.ScheduledJobGrid = ScheduledJobGrid;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var VwSqlJobListDialog = /** @class */ (function (_super) {
            __extends(VwSqlJobListDialog, _super);
            function VwSqlJobListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHDW.VwSqlJobListForm(_this.idPrefix);
                return _this;
            }
            VwSqlJobListDialog.prototype.getFormKey = function () { return PCHDW.VwSqlJobListForm.formKey; };
            VwSqlJobListDialog.prototype.getIdProperty = function () { return PCHDW.VwSqlJobListRow.idProperty; };
            VwSqlJobListDialog.prototype.getLocalTextPrefix = function () { return PCHDW.VwSqlJobListRow.localTextPrefix; };
            VwSqlJobListDialog.prototype.getNameProperty = function () { return PCHDW.VwSqlJobListRow.nameProperty; };
            VwSqlJobListDialog.prototype.getService = function () { return PCHDW.VwSqlJobListService.baseUrl; };
            VwSqlJobListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VwSqlJobListDialog);
            return VwSqlJobListDialog;
        }(Serenity.EntityDialog));
        PCHDW.VwSqlJobListDialog = VwSqlJobListDialog;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHDW;
    (function (PCHDW) {
        var VwSqlJobListGrid = /** @class */ (function (_super) {
            __extends(VwSqlJobListGrid, _super);
            function VwSqlJobListGrid(container) {
                return _super.call(this, container) || this;
            }
            VwSqlJobListGrid.prototype.getColumnsKey = function () { return 'PCHDW.VwSqlJobList'; };
            VwSqlJobListGrid.prototype.getDialogType = function () { return PCHDW.VwSqlJobListDialog; };
            VwSqlJobListGrid.prototype.getIdProperty = function () { return PCHDW.VwSqlJobListRow.idProperty; };
            VwSqlJobListGrid.prototype.getLocalTextPrefix = function () { return PCHDW.VwSqlJobListRow.localTextPrefix; };
            VwSqlJobListGrid.prototype.getService = function () { return PCHDW.VwSqlJobListService.baseUrl; };
            VwSqlJobListGrid.prototype.createQuickSearchInput = function () { };
            VwSqlJobListGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.push({
                    field: 'Action',
                    name: '',
                    format: function (ctx) {
                        var CurItem = ctx.item;
                        var klass = "";
                        if (CurItem.Enabled) {
                            klass = '<a class="inline-action disable-job" title="Disable">' +
                                '<i class="fa  fa-times text-red"></i></a>';
                        }
                        else {
                            klass = '<a class="inline-action enable-job" title="Enable">' +
                                '<i class="fa  fa-check text-green"></i></a>';
                        }
                        return klass;
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            VwSqlJobListGrid.prototype.onClick = function (e, row, cell) {
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
                    if (target.hasClass('disable-job')) {
                        Q.confirm('Are you sure you want to disable this job?', function () {
                            var crow = Q.deepClone(_this.itemAt(row));
                            PCHDW.VwSqlJobListService.UpdateWithSP({
                                Entity: crow
                            }, function (response) {
                                _this.refresh();
                            });
                            Q.notifySuccess("Job Disabled Successfully.");
                        });
                    }
                    if (target.hasClass('enable-job')) {
                        Q.confirm('Are you sure you want to enable this job?', function () {
                            var crow = Q.deepClone(_this.itemAt(row));
                            PCHDW.VwSqlJobListService.UpdateWithSP({
                                Entity: crow
                            }, function (response) {
                                _this.refresh();
                            });
                            Q.notifySuccess("Job Enabled Successfully.");
                        });
                    }
                }
            };
            VwSqlJobListGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            VwSqlJobListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VwSqlJobListGrid);
            return VwSqlJobListGrid;
        }(Serenity.EntityGrid));
        PCHDW.VwSqlJobListGrid = VwSqlJobListGrid;
    })(PCHDW = DAP.PCHDW || (DAP.PCHDW = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var InboundUserOverrideDialog = /** @class */ (function (_super) {
            __extends(InboundUserOverrideDialog, _super);
            function InboundUserOverrideDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODS.InboundUserOverrideForm(_this.idPrefix);
                return _this;
            }
            InboundUserOverrideDialog.prototype.getFormKey = function () { return PCHODS.InboundUserOverrideForm.formKey; };
            InboundUserOverrideDialog.prototype.getIdProperty = function () { return PCHODS.InboundUserOverrideRow.idProperty; };
            InboundUserOverrideDialog.prototype.getLocalTextPrefix = function () { return PCHODS.InboundUserOverrideRow.localTextPrefix; };
            InboundUserOverrideDialog.prototype.getNameProperty = function () { return PCHODS.InboundUserOverrideRow.nameProperty; };
            InboundUserOverrideDialog.prototype.getService = function () { return PCHODS.InboundUserOverrideService.baseUrl; };
            InboundUserOverrideDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InboundUserOverrideDialog);
            return InboundUserOverrideDialog;
        }(Serenity.EntityDialog));
        PCHODS.InboundUserOverrideDialog = InboundUserOverrideDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var InboundUserOverrideGrid = /** @class */ (function (_super) {
            __extends(InboundUserOverrideGrid, _super);
            function InboundUserOverrideGrid(container) {
                return _super.call(this, container) || this;
            }
            InboundUserOverrideGrid.prototype.getColumnsKey = function () { return 'PCHODS.InboundUserOverride'; };
            InboundUserOverrideGrid.prototype.getDialogType = function () { return PCHODS.InboundUserOverrideDialog; };
            InboundUserOverrideGrid.prototype.getIdProperty = function () { return PCHODS.InboundUserOverrideRow.idProperty; };
            InboundUserOverrideGrid.prototype.getLocalTextPrefix = function () { return PCHODS.InboundUserOverrideRow.localTextPrefix; };
            InboundUserOverrideGrid.prototype.getService = function () { return PCHODS.InboundUserOverrideService.baseUrl; };
            InboundUserOverrideGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InboundUserOverrideGrid);
            return InboundUserOverrideGrid;
        }(Serenity.EntityGrid));
        PCHODS.InboundUserOverrideGrid = InboundUserOverrideGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
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
        var OutboundCommissionBkGoalDialog = /** @class */ (function (_super) {
            __extends(OutboundCommissionBkGoalDialog, _super);
            function OutboundCommissionBkGoalDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODS.OutboundCommissionBkGoalForm(_this.idPrefix);
                return _this;
            }
            OutboundCommissionBkGoalDialog.prototype.getFormKey = function () { return PCHODS.OutboundCommissionBkGoalForm.formKey; };
            OutboundCommissionBkGoalDialog.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionBkGoalRow.idProperty; };
            OutboundCommissionBkGoalDialog.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionBkGoalRow.localTextPrefix; };
            OutboundCommissionBkGoalDialog.prototype.getService = function () { return PCHODS.OutboundCommissionBkGoalService.baseUrl; };
            OutboundCommissionBkGoalDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionBkGoalDialog);
            return OutboundCommissionBkGoalDialog;
        }(Serenity.EntityDialog));
        PCHODS.OutboundCommissionBkGoalDialog = OutboundCommissionBkGoalDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var OutboundCommissionBkGoalGrid = /** @class */ (function (_super) {
            __extends(OutboundCommissionBkGoalGrid, _super);
            function OutboundCommissionBkGoalGrid(container) {
                return _super.call(this, container) || this;
            }
            OutboundCommissionBkGoalGrid.prototype.getColumnsKey = function () { return 'PCHODS.OutboundCommissionBkGoal'; };
            OutboundCommissionBkGoalGrid.prototype.getDialogType = function () { return PCHODS.OutboundCommissionBkGoalDialog; };
            OutboundCommissionBkGoalGrid.prototype.getIdProperty = function () { return PCHODS.OutboundCommissionBkGoalRow.idProperty; };
            OutboundCommissionBkGoalGrid.prototype.getLocalTextPrefix = function () { return PCHODS.OutboundCommissionBkGoalRow.localTextPrefix; };
            OutboundCommissionBkGoalGrid.prototype.getService = function () { return PCHODS.OutboundCommissionBkGoalService.baseUrl; };
            //protected createQuickSearchInput() { }
            OutboundCommissionBkGoalGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            OutboundCommissionBkGoalGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutboundCommissionBkGoalGrid);
            return OutboundCommissionBkGoalGrid;
        }(Serenity.EntityGrid));
        PCHODS.OutboundCommissionBkGoalGrid = OutboundCommissionBkGoalGrid;
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
                            if (_this.form.EffectiveDt.value == null ||
                                Q.isEmptyOrNull(_this.form.EffectiveDt.value)) {
                                Q.notifyError("Please enter an effective date!");
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
                                    item.InactiveDt = Q.formatDate(_this.form.EffectiveDt.value, "MM/dd/yyyy");
                                    //Q.alert(item.InactiveDt);
                                    PCHODS.OutboundCommissionHistService.Update({
                                        EntityId: item.CommissionHistId,
                                        Entity: item
                                    }, function (response) {
                                        item.CommissionHistId = null;
                                        item.ActiveDt = _this.form.EffectiveDt.value;
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
                var dialog = new PCHODS.SelectComapanyAUDialog();
                dialog.returnData = function (dataList) {
                    _this._CompanyID = dataList;
                };
                this.initDialog(dialog);
                dialog.dialogOpen();
            };
            //private createNewBracketClick() {
            //    Q.confirm('Are you sure you want to create a new tear breakets?', () => {
            //        var HistRow: OutboundCommissionHistAuRow[];
            //        var equalFilter = { "CompanyCd": 111 };
            //        PCHODS.OutboundCommissionHistAuService.List({
            //            EqualityFilter: equalFilter
            //        }, response => {
            //            HistRow = response.Entities;
            //            for (let item of HistRow) {
            //                item.InactiveDt = Q.formatDate(new Date(), "MM/dd/yyyy");
            //                //Q.alert(item.InactiveDt);
            //                PCHODS.OutboundCommissionHistAuService.Update({
            //                    EntityId: item.CommissionHistAuId,
            //                    Entity: item
            //                }, response => {
            //                    item.CommissionHistAuId = null;
            //                    item.ActiveDt = item.InactiveDt;
            //                    item.InactiveDt = null;
            //                        PCHODS.OutboundCommissionHistAuService.Create({
            //                        Entity: item
            //                    }, response => {
            //                        this.refresh();
            //                    });
            //                });
            //            }
            //            Q.notifySuccess("Bracket Created Successfully!", '');
            //        });
            //    });
            //}
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
        var SelectComapanyAUDialog = /** @class */ (function (_super) {
            __extends(SelectComapanyAUDialog, _super);
            function SelectComapanyAUDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODS.SelectCompanyAuForm(_this.idPrefix);
                _this.dialogTitle = "Create New Bracket";
                return _this;
            }
            SelectComapanyAUDialog.prototype.getFormKey = function () { return PCHODS.SelectCompanyAuForm.formKey; };
            SelectComapanyAUDialog.prototype.createBracket = function () {
                var HistRow;
                var equalFilter = { "CompanyCd": this.form.CompanyCd.value };
                PCHODS.OutboundCommissionHistAuService.List({
                    EqualityFilter: equalFilter
                }, function (response) {
                    HistRow = response.Entities;
                });
            };
            SelectComapanyAUDialog.prototype.getDialogButtons = function () {
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
                            if (_this.form.EffectiveDt.value == null ||
                                Q.isEmptyOrNull(_this.form.EffectiveDt.value)) {
                                Q.notifyError("Please enter an effective date!");
                                return;
                            }
                            //var HistRow[] = <PCHODS.OutboundCommissionHistRow>{};
                            var HistRow;
                            var equalFilter = { "CompanyCd": _this.form.CompanyCd.value };
                            PCHODS.OutboundCommissionHistAuService.List({
                                EqualityFilter: equalFilter
                            }, function (response) {
                                HistRow = response.Entities;
                                var _loop_2 = function (item) {
                                    item.InactiveDt = Q.formatDate(_this.form.EffectiveDt.value, "MM/dd/yyyy");
                                    //Q.alert(item.InactiveDt);
                                    PCHODS.OutboundCommissionHistAuService.Update({
                                        EntityId: item.CommissionHistAuId,
                                        Entity: item
                                    }, function (response) {
                                        item.CommissionHistAuId = null;
                                        item.ActiveDt = _this.form.EffectiveDt.value;
                                        item.InactiveDt = null;
                                        PCHODS.OutboundCommissionHistAuService.Create({
                                            Entity: item
                                        }, function (response) {
                                            Serenity.SubDialogHelper.triggerDataChange(_this);
                                        });
                                    });
                                };
                                for (var _i = 0, HistRow_2 = HistRow; _i < HistRow_2.length; _i++) {
                                    var item = HistRow_2[_i];
                                    _loop_2(item);
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
            SelectComapanyAUDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 550;
                return opt;
            };
            SelectComapanyAUDialog.prototype.onDialogClose = function () {
                this.returnData(this.form.CompanyCd.value);
            };
            SelectComapanyAUDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SelectComapanyAUDialog);
            return SelectComapanyAUDialog;
        }(Serenity.PropertyDialog));
        PCHODS.SelectComapanyAUDialog = SelectComapanyAUDialog;
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
        var SelectCompanyAUEditor = /** @class */ (function (_super) {
            __extends(SelectCompanyAUEditor, _super);
            function SelectCompanyAUEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("100", "Oceania Cruises");
                _this.addOption("110", "Regent Seven Seas Cruises");
                _this.addOption("111", "International");
                return _this;
                //this.addOption("112", "Latam");
                //this.addOption("113", "UK DE");
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
            SelectCompanyAUEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SelectCompanyAUEditor);
            return SelectCompanyAUEditor;
        }(Serenity.Select2Editor));
        PCHODS.SelectCompanyAUEditor = SelectCompanyAUEditor;
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
            OutboundCommissionPeriodGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
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
    var PCHODS;
    (function (PCHODS) {
        var UarSrDirAboveListDialog = /** @class */ (function (_super) {
            __extends(UarSrDirAboveListDialog, _super);
            function UarSrDirAboveListDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODS.UarSrDirAboveListForm(_this.idPrefix);
                return _this;
            }
            UarSrDirAboveListDialog.prototype.getFormKey = function () { return PCHODS.UarSrDirAboveListForm.formKey; };
            UarSrDirAboveListDialog.prototype.getIdProperty = function () { return PCHODS.UarSrDirAboveListRow.idProperty; };
            UarSrDirAboveListDialog.prototype.getLocalTextPrefix = function () { return PCHODS.UarSrDirAboveListRow.localTextPrefix; };
            UarSrDirAboveListDialog.prototype.getNameProperty = function () { return PCHODS.UarSrDirAboveListRow.nameProperty; };
            UarSrDirAboveListDialog.prototype.getService = function () { return PCHODS.UarSrDirAboveListService.baseUrl; };
            UarSrDirAboveListDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return b;
            };
            UarSrDirAboveListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UarSrDirAboveListDialog);
            return UarSrDirAboveListDialog;
        }(Serenity.EntityDialog));
        PCHODS.UarSrDirAboveListDialog = UarSrDirAboveListDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarSrDirAboveListGrid = /** @class */ (function (_super) {
            __extends(UarSrDirAboveListGrid, _super);
            function UarSrDirAboveListGrid(container) {
                return _super.call(this, container) || this;
            }
            UarSrDirAboveListGrid.prototype.getColumnsKey = function () { return 'PCHODS.UarSrDirAboveList'; };
            UarSrDirAboveListGrid.prototype.getDialogType = function () { return PCHODS.UarSrDirAboveListDialog; };
            UarSrDirAboveListGrid.prototype.getIdProperty = function () { return PCHODS.UarSrDirAboveListRow.idProperty; };
            UarSrDirAboveListGrid.prototype.getLocalTextPrefix = function () { return PCHODS.UarSrDirAboveListRow.localTextPrefix; };
            UarSrDirAboveListGrid.prototype.getService = function () { return PCHODS.UarSrDirAboveListService.baseUrl; };
            UarSrDirAboveListGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                // remove 'add button' at it's index
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            UarSrDirAboveListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UarSrDirAboveListGrid);
            return UarSrDirAboveListGrid;
        }(Serenity.EntityGrid));
        PCHODS.UarSrDirAboveListGrid = UarSrDirAboveListGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarUnknownReviewerDialog = /** @class */ (function (_super) {
            __extends(UarUnknownReviewerDialog, _super);
            function UarUnknownReviewerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODS.UarUnknownReviewerForm(_this.idPrefix);
                return _this;
            }
            UarUnknownReviewerDialog.prototype.getFormKey = function () { return PCHODS.UarUnknownReviewerForm.formKey; };
            UarUnknownReviewerDialog.prototype.getIdProperty = function () { return PCHODS.UarUnknownReviewerRow.idProperty; };
            UarUnknownReviewerDialog.prototype.getLocalTextPrefix = function () { return PCHODS.UarUnknownReviewerRow.localTextPrefix; };
            UarUnknownReviewerDialog.prototype.getNameProperty = function () { return PCHODS.UarUnknownReviewerRow.nameProperty; };
            UarUnknownReviewerDialog.prototype.getService = function () { return PCHODS.UarUnknownReviewerService.baseUrl; };
            UarUnknownReviewerDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "delete-button"; }), 1);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return b;
            };
            UarUnknownReviewerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UarUnknownReviewerDialog);
            return UarUnknownReviewerDialog;
        }(Serenity.EntityDialog));
        PCHODS.UarUnknownReviewerDialog = UarUnknownReviewerDialog;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODS;
    (function (PCHODS) {
        var UarUnknownReviewerGrid = /** @class */ (function (_super) {
            __extends(UarUnknownReviewerGrid, _super);
            function UarUnknownReviewerGrid(container) {
                return _super.call(this, container) || this;
            }
            UarUnknownReviewerGrid.prototype.getColumnsKey = function () { return 'PCHODS.UarUnknownReviewer'; };
            UarUnknownReviewerGrid.prototype.getDialogType = function () { return PCHODS.UarUnknownReviewerDialog; };
            UarUnknownReviewerGrid.prototype.getIdProperty = function () { return PCHODS.UarUnknownReviewerRow.idProperty; };
            UarUnknownReviewerGrid.prototype.getLocalTextPrefix = function () { return PCHODS.UarUnknownReviewerRow.localTextPrefix; };
            UarUnknownReviewerGrid.prototype.getService = function () { return PCHODS.UarUnknownReviewerService.baseUrl; };
            UarUnknownReviewerGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "Column Picker"), 1);
                return buttons;
            };
            UarUnknownReviewerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UarUnknownReviewerGrid);
            return UarUnknownReviewerGrid;
        }(Serenity.EntityGrid));
        PCHODS.UarUnknownReviewerGrid = UarUnknownReviewerGrid;
    })(PCHODS = DAP.PCHODS || (DAP.PCHODS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var ConsortiumExceptionListDialog = /** @class */ (function (_super) {
            __extends(ConsortiumExceptionListDialog, _super);
            function ConsortiumExceptionListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODSNVS.ConsortiumExceptionListForm(_this.idPrefix);
                return _this;
            }
            ConsortiumExceptionListDialog.prototype.getFormKey = function () { return PCHODSNVS.ConsortiumExceptionListForm.formKey; };
            ConsortiumExceptionListDialog.prototype.getIdProperty = function () { return PCHODSNVS.ConsortiumExceptionListRow.idProperty; };
            ConsortiumExceptionListDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.ConsortiumExceptionListRow.localTextPrefix; };
            ConsortiumExceptionListDialog.prototype.getNameProperty = function () { return PCHODSNVS.ConsortiumExceptionListRow.nameProperty; };
            ConsortiumExceptionListDialog.prototype.getService = function () { return PCHODSNVS.ConsortiumExceptionListService.baseUrl; };
            ConsortiumExceptionListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ConsortiumExceptionListDialog);
            return ConsortiumExceptionListDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.ConsortiumExceptionListDialog = ConsortiumExceptionListDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var ConsortiumExceptionListGrid = /** @class */ (function (_super) {
            __extends(ConsortiumExceptionListGrid, _super);
            function ConsortiumExceptionListGrid(container) {
                return _super.call(this, container) || this;
            }
            ConsortiumExceptionListGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.ConsortiumExceptionList'; };
            ConsortiumExceptionListGrid.prototype.getDialogType = function () { return PCHODSNVS.ConsortiumExceptionListDialog; };
            ConsortiumExceptionListGrid.prototype.getIdProperty = function () { return PCHODSNVS.ConsortiumExceptionListRow.idProperty; };
            ConsortiumExceptionListGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.ConsortiumExceptionListRow.localTextPrefix; };
            ConsortiumExceptionListGrid.prototype.getService = function () { return PCHODSNVS.ConsortiumExceptionListService.baseUrl; };
            ConsortiumExceptionListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConsortiumExceptionListGrid);
            return ConsortiumExceptionListGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.ConsortiumExceptionListGrid = ConsortiumExceptionListGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var GsaDistributionListDialog = /** @class */ (function (_super) {
            __extends(GsaDistributionListDialog, _super);
            function GsaDistributionListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODSNVS.GsaDistributionListForm(_this.idPrefix);
                return _this;
            }
            GsaDistributionListDialog.prototype.getFormKey = function () { return PCHODSNVS.GsaDistributionListForm.formKey; };
            GsaDistributionListDialog.prototype.getIdProperty = function () { return PCHODSNVS.GsaDistributionListRow.idProperty; };
            GsaDistributionListDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.GsaDistributionListRow.localTextPrefix; };
            GsaDistributionListDialog.prototype.getNameProperty = function () { return PCHODSNVS.GsaDistributionListRow.nameProperty; };
            GsaDistributionListDialog.prototype.getService = function () { return PCHODSNVS.GsaDistributionListService.baseUrl; };
            GsaDistributionListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GsaDistributionListDialog);
            return GsaDistributionListDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.GsaDistributionListDialog = GsaDistributionListDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var GsaDistributionListGrid = /** @class */ (function (_super) {
            __extends(GsaDistributionListGrid, _super);
            function GsaDistributionListGrid(container) {
                return _super.call(this, container) || this;
            }
            GsaDistributionListGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.GsaDistributionList'; };
            GsaDistributionListGrid.prototype.getDialogType = function () { return PCHODSNVS.GsaDistributionListDialog; };
            GsaDistributionListGrid.prototype.getIdProperty = function () { return PCHODSNVS.GsaDistributionListRow.idProperty; };
            GsaDistributionListGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.GsaDistributionListRow.localTextPrefix; };
            GsaDistributionListGrid.prototype.getService = function () { return PCHODSNVS.GsaDistributionListService.baseUrl; };
            GsaDistributionListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GsaDistributionListGrid);
            return GsaDistributionListGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.GsaDistributionListGrid = GsaDistributionListGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
/// <reference path="../../PCHDW/VwSqlJobList/VwSqlJobListGrid.ts" />
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var JobManagemetGrid = /** @class */ (function (_super) {
            __extends(JobManagemetGrid, _super);
            function JobManagemetGrid(container) {
                return _super.call(this, container) || this;
            }
            JobManagemetGrid.prototype.getColumnsKey = function () { return "DAP.PCHDW.VwSqlJobList"; };
            JobManagemetGrid.prototype.getIdProperty = function () { return DAP.PCHDW.VwSqlJobListRow.idProperty; };
            JobManagemetGrid.prototype.getDialogType = function () { return DAP.PCHDW.VwSqlJobListDialog; };
            JobManagemetGrid.prototype.getLocalTextPrefix = function () { return DAP.PCHDW.VwSqlJobListRow.localTextPrefix; };
            JobManagemetGrid.prototype.getService = function () { return DAP.PCHDW.VwSqlJobListService.baseUrl; };
            JobManagemetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JobManagemetGrid);
            return JobManagemetGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.JobManagemetGrid = JobManagemetGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        /**
        * Our select editor with hardcoded values.
        *
        * When you define a new editor type, make sure you build
        * and transform templates for it to be available
        * in server side forms, e.g. [HardCodedValuesEditor]
        */
        var SelectPCHCompanyEditor = /** @class */ (function (_super) {
            __extends(SelectPCHCompanyEditor, _super);
            function SelectPCHCompanyEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("100", "100 (Oceania Cruises)");
                _this.addOption("110", "110 (Regent Seven Seas Cruises)");
                return _this;
            }
            SelectPCHCompanyEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SelectPCHCompanyEditor);
            return SelectPCHCompanyEditor;
        }(Serenity.Select2Editor));
        PCHODSNVS.SelectPCHCompanyEditor = SelectPCHCompanyEditor;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetDialog = /** @class */ (function (_super) {
            __extends(NtrBudgetDialog, _super);
            function NtrBudgetDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrBudgetForm(_this.idPrefix);
                return _this;
            }
            NtrBudgetDialog.prototype.getFormKey = function () { return PCHODSNVS.NtrBudgetForm.formKey; };
            NtrBudgetDialog.prototype.getIdProperty = function () { return PCHODSNVS.NtrBudgetRow.idProperty; };
            NtrBudgetDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrBudgetRow.localTextPrefix; };
            NtrBudgetDialog.prototype.getNameProperty = function () { return PCHODSNVS.NtrBudgetRow.nameProperty; };
            NtrBudgetDialog.prototype.getService = function () { return PCHODSNVS.NtrBudgetService.baseUrl; };
            NtrBudgetDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var btnDelete = Q.first(btns, function (x) { return x.cssClass == "delete-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                var oldDeleteClick = btnDelete.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                btnDelete.onClick = function (e) { _this.confirmBeforeSave(oldDeleteClick, e); };
                return btns;
            };
            NtrBudgetDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                switch (this.form.CompanyCd.value) {
                    case "100":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance100")) {
                            Q.notifyError("User not Authorize to make any changes to company 100");
                            return;
                        }
                        break;
                    case "110":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110")) {
                            Q.notifyError("User not Authorize to make any changes to company 110");
                            return;
                        }
                        break;
                }
                oldEvt(e);
            };
            NtrBudgetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrBudgetDialog);
            return NtrBudgetDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.NtrBudgetDialog = NtrBudgetDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetExcelImportDialog = /** @class */ (function (_super) {
            __extends(NtrBudgetExcelImportDialog, _super);
            function NtrBudgetExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrBudgetExcelImportForm(_this.idPrefix);
                return _this;
            }
            NtrBudgetExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            NtrBudgetExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PCHODSNVS.NtrBudgetService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            NtrBudgetExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrBudgetExcelImportDialog);
            return NtrBudgetExcelImportDialog;
        }(Serenity.PropertyDialog));
        PCHODSNVS.NtrBudgetExcelImportDialog = NtrBudgetExcelImportDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetGrid = /** @class */ (function (_super) {
            __extends(NtrBudgetGrid, _super);
            function NtrBudgetGrid(container) {
                return _super.call(this, container) || this;
            }
            NtrBudgetGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.NtrBudget'; };
            NtrBudgetGrid.prototype.getDialogType = function () { return PCHODSNVS.NtrBudgetDialog; };
            NtrBudgetGrid.prototype.getIdProperty = function () { return PCHODSNVS.NtrBudgetRow.idProperty; };
            NtrBudgetGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrBudgetRow.localTextPrefix; };
            NtrBudgetGrid.prototype.getService = function () { return PCHODSNVS.NtrBudgetService.baseUrl; };
            NtrBudgetGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: PCHODSNVS.NtrBudgetService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PCHODSNVS.NtrBudgetExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                // buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            NtrBudgetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrBudgetGrid);
            return NtrBudgetGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.NtrBudgetGrid = NtrBudgetGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetByChannelDialog = /** @class */ (function (_super) {
            __extends(NtrBudgetByChannelDialog, _super);
            function NtrBudgetByChannelDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrBudgetByChannelForm(_this.idPrefix);
                _this.form.AccountingYear.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.AccountingYear.value != null) {
                        if ((_this.form.AccountingYear.value > 2100) || (_this.form.AccountingYear.value < 2000)) {
                            return "Invalid Account Year Format.";
                        }
                    }
                });
                return _this;
            }
            NtrBudgetByChannelDialog.prototype.getFormKey = function () { return PCHODSNVS.NtrBudgetByChannelForm.formKey; };
            NtrBudgetByChannelDialog.prototype.getIdProperty = function () { return PCHODSNVS.NtrBudgetByChannelRow.idProperty; };
            NtrBudgetByChannelDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrBudgetByChannelRow.localTextPrefix; };
            NtrBudgetByChannelDialog.prototype.getNameProperty = function () { return PCHODSNVS.NtrBudgetByChannelRow.nameProperty; };
            NtrBudgetByChannelDialog.prototype.getService = function () { return PCHODSNVS.NtrBudgetByChannelService.baseUrl; };
            NtrBudgetByChannelDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var btnDelete = Q.first(btns, function (x) { return x.cssClass == "delete-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                var oldDeleteClick = btnDelete.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                btnDelete.onClick = function (e) { _this.confirmBeforeSave(oldDeleteClick, e); };
                return btns;
            };
            NtrBudgetByChannelDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                switch (this.form.CompanyCd.value) {
                    case "100":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance100")) {
                            Q.notifyError("User not Authorize to make any changes to company 100");
                            return;
                        }
                        break;
                    case "110":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110")) {
                            Q.notifyError("User not Authorize to make any changes to company 110");
                            return;
                        }
                        break;
                }
                oldEvt(e);
            };
            NtrBudgetByChannelDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrBudgetByChannelDialog);
            return NtrBudgetByChannelDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.NtrBudgetByChannelDialog = NtrBudgetByChannelDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetByChannelExcelImportDialog = /** @class */ (function (_super) {
            __extends(NtrBudgetByChannelExcelImportDialog, _super);
            function NtrBudgetByChannelExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrBudgetByChannelExcelImportForm(_this.idPrefix);
                return _this;
            }
            NtrBudgetByChannelExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            NtrBudgetByChannelExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PCHODSNVS.NtrBudgetByChannelService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            NtrBudgetByChannelExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrBudgetByChannelExcelImportDialog);
            return NtrBudgetByChannelExcelImportDialog;
        }(Serenity.PropertyDialog));
        PCHODSNVS.NtrBudgetByChannelExcelImportDialog = NtrBudgetByChannelExcelImportDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrBudgetByChannelGrid = /** @class */ (function (_super) {
            __extends(NtrBudgetByChannelGrid, _super);
            function NtrBudgetByChannelGrid(container) {
                return _super.call(this, container) || this;
            }
            NtrBudgetByChannelGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.NtrBudgetByChannel'; };
            NtrBudgetByChannelGrid.prototype.getDialogType = function () { return PCHODSNVS.NtrBudgetByChannelDialog; };
            NtrBudgetByChannelGrid.prototype.getIdProperty = function () { return PCHODSNVS.NtrBudgetByChannelRow.idProperty; };
            NtrBudgetByChannelGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrBudgetByChannelRow.localTextPrefix; };
            NtrBudgetByChannelGrid.prototype.getService = function () { return PCHODSNVS.NtrBudgetByChannelService.baseUrl; };
            NtrBudgetByChannelGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: PCHODSNVS.NtrBudgetByChannelService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PCHODSNVS.NtrBudgetByChannelExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                // buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            NtrBudgetByChannelGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrBudgetByChannelGrid);
            return NtrBudgetByChannelGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.NtrBudgetByChannelGrid = NtrBudgetByChannelGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrFcstDialog = /** @class */ (function (_super) {
            __extends(NtrFcstDialog, _super);
            function NtrFcstDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrFcstForm(_this.idPrefix);
                _this.form.AccountPeriodNum.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.AccountPeriodNum.value != null) {
                        if ((_this.form.AccountPeriodNum.value.length > 6) || (!(/(20[0-4]\d)(0[1-9]|1[0-2])/.test(_this.form.AccountPeriodNum.value)))) {
                            return "Invalid Account Period Format. It should be YYYYMM.";
                        }
                    }
                });
                return _this;
            }
            NtrFcstDialog.prototype.getFormKey = function () { return PCHODSNVS.NtrFcstForm.formKey; };
            NtrFcstDialog.prototype.getIdProperty = function () { return PCHODSNVS.NtrFcstRow.idProperty; };
            NtrFcstDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrFcstRow.localTextPrefix; };
            NtrFcstDialog.prototype.getNameProperty = function () { return PCHODSNVS.NtrFcstRow.nameProperty; };
            NtrFcstDialog.prototype.getService = function () { return PCHODSNVS.NtrFcstService.baseUrl; };
            NtrFcstDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var btnDelete = Q.first(btns, function (x) { return x.cssClass == "delete-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                var oldDeleteClick = btnDelete.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                btnDelete.onClick = function (e) { _this.confirmBeforeSave(oldDeleteClick, e); };
                return btns;
            };
            NtrFcstDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                switch (this.form.CompanyCd.value) {
                    case "100":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance100")) {
                            Q.notifyError("User not Authorize to make any changes to company 100");
                            return;
                        }
                        break;
                    case "110":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110")) {
                            Q.notifyError("User not Authorize to make any changes to company 110");
                            return;
                        }
                        break;
                }
                oldEvt(e);
            };
            NtrFcstDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrFcstDialog);
            return NtrFcstDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.NtrFcstDialog = NtrFcstDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrFcstExcelImportDialog = /** @class */ (function (_super) {
            __extends(NtrFcstExcelImportDialog, _super);
            function NtrFcstExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrFcstExcelImportForm(_this.idPrefix);
                return _this;
            }
            NtrFcstExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            NtrFcstExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PCHODSNVS.NtrFcstService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            NtrFcstExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrFcstExcelImportDialog);
            return NtrFcstExcelImportDialog;
        }(Serenity.PropertyDialog));
        PCHODSNVS.NtrFcstExcelImportDialog = NtrFcstExcelImportDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrFcstGrid = /** @class */ (function (_super) {
            __extends(NtrFcstGrid, _super);
            function NtrFcstGrid(container) {
                return _super.call(this, container) || this;
            }
            NtrFcstGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.NtrFcst'; };
            NtrFcstGrid.prototype.getDialogType = function () { return PCHODSNVS.NtrFcstDialog; };
            NtrFcstGrid.prototype.getIdProperty = function () { return PCHODSNVS.NtrFcstRow.idProperty; };
            NtrFcstGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrFcstRow.localTextPrefix; };
            NtrFcstGrid.prototype.getService = function () { return PCHODSNVS.NtrFcstService.baseUrl; };
            NtrFcstGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: PCHODSNVS.NtrFcstService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PCHODSNVS.NtrFcstExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                // buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            NtrFcstGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrFcstGrid);
            return NtrFcstGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.NtrFcstGrid = NtrFcstGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrIntlDatelineCruisesDialog = /** @class */ (function (_super) {
            __extends(NtrIntlDatelineCruisesDialog, _super);
            function NtrIntlDatelineCruisesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrIntlDatelineCruisesForm(_this.idPrefix);
                return _this;
            }
            NtrIntlDatelineCruisesDialog.prototype.getFormKey = function () { return PCHODSNVS.NtrIntlDatelineCruisesForm.formKey; };
            NtrIntlDatelineCruisesDialog.prototype.getIdProperty = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.idProperty; };
            NtrIntlDatelineCruisesDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.localTextPrefix; };
            NtrIntlDatelineCruisesDialog.prototype.getNameProperty = function () { return PCHODSNVS.NtrIntlDatelineCruisesRow.nameProperty; };
            NtrIntlDatelineCruisesDialog.prototype.getService = function () { return PCHODSNVS.NtrIntlDatelineCruisesService.baseUrl; };
            NtrIntlDatelineCruisesDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var btnDelete = Q.first(btns, function (x) { return x.cssClass == "delete-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                var oldDeleteClick = btnDelete.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                btnDelete.onClick = function (e) { _this.confirmBeforeSave(oldDeleteClick, e); };
                return btns;
            };
            NtrIntlDatelineCruisesDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                switch (this.form.CompanyCd.value) {
                    case "100":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance100")) {
                            Q.notifyError("User not Authorize to make any changes to company 100");
                            return;
                        }
                        break;
                    case "110":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110")) {
                            Q.notifyError("User not Authorize to make any changes to company 110");
                            return;
                        }
                        break;
                }
                oldEvt(e);
            };
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
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrPastMonthsActualDialog = /** @class */ (function (_super) {
            __extends(NtrPastMonthsActualDialog, _super);
            function NtrPastMonthsActualDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrPastMonthsActualForm(_this.idPrefix);
                _this.form.YearMonth.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.YearMonth.value != null) {
                        if ((_this.form.YearMonth.value.length > 6) || (!(/(20[0-4]\d)(0[1-9]|1[0-2])/.test(_this.form.YearMonth.value)))) {
                            return "Invalid Year Month Format. It should be YYYYMM.";
                        }
                    }
                });
                return _this;
            }
            NtrPastMonthsActualDialog.prototype.getFormKey = function () { return PCHODSNVS.NtrPastMonthsActualForm.formKey; };
            NtrPastMonthsActualDialog.prototype.getIdProperty = function () { return PCHODSNVS.NtrPastMonthsActualRow.idProperty; };
            NtrPastMonthsActualDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrPastMonthsActualRow.localTextPrefix; };
            NtrPastMonthsActualDialog.prototype.getNameProperty = function () { return PCHODSNVS.NtrPastMonthsActualRow.nameProperty; };
            NtrPastMonthsActualDialog.prototype.getService = function () { return PCHODSNVS.NtrPastMonthsActualService.baseUrl; };
            NtrPastMonthsActualDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var btnDelete = Q.first(btns, function (x) { return x.cssClass == "delete-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                var oldDeleteClick = btnDelete.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                btnDelete.onClick = function (e) { _this.confirmBeforeSave(oldDeleteClick, e); };
                return btns;
            };
            NtrPastMonthsActualDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                switch (this.form.CompanyCd.value) {
                    case "100":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance100")) {
                            Q.notifyError("User not Authorize to make any changes to company 100");
                            return;
                        }
                        break;
                    case "110":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110")) {
                            Q.notifyError("User not Authorize to make any changes to company 110");
                            return;
                        }
                        break;
                }
                oldEvt(e);
            };
            NtrPastMonthsActualDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrPastMonthsActualDialog);
            return NtrPastMonthsActualDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.NtrPastMonthsActualDialog = NtrPastMonthsActualDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrPastMonthsActualExcelImportDialog = /** @class */ (function (_super) {
            __extends(NtrPastMonthsActualExcelImportDialog, _super);
            function NtrPastMonthsActualExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrPastMonthsActualExcelImportForm(_this.idPrefix);
                return _this;
            }
            NtrPastMonthsActualExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            NtrPastMonthsActualExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PCHODSNVS.NtrPastMonthsActualService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            NtrPastMonthsActualExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrPastMonthsActualExcelImportDialog);
            return NtrPastMonthsActualExcelImportDialog;
        }(Serenity.PropertyDialog));
        PCHODSNVS.NtrPastMonthsActualExcelImportDialog = NtrPastMonthsActualExcelImportDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrPastMonthsActualGrid = /** @class */ (function (_super) {
            __extends(NtrPastMonthsActualGrid, _super);
            function NtrPastMonthsActualGrid(container) {
                return _super.call(this, container) || this;
            }
            NtrPastMonthsActualGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.NtrPastMonthsActual'; };
            NtrPastMonthsActualGrid.prototype.getDialogType = function () { return PCHODSNVS.NtrPastMonthsActualDialog; };
            NtrPastMonthsActualGrid.prototype.getIdProperty = function () { return PCHODSNVS.NtrPastMonthsActualRow.idProperty; };
            NtrPastMonthsActualGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrPastMonthsActualRow.localTextPrefix; };
            NtrPastMonthsActualGrid.prototype.getService = function () { return PCHODSNVS.NtrPastMonthsActualService.baseUrl; };
            NtrPastMonthsActualGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: PCHODSNVS.NtrPastMonthsActualService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PCHODSNVS.NtrPastMonthsActualExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                // buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            NtrPastMonthsActualGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrPastMonthsActualGrid);
            return NtrPastMonthsActualGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.NtrPastMonthsActualGrid = NtrPastMonthsActualGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrRptCommentDialog = /** @class */ (function (_super) {
            __extends(NtrRptCommentDialog, _super);
            function NtrRptCommentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.NtrRptCommentForm(_this.idPrefix);
                _this.form.AccountPeriodNum.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.AccountPeriodNum.value != null) {
                        if ((_this.form.AccountPeriodNum.value.length > 6) || (!(/(20[0-4]\d)(0[1-9]|1[0-2])/.test(_this.form.AccountPeriodNum.value)))) {
                            return "Invalid Account Period Format. It should be YYYYMM.";
                        }
                    }
                });
                return _this;
            }
            NtrRptCommentDialog.prototype.getFormKey = function () { return PCHODSNVS.NtrRptCommentForm.formKey; };
            NtrRptCommentDialog.prototype.getIdProperty = function () { return PCHODSNVS.NtrRptCommentRow.idProperty; };
            NtrRptCommentDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrRptCommentRow.localTextPrefix; };
            NtrRptCommentDialog.prototype.getNameProperty = function () { return PCHODSNVS.NtrRptCommentRow.nameProperty; };
            NtrRptCommentDialog.prototype.getService = function () { return PCHODSNVS.NtrRptCommentService.baseUrl; };
            NtrRptCommentDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var btnDelete = Q.first(btns, function (x) { return x.cssClass == "delete-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                var oldDeleteClick = btnDelete.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                btnDelete.onClick = function (e) { _this.confirmBeforeSave(oldDeleteClick, e); };
                return btns;
            };
            NtrRptCommentDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                switch (this.form.CompanyCd.value) {
                    case "100":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance100")) {
                            Q.notifyError("User not Authorize to make any changes to company 100");
                            return;
                        }
                        break;
                    case "110":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110")) {
                            Q.notifyError("User not Authorize to make any changes to company 110");
                            return;
                        }
                        break;
                }
                oldEvt(e);
            };
            NtrRptCommentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrRptCommentDialog);
            return NtrRptCommentDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.NtrRptCommentDialog = NtrRptCommentDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var NtrRptCommentGrid = /** @class */ (function (_super) {
            __extends(NtrRptCommentGrid, _super);
            function NtrRptCommentGrid(container) {
                return _super.call(this, container) || this;
            }
            NtrRptCommentGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.NtrRptComment'; };
            NtrRptCommentGrid.prototype.getDialogType = function () { return PCHODSNVS.NtrRptCommentDialog; };
            NtrRptCommentGrid.prototype.getIdProperty = function () { return PCHODSNVS.NtrRptCommentRow.idProperty; };
            NtrRptCommentGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.NtrRptCommentRow.localTextPrefix; };
            NtrRptCommentGrid.prototype.getService = function () { return PCHODSNVS.NtrRptCommentService.baseUrl; };
            NtrRptCommentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NtrRptCommentGrid);
            return NtrRptCommentGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.NtrRptCommentGrid = NtrRptCommentGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var RevenueAdhocManagementDialog = /** @class */ (function (_super) {
            __extends(RevenueAdhocManagementDialog, _super);
            function RevenueAdhocManagementDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.RevenueAdhocManagementForm(_this.idPrefix);
                return _this;
            }
            RevenueAdhocManagementDialog.prototype.getFormKey = function () { return PCHODSNVS.RevenueAdhocManagementForm.formKey; };
            RevenueAdhocManagementDialog.prototype.getIdProperty = function () { return PCHODSNVS.RevenueAdhocManagementRow.idProperty; };
            RevenueAdhocManagementDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.RevenueAdhocManagementRow.localTextPrefix; };
            RevenueAdhocManagementDialog.prototype.getNameProperty = function () { return PCHODSNVS.RevenueAdhocManagementRow.nameProperty; };
            RevenueAdhocManagementDialog.prototype.getService = function () { return PCHODSNVS.RevenueAdhocManagementService.baseUrl; };
            RevenueAdhocManagementDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var btnDelete = Q.first(btns, function (x) { return x.cssClass == "delete-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                var oldDeleteClick = btnDelete.onClick;
                btnSave.onClick = function (e) { _this.confirmBeforeSave(oldSaveClick, e); };
                btnApply.onClick = function (e) { _this.confirmBeforeSave(oldApplyClick, e); };
                btnDelete.onClick = function (e) { _this.confirmBeforeSave(oldDeleteClick, e); };
                if (!DAP.Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                    btns.splice(Q.indexOf(btns, function (x) { return x.cssClass == "delete-button"; }), 1);
                }
                return btns;
            };
            RevenueAdhocManagementDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                switch (this.form.CompanyCd.value) {
                    case "100":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance100")) {
                            Q.notifyError("User not Authorize to make any changes to company 100");
                            return;
                        }
                        break;
                    case "110":
                        if (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110")) {
                            Q.notifyError("User not Authorize to make any changes to company 110");
                            return;
                        }
                        break;
                }
                oldEvt(e);
            };
            RevenueAdhocManagementDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (!DAP.Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                    Serenity.EditorUtils.setReadOnly(this.form.SqlJobName, true);
                }
            };
            RevenueAdhocManagementDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RevenueAdhocManagementDialog);
            return RevenueAdhocManagementDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.RevenueAdhocManagementDialog = RevenueAdhocManagementDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var RevenueAdhocManagementGrid = /** @class */ (function (_super) {
            __extends(RevenueAdhocManagementGrid, _super);
            function RevenueAdhocManagementGrid(container) {
                return _super.call(this, container) || this;
            }
            RevenueAdhocManagementGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.RevenueAdhocManagement'; };
            RevenueAdhocManagementGrid.prototype.getDialogType = function () { return PCHODSNVS.RevenueAdhocManagementDialog; };
            RevenueAdhocManagementGrid.prototype.getIdProperty = function () { return PCHODSNVS.RevenueAdhocManagementRow.idProperty; };
            RevenueAdhocManagementGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.RevenueAdhocManagementRow.localTextPrefix; };
            RevenueAdhocManagementGrid.prototype.getService = function () { return PCHODSNVS.RevenueAdhocManagementService.baseUrl; };
            RevenueAdhocManagementGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            RevenueAdhocManagementGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (!DAP.Authorization.hasPermission("PCHDW:EDMSupportAdmin")) {
                    buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                }
                return buttons;
            };
            RevenueAdhocManagementGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.push({
                    field: 'Close Period',
                    name: '',
                    format: function (ctx) {
                        var CurItem = ctx.item;
                        var klass = "";
                        klass = '<a class="inline-action start-job" title="Star Job">' +
                            '<i class="fa fa-play-circle text-red"></i></a>';
                        return klass;
                    },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            RevenueAdhocManagementGrid.prototype.onClick = function (e, row, cell) {
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
                    if (target.hasClass('start-job')) {
                        Q.confirm('Are you sure you want to refresh this Cube?', function () {
                            var crow = Q.deepClone(_this.itemAt(row));
                            if ((!DAP.Authorization.hasPermission("PCHODSNVS:Finance100") && crow.CompanyCd == "100") || (!DAP.Authorization.hasPermission("PCHODSNVS:Finance110") && crow.CompanyCd == "110")) {
                                Q.notifyError("User not Authorize to run this cube");
                                return;
                            }
                            PCHODSNVS.RevenueAdhocManagementService.ExecuteSP({
                                Entity: crow
                            }, function (response) {
                                crow.LastUpdatedBy = Q.Authorization.username;
                                PCHODSNVS.RevenueAdhocManagementService.Update({
                                    Entity: crow
                                }, function (response) {
                                    _this.refresh();
                                });
                                _this.refresh();
                            });
                            Q.notifySuccess("Job Started Successfully.  This Job will take about 15 miunutes to complete.  Wait for email confirmation.");
                        });
                    }
                }
            };
            RevenueAdhocManagementGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RevenueAdhocManagementGrid);
            return RevenueAdhocManagementGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.RevenueAdhocManagementGrid = RevenueAdhocManagementGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var KeyAcctTargetExcelImportDialog = /** @class */ (function (_super) {
            __extends(KeyAcctTargetExcelImportDialog, _super);
            function KeyAcctTargetExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.KeyAcctTargetExcelImportForm(_this.idPrefix);
                return _this;
            }
            KeyAcctTargetExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            KeyAcctTargetExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PCHODSNVS.SuppKeyAcctTargetService.ExcelImport2({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            KeyAcctTargetExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], KeyAcctTargetExcelImportDialog);
            return KeyAcctTargetExcelImportDialog;
        }(Serenity.PropertyDialog));
        PCHODSNVS.KeyAcctTargetExcelImportDialog = KeyAcctTargetExcelImportDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var SuppKeyAcctTargetDialog = /** @class */ (function (_super) {
            __extends(SuppKeyAcctTargetDialog, _super);
            function SuppKeyAcctTargetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PCHODSNVS.SuppKeyAcctTargetForm(_this.idPrefix);
                return _this;
            }
            SuppKeyAcctTargetDialog.prototype.getFormKey = function () { return PCHODSNVS.SuppKeyAcctTargetForm.formKey; };
            SuppKeyAcctTargetDialog.prototype.getIdProperty = function () { return PCHODSNVS.SuppKeyAcctTargetRow.idProperty; };
            SuppKeyAcctTargetDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.SuppKeyAcctTargetRow.localTextPrefix; };
            SuppKeyAcctTargetDialog.prototype.getNameProperty = function () { return PCHODSNVS.SuppKeyAcctTargetRow.nameProperty; };
            SuppKeyAcctTargetDialog.prototype.getService = function () { return PCHODSNVS.SuppKeyAcctTargetService.baseUrl; };
            SuppKeyAcctTargetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppKeyAcctTargetDialog);
            return SuppKeyAcctTargetDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.SuppKeyAcctTargetDialog = SuppKeyAcctTargetDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var SuppKeyAcctTargetGrid = /** @class */ (function (_super) {
            __extends(SuppKeyAcctTargetGrid, _super);
            function SuppKeyAcctTargetGrid(container) {
                return _super.call(this, container) || this;
            }
            SuppKeyAcctTargetGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.SuppKeyAcctTarget'; };
            SuppKeyAcctTargetGrid.prototype.getDialogType = function () { return PCHODSNVS.SuppKeyAcctTargetDialog; };
            SuppKeyAcctTargetGrid.prototype.getIdProperty = function () { return PCHODSNVS.SuppKeyAcctTargetRow.idProperty; };
            SuppKeyAcctTargetGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.SuppKeyAcctTargetRow.localTextPrefix; };
            SuppKeyAcctTargetGrid.prototype.getService = function () { return PCHODSNVS.SuppKeyAcctTargetService.baseUrl; };
            SuppKeyAcctTargetGrid.prototype.createSlickGrid = function () {
                this.slickGrid = _super.prototype.createSlickGrid.call(this);
                new Serenity.AutoColumnWidthMixin({
                    grid: this
                });
                return this.slickGrid;
            };
            SuppKeyAcctTargetGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: PCHODSNVS.SuppKeyAcctTargetService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PCHODSNVS.KeyAcctTargetExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                //buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);
                //buttons.push(Common.PdfExportHelper.createToolButton({
                //    grid: this,
                //    onViewSubmit: () => this.onViewSubmit()
                //}));
                return buttons;
            };
            SuppKeyAcctTargetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppKeyAcctTargetGrid);
            return SuppKeyAcctTargetGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.SuppKeyAcctTargetGrid = SuppKeyAcctTargetGrid;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var TransferEstimateOciAmtDialog = /** @class */ (function (_super) {
            __extends(TransferEstimateOciAmtDialog, _super);
            function TransferEstimateOciAmtDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.TransferEstimateOciAmtForm(_this.idPrefix);
                _this.form = new PCHODSNVS.TransferEstimateOciAmtForm(_this.idPrefix);
                _this.form.CruiseSegmentCd.changeSelect2(function (e) {
                    var segmentcd = Q.toId(_this.form.CruiseSegmentCd.value);
                    if (segmentcd != null) {
                        //this.form.SegmentMarketName.value = PCHDW.DimCruiseRow.getLookup().itemById[segmentcd].MarketName;
                        _this.form.SegmentMarketName.value = PCHODSNVS.GetCruiseSegmentRow.getLookup().itemById[segmentcd].SegmentMarketName;
                        _this.form.ShipCd.value = PCHODSNVS.GetCruiseSegmentRow.getLookup().itemById[segmentcd].ShipCd;
                    }
                });
                return _this;
            }
            TransferEstimateOciAmtDialog.prototype.getFormKey = function () { return PCHODSNVS.TransferEstimateOciAmtForm.formKey; };
            TransferEstimateOciAmtDialog.prototype.getIdProperty = function () { return PCHODSNVS.TransferEstimateOciAmtRow.idProperty; };
            TransferEstimateOciAmtDialog.prototype.getLocalTextPrefix = function () { return PCHODSNVS.TransferEstimateOciAmtRow.localTextPrefix; };
            TransferEstimateOciAmtDialog.prototype.getNameProperty = function () { return PCHODSNVS.TransferEstimateOciAmtRow.nameProperty; };
            TransferEstimateOciAmtDialog.prototype.getService = function () { return PCHODSNVS.TransferEstimateOciAmtService.baseUrl; };
            TransferEstimateOciAmtDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TransferEstimateOciAmtDialog);
            return TransferEstimateOciAmtDialog;
        }(Serenity.EntityDialog));
        PCHODSNVS.TransferEstimateOciAmtDialog = TransferEstimateOciAmtDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var TransferEstimateOciAmtExcelImportDialog = /** @class */ (function (_super) {
            __extends(TransferEstimateOciAmtExcelImportDialog, _super);
            function TransferEstimateOciAmtExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PCHODSNVS.TransferEstimateOciAmtExcelImportForm(_this.idPrefix);
                return _this;
            }
            TransferEstimateOciAmtExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            TransferEstimateOciAmtExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            PCHODSNVS.TransferEstimateOciAmtService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
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
            TransferEstimateOciAmtExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TransferEstimateOciAmtExcelImportDialog);
            return TransferEstimateOciAmtExcelImportDialog;
        }(Serenity.PropertyDialog));
        PCHODSNVS.TransferEstimateOciAmtExcelImportDialog = TransferEstimateOciAmtExcelImportDialog;
    })(PCHODSNVS = DAP.PCHODSNVS || (DAP.PCHODSNVS = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var PCHODSNVS;
    (function (PCHODSNVS) {
        var TransferEstimateOciAmtGrid = /** @class */ (function (_super) {
            __extends(TransferEstimateOciAmtGrid, _super);
            function TransferEstimateOciAmtGrid(container) {
                return _super.call(this, container) || this;
            }
            TransferEstimateOciAmtGrid.prototype.getColumnsKey = function () { return 'PCHODSNVS.TransferEstimateOciAmt'; };
            TransferEstimateOciAmtGrid.prototype.getDialogType = function () { return PCHODSNVS.TransferEstimateOciAmtDialog; };
            TransferEstimateOciAmtGrid.prototype.getIdProperty = function () { return PCHODSNVS.TransferEstimateOciAmtRow.idProperty; };
            TransferEstimateOciAmtGrid.prototype.getLocalTextPrefix = function () { return PCHODSNVS.TransferEstimateOciAmtRow.localTextPrefix; };
            TransferEstimateOciAmtGrid.prototype.getService = function () { return PCHODSNVS.TransferEstimateOciAmtService.baseUrl; };
            TransferEstimateOciAmtGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                // export button
                buttons.push(DAP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: PCHODSNVS.TransferEstimateOciAmtService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true,
                    title: "Export to Excel"
                }));
                // import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new PCHODSNVS.TransferEstimateOciAmtExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            TransferEstimateOciAmtGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransferEstimateOciAmtGrid);
            return TransferEstimateOciAmtGrid;
        }(Serenity.EntityGrid));
        PCHODSNVS.TransferEstimateOciAmtGrid = TransferEstimateOciAmtGrid;
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
        var NclhShipDialog = /** @class */ (function (_super) {
            __extends(NclhShipDialog, _super);
            function NclhShipDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SSISConfig.NclhShipForm(_this.idPrefix);
                return _this;
            }
            NclhShipDialog.prototype.getFormKey = function () { return SSISConfig.NclhShipForm.formKey; };
            NclhShipDialog.prototype.getIdProperty = function () { return SSISConfig.NclhShipRow.idProperty; };
            NclhShipDialog.prototype.getLocalTextPrefix = function () { return SSISConfig.NclhShipRow.localTextPrefix; };
            NclhShipDialog.prototype.getNameProperty = function () { return SSISConfig.NclhShipRow.nameProperty; };
            NclhShipDialog.prototype.getService = function () { return SSISConfig.NclhShipService.baseUrl; };
            NclhShipDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NclhShipDialog);
            return NclhShipDialog;
        }(Serenity.EntityDialog));
        SSISConfig.NclhShipDialog = NclhShipDialog;
    })(SSISConfig = DAP.SSISConfig || (DAP.SSISConfig = {}));
})(DAP || (DAP = {}));
var DAP;
(function (DAP) {
    var SSISConfig;
    (function (SSISConfig) {
        var NclhShipGrid = /** @class */ (function (_super) {
            __extends(NclhShipGrid, _super);
            function NclhShipGrid(container) {
                return _super.call(this, container) || this;
            }
            NclhShipGrid.prototype.getColumnsKey = function () { return 'SSISConfig.NclhShip'; };
            NclhShipGrid.prototype.getDialogType = function () { return SSISConfig.NclhShipDialog; };
            NclhShipGrid.prototype.getIdProperty = function () { return SSISConfig.NclhShipRow.idProperty; };
            NclhShipGrid.prototype.getLocalTextPrefix = function () { return SSISConfig.NclhShipRow.localTextPrefix; };
            NclhShipGrid.prototype.getService = function () { return SSISConfig.NclhShipService.baseUrl; };
            NclhShipGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NclhShipGrid);
            return NclhShipGrid;
        }(Serenity.EntityGrid));
        SSISConfig.NclhShipGrid = NclhShipGrid;
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