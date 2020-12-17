using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 8, ErrorMessage = "Password must be 8 to 255 charaters long.")]
        public string Password { get; set; }
    }
}