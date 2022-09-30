using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace UploadImage.Models
{
    public partial class ImageDBContext : DbContext
    {
        public ImageDBContext()
        {
        }

        public ImageDBContext(DbContextOptions<ImageDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblImage> TblImages { get; set; }
        public virtual DbSet<TblLogin> TblLogins { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TblImage>(entity =>
            {
                entity.ToTable("tblImages");

                entity.Property(e => e.ImageUrl)
                    .HasMaxLength(2000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.ToTable("tblLogin");

                entity.Property(e => e.Password).HasMaxLength(100);

                entity.Property(e => e.UserName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
