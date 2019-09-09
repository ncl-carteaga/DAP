namespace DAP.PCHODS {
    export namespace VwOutboundMonthlyRptArchiveOverrideService {
        export const baseUrl = 'PCHODS/VwOutboundMonthlyRptArchiveOverride';

        export declare function Create(request: Serenity.SaveRequest<VwOutboundMonthlyRptArchiveOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VwOutboundMonthlyRptArchiveOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VwOutboundMonthlyRptArchiveOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VwOutboundMonthlyRptArchiveOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/VwOutboundMonthlyRptArchiveOverride/Create",
            Update = "PCHODS/VwOutboundMonthlyRptArchiveOverride/Update",
            Delete = "PCHODS/VwOutboundMonthlyRptArchiveOverride/Delete",
            Retrieve = "PCHODS/VwOutboundMonthlyRptArchiveOverride/Retrieve",
            List = "PCHODS/VwOutboundMonthlyRptArchiveOverride/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VwOutboundMonthlyRptArchiveOverrideService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

