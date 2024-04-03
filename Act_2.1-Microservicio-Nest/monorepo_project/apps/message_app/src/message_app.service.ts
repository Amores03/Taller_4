import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageAppService {
  getHello(): string {
    return 'Hola soy el MICROSERVICIO MESSAGE';
  }
}
