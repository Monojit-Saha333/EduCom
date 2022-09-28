using AutoMapper;
using ParentInformation.DTOs;
using ParentInformation.Models;
using System.Security.Policy;
using System.Threading;

namespace ParentInformation.Profiles
{
    public class ParentProfile:Profile
    {
        public ParentProfile()
        {
            CreateMap<ParentDTO, Parent>();
        }
    }
}
