import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  code: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  barcode: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  description: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  imageUrl: string;

  @ApiProperty({
    type: Number,
  })
  price: number;

  @ApiProperty({
    type: Date,
  })
  mfg: Date;

  @ApiProperty()
  @IsString()
  @IsDefined()
  status: string;

  isDelete: number;

  createdAt: Date;

  createdBy: string;

  updatedAt: Date;

  updatedBy: string;
}
