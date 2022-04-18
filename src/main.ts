import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import SwaggerConfig from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Enable Swagger
  if (process.env.STAGE !== 'main') {
    SwaggerConfig.init(app);
  }
  await app.listen(Number(process.env.APP_PORT) || 8080)
}



bootstrap()
