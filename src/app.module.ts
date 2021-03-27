import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { CommonModule } from "./modules/@common/common.module";
import appConfig from "./modules/@common/config/app.config";
import typeormConfig from "./modules/@common/config/typeorm.config";



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig, typeormConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm.user'),
      name: 'user'
    }),
    CommonModule
  ],
  controllers:[AppController]
})

export class AppModule{}