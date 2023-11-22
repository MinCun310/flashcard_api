import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Desk } from "src/desk/schemas/desk.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import * as mongoose from 'mongoose';
import { BackCard } from "src/card/backcard/schemas/backCard.entity";

@Schema({
    timestamps: true
})
export class FrontCard {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Desk' })
    deskId: Desk;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BackCard' })
    backCardId: BackCard;
}
export const FrontCardSchema = SchemaFactory.createForClass(FrontCard);