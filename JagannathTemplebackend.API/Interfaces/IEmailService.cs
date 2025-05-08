using JagannathTempleBackend.API.Models;
using System.Threading.Tasks;

namespace JagannathTemplebackend.API.Interfaces
{
    public interface IEmailService
    {
        Task<bool> SendDonationReceipt(Donation donation);
    }
}
