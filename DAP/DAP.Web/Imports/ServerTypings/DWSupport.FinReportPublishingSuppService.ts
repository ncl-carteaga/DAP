namespace DAP.DWSupport {
    export namespace FinReportPublishingSuppService {
        export const baseUrl = 'DWSupport/FinReportPublishingSupp';

        export declare function Create(request: Serenity.SaveRequest<FinReportPublishingSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FinReportPublishingSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinReportPublishingSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinReportPublishingSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/FinReportPublishingSupp/Create",
            Update = "DWSupport/FinReportPublishingSupp/Update",
            Delete = "DWSupport/FinReportPublishingSupp/Delete",
            Retrieve = "DWSupport/FinReportPublishingSupp/Retrieve",
            List = "DWSupport/FinReportPublishingSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FinReportPublishingSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

