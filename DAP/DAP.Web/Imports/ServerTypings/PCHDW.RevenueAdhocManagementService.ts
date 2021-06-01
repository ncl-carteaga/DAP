namespace DAP.PCHDW {
    export namespace RevenueAdhocManagementService {
        export const baseUrl = 'PCHDW/RevenueAdhocManagement';

        export declare function Create(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RevenueAdhocManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RevenueAdhocManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExecuteSP(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHDW/RevenueAdhocManagement/Create",
            Update = "PCHDW/RevenueAdhocManagement/Update",
            Delete = "PCHDW/RevenueAdhocManagement/Delete",
            Retrieve = "PCHDW/RevenueAdhocManagement/Retrieve",
            List = "PCHDW/RevenueAdhocManagement/List",
            ExecuteSP = "PCHDW/RevenueAdhocManagement/ExecuteSP"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExecuteSP'
        ].forEach(x => {
            (<any>RevenueAdhocManagementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

