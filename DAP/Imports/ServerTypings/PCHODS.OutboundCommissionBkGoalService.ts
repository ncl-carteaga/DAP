namespace DAP.PCHODS {
    export namespace OutboundCommissionBkGoalService {
        export const baseUrl = 'PCHODS/OutboundCommissionBkGoal';

        export declare function Create(request: Serenity.SaveRequest<OutboundCommissionBkGoalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutboundCommissionBkGoalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutboundCommissionBkGoalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutboundCommissionBkGoalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PCHODS/OutboundCommissionBkGoal/Create",
            Update = "PCHODS/OutboundCommissionBkGoal/Update",
            Delete = "PCHODS/OutboundCommissionBkGoal/Delete",
            Retrieve = "PCHODS/OutboundCommissionBkGoal/Retrieve",
            List = "PCHODS/OutboundCommissionBkGoal/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutboundCommissionBkGoalService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

