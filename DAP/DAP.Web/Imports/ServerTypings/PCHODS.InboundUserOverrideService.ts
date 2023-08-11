namespace DAP.PCHODS {
    export namespace InboundUserOverrideService {
        export const baseUrl = 'PCHODS/InboundUserOverride';

        export declare function Create(request: Serenity.SaveRequest<InboundUserOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InboundUserOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InboundUserOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InboundUserOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/InboundUserOverride/Create",
            Update = "PCHODS/InboundUserOverride/Update",
            Delete = "PCHODS/InboundUserOverride/Delete",
            Retrieve = "PCHODS/InboundUserOverride/Retrieve",
            List = "PCHODS/InboundUserOverride/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InboundUserOverrideService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

