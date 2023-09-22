
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
    using MyRow = Entities.AirCostAdjSuppRow;

    public class AirCostAdjSuppRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

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

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {
                base.BeforeSave();

                // --------- CONSTRAINT FOR INSERTING / UPDATING --------- //
                // New records will have a default effective date.
                // Updated records will cause an update
                // to a previous record and will insert a new one.
                // --------- ----------------------------------- --------- //
                if (this.Connection.Exists<MyRow>(
                    MyRow.Fields.VoyageCd == Row.VoyageCd
                    &&
                    MyRow.Fields.RmEstimatedAirCost != Row.RmEstimatedAirCost.Value
                ))
                {
                    // SELECT previous record
                    var row_old_rec = this.Connection.First<MyRow>(
                        new Criteria(MyRow.Fields.VoyageCd) == Row.VoyageCd &
                        new Criteria(MyRow.Fields.EffectiveToDt) == DateTime.Parse("12/30/9999"));
                    // NEW row for insert
                    //Row.VoyageCd = "VIV-20231229-09-SJU-SJU";
                    var row_new_rec = Row;
                    row_new_rec.EffectiveToDt = DateTime.Parse("12/30/9999");
                    row_new_rec.VoyageCd = Row.VoyageCd;
                    row_new_rec.RmEstimatedAirCost = Row.RmEstimatedAirCost;
                    // UPDATE previous record
                    row_old_rec.EffectiveToDt = row_new_rec.EffectiveFromDt.Value.AddDays(-1);
                    this.Connection.UpdateById<MyRow>(row_old_rec);
                    // INSERT new record
                    this.Connection.Insert<MyRow>(row_new_rec);
                }
            }



            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;
                if (IsCreate)
                {
                    Row.CreatedByNam = user.Username.ToUpper();
                    Row.CreatedTs = DateTime.Now;
                }
                Row.ModifiedByNam = user.Username.ToUpper();
                Row.ModifiedTs = DateTime.Now;

            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                query.Where(new Criteria(fld.EffectiveToDt) == DateTime.Parse("12/30/9999"));
            }
        }
    }
}