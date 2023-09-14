
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.CappingAdjustmentsSuppRow;

    public class CappingAdjustmentsSuppRepository
    {
        private static MyRow.RowFields Fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();

                // --------- Check OCI Permission --------- //
                if (Authorization.HasPermission(PermissionKeys.Oceania))
                {
                    // find ship list by brand
                    var query_sc1 = new SqlQuery()
                    .From(ShipRow.Fields.TableName)
                    .Select(ShipRow.Fields.ShipCode.ColumnAlias)
                    .Where(new Criteria(ShipRow.Fields.Brand.ColumnAlias) == "RSSC");

                    // get query results, convert to string list
                    List<string> str_ls1 = new List<string>();
                    List<dynamic> result_ls1 = this.Connection.Query(query_sc1).ToList();
                    result_ls1.ForEach(n => str_ls1.Add(n.ShipCode));

                    var t = Row.ShipCd;

                    if (str_ls1.Contains(Row.ShipCd))
                    {
                        throw new ValidationError(string.Format(
                            "Authorization failed. RSSC access required."
                        ));
                    }
                }

                // --------- Check RSSC Permission --------- //
                else if (Authorization.HasPermission(PermissionKeys.Regent))
                {
                    // find ship list by brand
                    var query_sc1 = new SqlQuery()
                    .From(ShipRow.Fields.TableName)
                    .Select(ShipRow.Fields.ShipCode.ColumnAlias)
                    .Where(new Criteria(ShipRow.Fields.Brand.ColumnAlias) == "OCI");

                    // get query results, convert to string list
                    List<string> str_ls1 = new List<string>();
                    List<dynamic> result_ls1 = this.Connection.Query(query_sc1).ToList();
                    result_ls1.ForEach(n => str_ls1.Add(n.ShipCode));

                    var t = Row.ShipCd;

                    if (str_ls1.Contains(Row.ShipCd))
                    {
                        throw new ValidationError(string.Format(
                            "Authorization failed. OCI access required."
                        ));
                    }
                }

                // --------- Validate Empty Fields --------- //
                if (    Row.ShipCd.IsEmptyOrNull() 
                    ||  Row.EffectiveFromDate.ToString().IsEmptyOrNull() 
                    ||  Row.EffectiveToDate.ToString().IsEmptyOrNull()
                    ||  Row.CappedCabinCapacity.ToString().IsEmptyOrNull()
                    ||  Row.SingleCabinCapacity.ToString().IsEmptyOrNull()
                )
                {
                    throw new ValidationError(string.Format(
                        "Missing values for {0}, {1}, {2}, {3} or {4}."
                        , MyRow.Fields.ShipCd.Title
                        , MyRow.Fields.EffectiveFromDate.Title
                        , MyRow.Fields.EffectiveToDate.Title
                        , MyRow.Fields.CappedCabinCapacity.Title
                        , MyRow.Fields.SingleCabinCapacity.Title
                    ));
                }

                // --------- Validate Field Rules --------- //
                if ( !Row.CruiseCd.ToLower().StartsWith(Row.ShipCd.ToLower()) )
                {
                    throw new ValidationError(string.Format(
                        "{0} must begin with the 3 letter cruise code: {1}"
                        , MyRow.Fields.CruiseCd.Title
                        , Row.ShipCd
                    ));
                }
            }


            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate || IsUpdate)
                {
                    Row.ModifiedByNam = user.DisplayName.ToUpper();
                    Row.ModifiedTs = DateTime.Now;
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                // --------- Check OCI Permission --------- //
                if (Authorization.HasPermission(PermissionKeys.Oceania))
                {
                    // find ship list by brand
                    var query_sc1 = new SqlQuery()
                    .From(ShipRow.Fields.TableName)
                    .Select(ShipRow.Fields.ShipCode.ColumnAlias)
                    .Where(new Criteria(ShipRow.Fields.Brand.ColumnAlias) == "OCI");

                    // get query results, convert to string list
                    List<string> str_ls1 = new List<string>();
                    List<dynamic> result_ls1 = this.Connection.Query(query_sc1).ToList();
                    result_ls1.ForEach(n => str_ls1.Add(n.ShipCode));

                    // apply filter
                    if (result_ls1.Count > 0)
                    {
                        query.Where(Fld.ShipCd.In(
                            str_ls1
                        ));
                    }
                }

                // --------- Check RSSC Permission --------- //
                else if (Authorization.HasPermission(PermissionKeys.Regent))
                {
                    // find ship list by brand
                    var query_sc2 = new SqlQuery()
                    .From(ShipRow.Fields.TableName)
                    .Select(ShipRow.Fields.ShipCode.ColumnAlias)
                    .Where(new Criteria(ShipRow.Fields.Brand.ColumnAlias) == "RSSC");

                    // get query results, convert to string list
                    List<string> str_ls2 = new List<string>();
                    List<dynamic> result_ls2 = this.Connection.Query(query_sc2).ToList();
                    result_ls2.ForEach(n => str_ls2.Add(n.ShipCode));

                    // apply filter
                    if (result_ls2.Count > 0)
                    {
                        query.Where(Fld.ShipCd.In(
                            str_ls2
                        ));
                    }
                }
            }
        }
    }
}