using Microsoft.AspNetCore.Mvc;
using JagannathTemplebackend.API.Data;
using JagannathTempleBackend.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace JagannathTemplebackend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/user
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/user/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/user/register
        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(User user)
        {
            if (_context.Users.Any(u => u.Email == user.Email))
            {
                return BadRequest("Email already registered.");
            }

            user.PasswordHash = ComputeSha256Hash(user.PasswordHash);
            user.RegisteredDate = System.DateTime.UtcNow;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.UserId }, user);
        }

        // POST: api/user/login
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] LoginRequest login)
        {
            var passwordHash = ComputeSha256Hash(login.Password);
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == login.Email && u.PasswordHash == passwordHash);

            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            // For simplicity, returning user info. In real app, return JWT token or similar.
            return Ok(user);
        }

        private string ComputeSha256Hash(string rawData)
        {
            using (var sha256 = SHA256.Create())
            {
                var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(rawData));
                var builder = new StringBuilder();
                foreach (var b in bytes)
                {
                    builder.Append(b.ToString("x2"));
                }
                return builder.ToString();
            }
        }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
    }
}
