import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConsoleLogger, VersioningType } from '@nestjs/common';
import helmet from 'helmet';

/* TODOS:
- Add CSRF
- Add login and auth to tests
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'Buscar Proyectos API',
      logLevels: ['log', 'fatal', 'error', 'warn', 'debug', 'verbose'],
    }),
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Buscar proyectos API')
    .setDescription('This API serves data related to projects')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
