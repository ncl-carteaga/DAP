namespace DAP.PCHODSNVS {
    export namespace NtrBudgetByChannelService {
        export const baseUrl = 'PCHODSNVS/NtrBudgetByChannel';

        export declare function Create(request: Serenity.SaveRequest<NtrBudgetByChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NtrBudgetByChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrBudgetByChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrBudgetByChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/NtrBudgetByChannel/Create",
            Update = "PCHODSNVS/NtrBudgetByChannel/Update",
            Delete = "PCHODSNVS/NtrBudgetByChannel/Delete",
            Retrieve = "PCHODSNVS/NtrBudgetByChannel/Retrieve",
            List = "PCHODSNVS/NtrBudgetByChannel/List",
            ExcelImport = "PCHODSNVS/NtrBudgetByChannel/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>NtrBudgetByChannelService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

