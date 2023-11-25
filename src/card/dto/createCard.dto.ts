import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Desk } from "src/desk/schemas/desk.entity";

export class CreateCardDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;

    @IsNotEmpty()
    readonly deskId: Desk;
}