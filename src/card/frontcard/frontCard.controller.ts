import { Body, Controller, Get, Post } from '@nestjs/common';
import { FrontCardService } from './frontCard.service';
import { CreateFrontCardDto } from './dto/createFrontCard.dto';
import { FrontCard } from './schemas/frontCard.entity';

@Controller('frontcard')
export class FrontCardController {
    constructor(
        private frontCardService: FrontCardService
    ) { }

    @Post('/create')
    async createCard(@Body() createFrontCardDto: CreateFrontCardDto): Promise<FrontCard> {
        return this.frontCardService.create(createFrontCardDto);
    }

    @Get('/findAll')
    async findAll(): Promise<FrontCard[]> {
        return this.frontCardService.findAll();
    }
}
