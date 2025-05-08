
namespace JagannathTempleBackend.API.DTOS
{

public class DonationRequest
{
    public string Name { get; set; }
    public string Email { get; set; }
    public decimal Amount { get; set; }
}

public class DonationVerification
{
    public string Name { get; set; }
    public string Email { get; set; }
    public decimal Amount { get; set; }
    public string RazorpayOrderId { get; set; }
    public string RazorpayPaymentId { get; set; }
    public string RazorpaySignature { get; set; }
}

}
