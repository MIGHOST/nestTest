import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Repository } from 'typeorm'
import { ProductEntity } from './product.entity'


@Injectable()
export class ProductService extends TypeOrmCrudService<ProductEntity> {
    constructor (@InjectRepository(ProductEntity) private productRepo: Repository <ProductEntity>){
        super (productRepo)
    }
    async create(newProduct) {
        return this.productRepo.insert(newProduct)
    }

    async findAll(): Promise<ProductEntity[]> {
        return this.productRepo.find();
      }
    
      async findById(id:string){
        return this.productRepo.findOne(id);
      }
    

    async update(id:string, updateProduct){
       return this.productRepo.update(id, updateProduct)
    }

    async delete(id:string){
        this.productRepo.delete(id)
    }
}
