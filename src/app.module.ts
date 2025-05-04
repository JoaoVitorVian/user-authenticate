import { Module } from '@nestjs/common';
import { User } from './Domain/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth.module';
import { UsersModule } from './user.module';
import { ProdutoService } from './Service/produto.service';
import { ProdutoRepository } from './Repository/produto.repository';
import { ProdutoController } from './Controller/produto.controller';
import { Produto } from './Domain/produto.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Produto],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Produto]),
    AuthModule,
    UsersModule,
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoRepository],
  exports: [ProdutoService, ProdutoRepository],
})
export class AppModule {}
