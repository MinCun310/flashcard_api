import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Desk } from './schemas/desk.entity';
import mongoose from 'mongoose';
import { find } from 'rxjs';

@Injectable()
export class DeskService {
    constructor(
        @InjectModel(Desk.name)
        private deskModel: mongoose.Model<Desk>,
    ) { }

    async create(desk: Desk): Promise<Desk> {
        const createdDesk = await this.deskModel.create(desk);
        console.log(createdDesk);
        return createdDesk;
    }

    async findAll() {
        const findAllDesk = await this.deskModel.find();
        return findAllDesk;
    }
}
