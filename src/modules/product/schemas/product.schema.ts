import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const ModelName = 'product';

const ProductSchema = new Schema({
  code: String,
  name: String,
  barcode: String,
  description: String,
  imageUrl: String,
  price: Number,
  mfg: Date,
  status: String,
  isDelete: Number,
  createdAt: Date,
  createdBy: String,
  updatedAt: Date,
  updatedBy: String,
});

ProductSchema.plugin(mongoosePaginate);
export { ProductSchema, ModelName };
