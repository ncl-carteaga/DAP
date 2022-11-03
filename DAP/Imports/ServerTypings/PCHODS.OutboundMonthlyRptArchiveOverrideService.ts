namespace DAP.PCHODS {
    export namespace OutboundMonthlyRptArchiveOverrideService {
        export const baseUrl = 'PCHODS/OutboundMonthlyRptArchiveOverride';

        export declare function Create(request: Serenity.SaveRequest<OutboundMonthlyRptArchiveOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutboundMonthlyRptArchiveOverrideRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundMonthlyRptArchiveOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundMonthlyRptArchiveOverrideRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/OutboundMonthlyRptArchiveOverride/Create",
            Update = "PCHODS/OutboundMonthlyRptArchiveOverride/Update",
            Delete = "PCHODS/OutboundMonthlyRptArchiveOverride/Delete",
            Retrieve = "PCHODS/OutboundMonthlyRptArchiveOverride/Retrieve",
            List = "PCHODS/OutboundMonthlyRptArchiveOverride/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutboundMonthlyRptArchiveOverrideService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

