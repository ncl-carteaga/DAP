namespace DAP.PCHODS {
    export namespace OutboundCommissionPeriodService {
        export const baseUrl = 'PCHODS/OutboundCommissionPeriod';

        export declare function Create(request: Serenity.SaveRequest<OutboundCommissionPeriodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutboundCommissionPeriodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionPeriodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionPeriodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/OutboundCommissionPeriod/Create",
            Update = "PCHODS/OutboundCommissionPeriod/Update",
            Delete = "PCHODS/OutboundCommissionPeriod/Delete",
            Retrieve = "PCHODS/OutboundCommissionPeriod/Retrieve",
            List = "PCHODS/OutboundCommissionPeriod/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutboundCommissionPeriodService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

