import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Desk } from "src/desk/schemas/desk.entity";

export class CreateCardDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly titleFrontCard: string;

    @IsString()
    readonly contentFrontCard: string;

    @IsNotEmpty()
    @IsString()
    readonly titleBackCard: string;

    @IsString()
    readonly contentBackCard: string;

    @IsNotEmpty()
    readonly deskId: Desk;
}