
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.AmenitiesSuppRow;

    public class AmenitiesSuppRepository
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

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate)
                {
                    Row.CreatedByNam = user.Username.ToUpper();
                    Row.CreatedDat = DateTime.Now;
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.ModifiedDat = DateTime.Now;
                }
                if (IsUpdate)
                {
                    Row.ModifiedByNam = user.Username.ToUpper();
                    Row.ModifiedDat = DateTime.Now;
                }
            }

            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (IsUpdate)
                {
                    if (this.Connection.Exists<AmenitiesSuppRow>(MyRow.Fields.AmenityCd == Row.AmenityCd && MyRow.Fields.AmenityId != Row.AmenityId.Value))
                    {
                        throw new ValidationError("Amenity Code Already Exists!");
                    }
                }

                if (IsCreate)
                {
                    if (this.Connection.Exists<AmenitiesSuppRow>(MyRow.Fields.AmenityCd == Row.AmenityCd))
                    {
                        throw new ValidationError("Amenity Code Already Exists!");
                    }
                }


            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}