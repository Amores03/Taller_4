import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('MESSAGE_SERVICE') private clientMessage: ClientProxy){

  }

  getHello(): string {
    return 'Hola soy la APP PRINCIPAL';
  }

  nuevoUsauario(user:any){
    this.clientMessage.emit("NUEVO MENSSAGE", user)
    return 'enviado a la cola'
  }
}
