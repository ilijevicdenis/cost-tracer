using System;

namespace Domain.Models
{
    public sealed class MeasureUnitModel
    {
        public Guid Id { get; private set; }
        public string Value { get; private set; }
        public bool IsActive { get; private set; }

        private MeasureUnitModel()
        { }
    }
}
