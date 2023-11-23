import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/createCard.dto';
import { Card } from './schemas/card.entity';

@Controller('card')
export class CardController {
    constructor(
        private cardService: CardService
    ) { }

    @Post('/create')
    async createCard(@Body() createCard: CreateCardDto): Promise<Card> {
        return this.cardService.create(createCard);
    }
}
