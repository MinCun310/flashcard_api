import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { BackCard } from './schemas/backCard.entity';

@Injectable()
export class BackCardService {
    constructor(
        @InjectModel(BackCard.name)
        private backCardModel: mongoose.Model<BackCard>
    ) { }

    async create(backCard: BackCard) {
        const createdBackCard = await this.backCardModel.create({
            ...backCard
        });
        console.log(createdBackCard);
        return createdBackCard.save();
    }
}
