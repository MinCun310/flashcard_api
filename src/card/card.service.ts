import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schemas/card.entity';
import mongoose from 'mongoose';
import { Desk } from 'src/desk/schemas/desk.entity';

@Injectable()
export class CardService {
    constructor(
        @InjectModel(Card.name)
        private cardModel: mongoose.Model<Card>,
        @InjectModel(Desk.name)
        private deskModel: mongoose.Model<Desk>
    ) { }

    async create(card: Card): Promise<Card> {
        const currentDeskId = card.deskId;
        const isValidId = mongoose.isValidObjectId(currentDeskId);
        if (!isValidId) {
            throw new BadRequestException("Please enter correct deskid");
        }

        const findDeskId = await this.deskModel.findById(currentDeskId);
        if (findDeskId) {
            const createCard = await this.cardModel.create({
                ...card,
            });
            console.log("------->", createCard.deskId);
            console.log(createCard);
            return createCard.save();
        } else {
            throw new BadRequestException(`can't find the ${currentDeskId}`);
        }
    }
}

