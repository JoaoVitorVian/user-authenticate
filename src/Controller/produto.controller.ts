import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/Domain/user.entity';
import { MicroserviceService } from 'src/microservices/service/teste.service';
import { UserService } from 'src/Service/user.service';

@Controller()
export class ProdutoController {
  constructor(
    private readonly appService: UserService,
    private readonly microservice: MicroserviceService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByEmail')
  async findOneByEmail(
    @Query('email') email: string,
  ): Promise<User | undefined> {
    return this.appService.findOneByEmail(email);
  }
}
