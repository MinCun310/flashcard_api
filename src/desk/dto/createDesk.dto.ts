import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { FrontCard } from "src/card/frontcard/schemas/frontCard.entity";
import { BaseEntity } from "typeorm";


export class CreateDeskDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    readonly card?: FrontCard[]
}