import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoodsService } from './goods.services';
import { GoodsController } from './goods.controller';
import { Goods, GoodSchema } from './schemas/goods.schema';
@Module({
  providers: [GoodsService],
  controllers: [GoodsController],
  imports: [
    MongooseModule.forFeature([{ name: Goods.name, schema: GoodSchema }]),
  ],
})
export class GoodsModule {}