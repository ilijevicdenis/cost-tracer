using System;

namespace DataAccess.Interfaces
{
    public interface IRepository<T> where T : class
    {
        T GetById(Guid id);
        void Update(T model);
        void Delete(T model);
        void Insert(T model);
    }
}
