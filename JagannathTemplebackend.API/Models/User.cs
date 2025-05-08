namespace JagannathTempleBackend.API.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; } // Use proper hashing for password security
        public string Role { get; set; } // Example: 'Admin', 'Donor', etc.
        public DateTime RegisteredDate { get; set; }
    }
}
