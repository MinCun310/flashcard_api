import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Desk } from './schemas/desk.entity';
import mongoose from 'mongoose';
import { Card } from 'src/card/schemas/card.entity';
import { CreateDeskDto } from './dto/createDesk.dto';

@Injectable()
export class DeskService {
    constructor(
        @InjectModel(Desk.name)
        private deskModel: mongoose.Model<Desk>,
        @InjectModel(Card.name)
        private cardModel: mongoose.Model<Card>
    ) { }


    async create(createDeskDto: CreateDeskDto, @UploadedFile() file: Express.Multer.File): Promise<Desk> {
        const { title, description } = createDeskDto;

        const imageURL = file.path;

        const idNumber = async () => {
            const desks = await this.deskModel.find().exec();
            const id = (desks.length) + 1;
            return id;
        }

        const createdDesk = await this.deskModel.create({
            id: await idNumber(),
            title,
            description,
            imageURL
        });
        // console.log('check----->', await this.idNumber());
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
        // console.log('check desks:', desks);
        // console.log("check cards:", cards);
        const results = { desks, cards };
        return results;
    }
}
