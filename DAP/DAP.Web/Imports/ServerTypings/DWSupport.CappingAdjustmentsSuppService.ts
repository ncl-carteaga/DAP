namespace DAP.DWSupport {
    export namespace CappingAdjustmentsSuppService {
        export const baseUrl = 'DWSupport/CappingAdjustmentsSupp';

        export declare function Create(request: Serenity.SaveRequest<CappingAdjustmentsSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CappingAdjustmentsSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CappingAdjustmentsSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CappingAdjustmentsSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/CappingAdjustmentsSupp/Create",
            Update = "DWSupport/CappingAdjustmentsSupp/Update",
            Delete = "DWSupport/CappingAdjustmentsSupp/Delete",
            Retrieve = "DWSupport/CappingAdjustmentsSupp/Retrieve",
            List = "DWSupport/CappingAdjustmentsSupp/List",
            ExcelImport = "DWSupport/CappingAdjustmentsSupp/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>CappingAdjustmentsSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

