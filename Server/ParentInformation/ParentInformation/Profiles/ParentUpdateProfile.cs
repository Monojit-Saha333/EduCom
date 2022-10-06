using AutoMapper;
using ParentInformation.DTOs;
using ParentInformation.Models;

namespace ParentInformation.Profiles
{
    public class ParentUpdateProfile: Profile
    {
      public ParentUpdateProfile()
        {
            CreateMap<ParentUpdateDTO, Parent>();
        }
    }
   
}
