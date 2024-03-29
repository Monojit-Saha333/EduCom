﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ParentInformation.Migrations
{
    public partial class db : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "parent",
                columns: table => new
                {
                    RegistationId = table.Column<Guid>(nullable: false),
                    UserName = table.Column<string>(nullable: false),
                    ParentName = table.Column<string>(nullable: false),
                    StudentRegistrationId = table.Column<string>(nullable: false),
                    StudentName = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: false),
                    State = table.Column<string>(nullable: false),
                    Country = table.Column<string>(nullable: false),
                    City = table.Column<string>(nullable: false),
                    Zipcode = table.Column<string>(nullable: false),
                    EmailAddress = table.Column<string>(nullable: true),
                    PrimaryContactPerson = table.Column<string>(nullable: false),
                    PrimaryContactPersonPhoneNumber = table.Column<string>(nullable: false),
                    SecondaryContactPerson = table.Column<string>(nullable: false),
                    SecondaryContactPersonPhoneNumber = table.Column<string>(nullable: false),
                    Age = table.Column<int>(nullable: false),
                    status = table.Column<string>(nullable: true),
                    RegistrationDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_parent", x => x.RegistationId);
                    table.UniqueConstraint("AK_parent_UserName", x => x.UserName);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "parent");
        }
    }
}
