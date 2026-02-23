import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certification } from './certification';
import { CertificationController } from './certification.controller';
import { CertificationService } from './certification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Certification])],
  controllers: [CertificationController],
  providers: [CertificationService],
})
export class CertificationModule {}
