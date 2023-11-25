import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Desk } from './schemas/desk.entity';
import mongoose from 'mongoose';
import { Card } from 'src/card/schemas/card.entity';

@Injectable()
export class DeskService {
    constructor(
        @InjectModel(Desk.name)
        private deskModel: mongoose.Model<Desk>,
        @InjectModel(Card.name)
        private cardModel: mongoose.Model<Card>
    ) { }

    async create(desk: Desk): Promise<Desk> {
        const createdDesk = await this.deskModel.create(desk);
        console.log(createdDesk);
        return createdDesk.save();
    }

    async findAllDeskAndCard() {
        // const card = await this.cardModel.find();
        // card.forEach(card => {
        //     console.log()
        //     console.log(`Title: ${card.title}`);
        //     console.log(`Content: ${card.content}`);
        // });
        // const desks = await this.deskModel.find();
        // console.log("------", desks)
        // console.log(await this.cardModel.findOne({
        //     relations: ['desk'],
        //     where: {
        //         desk_id: desks[0]._id
        //     }
        // }))
        // return desks;
        const desks = await this.deskModel.find().populate('card').exec();
        // const temp = new Desk();
        // console.log("temp:", temp.card);
        const cards = await this.cardModel.find().exec();
        console.log('check desks:', desks);
        console.log("check cards:", cards);
        const results = { desks, cards };
        return results;
    }
}
