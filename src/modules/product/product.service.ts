import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { ProductRepository } from './product.repository';
@Injectable()
export class ProductService {
  constructor(private readonly repo: ProductRepository) {}

  async findAll(): Promise<IProduct[]> {
    return await this.repo.findAll();
  }

  async findById(id: string): Promise<IProduct> {
    return await this.repo.findById(id);
  }

  async find(params: IProduct): Promise<IProduct[]> {
    return await this.repo.findOptions(params);
  }

  async createOne(body: IProduct): Promise<IProduct> {
    await this._rebuildBodyCreateRequest(body);
    return await this.repo.create(body);
  }

  async updateOne(id: string, body: IProduct): Promise<IProduct> {
    body.updatedAt = new Date();
    return this.repo.updateOne(id, body);
  }

  async removeOne(id: string): Promise<any> {
    return this.repo.removeOne(id);
  }

  _rebuildBodyCreateRequest(body: IProduct) {
    body.createdAt = new Date();
    body.isDelete = 0;
    return body;
  }
}
