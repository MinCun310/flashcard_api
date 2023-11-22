import { Body, Controller, Post } from '@nestjs/common';
import { BackCardService } from './backCard.service';
import { CreateBackCardDto } from './dto/createBackCard.dto';
import { BackCard } from './schemas/backCard.entity';

@Controller('backcard')
export class BackCardController {
    constructor(
        private backCardService: BackCardService
    ) { }

    @Post('/create')
    async createBackCardService(@Body() createBackCardDto: CreateBackCardDto): Promise<BackCard> {
        return this.backCardService.create(createBackCardDto);
    }
}
