import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './Service/user.service';
import { User } from './Domain/user.entity';
import { ProdutoController } from './Controller/produto.controller';
import { MicroserviceService } from './microservices/service/teste.service';
import { HttpModule } from '@nestjs/axios';
import { ProdutoService } from './Service/produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule],
  controllers: [ProdutoController],
  providers: [ProdutoService, UserService, MicroserviceService],
  exports: [ProdutoService, UserService, MicroserviceService],
})
export class UsersModule {}
