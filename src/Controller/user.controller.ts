import { Controller } from '@nestjs/common';
import { UserService } from 'src/Service/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

  // @Get('getHello')
  // async getHello(): Promise<string> {
  //   return this.appService.create();
  // }
}
