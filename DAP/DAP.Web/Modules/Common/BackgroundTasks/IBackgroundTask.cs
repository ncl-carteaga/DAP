
namespace DAP.Common.Services
{
    public interface IBackgroundTask
    {
        void Initialize();
        void Reset();
        void Process();
    }
}
