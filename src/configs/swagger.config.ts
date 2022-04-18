import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export default class SwaggerConfig {
  static init(app: INestApplication): void {
    const options = new DocumentBuilder()
      .setTitle('NestJS Boilerplate - API')
      .setDescription('Endpoints da aplicação')
      .setVersion('1.0')
      .addBearerAuth()
      .build()

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document, {
      explorer: false,
      swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: 'alpha'
      }
    })
  }
}
