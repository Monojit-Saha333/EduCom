using AutoMapper;
using ParentInfo.API.DTOs;
using ParentInfo.API.Models;

namespace ParentInfo.API.Profiles
{
    public class ParentUpdateProfile : Profile
    {
        public ParentUpdateProfile()
        {
            CreateMap<ParentUpdateDTO, Parent>();
        }
    }

}
