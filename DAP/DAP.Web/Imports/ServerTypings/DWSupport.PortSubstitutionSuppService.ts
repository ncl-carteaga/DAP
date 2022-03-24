namespace DAP.DWSupport {
    export namespace PortSubstitutionSuppService {
        export const baseUrl = 'DWSupport/PortSubstitutionSupp';

        export declare function Create(request: Serenity.SaveRequest<PortSubstitutionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PortSubstitutionSuppRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PortSubstitutionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PortSubstitutionSuppRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/PortSubstitutionSupp/Create",
            Update = "DWSupport/PortSubstitutionSupp/Update",
            Delete = "DWSupport/PortSubstitutionSupp/Delete",
            Retrieve = "DWSupport/PortSubstitutionSupp/Retrieve",
            List = "DWSupport/PortSubstitutionSupp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PortSubstitutionSuppService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

