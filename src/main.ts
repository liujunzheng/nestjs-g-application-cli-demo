import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { TestGuard } from './guard/test.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new TestGuard());
  await app.listen(3000);
}
bootstrap();
