namespace DAP.PCHODS {
    export namespace OutboundAgentLocationService {
        export const baseUrl = 'PCHODS/OutboundAgentLocation';

        export declare function Create(request: Serenity.SaveRequest<OutboundAgentLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutboundAgentLocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundAgentLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundAgentLocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/OutboundAgentLocation/Create",
            Update = "PCHODS/OutboundAgentLocation/Update",
            Delete = "PCHODS/OutboundAgentLocation/Delete",
            Retrieve = "PCHODS/OutboundAgentLocation/Retrieve",
            List = "PCHODS/OutboundAgentLocation/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutboundAgentLocationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

