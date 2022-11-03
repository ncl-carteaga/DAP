﻿namespace DAP.Common {
    export enum MailQueuePriority {
        High = 1,
        Medium = 2,
        Low = 3
    }
    Serenity.Decorators.registerEnumType(MailQueuePriority, 'DAP.Common.MailQueuePriority');
}

