
namespace DAP.Common
{
    public class DashboardPageModel
    {
        public int AllRequests { get; set; }
        public int ClosedRequest { get; set; }        
        public int Due10Days { get; set; }
        public int Overdue { get; set; }
    }
}