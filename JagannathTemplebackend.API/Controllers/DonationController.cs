using Microsoft.AspNetCore.Mvc;
using Razorpay.Api;
using JagannathTempleBackend.API.DTOS;
using JagannathTempleBackend.API.Models;
using JagannathTemplebackend.API.Data;
using System.Text;
using System.Security.Cryptography;
namespace JagannathTempleBackend.API.Controllers
{
    [Route("api/donate")]
    [ApiController]
    public class DonateController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public DonateController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [HttpPost("create-order")]
        public IActionResult CreateOrder([FromBody] DonationRequest request)
        {
            // Create order using Razorpay SDK
            var options = new Razorpay.Api.RazorpayClient(_config["Razorpay:Key"], _config["Razorpay:Secret"]);
            var orderOptions = new Dictionary<string, object>
        {
            { "amount", request.Amount * 100 }, // Amount in paise
            { "currency", "INR" },
            { "payment_capture", 1 }
        };

            var order = options.Order.Create(orderOptions);
            return Ok(new { order_id = order["id"].ToString(), amount = request.Amount * 100 });
        }

        [HttpPost("verify")]
        public async Task<IActionResult> Verify([FromBody] DonationVerification verification)
        {
            var isValid = VerifySignature(verification);
            if (!isValid)
                return BadRequest("Invalid payment signature");

            var donation = new Donation
            {
                Name = verification.Name,
                Email = verification.Email,
                Amount = verification.Amount,
                Date = DateTime.UtcNow,
                RazorpayOrderId = verification.RazorpayOrderId,
                RazorpayPaymentId = verification.RazorpayPaymentId,
                RazorpaySignature = verification.RazorpaySignature
            };

            _context.Donations.Add(donation);
            await _context.SaveChangesAsync();

            // TODO: Send Email Receipt (e.g., using SendGrid or SMTP)
            return Ok(new { success = true });
        }

        private bool VerifySignature(DonationVerification v)
        {
            var payload = $"{v.RazorpayOrderId}|{v.RazorpayPaymentId}";
            var secret = _config["Razorpay:Secret"];
            var expectedSignature = ComputeHmacSHA256(payload, secret);
            return expectedSignature == v.RazorpaySignature;
        }

        private string ComputeHmacSHA256(string text, string key)
        {
            var keyBytes = Encoding.UTF8.GetBytes(key);
            using var hmac = new HMACSHA256(keyBytes);
            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(text));
            return BitConverter.ToString(hash).Replace("-", "").ToLower();
        }
    }

}
