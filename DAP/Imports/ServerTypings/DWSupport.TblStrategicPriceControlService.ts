namespace DAP.DWSupport {
    export namespace TblStrategicPriceControlService {
        export const baseUrl = 'DWSupport/TblStrategicPriceControl';

        export declare function Create(request: Serenity.SaveRequest<TblStrategicPriceControlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TblStrategicPriceControlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TblStrategicPriceControlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TblStrategicPriceControlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/TblStrategicPriceControl/Create",
            Update = "DWSupport/TblStrategicPriceControl/Update",
            Delete = "DWSupport/TblStrategicPriceControl/Delete",
            Retrieve = "DWSupport/TblStrategicPriceControl/Retrieve",
            List = "DWSupport/TblStrategicPriceControl/List",
            ExcelImport = "DWSupport/TblStrategicPriceControl/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ExcelImport'
        ].forEach(x => {
            (<any>TblStrategicPriceControlService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

