using Microsoft.AspNetCore.Mvc;
using JagannathTemplebackend.API.Data;
using JagannathTempleBackend.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace JagannathTemplebackend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShlokaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ShlokaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shloka>>> GetShlokas()
        {
            return await _context.Shlokas.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Shloka>> GetShloka(int id)
        {
            var shloka = await _context.Shlokas.FindAsync(id);
            if (shloka == null)
            {
                return NotFound();
            }
            return shloka;
        }

        [HttpPost]
        public async Task<ActionResult<Shloka>> CreateShloka(Shloka shloka)
        {
            _context.Shlokas.Add(shloka);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetShloka), new { id = shloka.ShlokaId }, shloka);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateShloka(int id, Shloka shloka)
        {
            if (id != shloka.ShlokaId)
            {
                return BadRequest();
            }

            _context.Entry(shloka).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Shlokas.Any(e => e.ShlokaId == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShloka(int id)
        {
            var shloka = await _context.Shlokas.FindAsync(id);
            if (shloka == null)
            {
                return NotFound();
            }

            _context.Shlokas.Remove(shloka);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
