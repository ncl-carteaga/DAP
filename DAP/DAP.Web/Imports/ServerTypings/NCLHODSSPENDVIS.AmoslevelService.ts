namespace DAP.NCLHODSSPENDVIS {
    export namespace AmoslevelService {
        export const baseUrl = 'NCLHODSSPENDVIS/Amoslevel';

        export declare function Create(request: Serenity.SaveRequest<AmoslevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AmoslevelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AmoslevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AmoslevelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "NCLHODSSPENDVIS/Amoslevel/Create",
            Update = "NCLHODSSPENDVIS/Amoslevel/Update",
            Delete = "NCLHODSSPENDVIS/Amoslevel/Delete",
            Retrieve = "NCLHODSSPENDVIS/Amoslevel/Retrieve",
            List = "NCLHODSSPENDVIS/Amoslevel/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AmoslevelService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

