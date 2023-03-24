namespace DAP.DWSupport {
    export namespace CcOfficeLoationsService {
        export const baseUrl = 'DWSupport/CcOfficeLoations';

        export declare function Create(request: Serenity.SaveRequest<CcOfficeLoationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CcOfficeLoationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CcOfficeLoationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CcOfficeLoationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "DWSupport/CcOfficeLoations/Create",
            Update = "DWSupport/CcOfficeLoations/Update",
            Delete = "DWSupport/CcOfficeLoations/Delete",
            Retrieve = "DWSupport/CcOfficeLoations/Retrieve",
            List = "DWSupport/CcOfficeLoations/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CcOfficeLoationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

