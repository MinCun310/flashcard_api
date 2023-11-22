import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { FrontCard } from "src/card/frontcard/schemas/frontCard.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as mongoose from 'mongoose';
import { BackCard } from "src/card/backcard/schemas/backCard.entity";

@Schema({
    timestamps: true
})
export class Desk {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FrontCard' })
    frontcard?: FrontCard[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FrontCard' })
    backcard?: BackCard[];
}
export const DeskSchema = SchemaFactory.createForClass(Desk);