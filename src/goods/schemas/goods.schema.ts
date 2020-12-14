import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GoodsDocument = Goods & Document;
@Schema()
export class Goods {
  @Prop()
  name: string;
  @Prop()
  price: number;
}
export const GoodSchema = SchemaFactory.createForClass(Goods);
