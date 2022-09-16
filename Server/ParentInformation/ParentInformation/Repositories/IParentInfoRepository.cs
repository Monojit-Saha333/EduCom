﻿using ParentInformation.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ParentInformation.Repositories
{
    public interface IParentInfoRepository
    {

        //create
        public void CreateParent(Parent parent);

        //reads
        public Task<Parent> GetParentByRegistrationIdAsync(int registrationId);
        public Parent GetParentByRegistrationId(int registrationId);
        public Task<IEnumerable<Parent>> GetAllParentsAsync();
        public IEnumerable<Parent> GetAllParents();
        //update
        public void UpdateParent(Parent parent);
        //delete
        public void DeleteParentByID(int parentId);
    }
}
