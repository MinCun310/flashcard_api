import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateFrontCardDto } from "src/card/frontcard/dto/createFrontCard.dto";
import { FrontCard } from "src/card/frontcard/schemas/frontCard.entity";
import { Desk } from "src/desk/schemas/desk.entity";

export class CreateBackCardDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsString()
    readonly content: string;

    @IsNotEmpty()
    readonly deskId: Desk;

    @IsNotEmpty()
    readonly frontCardId: FrontCard;
}