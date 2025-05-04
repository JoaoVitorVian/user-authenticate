import { Get, Post, Query, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Produto } from 'src/Domain/produto.entity';
import { ProdutoService } from 'src/Service/produto.service';

export class UserController {
  constructor(private produtoService: ProdutoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  async findAll(): Promise<Produto[] | null> {
    const produtos = await this.produtoService.findAll();
    return produtos;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findByName')
  async findByName(@Query('name') name: string): Promise<Produto | null> {
    const produto = await this.produtoService.findByName(name);
    return produto;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('createProduto')
  async createProduto(
    @Body() createData: Omit<Produto, 'id'>,
  ): Promise<Produto> {
    const produtoCreated = await this.produtoService.createProduto(createData);
    return produtoCreated;
  }
}
