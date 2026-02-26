import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role';
import { RoleController } from './role.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    controllers: [RoleController],
})
export class RoleModule {}
