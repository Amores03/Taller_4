import { Module } from '@nestjs/common';
import { MessageAppController } from './message_app.controller';
import { MessageAppService } from './message_app.service';

@Module({
  imports: [],
  controllers: [MessageAppController],
  providers: [MessageAppService],
})
export class MessageAppModule {}
