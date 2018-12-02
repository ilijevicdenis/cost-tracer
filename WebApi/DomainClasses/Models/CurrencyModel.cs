using System;

namespace Domain.Models
{
    public class CurrencyModel
    {
        public Guid Id { get; private set; }
        public string IsoName { get; private set; }

        private CurrencyModel()
        {}
    }
}
