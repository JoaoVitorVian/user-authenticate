import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './Service/user.service';
import { User } from './Domain/user.entity';
import { ProdutoController } from './Controller/produto.controller';
import { MicroserviceService } from './microservices/service/teste.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule],
  controllers: [ProdutoController],
  providers: [UserService, MicroserviceService],
  exports: [UserService, MicroserviceService],
})
export class UsersModule {}
