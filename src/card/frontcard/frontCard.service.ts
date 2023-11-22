import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FrontCard } from './schemas/frontCard.entity';
import mongoose from 'mongoose';
import { Desk } from 'src/desk/schemas/desk.entity';

@Injectable()
export class FrontCardService {
    constructor(
        @InjectModel(FrontCard.name)
        private frontCardModel: mongoose.Model<FrontCard>,
        @InjectModel(Desk.name)
        private deskModel: mongoose.Model<Desk>
    ) { }

    async create(frontCard: FrontCard): Promise<FrontCard> {
        const currentDeskId = frontCard.deskId;
        const isValidId = mongoose.isValidObjectId(currentDeskId);
        if (!isValidId) {
            throw new BadRequestException("Please enter correct desk id");
        }

        const findDeskId = await this.deskModel.findById(currentDeskId);
        if (findDeskId) {
            const createdFrontCard = await this.frontCardModel.create({
                ...frontCard,
            });
            console.log("------->", createdFrontCard.deskId);
            console.log(createdFrontCard);
            return createdFrontCard.save();
        } else {
            throw new BadRequestException("Can't find deskId");
        }
    }

    async findAll() {
        const findAll = await this.frontCardModel.find();
        return findAll;
    }
}

