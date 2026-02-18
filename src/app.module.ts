import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { ExpampleModule } from './expample/expample.module';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [ExpampleModule],
  controllers: [AppController, RoleController, UserController, ProfileController, ExperienceController, BlogController, CommentController, ProjectController, CertificationController, CategoryController],
  providers: [AppService, RoleService, UserService, ProfileService, ExperienceService, BlogService, CommentService, ProjectService, CertificationService, CategoryService],
})
export class AppModule {}
