import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Crud({
  model:{
    type: ProductEntity
  },
  params: {
    id:{
      field: 'id',
      type: 'uuid',
      primary: true
    }
  }
})

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService ){}
    @Post('')
    @HttpCode(HttpStatus.OK)
    async create(@Body() newProduct:any ){
      return this.productService.create(newProduct);
    }
    
    @Get()
    async getAll(): Promise<ProductEntity[]> {
      return this.productService.findAll();
    }
  @Get(':id')
   async getOne(@Param('id') id: string): Promise<ProductEntity> {
      return this.productService.findById(id);
    }



  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
    update(
      @Body() updateProduct:any,
      @Param('id') id: string,
    ) {
      return this.productService.update(id, updateProduct );
    }


    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id: string) {
      return this.productService.delete(id);
    }


  
}
