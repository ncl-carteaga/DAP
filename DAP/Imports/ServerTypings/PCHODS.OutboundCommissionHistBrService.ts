namespace DAP.PCHODS {
    export namespace OutboundCommissionHistBrService {
        export const baseUrl = 'PCHODS/OutboundCommissionHistBr';

        export declare function Create(request: Serenity.SaveRequest<OutboundCommissionHistBrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutboundCommissionHistBrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionHistBrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionHistBrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/OutboundCommissionHistBr/Create",
            Update = "PCHODS/OutboundCommissionHistBr/Update",
            Delete = "PCHODS/OutboundCommissionHistBr/Delete",
            Retrieve = "PCHODS/OutboundCommissionHistBr/Retrieve",
            List = "PCHODS/OutboundCommissionHistBr/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutboundCommissionHistBrService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

