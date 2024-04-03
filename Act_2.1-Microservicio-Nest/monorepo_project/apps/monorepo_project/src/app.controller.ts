import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  nuevoUsauario(@Body() body:any): string {
    return this.appService.nuevoUsauario(body);
  }
}
