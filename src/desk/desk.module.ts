import { Module } from '@nestjs/common';
import { DeskController } from './desk.controller';
import { DeskService } from './desk.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeskSchema } from './schemas/desk.entity';
import { CardSchema } from 'src/card/schemas/card.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Desk', schema: DeskSchema }, { name: 'Card', schema: CardSchema }]),
  ],
  controllers: [DeskController],
  providers: [DeskService],
})
export class DeskModule { }
