using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolStaff.Migrations
{
    public partial class staff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "schoolstaff",
                columns: table => new
                {
                    StaffId = table.Column<Guid>(nullable: false),
                    StaffName = table.Column<string>(nullable: false),
                    StaffEmail = table.Column<string>(nullable: false),
                    PhoneNumber = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_schoolstaff", x => x.StaffId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "schoolstaff");
        }
    }
}
