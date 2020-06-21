using Lab2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Lab2
{

    public partial class LabTwoProjPractice : DbContext
    {
        public static string Sql() => "Data Source=DESKTOP-A2GD3K0\\SQLEXPRESS;Initial Catalog=Lab2_ProjPractice;Integrated Security=True";

        public LabTwoProjPractice() 
        { }

        public LabTwoProjPractice(DbContextOptions<LabTwoProjPractice> options) : base(options) 
        { }

        public virtual DbSet<Client> Clients { get; set; }

        public virtual DbSet<Request> Requests { get; set; }

        public virtual DbSet<Service> Services { get; set; }

        public virtual DbSet<ServiceRequest> ServiceRequest { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Sql());
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>(entity =>
            {
                entity.Property(q => q.Id)
                        .HasColumnName("id");

                entity.Property(w => w.Name)
                        .HasColumnName("name");

                entity.Property(e => e.Age)
                        .HasColumnName("age");

                entity.Property(r => r.Сountry)
                        .HasColumnName("country");

                entity.HasMany(c => c.Requests)
                        .WithOne(d => d.Сlient)
                        .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.Property(q => q.Id)
                        .HasColumnName("id");

                entity.Property(w => w.ClientId)
                        .HasColumnName("client_id");

                entity.HasOne(e => e.Сlient)
                        .WithMany(r => r.Requests)
                        .HasForeignKey(t => t.ClientId)
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK_Requests_Clients");
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.Property(q => q.Id)
                        .HasColumnName("id");

                entity.Property(w => w.Name)
                        .HasColumnName("name");
                
                entity.Property(e => e.Сomplexity)
                        .HasColumnName("complexity");

                entity.HasMany(r => r.ServiceRequest)
                        .WithOne(t => t.Service)
                        .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<ServiceRequest>(entity =>
            {
                entity.HasKey(q => new {q.ServiceId, q.RequestId });

                entity.Property(w => w.ServiceId)
                        .HasColumnName("service_id");

                entity.Property(e => e.RequestId)
                        .HasColumnName("request_id");

                entity.HasOne(r => r.Request)
                        .WithMany(t => t.ServiceRequest)
                        .HasForeignKey(y => y.RequestId)
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK_ServiceRequest_Requests");

                entity.HasOne(u => u.Service)
                        .WithMany(i => i.ServiceRequest)
                        .HasForeignKey(o => o.ServiceId)
                        .OnDelete(DeleteBehavior.Cascade)
                        .HasConstraintName("FK_ServiceRequest_Services");
            });                     

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
