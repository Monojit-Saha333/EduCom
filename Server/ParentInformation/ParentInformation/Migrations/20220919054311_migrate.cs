using Microsoft.EntityFrameworkCore.Migrations;

namespace ParentInformation.Migrations
{
    public partial class migrate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "parents",
                columns: table => new
                {
                    RegistationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ParentName = table.Column<string>(nullable: false),
                    StudentRegistrationId = table.Column<string>(nullable: false),
                    StudentName = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: false),
                    State = table.Column<string>(nullable: false),
                    Country = table.Column<string>(nullable: false),
                    City = table.Column<string>(nullable: false),
                    Zipcode = table.Column<long>(nullable: false),
                    EmailAddress = table.Column<string>(nullable: true),
                    PrimaryContactPerson = table.Column<string>(nullable: false),
                    PrimaryContactPersonPhoneNumber = table.Column<long>(nullable: false),
                    SecondaryContactPerson = table.Column<string>(nullable: false),
                    SecondaryContactPersonPhoneNumber = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_parents", x => x.RegistationId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "parents");
        }
    }
}
