import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(newProduct: any): Promise<import("typeorm").InsertResult>;
    getAll(): Promise<ProductEntity[]>;
    getOne(id: string): Promise<ProductEntity>;
    update(updateProduct: any, id: string): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
