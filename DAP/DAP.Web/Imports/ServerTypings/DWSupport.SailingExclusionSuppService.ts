namespace DAP.DWSupport {
    export namespace SailingExclusionSuppService {
        export const baseUrl = 'DWSupport/SailingExclusionSupp';

        export declare function Create(request: Serenity.SaveRequest<SailingExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SailingExclusionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SailingExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SailingExclusionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/SailingExclusionSupp/Create",
            Update = "DWSupport/SailingExclusionSupp/Update",
            Delete = "DWSupport/SailingExclusionSupp/Delete",
            Retrieve = "DWSupport/SailingExclusionSupp/Retrieve",
            List = "DWSupport/SailingExclusionSupp/List",
            ExcelImport = "DWSupport/SailingExclusionSupp/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>SailingExclusionSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

