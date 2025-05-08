using System;
using System.ComponentModel.DataAnnotations;

namespace JagannathTempleBackend.API.Models
{
    public class Donation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string RazorpayOrderId { get; set; }
        public string RazorpayPaymentId { get; set; }
        public string RazorpaySignature { get; set; }
    }

}
