import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { GoodsModule } from './goods/goods.module';
import { AppService } from './app.service';
import { config } from 'dotenv';
config();
const { DB_URI } = process.env;
@Module({
  imports: [
    GoodsModule,
    MongooseModule.forRoot(
      // `mongodb+srv://root:root@cluster0.0va7l.mongodb.net/try?retryWrites=true&w=majority`,
      `${DB_URI}`
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
