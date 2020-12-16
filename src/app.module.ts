import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
config();
const {TYPEORM_PORT, TYPEORM_PASSWORD, TYPEORM_DATABASE} = process.env;

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ProductModule,  
    TypeOrmModule.forRoot({
      type: 'postgres' as any,
      host: 'localhost',
      port: Number(TYPEORM_PORT),
      username: `${TYPEORM_DATABASE}`,
      password: `${TYPEORM_PASSWORD}`,
      database: 'testNest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
