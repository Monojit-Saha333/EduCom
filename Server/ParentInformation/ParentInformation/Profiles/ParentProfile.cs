using AutoMapper;
using ParentInfo.API.DTOs;
using ParentInfo.API.Models;
using System.Security.Policy;
using System.Threading;

namespace ParentInfo.API.Profiles
{
    public class ParentProfile : Profile
    {
        public ParentProfile()
        {
            CreateMap<ParentDTO, Parent>();
        }
    }
}
