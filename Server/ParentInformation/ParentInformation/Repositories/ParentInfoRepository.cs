using Fare;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using ParentInfo.API.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ParentInfo.API.Repositories
{
    public class ParentInfoRepository : IParentInfoRepository
    {
        private readonly ParentContext context;

        public ParentInfoRepository(ParentContext dbcontext)
        {
            context = dbcontext;
        }
        //create command
        public void CreateParent(Parent parent)
        {
            parent.status = "pending";
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
            var parents = await context.parent.ToListAsync();
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
            parent.status = "pending";
            context.parent.Update(parent);
            context.SaveChanges();
        }
        public void DeleteParentByID(Guid parentId)
        {
            var x = GetParentByRegistrationId(parentId);
            context.parent.Remove(x);
            context.SaveChanges();
        }

        public Parent GetParentByUsername(string username)
        {
            var parentsbyusername = context.parent.SingleOrDefault(u => u.UserName == username);
            if (parentsbyusername == null)
                return null;
            return parentsbyusername;
        }

        void IParentInfoRepository.UpdateStatus(Guid registrationid, string status)
        {
            if (registrationid == null || status ==null)
                throw new NotImplementedException();
            var parent = GetParentByRegistrationId(registrationid);

            parent.status = status;
            context.parent.Update(parent);

            context.SaveChanges();
        }
    }
}
