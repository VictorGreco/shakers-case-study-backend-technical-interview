import 'dotenv/config';
import { MongooseModule } from '@nestjs/mongoose';

export const database = process.env.MONGODB_CONNECTION_STRING || '';

export const imports = [
  MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING || ''),
];
