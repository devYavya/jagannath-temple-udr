using JagannathTempleBackend.API.Models;
using System.Threading.Tasks;

namespace JagannathTemplebackend.API.Interfaces
{
    public interface IDonationService
    {
        Task<bool> ProcessDonation(Donation donation);
    }
}
