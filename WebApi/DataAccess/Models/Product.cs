using System.Collections.Generic;

namespace DataAccess.Models
{
    public class Product : EntityBase
    {
        public string Name { get; set; }
        public MeasureUnit MeasureUnit { get; set; }
        public decimal Ammount { get; set; }
        public List<ReceiptProducts> ReceiptItems { get; set; }

        public Product()
        {
            MeasureUnit = new MeasureUnit();
        }
    }
}
