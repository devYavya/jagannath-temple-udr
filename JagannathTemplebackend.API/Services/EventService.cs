using JagannathTempleBackend.API.Models;
using JagannathTemplebackend.API.Interfaces;
using JagannathTemplebackend.API.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JagannathTemplebackend.API.Services
{
    public class EventService : IEventService
    {
        private readonly AppDbContext _context;

        public EventService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Event> CreateEvent(Event eventObj)
        {
            _context.Events.Add(eventObj);
            await _context.SaveChangesAsync();
            return eventObj;
        }

        public async Task<Event> GetEventById(int eventId)
        {
            return await _context.Events.FindAsync(eventId);
        }

        public async Task<IEnumerable<Event>> GetAllEvents()
        {
            return await _context.Events.ToListAsync();
        }

        public async Task<Event> UpdateEvent(Event eventObj)
        {
            _context.Events.Update(eventObj);
            await _context.SaveChangesAsync();
            return eventObj;
        }

        public async Task<bool> DeleteEvent(int eventId)
        {
            var eventObj = await _context.Events.FindAsync(eventId);
            if (eventObj == null)
                return false;

            _context.Events.Remove(eventObj);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
