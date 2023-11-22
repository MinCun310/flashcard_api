import { Module } from '@nestjs/common';
import { DeskController } from './desk.controller';
import { DeskService } from './desk.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeskSchema } from './schemas/desk.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema }])
  ],
  controllers: [DeskController],
  providers: [DeskService],
  exports: [DeskService]
})
export class DeskModule { }
