using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using ParentInformation.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ParentInformation.Repositories
{
    public class ParentInfoRepository : IParentInfoRepository
    {
        private readonly ParentContext context;

        public ParentInfoRepository(ParentContext dbcontext)
        {
            this.context = dbcontext;
        }
        //create command
        public void CreateParent(Parent parent)
        {
            parent.status = "submitted";
            context.parent.Add(parent);
            context.SaveChanges();

        }

        public ResponseModel getResponse(Parent parent)
        {
            ResponseModel responseModel = new ResponseModel();
            //parent.status = "success";
            responseModel.RegistrationId = parent.RegistationId;
            responseModel.status = parent.status;
            return responseModel;
           }

       //read 
        public IEnumerable<Parent> GetAllParents()
        {
            var allparents = context.parent;

            return allparents;
        }

        public async Task<IEnumerable<Parent>> GetAllParentsAsync()
        {
            var parents = await context.parent.ToListAsync<Parent>();
            return parents;

        }

        public Parent GetParentByRegistrationId(Guid registrationId)
        {
            return context.parent.SingleOrDefault(s => s.RegistationId == registrationId);
        }

        public async Task<Parent> GetParentByRegistrationIdAsync(Guid RegistrationId)
        {
            var parentById = await context.parent.SingleOrDefaultAsync(s => s.RegistationId == RegistrationId);
            return parentById;

        }

        public void UpdateParent(Parent parent)
        {
            //var parenttobeupdated=GetParentByRegistrationId(parent.RegistationId);
            context.parent.Update(parent);
            context.SaveChanges();
        }
        public void DeleteParentByID(Guid parentId)
        {
            var x = GetParentByRegistrationId(parentId);
            context.parent.Remove(x);
            context.SaveChanges();
        }
    }
}
