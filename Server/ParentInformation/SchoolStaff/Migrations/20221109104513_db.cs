using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolStaff.Migrations
{
    public partial class db : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "schoolstaff",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "schoolstaff",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "schoolstaff",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "schoolstaff",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "schoolstaff",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "schoolstaff",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Zipcode",
                table: "schoolstaff",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddUniqueConstraint(
                name: "AK_schoolstaff_Username",
                table: "schoolstaff",
                column: "Username");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "AK_schoolstaff_Username",
                table: "schoolstaff");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "schoolstaff");

            migrationBuilder.DropColumn(
                name: "City",
                table: "schoolstaff");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "schoolstaff");

            migrationBuilder.DropColumn(
                name: "State",
                table: "schoolstaff");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "schoolstaff");

            migrationBuilder.DropColumn(
                name: "Zipcode",
                table: "schoolstaff");

            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "schoolstaff",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
