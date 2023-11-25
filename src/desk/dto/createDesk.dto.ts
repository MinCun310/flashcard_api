import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Card } from "src/card/schemas/card.entity";
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

    readonly imageData: Buffer;

    @IsString()
    readonly contentType: string;

    readonly card?: Card[];
}