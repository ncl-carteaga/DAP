namespace DAP.DWSupport {
    export namespace PackageTypeCodeSuppService {
        export const baseUrl = 'DWSupport/PackageTypeCodeSupp';

        export declare function Create(request: Serenity.SaveRequest<PackageTypeCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PackageTypeCodeSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PackageTypeCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PackageTypeCodeSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/PackageTypeCodeSupp/Create",
            Update = "DWSupport/PackageTypeCodeSupp/Update",
            Delete = "DWSupport/PackageTypeCodeSupp/Delete",
            Retrieve = "DWSupport/PackageTypeCodeSupp/Retrieve",
            List = "DWSupport/PackageTypeCodeSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PackageTypeCodeSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

