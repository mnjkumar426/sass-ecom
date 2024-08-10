import { NestFactory } from '@nestjs/core';
import { AuthMsModule } from './auth-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthMsModule);
  await app.listen(3000);
}
bootstrap();
