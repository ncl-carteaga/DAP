namespace DAP.PCHDW {
    export namespace DimOfficeService {
        export const baseUrl = 'PCHDW/DimOffice';

        export declare function Create(request: Serenity.SaveRequest<DimOfficeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DimOfficeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DimOfficeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DimOfficeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHDW/DimOffice/Create",
            Update = "PCHDW/DimOffice/Update",
            Delete = "PCHDW/DimOffice/Delete",
            Retrieve = "PCHDW/DimOffice/Retrieve",
            List = "PCHDW/DimOffice/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DimOfficeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

