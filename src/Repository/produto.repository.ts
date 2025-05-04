import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from 'src/Domain/produto.entity';
import { Repository } from 'typeorm';

export class ProdutoRepository {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
  ) {}

  async findOneByName(name: string): Promise<Produto | undefined> {
    const produto = await this.repository.findOne({ where: { name } });
    return produto ?? undefined;
  }

  async createProduto(createData: Omit<Produto, 'id'>): Promise<Produto> {
    const produtoCreated = this.repository.create(createData);
    return await this.repository.save(produtoCreated);
  }

  async findAll(): Promise<Produto[] | null> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<Produto | null> {
    const product = await this.repository.findOne({ where: { name } });
    return product ?? null;
  }
}
