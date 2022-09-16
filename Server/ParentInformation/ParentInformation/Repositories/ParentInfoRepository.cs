using Microsoft.EntityFrameworkCore;
using ParentInformation.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParentInformation.Repositories
{
    public class ParentInfoRepository : IParentInfoRepository
    {
        private readonly ParentContext dbcontext;

        public ParentInfoRepository(ParentContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }

        public void CreateParent(Parent parent)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteParentByID(int parentId)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Parent> GetAllParents()
        {
            throw new System.NotImplementedException();
        }

        public Task<IEnumerable<Parent>> GetAllParentsAsync()
        {
            throw new System.NotImplementedException();
        }

        public Parent GetParentByRegistrationId(int registrationId)
        {
            throw new System.NotImplementedException();
        }

        public Task<Parent> GetParentByRegistrationIdAsync(int registrationId)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateParent(Parent parent)
        {
            throw new System.NotImplementedException();
        }
    }
}
