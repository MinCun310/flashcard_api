import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardSchema } from './schemas/card.entity';
import { DeskSchema } from 'src/desk/schemas/desk.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }, { name: 'Desk', schema: DeskSchema }])
  ],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule { }
