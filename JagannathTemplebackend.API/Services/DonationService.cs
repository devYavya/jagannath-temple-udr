using JagannathTemplebackend.API.Interfaces;
using JagannathTemplebackend.API.Data;
using JagannathTempleBackend.API.Models;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace JagannathTemple.API.Services
{
    public class DonationService : IDonationService
    {
        private readonly AppDbContext _context;
        private readonly IEmailService _emailService;

        public DonationService(AppDbContext context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        public async Task<bool> ProcessDonation(Donation donation)
        {
            // Save donation to database
            _context.Donations.Add(donation);
            await _context.SaveChangesAsync();

            // Send donation receipt via email
            var emailSuccess = await _emailService.SendDonationReceipt(donation);
            return emailSuccess;
        }
    }
}
