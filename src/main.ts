import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  const logger=new Logger()
  await app.listen(process.env.PORT || 8550);
  console.log("🚀 El servidor se está ejecutando en el puerto" );
  logger.log(`Server is runing in ${await app.getUrl()}`);
}
bootstrap();
