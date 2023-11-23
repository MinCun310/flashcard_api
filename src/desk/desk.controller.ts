import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeskService } from './desk.service';
import { CreateDeskDto } from './dto/createDesk.dto';
import { Desk } from './schemas/desk.entity';
import { CardService } from 'src/card/card.service';
import { Card } from 'src/card/schemas/card.entity';
import { CreateCardDto } from 'src/card/dto/createCard.dto';

@Controller('desk')
export class DeskController {
    constructor(
        private deskService: DeskService,
    ) { }

    @Post('/create')
    async createDesk(@Body() createDeskDto: CreateDeskDto): Promise<Desk> {
        return this.deskService.create(createDeskDto);
    }

    @Get('/allDesk')
    async showAllDesk(): Promise<Desk[]> {
        return this.deskService.findAll();
    }
}
