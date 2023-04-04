
namespace DAP.DWSupport.Repositories
{
    using DAP.DWSupport.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CmiSuppRow;

    public class CmiSuppRepository
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

                if (IsUpdate || IsCreate)
                {
                    var sDate = getStartDate();
                    var eDate = getEndDate();

                    if (!ValidStartEndDates())
                        throw new ValidationError("Start and end dates must match voyage code date. \nStart: "+sDate+"\nEnd: "+eDate);
                }
            }


            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                var user = (UserDefinition)Authorization.UserDefinition;

                if (IsCreate)
                {
                    Row.CreatedByNam = user.DisplayName;
                    Row.CreatedTs = DateTime.Now;
                    Row.ModifiedTs = DateTime.Now;
                }
                if (IsUpdate)
                {
                    Row.ModifiedByNam = user.DisplayName.ToUpper();
                    Row.ModifiedTs = DateTime.Now;
                }
            }


            private bool ValidStartEndDates()
            {
                // compare parsed dates to entered dates
                var sDate = getStartDate();
                var eDate = getEndDate();
                var t1 = Row.VoyageStartDate.Value.CompareTo(sDate);
                var t2 = Row.VoyageEndDate.Value.CompareTo(eDate);
                var sum = t1 + t2;  // both comparison must equal 0

                // validate start date parsed correctly
                if (sDate == DateTime.MinValue) return false;

                return (sum == 0);
            }

            private DateTime getStartDate()
            {
                // parse start cruise date     e.g:     PRL-20160111-04-MIA-MIA     /yyyy-mm-dd
                DateTime sDate;
                var str = Row.VoyageCd.Substring(4, 8).Insert(4, "-").Insert(7, "-"); // transform date string: 20160111 > 2016-01-11
                var validDate = DateTime.TryParse(str, out sDate);

                // invalid date parsing, return default value
                if (!validDate) sDate = DateTime.MinValue;

                return sDate;
            }

            private DateTime getEndDate()
            {
                var dDate = DateTime.MinValue;
                if (getStartDate() == dDate) return dDate;

                DateTime eDate;
                var length = Convert.ToDouble(Row.VoyageCd.Substring(13, 2));
                // get end date by adding trip length to start date 
                eDate = getStartDate().AddDays(length);

                return eDate;
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}