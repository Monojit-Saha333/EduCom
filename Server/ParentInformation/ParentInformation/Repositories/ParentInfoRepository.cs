using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using ParentInformation.Models;
using System.Collections.Generic;
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
            if(parent==null)
            throw new System.NotImplementedException();
            context.parents.Add(parent);
        }

       //read 
        public IEnumerable<Parent> GetAllParents()
        {
           return context.parents;
        }

        public async Task<IEnumerable<Parent>> GetAllParentsAsync()
        {
            var parents = await context.parents.ToListAsync<Parent>();
            return parents;

        }

        public Parent GetParentByRegistrationId(int registrationId)
        {
            return context.parents.SingleOrDefault(s => s.RegistationId == registrationId);
        }

        public async Task<Parent> GetParentByRegistrationIdAsync(int registrationId)
        {
            var parentById = await context.parents.SingleOrDefaultAsync(s => s.RegistationId == registrationId);
            return parentById;

        }

        public void UpdateParent(Parent parent)
        {
            context.parents.Update(parent);
        }
        public void DeleteParentByID(int parentId)
        {
            var x = GetParentByRegistrationId(parentId);
            context.parents.Remove(x);
        }

    }
}
