namespace DAP.NCLHDSAR {
    export namespace MarketingRequestService {
        export const baseUrl = 'NCLHDSAR/MarketingRequest';

        export declare function Create(request: Serenity.SaveRequest<MarketingRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MarketingRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarketingRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarketingRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImportChangeOfAddress(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImportReturnMail(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImportOptOut(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHDSAR/MarketingRequest/Create",
            Update = "NCLHDSAR/MarketingRequest/Update",
            Delete = "NCLHDSAR/MarketingRequest/Delete",
            Retrieve = "NCLHDSAR/MarketingRequest/Retrieve",
            List = "NCLHDSAR/MarketingRequest/List",
            ExcelImportChangeOfAddress = "NCLHDSAR/MarketingRequest/ExcelImportChangeOfAddress",
            ExcelImportReturnMail = "NCLHDSAR/MarketingRequest/ExcelImportReturnMail",
            ExcelImportOptOut = "NCLHDSAR/MarketingRequest/ExcelImportOptOut"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImportChangeOfAddress', 
            'ExcelImportReturnMail', 
            'ExcelImportOptOut'
        ].forEach(x => {
            (<any>MarketingRequestService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

