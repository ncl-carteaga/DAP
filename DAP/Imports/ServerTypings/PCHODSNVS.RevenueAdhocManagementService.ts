namespace DAP.PCHODSNVS {
    export namespace RevenueAdhocManagementService {
        export const baseUrl = 'PCHODSNVS/RevenueAdhocManagement';

        export declare function Create(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RevenueAdhocManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RevenueAdhocManagementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExecuteSP(request: Serenity.SaveRequest<RevenueAdhocManagementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/RevenueAdhocManagement/Create",
            Update = "PCHODSNVS/RevenueAdhocManagement/Update",
            Delete = "PCHODSNVS/RevenueAdhocManagement/Delete",
            Retrieve = "PCHODSNVS/RevenueAdhocManagement/Retrieve",
            List = "PCHODSNVS/RevenueAdhocManagement/List",
            ExecuteSP = "PCHODSNVS/RevenueAdhocManagement/ExecuteSP"
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

