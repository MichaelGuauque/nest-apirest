import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificationdetail } from './certificationdetail';

@Module({
  imports: [TypeOrmModule.forFeature([Certificationdetail])],
})
export class CertificationdetailModule {}
