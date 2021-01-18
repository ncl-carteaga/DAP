namespace DAP.PCHDW {
    export namespace VwSqlJobListService {
        export const baseUrl = 'PCHDW/VwSqlJobList';

        export declare function Create(request: Serenity.SaveRequest<VwSqlJobListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VwSqlJobListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateWithSP(request: Serenity.SaveRequest<VwSqlJobListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VwSqlJobListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VwSqlJobListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHDW/VwSqlJobList/Create",
            Update = "PCHDW/VwSqlJobList/Update",
            UpdateWithSP = "PCHDW/VwSqlJobList/UpdateWithSP",
            Delete = "PCHDW/VwSqlJobList/Delete",
            Retrieve = "PCHDW/VwSqlJobList/Retrieve",
            List = "PCHDW/VwSqlJobList/List"
        }

        [
            'Create', 
            'Update', 
            'UpdateWithSP', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VwSqlJobListService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

