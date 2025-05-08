using JagannathTempleBackend.API.Models;
using JagannathTemplebackend.API.Interfaces;
using JagannathTemplebackend.API.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JagannathTemplebackend.API.Services
{
    public class ShlokaService : IShlokaService
    {
        private readonly AppDbContext _context;

        public ShlokaService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Shloka> CreateShloka(Shloka shloka)
        {
            _context.Shlokas.Add(shloka);
            await _context.SaveChangesAsync();
            return shloka;
        }

        public async Task<Shloka> GetShlokaById(int shlokaId)
        {
            return await _context.Shlokas.FindAsync(shlokaId);
        }

        public async Task<IEnumerable<Shloka>> GetAllShlokas()
        {
            return await _context.Shlokas.ToListAsync();
        }

        public async Task<Shloka> UpdateShloka(Shloka shloka)
        {
            _context.Shlokas.Update(shloka);
            await _context.SaveChangesAsync();
            return shloka;
        }

        public async Task<bool> DeleteShloka(int shlokaId)
        {
            var shloka = await _context.Shlokas.FindAsync(shlokaId);
            if (shloka == null)
                return false;

            _context.Shlokas.Remove(shloka);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
