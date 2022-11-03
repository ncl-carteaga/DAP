namespace DAP.PCHODSNVS {
    export namespace ConsortiumExceptionListService {
        export const baseUrl = 'PCHODSNVS/ConsortiumExceptionList';

        export declare function Create(request: Serenity.SaveRequest<ConsortiumExceptionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ConsortiumExceptionListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsortiumExceptionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsortiumExceptionListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODSNVS/ConsortiumExceptionList/Create",
            Update = "PCHODSNVS/ConsortiumExceptionList/Update",
            Delete = "PCHODSNVS/ConsortiumExceptionList/Delete",
            Retrieve = "PCHODSNVS/ConsortiumExceptionList/Retrieve",
            List = "PCHODSNVS/ConsortiumExceptionList/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ConsortiumExceptionListService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

