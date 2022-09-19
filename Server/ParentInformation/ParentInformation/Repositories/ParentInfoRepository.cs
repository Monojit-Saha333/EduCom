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
           /* Parent parent1 = new Parent()
            {
                StudentRegistrationId = parent.StudentRegistrationId,
                RegistationId = parent.RegistationId,
                ParentName = parent.ParentName,
                StudentName = parent.StudentName,
                Address = parent.Address,
                State = parent.State,
                Country = parent.Country,
                City = parent.City,
                Zipcode = parent.Zipcode,
            EmailAddress = parent.EmailAddress,
       PrimaryContactPerson =parent.PrimaryContactPerson,
        PrimaryContactPersonPhoneNumber=parent.PrimaryContactPersonPhoneNumber,
        SecondaryContactPerson= parent.SecondaryContactPerson,
                SecondaryContactPersonPhoneNumber =parent.SecondaryContactPersonPhoneNumber
    };*/
           
             context.parent.Add(parent);
             context.SaveChanges();
            
           
        }

       //read 
        public IEnumerable<Parent> GetAllParents()
        {
           return context.parent;
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
            context.parent.Update(parent);
        }
        public void DeleteParentByID(Guid parentId)
        {
            var x = GetParentByRegistrationId(parentId);
            context.parent.Remove(x);
        }
    }
}
