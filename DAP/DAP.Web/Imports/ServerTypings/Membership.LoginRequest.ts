namespace DAP.Membership {
    export interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        Domain?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}

