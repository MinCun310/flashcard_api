import { Module } from '@nestjs/common';
import { BackCardController } from './backCard.controller';
import { BackCardService } from './backCard.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BackCardSchema } from './schemas/backCard.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BackCard', schema: BackCardSchema }])
  ],
  controllers: [BackCardController],
  providers: [BackCardService]
})
export class BackCardModule { }
