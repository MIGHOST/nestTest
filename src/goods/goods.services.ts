import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGoodsDto } from './dto/create-goods.dto';
import { UpdateGoodsDto } from './dto/update-goods.dto';
import { Goods, GoodsDocument } from './schemas/goods.schema';

@Injectable()
export class GoodsService {
  constructor(
    @InjectModel(Goods.name) private goodsModel: Model<GoodsDocument>,
  ) {}

  async getAll(): Promise<Goods[]> {
    return this.goodsModel.find().exec();
  }

  async getById(id: string): Promise<Goods> {
    return this.goodsModel.findById(id);
  }

  async create(goodsDTO: CreateGoodsDto) {
    const newGoods = new this.goodsModel(goodsDTO);
    return newGoods.save();
  }

  async remove(id: string): Promise<Goods> {
    return this.goodsModel.findByIdAndRemove(id);
  }

  async update(id: string, goodsDTO: UpdateGoodsDto): Promise<Goods> {
    return this.goodsModel.findByIdAndUpdate(id, goodsDTO, { new: true });
  }
}
