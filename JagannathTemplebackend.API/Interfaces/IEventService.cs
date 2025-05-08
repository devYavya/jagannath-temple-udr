using JagannathTempleBackend.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JagannathTemplebackend.API.Interfaces
{
    public interface IEventService
    {
        Task<Event> CreateEvent(Event eventObj);
        Task<Event> GetEventById(int eventId);
        Task<IEnumerable<Event>> GetAllEvents();
        Task<Event> UpdateEvent(Event eventObj);
        Task<bool> DeleteEvent(int eventId);
    }
}
