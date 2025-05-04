import { Produto } from 'src/Domain/produto.entity';
import { ProdutoRepository } from 'src/Repository/produto.repository';

export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async createProduto(createData: Omit<Produto, 'id'>): Promise<Produto> {
    const produtoCreated =
      await this.produtoRepository.createProduto(createData);
    return produtoCreated;
  }

  async findAll(): Promise<Produto[] | null> {
    const produtos = await this.produtoRepository.findAll();
    return produtos;
  }
  async findByName(name: string): Promise<Produto | null> {
    const produto = await this.produtoRepository.findByName(name);
    return produto;
  }
}
