using FluentValidation;
using ParentInformation.DTOs;
using ParentInformation.Models;
using System;
using System.Reflection.Metadata;

namespace ParentInformation.Validation
{
    public class ParentValidator : AbstractValidator<ParentDTO>
    {
        public ParentValidator()
        {
            RuleFor(x => x.StudentName).NotEmpty();
            RuleFor(x => x.StudentName).Matches("[a-zA-Z\\s]");
       

            RuleFor(x => x.ParentName)
                .NotNull()
                .NotEmpty().WithMessage("Required")
                .Matches("[a-zA-Z\\s]").WithMessage("{PropertyName} must contain only alphabets and space.");

             RuleFor(x => x.Zipcode)
            .NotEmpty().WithMessage("Required")
            .Matches("[1-9][0-9]{5}$").WithMessage("{PropertyName} must contain only 6 digits.");

            RuleFor(x => x.City)
            .NotNull()
            .NotEmpty().WithMessage("Required")
            .Matches("[a-zA-Z\\s]").WithMessage("{PropertyName} must contain only alphabets.");

            RuleFor(x => x.PrimaryContactPersonPhoneNumber)
                .NotEmpty().WithMessage("Required")
                .NotNull()
                .Matches("[6789]{1}[0-9]{9}").WithMessage("{PropertyName} must contain only 10 digits.");

            RuleFor(x => x.SecondaryContactPersonPhoneNumber)
                .NotEmpty().WithMessage("Required")
                .NotNull()
                .Matches("[6789]{1}[0-9]{9}").WithMessage("{PropertyName} must contain only 10 digits.");

            RuleFor(x => x.EmailAddress)
                .NotNull()
                .NotEmpty().WithMessage("Required")
                .EmailAddress().WithMessage("A valid email address is required");

         
           
            RuleFor(x => x.StudentRegistrationId)
                .NotEmpty().WithMessage("Required");

            RuleFor(x => x.Address)
                .NotEmpty().WithMessage("Required");

            RuleFor(x => x.State)
               .NotEmpty().WithMessage("Required");

            RuleFor(x => x.Country)
               .NotEmpty().WithMessage("Required");

            RuleFor(x => x.PrimaryContactPerson)
                 .NotEmpty().WithMessage("Required");

            RuleFor(x => x.SecondaryContactPerson)
               .NotEmpty().WithMessage("Required");

             RuleFor(x => x.Age)
                .GreaterThan(4).WithMessage("Age should be greater than 4.")
                .NotEmpty().WithMessage("Required");


            RuleFor(x => x.StudentRegistrationId)
                 .NotEmpty().WithMessage("Required")
                 .Matches("^R[0-9]{7}").WithMessage("Registration Number must start with R"); 






        }

    }
}
