namespace DAP.NCLHDSAR {
    export namespace MarketingRequestTypesService {
        export const baseUrl = 'NCLHDSAR/MarketingRequestTypes';

        export declare function Create(request: Serenity.SaveRequest<MarketingRequestTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MarketingRequestTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHDSAR/MarketingRequestTypes/Create",
            Update = "NCLHDSAR/MarketingRequestTypes/Update",
            Delete = "NCLHDSAR/MarketingRequestTypes/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestTypes/Retrieve",
            List = "NCLHDSAR/MarketingRequestTypes/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MarketingRequestTypesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

