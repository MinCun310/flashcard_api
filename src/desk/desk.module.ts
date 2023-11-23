import { Module } from '@nestjs/common';
import { DeskController } from './desk.controller';
import { DeskService } from './desk.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeskSchema } from './schemas/desk.entity';
import { CardModule } from 'src/card/Card.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema }]),
  ],
  controllers: [DeskController],
  providers: [DeskService],
})
export class DeskModule { }
