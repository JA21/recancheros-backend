import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { FindService } from './service/find.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityRol, EntityUser,EntityTypeDocument } from 'src/entities';


@Module({
  imports: [TypeOrmModule.forFeature([EntityUser,EntityRol,EntityTypeDocument])],
  controllers: [UserController],
  providers: [FindService]
})
export class UserModule {}
