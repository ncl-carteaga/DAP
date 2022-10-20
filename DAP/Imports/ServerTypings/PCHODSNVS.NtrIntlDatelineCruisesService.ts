namespace DAP.PCHODSNVS {
    export namespace NtrIntlDatelineCruisesService {
        export const baseUrl = 'PCHODSNVS/NtrIntlDatelineCruises';

        export declare function Create(request: Serenity.SaveRequest<NtrIntlDatelineCruisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NtrIntlDatelineCruisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrIntlDatelineCruisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrIntlDatelineCruisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/NtrIntlDatelineCruises/Create",
            Update = "PCHODSNVS/NtrIntlDatelineCruises/Update",
            Delete = "PCHODSNVS/NtrIntlDatelineCruises/Delete",
            Retrieve = "PCHODSNVS/NtrIntlDatelineCruises/Retrieve",
            List = "PCHODSNVS/NtrIntlDatelineCruises/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>NtrIntlDatelineCruisesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

