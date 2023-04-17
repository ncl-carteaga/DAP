namespace DAP.NCLHDSAR {
    export interface MarketingRequestRow {
        Id?: number;
        RequestTypeId?: number;
        BrandId?: number;
        ContactId?: string;
        ChannelId?: number;
        OptOutStatusID?: number;
        FirstName?: string;
        LastName?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zip?: string;
        Country?: string;
        Phone?: string;
        SourceId?: number;
        EmailAddress?: string;
        Title?: string;
        IsReturnedMailCd?: boolean;
        CreatedBy?: string;
        CreatedDate?: string;
        ModifiedBy?: string;
        ModifiedDate?: string;
        RequestTypeDescription?: string;
        BrandDescription?: string;
        ChannelDescription?: string;
        SourceDescription?: string;
    }

    export namespace MarketingRequestRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ContactId';
        export const localTextPrefix = 'DWSupport.MarketingRequest';

        export declare const enum Fields {
            Id = "Id",
            RequestTypeId = "RequestTypeId",
            BrandId = "BrandId",
            ContactId = "ContactId",
            ChannelId = "ChannelId",
            OptOutStatusID = "OptOutStatusID",
            FirstName = "FirstName",
            LastName = "LastName",
            Address1 = "Address1",
            Address2 = "Address2",
            City = "City",
            State = "State",
            Zip = "Zip",
            Country = "Country",
            Phone = "Phone",
            SourceId = "SourceId",
            EmailAddress = "EmailAddress",
            Title = "Title",
            IsReturnedMailCd = "IsReturnedMailCd",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            ModifiedBy = "ModifiedBy",
            ModifiedDate = "ModifiedDate",
            RequestTypeDescription = "RequestTypeDescription",
            BrandDescription = "BrandDescription",
            ChannelDescription = "ChannelDescription",
            SourceDescription = "SourceDescription"
        }
    }
}

