namespace DAP.PCHODS {
    export namespace OutboundCommissionHistAuService {
        export const baseUrl = 'PCHODS/OutboundCommissionHistAu';

        export declare function Create(request: Serenity.SaveRequest<OutboundCommissionHistAuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutboundCommissionHistAuRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionHistAuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionHistAuRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/OutboundCommissionHistAu/Create",
            Update = "PCHODS/OutboundCommissionHistAu/Update",
            Delete = "PCHODS/OutboundCommissionHistAu/Delete",
            Retrieve = "PCHODS/OutboundCommissionHistAu/Retrieve",
            List = "PCHODS/OutboundCommissionHistAu/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutboundCommissionHistAuService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

