namespace DAP.PCHODSNVS {
    export namespace SuppKeyAcctTargetService {
        export const baseUrl = 'PCHODSNVS/SuppKeyAcctTarget';

        export declare function Create(request: Serenity.SaveRequest<SuppKeyAcctTargetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SuppKeyAcctTargetRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppKeyAcctTargetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppKeyAcctTargetRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport2(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/SuppKeyAcctTarget/Create",
            Update = "PCHODSNVS/SuppKeyAcctTarget/Update",
            Delete = "PCHODSNVS/SuppKeyAcctTarget/Delete",
            Retrieve = "PCHODSNVS/SuppKeyAcctTarget/Retrieve",
            List = "PCHODSNVS/SuppKeyAcctTarget/List",
            ExcelImport = "PCHODSNVS/SuppKeyAcctTarget/ExcelImport",
            ExcelImport2 = "PCHODSNVS/SuppKeyAcctTarget/ExcelImport2"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport', 
            'ExcelImport2'
        ].forEach(x => {
            (<any>SuppKeyAcctTargetService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

