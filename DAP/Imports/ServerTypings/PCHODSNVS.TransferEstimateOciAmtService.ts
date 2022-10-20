namespace DAP.PCHODSNVS {
    export namespace TransferEstimateOciAmtService {
        export const baseUrl = 'PCHODSNVS/TransferEstimateOciAmt';

        export declare function Create(request: Serenity.SaveRequest<TransferEstimateOciAmtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TransferEstimateOciAmtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferEstimateOciAmtRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferEstimateOciAmtRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/TransferEstimateOciAmt/Create",
            Update = "PCHODSNVS/TransferEstimateOciAmt/Update",
            Delete = "PCHODSNVS/TransferEstimateOciAmt/Delete",
            Retrieve = "PCHODSNVS/TransferEstimateOciAmt/Retrieve",
            List = "PCHODSNVS/TransferEstimateOciAmt/List",
            ExcelImport = "PCHODSNVS/TransferEstimateOciAmt/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>TransferEstimateOciAmtService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

