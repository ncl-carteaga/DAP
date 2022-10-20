namespace DAP.PCHODSNVS {
    export namespace NtrFcstService {
        export const baseUrl = 'PCHODSNVS/NtrFcst';

        export declare function Create(request: Serenity.SaveRequest<NtrFcstRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NtrFcstRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrFcstRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrFcstRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/NtrFcst/Create",
            Update = "PCHODSNVS/NtrFcst/Update",
            Delete = "PCHODSNVS/NtrFcst/Delete",
            Retrieve = "PCHODSNVS/NtrFcst/Retrieve",
            List = "PCHODSNVS/NtrFcst/List",
            ExcelImport = "PCHODSNVS/NtrFcst/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>NtrFcstService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

