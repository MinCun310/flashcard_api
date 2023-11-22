import { Module } from '@nestjs/common';
import { FrontCardController } from './frontCard.controller';
import { FrontCardService } from './frontCard.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FrontCardSchema } from './schemas/frontCard.entity';
import { DeskSchema } from 'src/desk/schemas/desk.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FrontCard', schema: FrontCardSchema }, { name: 'Desk', schema: DeskSchema }])
  ],
  controllers: [FrontCardController],
  providers: [FrontCardService],
  exports: [FrontCardService]
})
export class FrontCardModule { }
