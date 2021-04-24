import { Module } from '@nestjs/common';
import { FindService } from './find.service';
import { RolController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityRol, EntityUser,EntityTypeDocument } from 'src/entities';


@Module({
  imports: [TypeOrmModule.forFeature([EntityRol])],
  controllers: [RolController],
  providers: [FindService]
})
export class RolModule {}
