import { NestFactory } from '@nestjs/core';
import { MessageAppModule } from './message_app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

//Esto es el Microservicio de MESSAGE

async function bootstrap() {
  // const app = await NestFactory.create(MessageAppModule);
  // await app.listen(3000);

  //Para que cora por TCP y no por puerto
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MessageAppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );
  await app.listen();

}
bootstrap();
