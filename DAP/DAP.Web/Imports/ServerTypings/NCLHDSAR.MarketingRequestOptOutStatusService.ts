namespace DAP.NCLHDSAR {
    export namespace MarketingRequestOptOutStatusService {
        export const baseUrl = 'NCLHDSAR/MarketingRequestOptOutStatus';

        export declare function Create(request: Serenity.SaveRequest<MarketingRequestOptOutStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MarketingRequestOptOutStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestOptOutStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestOptOutStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHDSAR/MarketingRequestOptOutStatus/Create",
            Update = "NCLHDSAR/MarketingRequestOptOutStatus/Update",
            Delete = "NCLHDSAR/MarketingRequestOptOutStatus/Delete",
            Retrieve = "NCLHDSAR/MarketingRequestOptOutStatus/Retrieve",
            List = "NCLHDSAR/MarketingRequestOptOutStatus/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MarketingRequestOptOutStatusService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

