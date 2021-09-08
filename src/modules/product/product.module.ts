import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { ModelName, ProductSchema } from './schemas/product.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from '../../const/jwt.const';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    // MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: ModelName, schema: ProductSchema }]),
    JwtModule.register({
      secret: jwtConst.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
