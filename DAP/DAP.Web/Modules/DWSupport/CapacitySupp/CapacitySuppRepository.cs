
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CapacitySuppRow;

    public class CapacitySuppRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();

                // --------- CONSTRAINT FOR INSERTING / UPDATING --------- //
                // New records will have a default effective date.
                // Updated records will cause an update
                // to a previous record and will insert a new one.
                // --------- ----------------------------------- --------- //

                // SELECT previous record, cannot update if exists
                if (this.Connection.Exists<MyRow>(
                        new Criteria(MyRow.Fields.ShipCd) == Row.ShipCd &
                        new Criteria(MyRow.Fields.EffectiveFromDt) == Row.EffectiveFromDt.Value &
                        new Criteria(MyRow.Fields.EffectiveToDt) == DateTime.Parse("12/30/9999") &
                        new Criteria(MyRow.Fields.DoCapacity) == Row.DoCapacity.Value &
                        new Criteria(MyRow.Fields.CabinCapacity) == Row.CabinCapacity.Value
                    )
                )
                {
                    throw new ValidationError(string.Format(
                        "An entry for this same record already exists."
                    ));
                }

                // SELECT previous record if exists
                var row_old_rec = new MyRow();
                try
                {
                    row_old_rec = this.Connection.First<MyRow>(
                        new Criteria(MyRow.Fields.ShipCd) == Row.ShipCd &&
                        new Criteria(MyRow.Fields.EffectiveFromDt) == Row.EffectiveFromDt.Value &&
                        new Criteria(MyRow.Fields.EffectiveToDt) == DateTime.Parse("12/30/9999")
                    );
                }
                catch (Exception e) { }


                // UPDATE DETECTED 
                if (IsUpdate)
                {
                    var user = (UserDefinition)Authorization.UserDefinition;

                    // Create new record
                    this.Connection.Insert(new CapacitySuppRow
                    {
                        ShipCd = Row.ShipCd,
                        DoCapacity = Row.DoCapacity,
                        CabinCapacity = Row.CabinCapacity,
                        EffectiveFromDt = Row.EffectiveFromDt,
                        EffectiveToDt = Row.EffectiveToDt,
                        SailStartDate = Row.SailStartDate,
                        SailEndDate = Row.SailEndDate,
                        CreatedByNam = user.Username.ToUpper(),
                        CreatedTs = DateTime.Now,
                        ModifiedTs = DateTime.Now,
                        ModifiedByNam = user.Username.ToUpper()
                    });

                    // close current with today's date
                    Row.EffectiveToDt = DateTime.Today;
                    if (row_old_rec.CapacityId != null)
                    {
                        row_old_rec.EffectiveToDt = DateTime.Today;
                        this.Connection.UpdateById<MyRow>(row_old_rec);
                    }
                }
                // INSERT DETECTED
                else if (IsCreate)
                {
                    // Default values for new record
                    Row.EffectiveToDt = DateTime.Parse("12/30/9999");
                    // Default values for previous record
                    if (row_old_rec.CapacityId != null)
                    {
                        // prevent new dialog updates to this field from updating historical record
                        row_old_rec.EffectiveToDt = Row.EffectiveFromDt.Value.AddDays(-1);
                        this.Connection.UpdateById<MyRow>(row_old_rec);
                    }
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
                    Row.CreatedByNam = user.DisplayName.ToUpper();
                    Row.CreatedTs = DateTime.Now;
                }

                if (IsUpdate)
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

                query.Where(new Criteria(fld.EffectiveToDt) == DateTime.Parse("12/30/9999"));
            }
        }
    }
}