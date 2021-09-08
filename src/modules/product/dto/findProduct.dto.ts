import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindProductDto {
  @ApiProperty({
    required: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  code: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  barcode: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  description: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  imageUrl: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  price: number;

  @ApiProperty({
    required: false,
    type: Date,
  })
  mfg: Date;

  @ApiProperty({
    required: false,
  })
  @IsString()
  status: string;

  isDelete: number;

  createdAt: Date;

  createdBy: string;

  updatedAt: Date;

  updatedBy: string;
}
