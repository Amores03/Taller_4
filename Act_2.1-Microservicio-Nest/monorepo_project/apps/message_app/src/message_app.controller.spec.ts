import { Test, TestingModule } from '@nestjs/testing';
import { MessageAppController } from './message_app.controller';
import { MessageAppService } from './message_app.service';

describe('MessageAppController', () => {
  let messageAppController: MessageAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessageAppController],
      providers: [MessageAppService],
    }).compile();

    messageAppController = app.get<MessageAppController>(MessageAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(messageAppController.getHello()).toBe('Hello World!');
    });
  });
});
