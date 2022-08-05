namespace DAP.PCHODS {
    export namespace UarEmployeeDirectreportsService {
        export const baseUrl = 'PCHODS/UarEmployeeDirectreports';

        export declare function Create(request: Serenity.SaveRequest<UarEmployeeDirectreportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UarEmployeeDirectreportsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UarEmployeeDirectreportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UarEmployeeDirectreportsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/UarEmployeeDirectreports/Create",
            Update = "PCHODS/UarEmployeeDirectreports/Update",
            Delete = "PCHODS/UarEmployeeDirectreports/Delete",
            Retrieve = "PCHODS/UarEmployeeDirectreports/Retrieve",
            List = "PCHODS/UarEmployeeDirectreports/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UarEmployeeDirectreportsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

