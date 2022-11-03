namespace DAP.NCLHDSAR {
    export namespace MarketingRequestChannelsService {
        export const baseUrl = 'NCLHDSAR/MarketingRequestChannels';

        export declare function Create(request: Serenity.SaveRequest<MarketingRequestChannelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MarketingRequestChannelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestChannelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestChannelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHDSAR/MarketingRequestChannels/Create",
            Update = "NCLHDSAR/MarketingRequestChannels/Update",
            Delete = "NCLHDSAR/MarketingRequestChannels/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestChannels/Retrieve",
            List = "NCLHDSAR/MarketingRequestChannels/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MarketingRequestChannelsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

