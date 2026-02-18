import { Module } from '@nestjs/common';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { ExperienceService } from './experience/experience.service';
import { ExperienceController } from './experience/experience.controller';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { ProjectService } from './project/project.service';
import { ProjectController } from './project/project.controller';
import { CertificationService } from './certification/certification.service';
import { CertificationController } from './certification/certification.controller';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // 1. Cargar las variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [RoleController, UserController, ProfileController, ExperienceController, BlogController, CommentController, ProjectController, CertificationController, CategoryController],
  providers: [RoleService, UserService, ProfileService, ExperienceService, BlogService, CommentService, ProjectService, CertificationService, CategoryService],
})
export class AppModule {}
