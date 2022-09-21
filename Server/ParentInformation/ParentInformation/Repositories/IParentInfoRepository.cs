using ParentInformation.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ParentInformation.Repositories
{
    public interface IParentInfoRepository
    {

        //create
        public void CreateParent(Parent parent);

        //reads
        public Task<Parent> GetParentByRegistrationIdAsync(Guid registrationId);
        public Parent GetParentByRegistrationId(Guid registrationId);
        public Task<IEnumerable<Parent>> GetAllParentsAsync();
        public IEnumerable<Parent> GetAllParents();
        //update
        public void UpdateParent(Parent parent);
        //delete
        public void DeleteParentByID(Guid parentId);
        public ResponseModel getResponse(Parent parent);
    }
}
