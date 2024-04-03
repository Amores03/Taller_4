import { Controller, Get } from '@nestjs/common';
import { MessageAppService } from './message_app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MessageAppController {
  constructor(private readonly messageAppService: MessageAppService) {}

  // @Get()
  // getHello(): string {
  //   return this.messageAppService.getHello();
  // }
  @EventPattern('NUEVO MENSSAGE')
  
  //funcion para manejar el evento
  handleNewMessage(data:any){
    console.log('Este es el mensaje entrante...', data)
  }
}
