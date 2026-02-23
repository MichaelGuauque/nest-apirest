import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])], // Esto hace que Nest registre la entidad
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
