namespace DAP.PCHODSNVS {
    export namespace NtrBudgetService {
        export const baseUrl = 'PCHODSNVS/NtrBudget';

        export declare function Create(request: Serenity.SaveRequest<NtrBudgetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NtrBudgetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrBudgetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrBudgetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/NtrBudget/Create",
            Update = "PCHODSNVS/NtrBudget/Update",
            Delete = "PCHODSNVS/NtrBudget/Delete",
            Retrieve = "PCHODSNVS/NtrBudget/Retrieve",
            List = "PCHODSNVS/NtrBudget/List",
            ExcelImport = "PCHODSNVS/NtrBudget/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>NtrBudgetService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

