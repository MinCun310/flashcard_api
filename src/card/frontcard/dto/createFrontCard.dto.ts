import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { BackCard } from "src/card/backcard/schemas/backCard.entity";
import { Desk } from "src/desk/schemas/desk.entity";

export class CreateFrontCardDto {
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
    readonly backCardId: BackCard;
}