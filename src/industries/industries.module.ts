import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustriesController } from './industries.controller';
import { IndustriesService } from './industries.service';
import { Industrie, IndustrieSchema } from './schemas/industrie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Industrie.name, schema: IndustrieSchema },
    ]),
  ],
  controllers: [IndustriesController],
  providers: [IndustriesService],
})
export class IndustriesModule {}
