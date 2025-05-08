namespace JagannathTempleBackend.API.Models
{
    public class Shloka
    {
        public int ShlokaId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string Translation { get; set; }
        public string AudioUrl { get; set; } // Optional: URL to the audio version of the shloka
    }
}
