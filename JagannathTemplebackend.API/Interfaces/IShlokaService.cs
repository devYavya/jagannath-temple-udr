using JagannathTempleBackend.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JagannathTemplebackend.API.Interfaces
{
    public interface IShlokaService
    {
        Task<Shloka> CreateShloka(Shloka shloka);
        Task<Shloka> GetShlokaById(int shlokaId);
        Task<IEnumerable<Shloka>> GetAllShlokas();
        Task<Shloka> UpdateShloka(Shloka shloka);
        Task<bool> DeleteShloka(int shlokaId);
    }
}
