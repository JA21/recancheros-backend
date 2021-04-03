import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { FindService } from './service/find.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityUser } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([EntityUser])],
  controllers: [UserController],
  providers: [FindService]
})
export class UserModule {}
