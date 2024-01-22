import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DeskService } from './desk.service';
import { CreateDeskDto } from './dto/createDesk.dto';
import { Desk } from './schemas/desk.entity';
import { CardService } from 'src/card/card.service';
import { Card } from 'src/card/schemas/card.entity';
import { CreateCardDto } from 'src/card/dto/createCard.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'src/helpers/config';

@Controller('desk')
export class DeskController {
    constructor(
        private deskService: DeskService,
    ) { }

    @Post('/create')
    @UseInterceptors(FileInterceptor('image', { storage: storageConfig('image') }))
    async createDesk(@Body() createDeskDto: CreateDeskDto, @UploadedFile() file: Express.Multer.File): Promise<Desk> {
        return this.deskService.create(createDeskDto, file);
    }

    @Get('/allDesk')
    async showAllDesk() {
        return this.deskService.findAllDeskAndCard();
    }
}
