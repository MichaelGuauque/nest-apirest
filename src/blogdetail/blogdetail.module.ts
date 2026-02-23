import { Module } from '@nestjs/common';
import { Blogdetail } from './blogdetail';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blogdetail])], // Esto hace que Nest registre la entidad
})
export class BlogdetailModule {}
