using DataAccess.Interfaces;
using Domain.Collections;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;

namespace WebApi.Controllers
{
    public sealed class ProductCategoryController : ControllerBase
    {
        private readonly IRepository<ProductCategoryModel> _crudRepo;
        private readonly IGetAll<ProductCategoryModels> _getAllRepo;

        public ProductCategoryController(IRepository<ProductCategoryModel> crudRepo, IGetAll<ProductCategoryModels> getAllRepo)
        {
            _crudRepo = crudRepo ?? throw new ArgumentNullException(nameof(crudRepo));
            _getAllRepo = getAllRepo ?? throw new ArgumentNullException(nameof(getAllRepo));
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var results = _getAllRepo.GetAll();
                return Ok(JsonConvert.SerializeObject(results));
            }
            catch
            {
                throw;
            }
        }

        [HttpPost]
        public IActionResult Add(ProductCategoryModel productCategory)
        {
            try
            {
                _crudRepo.Insert(productCategory);
                return Ok();
            }
            catch
            {
                throw;
            }
        }
    }
}
