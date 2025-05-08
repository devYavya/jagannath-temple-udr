namespace JagannathTempleBackend.API.Models
{
    public class Event
    {
        public int EventId { get; set; }
        public string EventName { get; set; }
        public DateTime EventDate { get; set; }
        public string Description { get; set; }
        public string Location { get; set; } // Example: 'Temple Hall', etc.
    }
}
