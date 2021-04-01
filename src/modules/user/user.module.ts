import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { FindService } from './service/find.service';

@Module({
  controllers: [UserController],
  providers: [FindService]
})
export class UserModule {}
