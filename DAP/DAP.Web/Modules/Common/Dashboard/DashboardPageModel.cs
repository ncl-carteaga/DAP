
namespace DAP.Common
{
    public class DashboardPageModel
    {
        public int AllRequests { get; set; }
        public int ClosedRequest { get; set; }        
        public int Due10Days { get; set; }
        public int Overdue { get; set; }

        public int AllSwRequests { get; set; }
        public int SwDue10Days { get; set; }
        public int SwOverdue { get; set; }

    }
}