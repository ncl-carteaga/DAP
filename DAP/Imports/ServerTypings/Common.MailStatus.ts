namespace DAP.Common {
    export enum MailStatus {
        Failed = -1,
        InQueue = 0,
        Sent = 1
    }
    Serenity.Decorators.registerEnumType(MailStatus, 'DAP.Common.MailStatus');
}

