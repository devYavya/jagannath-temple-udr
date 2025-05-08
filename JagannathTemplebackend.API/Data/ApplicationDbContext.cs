using Microsoft.EntityFrameworkCore;
using JagannathTempleBackend.API.Models;

namespace JagannathTemplebackend.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Donation> Donations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Shloka> Shlokas { get; set; }
    }
}
