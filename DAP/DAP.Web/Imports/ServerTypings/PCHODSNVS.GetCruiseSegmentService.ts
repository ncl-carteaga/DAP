namespace DAP.PCHODSNVS {
    export namespace GetCruiseSegmentService {
        export const baseUrl = 'PCHODSNVS/GetCruiseSegment';

        export declare function Create(request: Serenity.SaveRequest<GetCruiseSegmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GetCruiseSegmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GetCruiseSegmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GetCruiseSegmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/GetCruiseSegment/Create",
            Update = "PCHODSNVS/GetCruiseSegment/Update",
            Delete = "PCHODSNVS/GetCruiseSegment/Delete",
            Retrieve = "PCHODSNVS/GetCruiseSegment/Retrieve",
            List = "PCHODSNVS/GetCruiseSegment/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>GetCruiseSegmentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

