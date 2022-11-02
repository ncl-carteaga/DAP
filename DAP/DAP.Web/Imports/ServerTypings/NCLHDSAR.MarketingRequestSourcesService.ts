namespace DAP.NCLHDSAR {
    export namespace MarketingRequestSourcesService {
        export const baseUrl = 'NCLHDSAR/MarketingRequestSources';

        export declare function Create(request: Serenity.SaveRequest<MarketingRequestSourcesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MarketingRequestSourcesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestSourcesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestSourcesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHDSAR/MarketingRequestSources/Create",
            Update = "NCLHDSAR/MarketingRequestSources/Update",
            Delete = "NCLHDSAR/MarketingRequestSources/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestSources/Retrieve",
            List = "NCLHDSAR/MarketingRequestSources/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MarketingRequestSourcesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

