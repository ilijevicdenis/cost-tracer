namespace DataAccess.Models
{
    public sealed class Currency : EntityBase
    {
        public string IsoName { get; set; }
        public bool IsActive { get; set; }
    }
}
