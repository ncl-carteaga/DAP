namespace DAP.DWSupport {
    export namespace VoyageBudgetFinalSuppService {
        export const baseUrl = 'DWSupport/VoyageBudgetFinalSupp';

        export declare function Create(request: Serenity.SaveRequest<VoyageBudgetFinalSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VoyageBudgetFinalSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VoyageBudgetFinalSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VoyageBudgetFinalSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/VoyageBudgetFinalSupp/Create",
            Update = "DWSupport/VoyageBudgetFinalSupp/Update",
            Delete = "DWSupport/VoyageBudgetFinalSupp/Delete",
            Retrieve = "DWSupport/VoyageBudgetFinalSupp/Retrieve",
            List = "DWSupport/VoyageBudgetFinalSupp/List",
            ExcelImport = "DWSupport/VoyageBudgetFinalSupp/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>VoyageBudgetFinalSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

