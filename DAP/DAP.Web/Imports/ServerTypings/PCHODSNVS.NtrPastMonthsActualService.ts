namespace DAP.PCHODSNVS {
    export namespace NtrPastMonthsActualService {
        export const baseUrl = 'PCHODSNVS/NtrPastMonthsActual';

        export declare function Create(request: Serenity.SaveRequest<NtrPastMonthsActualRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NtrPastMonthsActualRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NtrPastMonthsActualRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NtrPastMonthsActualRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/NtrPastMonthsActual/Create",
            Update = "PCHODSNVS/NtrPastMonthsActual/Update",
            Delete = "PCHODSNVS/NtrPastMonthsActual/Delete",
            Retrieve = "PCHODSNVS/NtrPastMonthsActual/Retrieve",
            List = "PCHODSNVS/NtrPastMonthsActual/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>NtrPastMonthsActualService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

