import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Desk } from "src/desk/schemas/desk.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import * as mongoose from 'mongoose';
import { FrontCard } from "src/card/frontcard/schemas/frontCard.entity";

@Schema({
    timestamps: true
})
export class BackCard {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Desk' })
    deskId: Desk;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FrontCard' })
    frontCardId: FrontCard;

}
export const BackCardSchema = SchemaFactory.createForClass(BackCard);