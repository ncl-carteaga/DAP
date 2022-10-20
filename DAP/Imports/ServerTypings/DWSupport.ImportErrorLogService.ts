namespace DAP.DWSupport {
    export namespace ImportErrorLogService {
        export const baseUrl = 'DWSupport/ImportErrorLog';

        export declare function Create(request: Serenity.SaveRequest<ImportErrorLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ImportErrorLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function DeleteAll(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportErrorLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportErrorLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/ImportErrorLog/Create",
            Update = "DWSupport/ImportErrorLog/Update",
            Delete = "DWSupport/ImportErrorLog/Delete",
            DeleteAll = "DWSupport/ImportErrorLog/DeleteAll",
            Retrieve = "DWSupport/ImportErrorLog/Retrieve",
            List = "DWSupport/ImportErrorLog/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'DeleteAll', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ImportErrorLogService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

