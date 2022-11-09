using Microsoft.EntityFrameworkCore.Migrations;

namespace Notification.API.Migrations
{
    public partial class noticedb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Message",
                table: "notifications");

            migrationBuilder.AlterColumn<string>(
                name: "Subject",
                table: "notifications",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "NotificationPostedBy",
                table: "notifications",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Body",
                table: "notifications",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Body",
                table: "notifications");

            migrationBuilder.AlterColumn<string>(
                name: "Subject",
                table: "notifications",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "NotificationPostedBy",
                table: "notifications",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<string>(
                name: "Message",
                table: "notifications",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
