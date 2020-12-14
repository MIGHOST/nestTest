/* eslint-disable */
import { GoodsService } from './goods.services';
import { UpdateGoodsDto } from './dto/update-goods.dto';
import { CreateGoodsDto } from './dto/create-goods.dto';
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
import { Goods } from './schemas/goods.schema';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService ){}

  // @Post()
  // @HttpCode(HttpStatus.CREATED)
  // create(@Body() createGoodsDto: CreateGoodsDto): string {
  //   return `Name ${createGoodsDto.name}; Price ${createGoodsDto.price}`;
  // }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createGoodsDto: CreateGoodsDto): Promise<Goods> {
    return this.goodsService.create(createGoodsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Goods> {
    return this.goodsService.remove(id);
  }
  @Put(':id')
  update(
    @Body() updateGoodsDto: UpdateGoodsDto,
    @Param('id') id: string,
  ): Promise<Goods> {
    return this.goodsService.update(id, updateGoodsDto);
  }
  @Get()
  getAll(): Promise<Goods[]> {
    return this.goodsService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Goods> {
    return this.goodsService.getById(id);
  }
}
