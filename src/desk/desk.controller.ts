import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeskService } from './desk.service';
import { CreateDeskDto } from './dto/createDesk.dto';
import { Desk } from './schemas/desk.entity';

@Controller('desk')
export class DeskController {
    constructor(
        private deskService: DeskService
    ) { }

    @Post('/create')
    async createDesk(@Body() createDeskDto: CreateDeskDto): Promise<Desk> {
        return this.deskService.create(createDeskDto);
    }

    @Get('/findAll')
    async findAllDesk(): Promise<Desk[]> {
        return this.deskService.findAll();
    }
}
