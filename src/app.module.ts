import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./modules/@common/common.module";
import appConfig from "./modules/@common/config/app.config";
import typeormConfig from "./modules/@common/config/typeorm.config";
import { UserModule } from "./modules/user/user.module";
import {RolModule} from "./modules/rol/rol.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig, typeormConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm')
    }),
    
    UserModule,RolModule
  ],
  controllers:[AppController],
  providers:[AppService]
})

export class AppModule{}