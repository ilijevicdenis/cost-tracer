using System;
using System.Collections;
using System.Collections.Generic;

namespace Domain.Collections
{
    public class CollectionBase<T> : IEnumerable<T> where T : class
    {
        private List<T> _collection;

        public CollectionBase(IEnumerable<T> collectionItem)
        {
            _collection = new List<T>(collectionItem) ?? throw new ArgumentNullException(nameof(collectionItem));
        }

        public void Add(T item) => _collection.Add(item);

        public void Delete(T item) => _collection.Remove(item);

        public IEnumerator<T> GetEnumerator()
        {
           return _collection.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
