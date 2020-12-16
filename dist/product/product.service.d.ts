import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
export declare class ProductService extends TypeOrmCrudService<ProductEntity> {
    private productRepo;
    constructor(productRepo: Repository<ProductEntity>);
    create(newProduct: any): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<ProductEntity[]>;
    findById(id: string): Promise<ProductEntity>;
    update(id: string, updateProduct: any): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<void>;
}
