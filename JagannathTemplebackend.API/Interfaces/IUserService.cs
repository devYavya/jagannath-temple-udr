using JagannathTempleBackend.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JagannathTemplebackend.API.Interfaces
{
    public interface IUserService
    {
        Task<User> CreateUser(User user);
        Task<User> GetUserById(int userId);
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> UpdateUser(User user);
        Task<bool> DeleteUser(int userId);
    }
}
